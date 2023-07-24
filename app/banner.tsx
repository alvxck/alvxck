'use client'

import { useState, useEffect } from "react"

interface Banner {
    id: number,
    prompt: string,
    color: string,
}

const banners: Banner[] = [
    { id: 1, prompt: "Carvalho [kɐɾ'vaʎu] — 'Oak' in Portugese.", color: "text-emerald-500" },
    { id: 2, prompt: "tuna, no crust.", color: "text-blue-500" },
    { id: 3, prompt: "TL;DR: XXX.", color: "text-yellow-500" },
    { id: 4, prompt: "who's gonna carry the boats!", color: "text-rose-500" },
    { id: 5, prompt: "`till 3005.", color: "text-fuchsia-500" },
    { id: 6, prompt: "building, breaking, and learning.", color: "text-cyan-500" },
    { id: 7, prompt: "implementing cryptographic hash algorithms.", color: "text-amber-500" },
    { id: 8, prompt: "sample8", color: "text-purple-500" },
    { id: 9, prompt: "sample9", color: "text-lime-500" },
    { id: 10, prompt: "sample10", color: "text-teal-500" },
    { id: 11, prompt: "sample11", color: "text-sky-500" },
    { id: 12, prompt: "sample12", color: "text-indigo-500" },
    { id: 13, prompt: "sample13", color: "text-violet-500" },
    { id: 14, prompt: "sample14", color: "text-pink-500" },
    { id: 15, prompt: "sample15", color: "text-blue-300" },
    { id: 16, prompt: "sample16", color: "text-teal-300" },
    { id: 17, prompt: "sample17", color: "text-lime-600" },
    { id: 18, prompt: "sample18", color: "text-yellow-700" },
    { id: 19, prompt: "sample19", color: "text-amber-200" },
    { id: 20, prompt: "sample20", color: "text-orange-500" },
]

enum BannerMS {
    typing = 40,
    pause = 5000,
}

const BannerSetup = (banners: Banner[]) => {
    const [banner, setBanner] = useState<string>("")
    const [selectedBanner, setSelectedBanner] = useState<string>(banners[0].prompt)
    const [lastBanner, setLastBanner] = useState<string>("")
    const [color, setColor] = useState<string>(banners[0].color)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (banner === selectedBanner) {
                const timeout = setTimeout(() => {
                    while (true) {
                        const newBanner: Banner = banners[Math.floor(Math.random() * banners.length)]

                        if (newBanner.prompt !== lastBanner) {
                            setSelectedBanner(newBanner.prompt)
                            setLastBanner(newBanner.prompt)
                            setBanner("")
                            setColor(newBanner.color)
                            break
                        }
                    }
                }, BannerMS.pause)
                return () => clearTimeout(timeout)
            }
            setBanner(selectedBanner.slice(0, banner.length + 1))
        }, BannerMS.typing)

        return () => clearTimeout(timeout)
    }, [banner, selectedBanner, lastBanner, banners])

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
