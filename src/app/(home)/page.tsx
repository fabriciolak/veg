import { Button } from "@/components/button"
import { cn } from "@/utils/tw-merge"

export default function Home() {
  const visited = !false

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
          <Button className="bg-dark-green hover:bg-dark-green/90" type="button" aria-label="Create your room">
            <div>
              Create your room
            </div>
          </Button>

          <Button className="bg-light-green hover:bg-light-green/90" type="button" aria-label="Enter room code">
            <div className="text-dark-green">
              Enter room code
            </div>
          </Button>

          {visited && (
            <div className="my-4 space-y-4">
              <h3 className="text-body-small text-white">Recently visited</h3>

              <Button
                type="button"
                aria-label="EBSCB0"
                className={cn([
                  "bg-transparent",
                  "border-4 border-light-green bg-transparent"
                ])}
              >
                <div>
                  EBSCB0
                </div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
