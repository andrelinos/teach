'use client'

import { Button } from '@/components/ui/button'
import { Menu, NavArrowDown, Xmark } from 'iconoir-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="z-50 mx-auto flex w-full max-w-7xl items-center justify-between p-4 lg:hidden">
      <div className="flex w-full items-center justify-between">
        <Image width={103} height={35} src="/logo.svg" alt="Logo" />
        <button
          type="button"
          className="rounded-md p-2 text-gray-700 hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <Xmark className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 flex w-full flex-col items-center gap-4 bg-white py-6 pb-16 shadow-lg">
          <Link href="/">Products</Link>
          <Link href="/">Solutions</Link>
          <Link href="/">Pricing</Link>
          <button type="button" className="flex items-center gap-2">
            Resources <NavArrowDown className="font-bold" />
          </button>
          <div className="mt-4 flex flex-col items-center gap-4">
            <Button
              variant="ghost"
              className="h-12 w-[63px] font-medium text-base"
            >
              Log In
            </Button>
            <Button
              variant="outline"
              className="h-12 w-[153px] font-medium text-base"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
