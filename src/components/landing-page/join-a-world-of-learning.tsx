import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function JoinAWorldOfLearning() {
  return (
    <section
      id="join-a-world-of-learning"
      aria-label="Join A World Of Learning"
      className="relative flex h-[779px] w-full flex-col justify-center overflow-x-hidden bg-accent-yellow p-4 py-8 lg:flex-row"
    >
      <div className="flex w-full justify-center pb-8 lg:hidden">
        <Image
          width={467}
          height={636}
          className="object-cover"
          src="/join-a-world-learning-image-top.png"
          alt="An all-in-one app that makes it easier"
        />
      </div>
      <div className=" mx-auto flex w-full max-w-7xl flex-col justify-center gap-11 text-text-primary xl:flex-row xl:py-20">
        <div className="flex w-full flex-col justify-center gap-6 lg:max-w-[600px]">
          <h2 className="text-center font-extrabold text-2xl leading-6 lg:text-6xl lg:leading-18 xl:text-[56px]">
            Join a world of learning
          </h2>
          <p className="text-center text-xl leading-8">
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
            elit et fringilla habitant ut facilisi.
          </p>

          <Button className="mx-auto w-[239px] font-bold text-2xl">
            Sign Up Now
          </Button>
        </div>
      </div>
      <div className="flex w-full justify-center pt-8 lg:hidden">
        <Image
          width={467}
          height={636}
          className="object-cover"
          src="/join-a-world-learning-image-bottom.png"
          alt="An all-in-one app that makes it easier"
        />
      </div>
      <div className="-left-6 absolute top-[84px] hidden lg:flex">
        <Image
          width={467}
          height={636}
          className="object-cover"
          src="/join-a-world-learning-image-left.png"
          alt="An all-in-one app that makes it easier"
        />
      </div>
      <div className="-right-10 absolute top-[76px] hidden lg:flex">
        <Image
          width={470}
          height={599}
          className="object-cover"
          src="/join-a-world-learning-image-right.png"
          alt="An all-in-one app that makes it easier"
        />
      </div>
    </section>
  )
}
