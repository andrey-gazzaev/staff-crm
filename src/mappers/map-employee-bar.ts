import type { Employee } from '@/models';
import type { EmployeeBarVm } from '@/view-models';

/** Bar for one person's plan completion. */
export function mapEmployeeBar(employee: Employee): EmployeeBarVm {
  return {
    label: employee.name,
    value: employee.progress,
  };
}
