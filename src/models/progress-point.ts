/** Average plan completion for one week. */
export type ProgressPoint = {
  /** Week label, such as "17 ноя". */
  readonly week: string;

  /** Average completion that week, from 0 to 100. */
  readonly value: number;
};
