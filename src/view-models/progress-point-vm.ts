/** One week plotted on the progress line. */
export type ProgressPointVm = {
  /** Week label. */
  readonly label: string;

  /** Average completion, from 0 to 100. */
  readonly value: number;
};
