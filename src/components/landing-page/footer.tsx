import { Accessibility, ArrowRight, Euro, Globe } from 'iconoir-react'
import Image from 'next/image'

export function Footer() {
  return (
    <section
      id="footer"
      aria-label="Footer"
      className="flex w-full flex-col items-center bg-accent-deep-blue py-8"
    >
      <div className="flex w-full max-w-7xl flex-col border-[#334155] border-b p-4 lg:flex-row ">
        <div className="mb-8 w-fit">
          <Image src="/logo-white.svg" alt="logo" width={173.33} height={35} />
        </div>
        <div className="flex w-full flex-col gap-8 pb-12 md:justify-around lg:flex-row">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-medium">Product</h2>
            <ul className="flex flex-col gap-4">
              <li>Pricing</li>
              <li>Overview</li>
              <li>Browse</li>
              <li className="flex items-center gap-2">
                Accessibility{' '}
                <span className="w-fit rounded bg-purple-100 px-1.5 py-0.5 text-purple-800 text-xs">
                  BETA
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-medium">Solutions</h2>
            <ul className="flex flex-col gap-4">
              <li>Brainstorming</li>
              <li>Ideation</li>
              <li>Wireframing</li>
              <li>Research</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-medium">Resources</h2>
            <ul className="flex flex-col gap-4">
              <li>Help Center</li>
              <li>Blog</li>
              <li>Tutorials</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-medium">Support</h2>
            <ul className="flex flex-col gap-4">
              <li>Contact Us</li>
              <li>Developers</li>
              <li>Documentation</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-medium">Company</h2>
            <ul className="flex flex-col gap-4">
              <li>About</li>
              <li>Press</li>
              <li>Events</li>

              <li className="flex items-center gap-2">
                Request Demo <ArrowRight />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-7xl flex-col justify-between px-4 py-8 text-text-secondary lg:flex-row lg:items-center">
        <span className="mb-6 flex-1 text-nowrap px-4 lg:mb-0">
          uteach @ 2023. All rights reserved.
        </span>
        <div className="flex w-full justify-between gap-8 lg:justify-end">
          <span>Terms</span>
          <span>Privacy</span>
          <span className="hidden lg:flex">Contact</span>
          <div className="flex items-center gap-2">
            <Globe />
            <span>EN</span>
          </div>
          <div className="flex items-center gap-2">
            <Euro className="hidden lg:flex" />
            <span>EUR</span>
          </div>
          <span>
            <Accessibility />
          </span>
        </div>
      </div>
    </section>
  )
}
