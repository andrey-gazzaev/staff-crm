'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { StaffSnapshot } from '@/models';
import { loadStaffSnapshot } from '@/services/load-staff-snapshot';

const StaffDataContext = createContext<StaffSnapshot | undefined>(undefined);

/** Shares one demo desk with the tree under it. */
export function StaffDataProvider({ children }: { readonly children: ReactNode }) {
  const value = useMemo(() => loadStaffSnapshot(), []);

  return <StaffDataContext.Provider value={value}>{children}</StaffDataContext.Provider>;
}

/** Desk loaded by the nearest provider. Throws outside that tree. */
export function useStaffData(): StaffSnapshot {
  const value = useContext(StaffDataContext);

  if (!value) {
    throw new Error('useStaffData must be used within StaffDataProvider');
  }

  return value;
}
