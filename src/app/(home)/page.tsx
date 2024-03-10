'use client'

import { useRoomStore } from '@/providers/room-store-provider'

import { Button } from "@/components/button"
import { CreateNewRoomButton } from "@/components/create-new-room-button"
import { RecentlyRoom } from "@/components/recently-room"

export default function Home() {
  const roomId = useRoomStore(store => store.roomId!!)

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:w-[720px] gap-8">
        <div role="banner">
          <h1 className="text-heading-3 md:text-heading-1 text-green-linear">Veg</h1>
          <h2 className="text-body-x-large md:text-heading-3 text-green-linear">
            The new way to share stuff between devices
          </h2>
        </div>

        <div role="navigation" className="flex flex-col gap-6 md:w-[280px]">
          <CreateNewRoomButton />

          <Button className="bg-light-green hover:bg-light-green/90" type="button" aria-label="Enter room code">
            <div className="text-dark-green">
              Enter room code
            </div>
          </Button>

          {roomId && (
            <RecentlyRoom roomId={roomId} />
          )}
        </div>
      </div>
    </div>
  )
}
