import './globals.scss'
import Header from '@/components/organisms/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'À La Table des Nains',
  description: '',
}


const links=[
  {
    href: "/#home",
    children: "accueil",
  },
  {
    href: "/#presentation",
    children: "presentation",
  },
  {
    href: "/#specialties",
    children: "spécialités",
  },
  {
    href: "/#retrouvez-nous",
    children: "Retrouvez-nous",
  },
]

const logo = {
  src: "/images/logo.png",
  alt: 'logo du site',
}

export default function RootLayout({children } : {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header 
          logo={logo}
          links={links}
        />
        {children}
        <Footer 
          logo={logo}
        />
      </body>
    </html>
  )
}
