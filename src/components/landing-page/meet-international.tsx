import { Button } from '@/components/ui/button'
import { ArrowRight } from 'iconoir-react'
import Image from 'next/image'

export function MeetInternational() {
  return (
    <section
      id="meet-international"
      aria-label="Meet International"
      className="mt-10 flex w-full justify-center p-4 pt-8 lg:mt-24 lg:p-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-11 xl:flex-row xl:py-8">
        <div id="meet-international-image" className="relative">
          <Image
            width={636}
            height={651}
            className="size-full object-cover"
            src="/meet-international-image.png"
            alt="An all-in-one app that makes it easier"
          />
        </div>
        <div
          id="meet-international-text"
          className="flex h-fit w-full flex-col justify-center gap-6 lg:max-w-[600px]"
        >
          <h2 className="font-extrabold text-2xl leading-6 lg:text-6xl lg:leading-18 xl:text-[56px]">
            Meet
            <span className="relative max-h-fit min-w-fit px-1 text-center">
              <img
                src="/airplane.svg"
                className="absolute top-[-16px] right-[14px] z-[-1] size-6 xl:top-[-43px] xl:right-[21px] xl:size-16"
                alt=""
              />{' '}
              international
            </span>{' '}
            students & teachers{' '}
          </h2>
          <div className="flex w-full flex-1 flex-col gap-2">
            <p className="text-text-primary text-xl leading-8">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
              urna, faucibus aenean lorem faucibus integer.
            </p>
          </div>

          <Button
            variant="ghost"
            className="flex w-fit items-center gap-4 text-accent-blue text-xl"
          >
            <span className="font-medium">Explore teachers and students</span>
            <ArrowRight className="size-4 stroke-2 text-accent-blue" />
          </Button>
        </div>
      </div>
    </section>
  )
}
