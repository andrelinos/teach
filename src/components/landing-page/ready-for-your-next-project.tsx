import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TextArea } from '@/components/ui/text-area'

export function ReadyForYourNextProject() {
  return (
    <section
      id="ready-for-your-next-project"
      aria-label="Ready For Your Next Project"
      className="flex h-[679px] w-full justify-center bg-accent-orange px-4 py-8"
    >
      <div className=" mx-auto flex w-full max-w-7xl flex-col justify-center gap-11 text-white xl:flex-row">
        <div className="flex w-full flex-col items-center gap-8">
          <h2 className="text-center font-extrabold text-[2rem] leading-9 lg:text-6xl lg:leading-18 xl:text-[56px]">
            Ready for your next project?
          </h2>
          <p className="text-center font-light text-lg lg:text-[2rem]">
            Sit elit feugiat turpis sed integer integer accumsan turpis.
          </p>

          <div className="w-full max-w-[550px] space-y-8">
            <Input
              title="Email"
              placeholder="Enter your email"
              className="w-full bg-white"
            />
            <TextArea
              title="Message"
              placeholder="Whats are you say?"
              className=" bg-white"
            />
          </div>

          <Button
            variant="secondary"
            className="mx-auto h-[56px] w-[201px] bg-accent-deep-blue font-bold text-xl lg:h-16 lg:w-[260px] lg:text-2xl"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
