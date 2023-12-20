"use client";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { initialBlobityOptions } from "../utils/BlobityConfig";
import Intro from "@/components/intro/intro";

export default function Home() {
  // this is how to change the cursor 
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  // cursor changing part will end here

  // locomotive scroll to make scroll smooth ans slow
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  })

  return (
    <main className="">
      <Intro />
    </main>
  )
}