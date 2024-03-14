'use client'

import React from 'react'

import { Button } from '@/components/button'
import { useRoomStore } from '@/providers/room-store-provider'
import { generateId } from '@/utils/generate-id'
import { useRouter } from 'next/navigation'

const CreateNewRoomButton: React.FC = () => {
  const router = useRouter()

  const roomId = useRoomStore(store => store.roomId)
  const { setRoomId } = useRoomStore(store => store)


  const handleCreateNewRoom = () => {
    setRoomId(generateId(5))
  }

  React.useEffect(() => {
    console.log('first click > ' + roomId)
    // TODO: validate the room id is create or already expired
    router.push(`/${roomId}`)
  }, [roomId])

  return (
    <Button
      type="button"
      size="large"
      aria-label="Create new room"
      className="bg-dark-green hover:bg-dark-green text-white shine-linear hover:animate-shine shine-delay"
      onClick={handleCreateNewRoom}
    >
      Create new room
    </Button>
  )
}

CreateNewRoomButton.displayName = 'CreateNewRoomButton'

export { CreateNewRoomButton }