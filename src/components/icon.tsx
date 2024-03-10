import React from 'react'
import { cn } from "@/utils/tw-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideProps } from "lucide-react";
import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const iconVariants = cva([
  "flex items-center justify-center cursor-pointer rounded-full transition-colors",
  "focus-visible:ring-2 focus-visible:ring-light-green focus-visible:ring-offset-2 ring-offset-light-green",
  "disabled:opacity-50 disabled:pointer-events-none",
], {
  variants: {
    sizes: {
      small: ["w-4 h-4 p-[0.0625rem]"],
      medium: ["w-5 h-5 p-[0.0625rem]"],
      large: ["w-6 h-6 p-[0.0938rem]"],
      'x-large': ["w-8 h-8 p-0.5"],
    }
  },
  defaultVariants: {
    sizes: 'small'
  }
})

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
}

interface IconVariants extends IconProps,
  VariantProps<typeof iconVariants> { }


const IconMemo: React.FC<IconVariants> = ({ name, sizes, className, ...props }) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return (
    <div
      className={cn(iconVariants({ sizes, className }))}
    >
      <LucideIcon {...props} />
    </div>
  )
}

const Icon = React.memo(IconMemo)

Icon.displayName = 'Icon'

export { Icon, type IconVariants }