import Image from 'next/image'

export default function Work() {
  return(
    <div className="lg:w-1/2 sm:w-full">
      <h1 className="text-2xl font-serif tracking-wider">Where have I been?</h1>
      <p className="text-sm px-6 ">
      Currently, I&apos;m working on CFD R&D at
      &nbsp;
      <a id="ansys" href="https://www.ansys.com/" target="blank">Ansys</a>
      &nbsp;
      and web development at
      &nbsp;
      <a id="geotab" href="https://www.geotab.com/" target="blank">Geotab</a>
      .
      </p>
      <p className="text-xs font-bold px-6 mt-1">Past Experience</p>
      <div className="flex flex-row items-center mx-6 mt-1 space-x-1">
        <div className="timeline-start"/>
        <div className="w-2 h-2 rounded-full border-2">
          <Image src="/amazon.png" alt="Amazon" title="Amazon" width={100} height={100}/>
        </div>
        <div className="timeline-mid"/>
        <div className="w-2 h-2 rounded-full border-2">
          <Image src="/geotab.png" alt="Geotab" title="Geotab" width={100} height={100}/>
        </div>
        <div className="timeline-mid"/>
        <div className="w-2 h-2 rounded-full border-2">
          <Image src="/ansys.png" alt="Ansys" title="Ansys" width={100} height={100}/>
        </div>
        <div className="timeline-end"/>
      </div>
    </div>
  )   
}