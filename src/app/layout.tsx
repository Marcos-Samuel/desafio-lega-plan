import type { Metadata } from 'next';
import './../styles/_global.scss';
import { Inter_Tight} from 'next/font/google';

const interTight = Inter_Tight({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lega-Plan',
  description: 'Criando Hábitos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${interTight.className}`}>
        {children}
      </body>
    </html>
  );
}
