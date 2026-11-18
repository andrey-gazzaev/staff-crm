/** One person as a table row. */
export type EmployeeRowVm = {
  /** Employee id, used as the row key. */
  readonly id: string;

  /** Full name. */
  readonly name: string;

  /** Role and team. Empty when neither is set. */
  readonly role: string;

  /** Completion label, such as "86%". */
  readonly progress: string;

  /** Completion from 0 to 100, for the meter. */
  readonly progressValue: number;

  /** Open tasks as text. */
  readonly openTasks: string;
};
