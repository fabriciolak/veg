'use client'

import React from "react";

import Link from 'next/link'
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { useRoomStore } from "@/providers/room-store-provider";

interface RoomLayoutProps {
  children: React.ReactNode
  params: {
    roomId: string
  }
}

const RoomLayout: React.FC<RoomLayoutProps> = ({ children, params }) => {
  const clearRoomId = useRoomStore(state => state.clearRoomId)

  const backToHome = () => {
    clearRoomId()
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF0EE]">
      <header className="bg-dark-green grid grid-cols-3 text-white py-2 px-4">
        <h1 className="sr-only">Veg</h1>

        <div className="flex justify-start items-center">
          <Button
            onClick={backToHome}
            asChild
          >
            <Link href="/">
              <Icon name="arrow-left" sizes='x-large' aria-label="Back to home" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-body-xs">
            Your room code is:
          </span>

          <div>
            <p className="text-body-small text-light-green">{params.roomId}</p>
          </div>
        </div>

        <div className="flex justify-end items-center">
          <div className="flex gap-2">
            <Button className="bg-white text-black w-">Share</Button>
            <Button className="bg-white text-black w-">Share</Button>
          </div>
        </div>
      </header>

      {children}
    </div>
  )
}

export default RoomLayout