'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react";

export default function Button() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const ccdVideoRef = useRef<HTMLVideoElement | null>(null);

    const meme = () => {
        if (isPlaying) {
            exitFullscreen(new Event("ended"));
            return;
        }

        if (ccdVideoRef.current) {
            ccdVideoRef.current.style.display = "block";
            ccdVideoRef.current.currentTime = 0;
            ccdVideoRef.current.play();
            ccdVideoRef.current.addEventListener("ended", exitFullscreen, false);
            setIsPlaying(true);
        }
    }
  
    const exitFullscreen = (e: Event) => {
        ccdVideoRef.current!.style.display = "none";
        ccdVideoRef.current!.pause();
        ccdVideoRef.current!.removeEventListener("ended", exitFullscreen, false);
        setIsPlaying(false);
    }

    useEffect(() => {
        ccdVideoRef.current = document.getElementById("ccd") as HTMLVideoElement;
        
    });

    return (
        <Image 
            id="red-button"
            src="/red-button.png" 
            alt="red-button" 
            width={55} 
            height={55}
            onClick={meme}
        />
    )
}