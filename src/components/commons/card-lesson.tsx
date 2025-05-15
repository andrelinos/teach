import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CardProps {
  feature: string
  featureCustom: string
  title: string
  description: string
  className?: string
}

export function CardLesson({
  feature,
  featureCustom,
  title,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        'flex h-[230px] w-[160px] flex-col justify-between gap-2 rounded-lg bg-background-primary p-4 shadow-xl lg:h-[232px] lg:w-[200px]',
        className
      )}
    >
      <span className={cn('w-fit rounded-lg px-4 py-1 text-sm', featureCustom)}>
        {feature}
      </span>
      <h2 className="font-medium text-text-primary leading-5 lg:text-xl">
        {title}
      </h2>
      <p className="text-accent-slate-blue text-xs lg:text-sm">{description}</p>
      <Button
        variant="outline"
        className={cn(
          'h-10 w-32 border-accent-blue text-accent-blue lg:w-[168.33px]'
        )}
      >
        Take Lesson
      </Button>
    </div>
  )
}
