/** A person whose plan and tasks the desk tracks. */
export type Employee = {
  /** Stable id. */
  readonly id: string;

  /** Full name. */
  readonly name: string;

  /** Job title. Empty when the role is not set. */
  readonly role: string;

  /** Team name. Empty when the person is not on a team. */
  readonly team: string;

  /** Share of the current plan already done, from 0 to 100. */
  readonly progress: number;
};
