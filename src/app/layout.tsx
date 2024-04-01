import type { Metadata } from 'next'
import { inter, manrope } from '@/utils/fonts';
import './globals.css'
import { Toaster } from 'sonner';
import { NextAuthProvider } from '@/providers/SessionProvider';

export const metadata: Metadata = {
  title: 'Keystone National Bank',
  description: 'Keystone National Bank is a financial institution that has it\'s headquarters in Unites States of America.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
    </NextAuthProvider>
  )
}
