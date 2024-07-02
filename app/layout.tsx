import type { Metadata } from 'next'
import { Inter, Bebas_Neue as BebasNeue } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { NavegadorMobile } from '@/components/mobile-nav'
const inter = Inter({ subsets: ['latin'] })
const bebas = BebasNeue({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ser Mais Esporte e Lazer - Festivais',
  description:
    'Festivais do Programa Ser mais esporte e lazer - instituto manduvi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={cn('scroll-smooth', inter.className, bebas.className)}>
        <div className="w-full fixed top-0 left-0 bg-zinc-100 z-50 h-20">
          <div className="container columns-2 w-full text-zinc-50 flex items-center justify-between">
            <div>
              <a href="https://manduvi.org.br">
                <img
                  src="/imagens/Manduvi-Marrom.png"
                  alt=""
                  className="w-28"
                />
              </a>
            </div>
            <NavegadorMobile />
            <div className=" hidden h-full md:flex items-center justify-center gap-3">
              <a className=" bold text-amber-950  " href="#ultimocamp">
                ultimo campeonato
              </a>
              <a className=" bold text-amber-950  " href="#jornada">
                jornada
              </a>
              <a className=" bold text-amber-950 " href="#sobremandu">
                sobre o Manduvi
              </a>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
