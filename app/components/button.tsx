'use client'

import Image from "next/image"

let ccdVideo = document.getElementById("ccd") as HTMLVideoElement;
let mainContainer = document.getElementById("container") as HTMLDivElement;

const meme = () => {
    mainContainer.style.display = "none";
    ccdVideo.style.display = "block";
    ccdVideo.requestFullscreen();
    ccdVideo.play();
    ccdVideo.addEventListener("ended", exitFullscreen, false);
    ccdVideo.addEventListener("fullscreenchange", exitFullscreen, false);
}

const exitFullscreen = (e: Event) => {
    mainContainer.style.display = "block";
    ccdVideo.style.display = "none";
    ccdVideo.pause();
    ccdVideo.removeEventListener("ended", exitFullscreen, false);
    ccdVideo.removeEventListener("fullscreenchange", exitFullscreen, false);
    document.exitFullscreen();
}

export default function Button() {
    return (
        <Image 
            id="red-button" 
            src="/red-button.png" 
            alt="red-button" 
            width={50} 
            height={50}
            onClick={meme}
        />
    )
}