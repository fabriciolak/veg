import React from 'react'
import Link from 'next/link'
import Box from '@/components/box'
import { Button } from '@/components/button'
import { Icon } from '@/components/icon'
import { Message } from '@/components/message'

interface RoomProps {
  params: {
    roomId: string
  }
}

const mock_messages: { key: string, message: string, variant: 'message' | 'download' }[] = [
  {
    key: 'message-1',
    variant: 'message',
    message: 'Some message',
  },
  {
    key: 'message-2',
    variant: 'download',
    message: 'You would like a cheeseburger?',
  }
]

const Room: React.FC<RoomProps> = (props) => {
  const { params } = props

  const messages = false

  return (
    <div className='flex flex-col flex-grow relative p-4'>
      <main className='flex justify-center flex-grow relative'>
        <div className='flex flex-col gap-4'>
          <Box className='p-6 rounded-3xl bg-light-green text-dark-green text-body-xs'>
            <p className='text-center'>This room is public.</p>
          </Box>

          {mock_messages.map(({ key, message, variant }) => (
            <Message key={key} variant={variant}>
              <p className='text-center'>{message}</p>
            </Message>
          ))}
        </div>

        {messages && (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Box className='text-center'>
              <p>Devices connected in the same network will be automatilcy added to the room</p>
            </Box>
          </div>
        )}
      </main>

      <footer className=' min-h-20 p-3 flex justify-center items-center'>
        <div className='flex flex-col shadow-lg rounded-full bg-white'>
          <div className="p-2 inline-flex gap-4">
            <Button
              variant='default'
              className='border border-dark-green hover:bg-dark-green hover:text-light-green rounded-full'
              aria-label='Send'
            >
              <Icon name='send-horizontal' className='rotate-180' />
            </Button>

            <input
              type="text"
              placeholder='type something...'
              className='w-[320px] focus-visible:outline-none'
            />

            <div>
              <Button asChild variant='default' className='border hover:border-dark-green h-12 w-12 rounded-full cursor-pointer'>
                <label htmlFor="pick-file">
                  <Icon name='paperclip' className='rotate-180' />
                </label>
              </Button>

              <input type="file" id="pick-file" className='sr-only' />
            </div>

          </div>
          {/* <span className='text-body-xs'>Dot not send any personal data.</span> */}
        </div>
      </footer>
    </div >
  )
}

export default Room