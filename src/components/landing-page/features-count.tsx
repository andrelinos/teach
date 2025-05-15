import Image from 'next/image'

export function FeaturesCount() {
  return (
    <section
      id="features-count"
      aria-label="Features Count"
      className="flex w-full justify-center bg-accent-deep-blue py-8"
    >
      <div className="m mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-12 text-accent-yellow xl:flex-row xl:py-20">
        <div className="flex w-1/3 flex-col items-center gap-4 text-center">
          <Image src="/heart.svg" alt="heart" width={64} height={64} />
          <span className="font-extrabold text-7xl">192</span>
          <p className="text-xl">user countries</p>
        </div>
        <div className="flex w-1/3 flex-col items-center gap-4 text-center">
          <Image src="/diamond.svg" alt="heart" width={64} height={64} />
          <span className="font-extrabold text-7xl">1M</span>
          <p className="text-xl">valued teachers</p>
        </div>
        <div className="flex w-1/3 flex-col items-center gap-4 text-center">
          <Image src="/student.svg" alt="heart" width={64} height={64} />
          <span className="font-extrabold text-7xl">17M</span>
          <p className="text-xl">happy students</p>
        </div>
      </div>
    </section>
  )
}
