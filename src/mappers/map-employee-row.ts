import type { Employee, Task } from '@/models';
import type { EmployeeRowVm } from '@/view-models';

/** Person row with open tasks counted from the queue. */
export function mapEmployeeRow(employee: Employee, tasks: readonly Task[]): EmployeeRowVm {
  const openTasks = tasks.filter((task) => task.assigneeId === employee.id && task.status !== 'done').length;

  return {
    id: employee.id,
    name: employee.name,
    role: roleLine(employee),
    progress: `${employee.progress}%`,
    progressValue: employee.progress,
    openTasks: String(openTasks),
  };
}

function roleLine(employee: Employee): string {
  if (employee.role && employee.team) {
    return `${employee.role} · ${employee.team}`;
  }

  return employee.role || employee.team;
}
