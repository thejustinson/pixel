"use client"

import { RiMessage3Fill } from "@remixicon/react"
import Link from "next/link"

const StickyButton = () => {
  return (
    <Link href={'/#contact-us'}>
      <button className="inline-flex w-16 h-16 lg:h-20 lg:w-20 animate-shimmer fixed items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none bottom-5 right-5 z-[999]">
          <RiMessage3Fill/>
      </button>
    </Link>
    
  )
}

export default StickyButton
