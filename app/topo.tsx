'use client'

import { useEffect } from "react";

export default function Topo() {
    useEffect(() => {
        const video = document.getElementById('bg-topo') as HTMLVideoElement
        if (video) { video.playbackRate = 0.4; }
    }, [])

    return (
    <video id="bg-topo" autoPlay muted loop>
        <source src="/topo.mp4" type="video/mp4"/>
    </video>
    )
}