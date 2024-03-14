import { createStore } from 'zustand/vanilla'

export type RoomState = {
  roomId: string
}

export type RoomAction = {
  setRoomId: (roomId: string) => void
  // TODO: Save actual room store in local storage
  saveRoomStoreInLocalStorage?: () => void

  // TODO: Clear room store from local storage after room is created
  clearRoomStoreFromLocalStorage?: () => void

  clearRoomId: () => void
}

export type RoomStore = RoomState & RoomAction

export const defaultInitialState: RoomState = {
  roomId: '',
}

export const createRoomStore = (initState: RoomState = defaultInitialState) => {
  return createStore<RoomStore>((set) => ({
    ...initState,
    setRoomId: (roomId) => set({ roomId }),
    clearRoomId: () => set({ roomId: '' }),
  }))
}
