import type { ProgressPoint } from '@/models';
import type { ProgressPointVm } from '@/view-models';

/** Week point for the progress line. */
export function mapProgressPoint(point: ProgressPoint): ProgressPointVm {
  return {
    label: point.week,
    value: point.value,
  };
}
