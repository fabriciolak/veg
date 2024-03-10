import React from "react";
import Logo from "@/components/logo";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black space-y-8">
      <header className="p-4 container mx-auto">
        <Logo />
      </header>

      <div className="p-4">
        {children}
      </div>
    </div>
  )
}