import { CardLesson } from '@/components/commons/card-lesson'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'iconoir-react'
import Image from 'next/image'

export function AllTheCoolFeatures() {
  return (
    <section
      id="all-the-cool-features"
      aria-label="All The Cool Features"
      className="flex w-full justify-center overflow-hidden py-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-11 text-text-primary xl:flex-row xl:pb-20">
        <div className="flex h-full w-full flex-col justify-center gap-6 p-4 lg:max-w-[600px]">
          <h2 className="font-extrabold text-2xl leading-6 lg:text-6xl lg:leading-18 xl:text-[56px]">
            Al the cool{' '}
            <span className="relative max-h-fit min-w-fit text-center">
              <img
                src="/image-pen-stroke-orange.svg"
                className="absolute inset-x-0 bottom-[-2px] z-[-1] w-full xl:bottom-[-10px]"
                alt=""
              />
              features
            </span>
          </h2>
          <p className="text-xl leading-8">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
            ullamcorper non viverra a, neque orci.
          </p>

          <Button
            variant="ghost"
            className="flex w-fit items-center gap-4 text-accent-blue text-xl"
          >
            <span className="font-medium">View all the features</span>
            <ArrowRight className="size-4 stroke-2 text-accent-blue" />
          </Button>
        </div>
        <div className="w-full items-center justify-center">
          <div className="relative mx-auto w-[584px]">
            <div className="absolute top-[38px] left-[50px]">
              <CardLesson
                feature="Popular"
                featureCustom="bg-blue-100 text-blue-800"
                title="Design for how people think"
                description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
              />
            </div>
            <Image
              width={584}
              height={522}
              className="object-cover"
              src="/all-the-cool-features-image.png"
              alt="An all-in-one app that makes it easier"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
