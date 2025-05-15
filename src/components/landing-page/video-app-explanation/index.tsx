import { CardLesson } from '@/components/commons/card-lesson'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'iconoir-react'
import Image from 'next/image'

export function VideoAppExplanation() {
  return (
    <section
      id="video-app-explanation"
      aria-label="Video app explanation"
      className="h-full w-full justify-center lg:flex"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center pt-12 lg:h-auto xl:flex-row xl:pt-20">
        <div className="flex h-full w-full flex-col justify-start gap-6 pr-4 pl-4 lg:max-w-[544px] lg:pt-16 lg:pr-0">
          <h2 className="font-extrabold text-2xl leading-6 lg:text-6xl lg:leading-18 xl:text-[56px]">
            An{' '}
            <span className="relative max-h-fit min-w-fit px-1 text-center">
              <img
                src="/image-pen-stroke-orange.svg"
                className="absolute inset-x-0 bottom-[-2px] z-[-1] w-full xl:bottom-[-10px]"
                alt=""
              />{' '}
              all-in-one
            </span>{' '}
            app that makes it easier
          </h2>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-xl">
              <Check className="size-4" />
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
            <p className="flex items-center gap-2 text-xl">
              <Check className="size-4" />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
            <p className="flex items-center gap-2 text-xl">
              <Check className="size-4" />
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </div>

          <Button
            variant="ghost"
            className="flex w-fit items-center gap-4 text-accent-blue text-xl"
          >
            <span className="font-medium">Find more about the app</span>
            <ArrowRight className="size-4 stroke-2 text-accent-blue" />
          </Button>
        </div>

        <div className="relative flex h-[500px] w-full justify-center md:h-[600px] lg:h-fit">
          <div
            id="image-explanation"
            className="absolute inset-x-0 bottom-16 h-96 w-full flex-1 md:bottom-[18rem] lg:relative lg:bottom-16 lg:h-145"
          >
            <Image
              width={800}
              height={612}
              className="absolute right-14 bottom-0 z-[-1] hidden rotate-0 scale-108 lg:flex"
              src="/video-app-explanation-girl-tablet-large.png"
              alt="An all-in-one app that makes it easier"
            />

            <div className="-top-47 -left-28 absolute inset-x-0 z-[-1] flex h-[600px] justify-center overflow-hidden md:top-[-145px] md:h-[800px] lg:hidden">
              <Image
                width={800}
                height={612}
                className="scale-115 md:mx-auto md:scale-100"
                src="/video-app-explanation-girl-tablet-small.png"
                alt="An all-in-one app that makes it easier"
              />
            </div>

            {/* mobile ok */}
            {/* <div className="absolute inset-x-0 top-0 z-10 justify-end gap-4 pr-[90px] lg:flex"> */}
            <div className="z-30 flex size-full h-[515px] items-end md:h-[672px] lg:h-[580px]">
              <div className="flex w-full justify-center gap-4 pb-2 pl-6 lg:pl-20">
                <CardLesson
                  feature="Featured"
                  featureCustom="bg-purple-100 text-purple-800"
                  title="The map of mathematics"
                  description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                  className="flex "
                />
                <CardLesson
                  feature="Popular"
                  featureCustom="bg-blue-100 text-blue-800"
                  title="Design for how people think"
                  description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                  className="flex "
                />
                <CardLesson
                  feature="New"
                  featureCustom="bg-green-100 text-green-800"
                  title="International & commercial law"
                  description="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."
                  className="hidden md:flex"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
