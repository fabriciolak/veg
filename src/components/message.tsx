import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Icon } from './icon'
import { Button } from './button'
import { cn } from '@/utils/tw-merge'
import Image from 'next/image'

const messageVariants = cva([
  "h-28 p-4 flex flex-col justify-between rounded-2xl bg-white text-dark-green text-body-xs",
  "shadow-normal"
], {
  variants: {
    variant: {
      message: '',
      download: '',
    },
  }
})

interface MessageVariantProps extends VariantProps<typeof messageVariants>, React.HTMLAttributes<HTMLDivElement> { }

const Message: React.FC<MessageVariantProps> = ({ variant, className, ...props }) => {
  return (
    <div className={cn(messageVariants({ variant, className }))} {...props}>
      {variant === 'download' ? (
        <div className='inline-flex gap-2'>
          <div className='w-6 h-6 bg-black/5 hover:bg-black/10 rounded-md inline-flex items-center justify-center p-4'>
            <Icon name='file' />
          </div>

          <div className='flex flex-col gap-1'>
            <span className='text-center text-base font-medium'>download.png</span>
            <span className='text-xs font-medium'>2 MB Image File.</span>
          </div>
        </div>
      ) : (
        <div>
          <span className='text-center text-base font-medium'>This room is public.</span>
        </div>
      )}

      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center gap-2'>
          <Icon name="loader-2" className='h-4 w-4' />
          <div>
            <span className='text-sm font-normal'>Expires in 1 minute</span>
          </div>
        </div>

        <Button asChild>
          {variant === 'download' ? (
            <>
              <div className='w-6 h-6 bg-black/5 hover:bg-black/10 rounded-md inline-flex items-center justify-center p-4'>
                <Icon name='download' />
              </div>
            </>
          ) : (
            <>
              <div className='w-6 h-6 bg-black/5 hover:bg-black/10 rounded-md inline-flex items-center justify-center p-4'>
                <Icon name='copy' />
              </div>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

export { Message, type MessageVariantProps }
