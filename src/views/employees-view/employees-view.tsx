import { StaffDataProvider } from '@/context';
import { StaffBoard } from '@/widgets/staff-board/staff-board';

/** People on the desk and their plan. */
export function EmployeesView() {
  return (
    <StaffDataProvider>
      <StaffBoard />
    </StaffDataProvider>
  );
}
