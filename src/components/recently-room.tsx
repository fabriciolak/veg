'use client'

import { Button } from '@/components/button'
import { useRoomStore } from '@/providers/room-store-provider'

const RecentlyRoom: React.FC = () => {
  const roomId = useRoomStore(store => store.roomId)

  return (
    <div>
      {roomId && (
        <Button className="p-2 px-3 border border-dark-green inline-flex rounded-xl">
          <div className="text-xs font-semibold space-x-2">
            <span>Recently room {roomId}</span>
          </div>
        </Button>
      )}
    </div>
  )
}

RecentlyRoom.displayName = 'RecentlyRoom'

export { RecentlyRoom }