import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  'h-16 whitespace-nowrap rounded-lg p-2 text-white hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70',
  {
    variants: {
      variant: {
        default: 'bg-accent-orange',
        secondary: 'bg-background-tertiary',
        outline:
          'h-16 border-2 border-border-primary bg-transparent text-primary',
        ghost: 'border-none bg-transparent p-0 text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
