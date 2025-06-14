import { Button } from '@/components/ui/button'
import Image from 'next/image'

const trustedBy = [
  {
    name: 'company Name',
    logo: '/trusted-lc-01.png',
  },
  {
    name: 'company Name',
    logo: '/trusted-lc-02.png',
  },
  {
    name: 'company Name',
    logo: '/trusted-lc-03.png',
  },
  {
    name: 'company Name',
    logo: '/trusted-lc-04.png',
  },
  {
    name: 'company Name',
    logo: '/trusted-lc-05.png',
  },
]

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Teach students worldwide hero"
      className="flex w-full justify-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-4 py-20 lg:flex-row">
        <div className="flex max-w-[576px] flex-col gap-8">
          <h2 className="relative font-extrabold text-7xl">
            <img
              src="/image-pen-stroke-orange.svg"
              className="absolute top-[55px] left-0 z-[-1]"
              alt=""
            />
            Teach students worldwide
          </h2>
          <p className="text-2xl">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
            turpis ultricies.
          </p>
          <div className="flex justify-between gap-4 lg:justify-start">
            <Button className="w-[153px] font-bold lg:w-[239px] lg:text-2xl">
              Sign Up Now
            </Button>
            <Button
              variant="ghost"
              className="flex w-[157px] items-center gap-2 text-accent-blue lg:w-[239px] lg:text-xl"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>play</title>
                <path
                  d="M12 22.2662C6.47697 22.2662 1.99997 17.7892 1.99997 12.2662C1.99997 6.74317 6.47697 2.26617 12 2.26617C17.523 2.26617 22 6.74317 22 12.2662C22 17.7892 17.523 22.2662 12 22.2662ZM12 20.2662C14.1217 20.2662 16.1565 19.4233 17.6568 17.923C19.1571 16.4227 20 14.3879 20 12.2662C20 10.1444 19.1571 8.10961 17.6568 6.60932C16.1565 5.10903 14.1217 4.26617 12 4.26617C9.87824 4.26617 7.84341 5.10903 6.34312 6.60932C4.84282 8.10961 3.99997 10.1444 3.99997 12.2662C3.99997 14.3879 4.84282 16.4227 6.34312 17.923C7.84341 19.4233 9.87824 20.2662 12 20.2662ZM16.126 14.0122L12.071 16.9102C11.166 17.5562 9.94097 17.2992 9.33397 16.3342C9.11491 15.9833 8.99915 15.5778 8.99997 15.1642V9.36817C8.99997 8.20817 9.88297 7.26617 10.972 7.26617C11.363 7.26617 11.746 7.39017 12.071 7.62217L16.126 10.5202C17.031 11.1672 17.272 12.4722 16.666 13.4372C16.5251 13.6621 16.3416 13.8574 16.126 14.0122ZM10.972 9.36817V15.1642L15.027 12.2662L10.972 9.36817Z"
                  fill="#2563EB"
                />
              </svg>
              <span className="font-medium">View Demo</span>
            </Button>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 lg:flex-row lg:items-center lg:justify-start lg:gap-12">
            <span className="text-accent-slate-blue leading-5 lg:w-[135px]">
              Trusted by leading companies
            </span>
            <div className="flex gap-4 lg:gap-12">
              {trustedBy.map((company, i) => (
                <Image
                  key={String(i)}
                  width={32}
                  height={32}
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-auto"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="h-[264px] max-w-[625px] flex-col gap-8 md:h-[545px] lg:flex">
          <Image
            width={624.6}
            height={544.53}
            className="object-cover object-center"
            src="/header-image-right-women.png"
            alt="women in chat school"
          />
        </div>
      </div>
    </section>
  )
}
