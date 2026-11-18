import { StaffDataProvider } from '@/context';
import { TaskBoard } from '@/widgets/task-board/task-board';

/** Task queue and how it splits by status. */
export function TasksView() {
  return (
    <StaffDataProvider>
      <TaskBoard />
    </StaffDataProvider>
  );
}
