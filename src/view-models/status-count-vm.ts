/** How many tasks sit in one status. */
export type StatusCountVm = {
  /** Status label. */
  readonly label: string;

  /** Task count. */
  readonly value: number;

  /** Visual tone of that status. */
  readonly tone: 'neutral' | 'progress' | 'review' | 'done';
};
