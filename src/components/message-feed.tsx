'use client'

import React from "react"

import { Box } from '@/components/box'
import { Message } from '@/components/message'

interface Message {
  key: string
  message: string
  variant: 'message' | 'download'
}[]


const MessageFeed: React.FC = () => {
  const [messages, setMessages] = React.useState<Message[]>([])

  return (
    <div className='flex flex-col gap-4'>
      <Box className='p-6 rounded-3xl bg-light-green text-dark-green text-body-xs'>
        <p className='text-center'>This room is public.</p>
      </Box>

      {messages.map(({ key, message, variant }) => (
        <Message key={key} variant={variant} />
      ))}
    </div>
  )
}

export { MessageFeed }