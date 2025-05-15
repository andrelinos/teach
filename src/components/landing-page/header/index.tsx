import { MenuMobile } from './menu-mobile'
import { MenuWeb } from './menu-web'

export function Header() {
  return (
    <header className="flex h-24 w-full items-center justify-center">
      <MenuMobile />
      <MenuWeb />
    </header>
  )
}
