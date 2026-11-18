import { StaffDataProvider } from '@/context';
import { Dashboard } from '@/widgets/dashboard/dashboard';

/** Overview of team progress and open work. */
export function DashboardView() {
  return (
    <StaffDataProvider>
      <Dashboard />
    </StaffDataProvider>
  );
}
