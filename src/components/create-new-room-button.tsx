'use client'

import React from 'react'

import { Button } from '@/components/button'
import { useRoomStore } from '@/providers/room-store-provider'
import { generateId } from '@/utils/generate-id'

const CreateNewRoomButton: React.FC = () => {
  const setRoomId = useRoomStore(store => store.setRoomId)
  const roomId = useRoomStore(store => store.roomId)

  const handleCreateNewRoom = () => {
    setRoomId(generateId(5))
  }

  // TODO: send user for new room recently created

  return (
    <Button
      onClick={handleCreateNewRoom}
      className="bg-dark-green hover:bg-dark-green/90" type="button" aria-label="Create your room"
    >
      <div>
        Create your room
      </div>
    </Button>
  )
}

CreateNewRoomButton.displayName = 'CreateNewRoomButton'

export { CreateNewRoomButton }