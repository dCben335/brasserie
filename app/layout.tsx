import './globals.scss'
import Header from '@/components/organisms/Header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brasserie',
  description: 'Generated by create next app',
}


const links=[
  {
    href: "#home",
    children: "home",
  }
]

const logo = {
  src: "https://picsum.photos/200/300",
  alt: 'logo du site',
}

export default function RootLayout({children } : {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header 
          img={logo}
          links={links}
        />
        {children}
      </body>
    </html>
  )
}