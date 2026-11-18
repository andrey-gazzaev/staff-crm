/** One person's plan completion, plotted as a bar. */
export type EmployeeBarVm = {
  /** Person name. */
  readonly label: string;

  /** Plan completion, from 0 to 100. */
  readonly value: number;
};
