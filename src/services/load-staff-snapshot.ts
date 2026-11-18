import type { StaffSnapshot } from '@/models';

const snapshot: StaffSnapshot = {
  employees: [
    { id: 'anna', name: 'Анна Ковалева', role: 'Руководитель', team: 'Доставка', progress: 82 },
    { id: 'ilya', name: 'Илья Морозов', role: 'Разработчик', team: 'Платформа', progress: 61 },
    { id: 'maria', name: 'Мария Сун', role: 'Дизайнер', team: 'Продукт', progress: 91 },
    { id: 'oleg', name: 'Олег Петров', role: 'Аналитик', team: 'Платформа', progress: 55 },
    { id: 'kira', name: 'Кира Лебедева', role: 'Поддержка', team: 'Клиенты', progress: 74 },
    { id: 'daniil', name: 'Даниил Юрченко', role: 'Разработчик', team: 'Доставка', progress: 38 },
  ],
  tasks: [
    { id: 'sla', title: 'Закрыть отчёт по SLA', assigneeId: 'kira', status: 'review', due: '2026-11-20' },
    { id: 'card', title: 'Макет карточки заказа', assigneeId: 'maria', status: 'doing', due: '2026-11-19' },
    { id: 'funnel', title: 'Выгрузка воронки', assigneeId: 'oleg', status: 'todo', due: '2026-11-25' },
    { id: 'delivery', title: 'Фикс статуса доставки', assigneeId: 'daniil', status: 'doing', due: '2026-11-18' },
    { id: 'sprint', title: 'План спринта', assigneeId: 'anna', status: 'done', due: '2026-11-14' },
    { id: 'onboarding', title: 'Онбординг курьеров', assigneeId: 'anna', status: 'doing', due: '2026-11-22' },
    { id: 'cache', title: 'Кэш каталога', assigneeId: 'ilya', status: 'review', due: '2026-11-21' },
    { id: 'pay', title: 'Тест оплаты', assigneeId: 'ilya', status: 'todo', due: '2026-11-27' },
    { id: 'mail', title: 'Письма о задержке', assigneeId: 'kira', status: 'done', due: '2026-11-12' },
    { id: 'warehouse', title: 'Дашборд склада', assigneeId: 'daniil', status: 'todo', due: '2026-11-28' },
    { id: 'icons', title: 'Иконки статусов', assigneeId: 'maria', status: 'done', due: '2026-11-11' },
    { id: 'segments', title: 'Сегменты оттока', assigneeId: 'oleg', status: 'doing', due: '2026-11-24' },
    { id: 'queue', title: 'Рефактор очереди', assigneeId: 'ilya', status: 'doing', due: '2026-11-26' },
    { id: 'escalation', title: 'Скрипт эскалации', assigneeId: 'kira', status: 'todo', due: '2026-11-30' },
    { id: 'release', title: 'Описание релиза', assigneeId: 'anna', status: 'review', due: '2026-11-19' },
  ],
  progress: [
    { week: '29 сен', value: 44 },
    { week: '06 окт', value: 49 },
    { week: '13 окт', value: 53 },
    { week: '20 окт', value: 58 },
    { week: '27 окт', value: 63 },
    { week: '03 ноя', value: 60 },
    { week: '10 ноя', value: 68 },
    { week: '17 ноя', value: 74 },
  ],
};

/** Current demo desk. Replace this when a real load exists. */
export function loadStaffSnapshot(): StaffSnapshot {
  return snapshot;
}
