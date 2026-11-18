'use client';

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './trend-chart.module.css';

type Point = {
  /** Tick label. */
  readonly label: string;

  /** Plotted number. */
  readonly value: number;
};

/** One line series. `unit` is appended in the tooltip, such as "%". */
export function TrendChart({
  points,
  unit,
  series,
}: {
  /** Points in left-to-right order. Empty draws an empty frame. */
  readonly points: readonly Point[];

  /** Suffix shown next to the value. Empty when the number stands alone. */
  readonly unit: string;

  /** Name of the series in the tooltip. */
  readonly series: string;
}) {
  const data = points.map((point) => ({ label: point.label, value: point.value }));

  return (
    <div className={styles.frame}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: 'var(--muted)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: 'var(--muted)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [formatPoint(value, unit), series]}
            contentStyle={tooltipStyle}
            labelStyle={tooltipLabelStyle}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--accent)"
            strokeWidth={2.5}
            dot={{ r: 3, fill: 'var(--accent)', strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
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
