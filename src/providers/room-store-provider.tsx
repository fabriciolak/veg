'use client'

import { RoomStore, createRoomStore } from "@/stores/room-store"
import React from "react"
import { useStore, type StoreApi } from 'zustand'

export type RoomStoreProviderProps = {
  children: React.ReactNode
}

export const RoomStoreContext = React.createContext<StoreApi<RoomStore> | null>(null)

export const RoomStoreProvider = ({
  children
}: RoomStoreProviderProps) => {
  const storeRef = React.useRef<StoreApi<RoomStore>>()

  if (!storeRef.current) {
    storeRef.current = createRoomStore()
  }

  return (
    <RoomStoreContext.Provider value={storeRef.current}>
      {children}
    </RoomStoreContext.Provider>
  )
}

export const useRoomStore = <T,>(selector: (store: RoomStore) => T) => {
  const roomStoreContext = React.useContext(RoomStoreContext)

  if (!roomStoreContext) {
    throw new Error('useRoomStore must be use within RoomStoreProvider')
  }

  return useStore(roomStoreContext, selector)
}