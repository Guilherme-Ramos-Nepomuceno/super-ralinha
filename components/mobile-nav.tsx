'use client'

import { AlignJustify } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import React from 'react'

export function NavegadorMobile() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <AlignJustify className="text-zinc-950 mr-4" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-y-10">
          <a className="text-3xl font-bold text-amber-950  " href="#ultimocamp">
            ultimo campeonato
          </a>
          <a className="text-3xl font-bold text-amber-950  " href="#jornada">
            jornada
          </a>
          <a
            className="text-3xl font-bold text-amber-950 mr-1 "
            href="#sobremandu"
          >
            sobre o Manduvi
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
