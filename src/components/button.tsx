import React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/utils/tw-merge'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva([
  "inline-flex items-center justify-center gap-4 px-4 py-2 rounded-md transition-colors",
  "focus-visible:ring-2 focus-visible:ring-light-green focus-visible:ring-offset-2 ring-offset-light-green",
  "disabled:opacity-50 disabled:pointer-events-none",
  "text-body-xs",
], {
  variants: {
    variant: {
      default: ""
    },
    size: {
      small: "h-8",
      large: "h-9",
      'x-large': "h-11",
      icon: "h-10 w-10"
    }
  }
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, type, variant, className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      type={type}
      className={cn(buttonVariants({ className, variant }))}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  )
})

Button.displayName = 'Button'