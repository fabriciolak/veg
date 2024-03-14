import React, { Suspense } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/button";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="min-h-screen flex flex-col justify-between bg-light-green/30">
        {/* <header className="p-4 container mx-auto">
          <Button className="p-0" asChild>
            <Link href="/" role="img" aria-label="Veg logo">
              <Logo />
            </Link>
          </Button>
        </header> */}

        <div className="flex-1 justify-center items-center flex container mx-auto">
          {children}
        </div>
      </div>
    </Suspense>
  )
}