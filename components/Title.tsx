import Image from 'next/image'

export default function Title() {

    return(
      <div className="w-full flex flex-row space-x-7">
        <Image src="/profile.png" alt="Profile" title="Profile" width={125} height={125} className="rounded-full" />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-serif tracking-wider">Hello,</h1>
          <p className="text-sm text-neutral-300">My name is <span className="font-bold text-white">Alex</span>.</p>
          <p className="text-sm text-neutral-300">I&apos;m a <span className="font-bold text-white">Software Engineer</span> from Toronto, Canada.</p>
        </div>
      </div>
    )
}