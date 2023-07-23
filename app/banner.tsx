'use client'

import { useState, useEffect } from "react"

interface Banner {
    id: number,
    prompt: string,
    color: string,
}

const banners: Banner[] = [
    {
        id: 1,
        prompt: "Carvalho [kɐɾ'vaʎu] — 'Oak' in Portugese.",
        color: "text-emerald-600",
    },
    {
        id: 2,
        prompt: "Tuna, no crust.",
        color: "text-blue-600",
    },
    {
        id: 3,
        prompt: "TL;DR: XXX.",
        color: "text-yellow-400",
    },
    {
        id: 4,
        prompt: "Who's gonna carry the boats!",
        color: "text-rose-600",
    },
    {
        id: 5,
        prompt: "`till 3005.",
        color: "text-fuchsia-600",
    },
]

const BannerSetup = (banners: Banner[]) => {
    const [banner, setBanner] = useState<string>("")
    const [selectedBanner, setSelectedBanner] = useState<string>(banners[0].prompt)
    const [color, setColor] = useState<string>(banners[0].color)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (banner === selectedBanner) {
                const timeout = setTimeout(() => {
                    const newBanner: Banner = banners[Math.floor(Math.random() * banners.length)]
                    setSelectedBanner(newBanner.prompt)
                    setBanner("")
                    setColor(newBanner.color)
                }, 5000)
                return () => clearTimeout(timeout)
            }
            setBanner(selectedBanner.slice(0, banner.length + 1))
        }, 40)

        return () => clearTimeout(timeout)
    }, [banner, selectedBanner, banners])

    return [banner, color]
}

export default function Banner() {
    const [banner, color] = BannerSetup(banners)

    return(
        <span id="banner" className={color + ' font-medium blinking-cursor'}>
            {banner}
        </span>
    )
}
