'use client'

import { useState, useEffect } from "react"

interface Banner {
    id: number,
    prompt: string,
    color: string,
}

const banners: Banner[] = [
    { id: 0, prompt: "TLDR: Alex - Software Engineer - Toronto", color: "text-emerald-500" },
    { id: 1, prompt: "Portugese && Trini", color: "text-rose-500" },
    { id: 2, prompt: "git checkout -b fix/bugs", color: "text-blue-300" },
    { id: 3, prompt: "building distributed scalable systems", color: "text-teal-300" },
    { id: 4, prompt: "till 3005", color: "text-fuchsia-500" },
    { id: 5, prompt: "implementing hash algorithms", color: "text-amber-500" },
    { id: 6, prompt: "initializing CI workflows", color: "text-purple-500" },
    { id: 7, prompt: "venv/Scripts/activate", color: "text-sky-500" },
    { id: 8, prompt: "who's gonna carry the boats!", color: "text-yellow-500" },
    { id: 9, prompt: "enabling mutexes", color: "text-lime-500" },
    { id: 10, prompt: "streamlining cloud integration", color: "text-teal-500" },
    { id: 11, prompt: "running tests...", color: "text-indigo-500" },
    { id: 12, prompt: "tuna, no crust.", color: "text-blue-500" },
    { id: 13, prompt: "squash and merge", color: "text-violet-500" },
    { id: 14, prompt: "learning and researching", color: "text-pink-500" },
    { id: 15, prompt: "modus operandi", color: "text-purple-300" },
    { id: 16, prompt: "collaborating collectively", color: "text-lime-600" },
    { id: 17, prompt: "securing APIs", color: "text-pink-300" },
    { id: 18, prompt: "npm run dev", color: "text-amber-200" },
    { id: 19, prompt: "debugging code", color: "text-cyan-500" },
    { id: 20, prompt: "dockerizing containers", color: "text-orange-500" },
]

enum BannerMS {
    typing = 50,
    pause = 5000,
}

const BannerSetup = (banners: Banner[]) => {
    let initialBanner: Banner = banners[0]
    const [banner, setBanner] = useState<string>("")
    const [selectedBanner, setSelectedBanner] = useState<string>(initialBanner.prompt)
    const [color, setColor] = useState<string>(initialBanner.color)
    const [index, setIndex] = useState<number>(1)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (banner === selectedBanner) {
                const timeout = setTimeout(() => {
                    let newBanner: Banner = banners[index]

                    setSelectedBanner(newBanner.prompt)
                    setBanner("")
                    setColor(newBanner.color)
                    setIndex((index + 1) % banners.length)
                }, BannerMS.pause)
                return () => clearTimeout(timeout)
            }
            setBanner(selectedBanner.slice(0, banner.length + 1))
        }, BannerMS.typing)
        return () => clearTimeout(timeout)
    }, [banner, selectedBanner, index, banners])

    return [banner, color]
}

export default function Banner() {
    const [banner, color] = BannerSetup(banners)

    return(
        <span id="banner" className={color + ' font-medium'}>
            {banner}&nbsp;
        </span>
    )
}
