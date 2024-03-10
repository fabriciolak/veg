import React from 'react'

import { Box } from '@/components/box'
import { Message } from '@/components/message'
import { RoomMessageInput } from '@/components/room-message-input'
import { MessageFeed } from '@/components/message-feed'

// import { io } from 'socket.io-client'
// import { Socket } from 'socket.io'

interface RoomProps {
  params: {
    roomId: string
  }
}

// const mock_messages: { key: string, message: string, variant: 'message' | 'download' }[] = [
//   {
//     key: 'message-1',
//     variant: 'message',
//     message: 'Some message',
//   },
//   {
//     key: 'message-2',
//     variant: 'download',
//     message: 'You would like a cheeseburger?',
//   }
// ]



// const socket = io('http://localhost:3001')

const Room: React.FC<RoomProps> = (props) => {

  const { params } = props

  // function handleCreateNewMessage(event: FormEvent) {
  //   event.preventDefault()
  //   const currentDate = new Date()

  //   socket.emit('chat message', {
  //     roomId: params.roomId,
  //     message: inputMessage,
  //     data: {
  //       createdAt: currentDate,
  //       expiresAt: new Date(currentDate.getTime() + 5 * 60000) // 5 minutes
  //     }
  //   })

  //   setMessages(prevMessage => {
  //     return [
  //       ...prevMessage,
  //       {
  //         key: `${currentDate.getTime()}-${inputMessage}`,
  //         variant: 'message',
  //         message: inputMessage
  //       }
  //     ]
  //   })

  //   console.log(messages)
  //   setInputMessage('')
  // }

  return (
    <div className='flex flex-col flex-grow relative p-4'>
      <main className='flex justify-center flex-grow relative'>
        <MessageFeed />

        {/* messages state */}
        {!true && (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Box className='text-center'>
              <p>Devices connected in the same network will be automatilcy added to the room</p>
            </Box>
          </div>
        )}
      </main>

      <footer className=' min-h-20 p-3 flex justify-center items-center'>
        <div className='flex flex-col shadow-lg rounded-full bg-white'>
          <RoomMessageInput />
        </div>
      </footer>
    </div >
  )
}

export default Room