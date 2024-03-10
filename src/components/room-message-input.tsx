'use client'

import React from 'react'
import { Button } from '@/components/button'
import { Icon } from '@/components/icon'

const RoomMessageInput: React.FC = () => {
  const [inputMessage, setInputMessage] = React.useState('')

  const handleInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value)
  }, [])

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setInputMessage('')
  }, [])

  return (
    <form onSubmit={handleSubmit} className="p-2 inline-flex gap-4">
      <Button
        type='submit'
        variant='default'
        className='border border-dark-green hover:bg-dark-green hover:text-light-green rounded-full'
        aria-label='Send'
        disabled={inputMessage.length === 0}
      >
        <Icon name='send-horizontal' className='rotate-180' />
      </Button>

      <input
        type="text"
        value={inputMessage}
        onChange={handleInputChange}
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

    </form>
  )
}

RoomMessageInput.displayName = 'RoomMessageInput'

export { RoomMessageInput }