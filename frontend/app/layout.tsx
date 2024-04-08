import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import GoogleTagManager from '@/components/custom/GoogleTagManager';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conversion API Testground',
  description: 'The way to install server side tracking via GTM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager containerId='GTM-MG35HSRD' />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
