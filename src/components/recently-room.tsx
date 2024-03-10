import { Button } from '@/components/button'
import { cn } from '@/utils/tw-merge'

interface RecentlyRoomProps {
  roomId: string
}

const RecentlyRoom: React.FC<RecentlyRoomProps> = ({ roomId }) => {
  return (
    <div className="my-4 space-y-4">
      <h3 className="text-body-small text-white">Recently visited</h3>

      <Button
        type="button"
        aria-label="EBSCB0"
        className={cn([
          "text-white bg-transparent",
          "border-4 border-light-green bg-transparent"
        ])}
      >
        <div>
          {roomId}
        </div>
      </Button>
    </div>
  )
}

RecentlyRoom.displayName = 'RecentlyRoom'

export { RecentlyRoom }