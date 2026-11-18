import type { StaffSnapshot } from '@/models';
import type { KpiVm } from '@/view-models';

/** Headline figures for the desk. */
export function mapKpis(snapshot: StaffSnapshot): readonly KpiVm[] {
  const { employees, tasks } = snapshot;
  const open = tasks.filter((task) => task.status !== 'done').length;
  const done = tasks.length - open;
  const teams = new Set(employees.map((employee) => employee.team).filter(Boolean)).size;

  const average =
    employees.length === 0
      ? 0
      : Math.round(employees.reduce((sum, employee) => sum + employee.progress, 0) / employees.length);

  return [
    {
      id: 'people',
      label: 'Сотрудники',
      value: String(employees.length),
      hint: teamsHint(teams),
    },
    {
      id: 'progress',
      label: 'Средний прогресс',
      value: `${average}%`,
      hint: 'по текущему плану',
    },
    {
      id: 'open',
      label: 'Открытые задачи',
      value: String(open),
      hint: 'ещё не закрыты',
    },
    {
      id: 'done',
      label: 'Закрыто',
      value: String(done),
      hint: 'уже сданы',
    },
  ];
}

function teamsHint(count: number): string {
  if (count === 0) {
    return '';
  }

  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${count} команда`;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} команды`;
  }

  return `${count} команд`;
}
