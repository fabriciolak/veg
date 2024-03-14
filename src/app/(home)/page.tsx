import React from "react"

import { cn } from "@/utils/tw-merge"
import { Button } from '@/components/button'
import { CreateNewRoomButton } from "@/components/create-new-room-button"
import { RecentlyRoom } from "@/components/recently-room"

const Home: React.FC = () => {
  return (
    <div className={cn([
      "",
      "text-center animate-slidein space-y-8 w-[720px]"
    ])}>
      <RecentlyRoom />
      <div className="space-y-4">
        <h1 className="text-7xl leading-[88px] font-bold text-dark-green">
          Streamline device Sharing
        </h1>

        <h2 className="text-lg text-dark-green/80">
          The new way to share stuff between devices
        </h2>

        <div className="space-x-4">
          <CreateNewRoomButton />
          <Button
            type="button"
            size="large"
            aria-label="Enter room code"
            className="bg-white text-black"
          >
            Enter room code
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home