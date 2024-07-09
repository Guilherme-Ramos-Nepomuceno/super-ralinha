import type { Metadata } from 'next'
import { Inter, Bebas_Neue as BebasNeue } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { NavegadorMobile } from '@/components/mobile-nav'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const bebas = BebasNeue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Ser Mais Esporte e Lazer - Festivais',
  description:
    'Festivais do Programa Ser mais esporte e lazer - instituto manduvi',
  openGraph: {
    title: 'Festival Ser Mais Esportes e lazer',
    description: 'Conheça as modalidades do projeto Ser mais Esportes e Lazer',
    url: 'https://sermaisesporteelazer.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://sermaisesporteelazer.vercel.app/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt-br',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'scroll-smooth font-sans',
          bebas.variable,
          inter.variable,
        )}
      >
        <div className="w-full fixed top-0 left-0 z-50 h-20 bg-zinc-100/60">
          <div className="container columns-2 w-full  flex items-center justify-between">
            <div>
              <Link href="https://manduvi.org.br">
                <img
                  src="/imagens/Manduvi-Marrom.png"
                  alt=""
                  className="w-28"
                />
              </Link>
            </div>
            <NavegadorMobile />
            <div className=" hidden h-full md:flex items-center justify-center gap-3">
              <Link className="text-amber-950 font-display" href="#ultimocamp">
                ultimo campeonato
              </Link>
              <Link className="text-amber-950 font-display" href="#jornada">
                jornada
              </Link>
              <Link className="text-amber-950 font-display" href="#sobremandu">
                sobre o Manduvi
              </Link>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
