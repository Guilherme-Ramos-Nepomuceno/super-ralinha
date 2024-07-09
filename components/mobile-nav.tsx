'use client'

import { AlignJustify } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import React from 'react'
import Link from 'next/link'

export function NavegadorMobile() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <AlignJustify className="text-zinc-950 mr-4" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-y-10">
          <Link
            className="text-3xl font-bold text-amber-950 font-display "
            href="#ultimocamp"
            onClick={() => {
              setOpen(false)
            }}
          >
            ultimo campeonato
          </Link>
          <Link
            className="text-3xl font-bold text-amber-950 font-display "
            href="#jornada"
            onClick={() => {
              setOpen(false)
            }}
          >
            jornada
          </Link>
          <Link
            className="text-3xl font-bold text-amber-950 mr-1 font-display "
            href="#sobremandu"
            onClick={() => {
              setOpen(false)
            }}
          >
            sobre o Manduvi
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
