import { Button } from '@/components/ui/button'
import { NavArrowDown } from 'iconoir-react'
import Image from 'next/image'
import Link from 'next/link'

export function MenuWeb() {
  return (
    <nav className="mx-auto hidden w-full max-w-7xl items-center justify-between gap-12 p-4 lg:flex">
      <div className="flex w-full gap-12">
        <Image width={103} height={35} src="/logo.svg" alt="Logo" />
        <div className="flex items-center gap-12 font-medium">
          <Link href="/">Products</Link>
          <Link href="/">Solutions</Link>
          <Link href="/">Pricing</Link>
          <button type="button" className="flex items-center gap-2">
            Resources <NavArrowDown className="font-bold" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="h-12 w-[63px] font-medium text-base">
          Log In
        </Button>
        <Button
          variant="outline"
          className="h-12 w-[153px] font-medium text-base"
        >
          Sign Up Now
        </Button>
      </div>
    </nav>
  )
}
