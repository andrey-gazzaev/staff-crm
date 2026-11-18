'use client';

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './column-chart.module.css';

type Tone = 'neutral' | 'progress' | 'review' | 'done';

type Point = {
  /** Tick label. */
  readonly label: string;

  /** Plotted number. */
  readonly value: number;

  /** Bar color. Missing bars use the accent. */
  readonly tone?: Tone;
};

const toneFill: Record<Tone, string> = {
  neutral: 'var(--neutral)',
  progress: 'var(--progress)',
  review: 'var(--review)',
  done: 'var(--done)',
};

/** Bars for one series, vertical or horizontal. */
export function ColumnChart({
  points,
  unit,
  series,
  orientation = 'vertical',
  max,
}: {
  /** Bars in display order. Empty draws an empty frame. */
  readonly points: readonly Point[];

  /** Suffix shown next to the value. Empty when the number stands alone. */
  readonly unit: string;

  /** Name of the series in the tooltip. */
  readonly series: string;

  /** `vertical` columns or `horizontal` bars. */
  readonly orientation?: 'vertical' | 'horizontal';

  /** Upper bound of the number axis. Omitted when the axis should fit the data. */
  readonly max?: number;
}) {
  const data = points.map((point) => ({
    label: point.label,
    value: point.value,
    tone: point.tone,
  }));

  const horizontal = orientation === 'horizontal';
  const domain = max === undefined ? undefined : [0, max];
  const height = horizontal ? Math.max(200, points.length * 44) : undefined;

  return (
    <div className={horizontal ? styles.frameFluid : styles.frame} style={height ? { height } : undefined}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={horizontal ? 'vertical' : 'horizontal'}
          margin={horizontal ? { top: 4, right: 16, left: 0, bottom: 0 } : { top: 8, right: 8, left: -16, bottom: 0 }}
        >
          {horizontal ? null : <CartesianGrid stroke="var(--line)" vertical={false} />}
          {horizontal ? (
            <XAxis type="number" domain={domain} hide />
          ) : (
            <XAxis
              dataKey="label"
              tick={{ fill: 'var(--muted)', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
          )}
          {horizontal ? (
            <YAxis
              type="category"
              dataKey="label"
              width={168}
              tick={{ fill: 'var(--text)', fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
          ) : (
            <YAxis
              domain={domain}
              allowDecimals={false}
              tick={{ fill: 'var(--muted)', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
          )}
          <Tooltip
            formatter={(value) => [formatPoint(value, unit), series]}
            contentStyle={tooltipStyle}
            labelStyle={tooltipLabelStyle}
            cursor={{ fill: 'var(--surface-2)' }}
          />
          <Bar
            dataKey="value"
            radius={horizontal ? [0, 8, 8, 0] : [8, 8, 0, 0]}
            barSize={horizontal ? 14 : 28}
            isAnimationActive={false}
          >
            {data.map((point) => (
              <Cell key={point.label} fill={point.tone ? toneFill[point.tone] : 'var(--accent)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const tooltipStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--line)',
  borderRadius: 12,
  fontSize: 13,
};

const tooltipLabelStyle = {
  color: 'var(--muted)',
};

function formatPoint(value: unknown, unit: string): string {
  if (typeof value === 'number' || typeof value === 'string') {
    return `${value}${unit}`;
  }

  return '';
}
