import { cn } from "@/utils/tw-merge"
import React from "react"

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> { }

const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn([
      "w-[320px] text-body-xs p-2 rounded-md",
      "",
      className
    ])}
      {...props}
    >
      {children}
    </div>
  )
}

export { Box }