import type { ReactNode } from 'react';
import styles from './data-table.module.css';

type Column = {
  /** Header text. */
  readonly label: string;

  /** Key into the row cells. */
  readonly key: string;
};

type Row = {
  /** Stable row key. */
  readonly id: string;

  /** Cell content by column key. A missing key renders an empty cell. */
  readonly cells: Readonly<Record<string, ReactNode>>;
};

/** Rows and columns already prepared for display. */
export function DataTable({
  columns,
  rows,
}: {
  /** Headers, left to right. */
  readonly columns: readonly Column[];

  /** Body. Empty when there is nothing to list. */
  readonly rows: readonly Row[];
}) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.key}>{row.cells[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
