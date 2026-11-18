import type { Metadata } from 'next';
import { Literata, Manrope } from 'next/font/google';
import { Page } from '@/ui/page/page';
import { Shell } from '@/ui/shell/shell';
import { AppNav } from './app-nav';
import './global.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

const literata = Literata({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-literata',
});

export const metadata: Metadata = {
  title: 'Смена',
  description: 'Прогресс сотрудников и их задачи',
};

/** Root document: rail and the current desk. */
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${literata.variable}`}>
      <body>
        <Shell>
          <AppNav />
          <Page>{children}</Page>
        </Shell>
      </body>
    </html>
  );
}
