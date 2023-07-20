import Image from 'next/image'

export default function Work() {
  return(
    <div id='work' className="w-full p-2 bg-neutral-950 rounded-2xl outline outline-neutral-600">
      <h1 className="text-lg font-medium">Where have I been?</h1>
      <p className="text-sm text-neutral-300">
      Currently, I&apos;m working on CFD R&D at
      &nbsp;
      <a id="ansys" href="https://www.ansys.com/" target="blank">Ansys</a>
      &nbsp;
      and web development at
      &nbsp;
      <a id="geotab" href="https://www.geotab.com/" target="blank">Geotab</a>
      .
      </p>
      <p className="text-xs font-bold">Past Experience</p>
      <div className="flex flex-row items-center mt-1 space-x-3">
        <div className='flex flex-row space-x-1'>
          <Image src="/ansys.png" alt="Ansys" title="Ansys" width={30} height={30} />
          <div>
            <p className="text-xs text-neutral-300">Ansys</p>
            <p className="text-xs">SWE Intern</p>
          </div>
        </div>

        <div className='flex flex-row space-x-1'>
          <Image src="/geotab.png" alt="Geotab" title="Geotab" width={30} height={30} />
          <div>
            <p className="text-xs text-neutral-300">Geotab</p>
            <p className="text-xs">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  )   
}