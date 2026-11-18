/** One headline figure on the overview. */
export type KpiVm = {
  /** Stable id for the list key. */
  readonly id: string;

  /** Short name of the figure. */
  readonly label: string;

  /** Figure, already formatted. */
  readonly value: string;

  /** Second line. Empty when there is nothing to add. */
  readonly hint: string;
};
