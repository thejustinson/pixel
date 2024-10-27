"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import {
  IconWriting
} from "@tabler/icons-react";


export function Blogs() {
  return (
    <div className="p-10 py-20 bg-black text-white" id="blog">

      <div className="flex flex-col items-center max-w-fit mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Check Out Our Blog
        </h2>

        <div className="w-[calc(100%+30px)] h-[2px] bg-gradient-to-r from-transparent to-transparent via-white mb-10">

        </div>
      </div>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </BentoGrid>
    </div>
    
  );
}
const Skeleton = ({ src }: { src: string }) => (
  <div className="relative w-full h-[200px] md:h-full min-h-[6rem] rounded-xl overflow-hidden">
    <Image src={src} layout="fill" objectFit="cover" objectPosition="center" alt="blog-image"/>
  </div>
);


const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton src="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>,
    className: "md:col-span-2",
    icon: <IconWriting className="h-4 w-4 text-neutral-500" />,
    href: '/'
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton src="/1.jpg"/>,
    className: "md:col-span-1",
    icon: <IconWriting className="h-4 w-4 text-neutral-500" />,
    href: '/'
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton src="/1.jpg"/>,
    className: "md:col-span-1",
    icon: <IconWriting className="h-4 w-4 text-neutral-500" />,
    href: '/'
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton src="/1.jpg"/>,
    className: "md:col-span-2",
    icon: <IconWriting className="h-4 w-4 text-neutral-500" />,
    href: '/'
  },
];
