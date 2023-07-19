import Image from 'next/image'

export default function Skills() {

  return (
    <div className="lg:w-1/2 sm:w-full">
      <h1 className="text-2xl font-serif tracking-wider">What do I know?</h1>
      <p className="text-sm px-6">I specialize in XXX and Full Stack Web Development.</p>
      <p className="text-xs font-bold px-6">Programming Languages</p>
      <div className="flex flex-row space-x-2 mt-1 mx-6"> 
        <Image src="/python.svg" alt="Python" title="Python" width={27} height={27} />
        <Image src="/ruby.svg" alt="Ruby" title="Ruby" width={27} height={27} />
        <Image src="/cpp.svg" alt="C++" title="C++" width={27} height={27} />
        <Image src="/typescript.svg" alt="TypeScript" title="TypeScript" width={27} height={27} />
        <Image src="/java.svg" alt="Java" title="Java" width={27} height={27} />
      </div>
    </div>
  )
}