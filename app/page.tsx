import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full space-y-5">
        <div className="lg:w-1/2 sm:w-full rounded-xl bg-emerald-400 bg-opacity-50 p-2">
          <h1 className="text-2xl font-serif tracking-wider text-emerald-400">Who am I?</h1>
          <p className="text-sm px-6 text-emerald-400">Hi, my name is Alex!</p>
          <p className="text-sm px-6 text-emerald-400">I am a Software Engineer interested in finance-technology and mechatronics.</p>
        </div>

        <div className="lg:w-1/2 sm:w-full rounded-xl bg-sky-400 bg-opacity-50 p-2">
          <h1 className="text-2xl font-serif tracking-wider text-sky-400">What do I know?</h1>
          <p className="text-sm px-6 text-sky-400">XXX and XXX are </p>
          <p className="text-xs font-bold px-6 mt-1 text-sky-400">Languages, Frameworks, Datastores, and Tools</p>
          <div className="flex flex-row space-x-2 rounded-full bg-neutral-900 px-3 py-1 mt-1 mx-6">
            <Image src="/python.svg" alt="Python" title="Python" width={23} height={23} />
            <Image src="/cpp.svg" alt="C++" title="C++" width={23} height={23} />
            <Image src="/typescript.svg" alt="TypeScript" title="TypeScript" width={23} height={23} />
            <Image src="/java.svg" alt="Java" title="Java" width={23} height={23} />
            <Image src="/nextjs.svg" alt="Next.js" title="Next.js" width={23} height={23} />
            <Image src="/git.svg" alt="Git" title="Git" width={23} height={23} />
            <Image src="/docker.svg" alt="Docker" title="Docker" width={23} height={23} />
            <Image src="/aws.svg" alt="AWS" title="AWS" width={23} height={23} />
            <Image src="/gcp.svg" alt="GCP" title="GCP" width={23} height={23} />
          </div>
        </div>

        <div className="lg:w-1/2 sm:w-full rounded-xl bg-red-400 bg-opacity-50 p-2">
          <h1 className="text-2xl font-serif tracking-wider text-red-400">Where have I been?</h1>
          <p className="text-sm px-6 text-red-400">
          Currently, I am a working as a Software Engineer Intern at both
          &nbsp;
          <a id="ansys" href="https://www.ansys.com/" target="blank">Ansys</a>
          &nbsp;
          and
          &nbsp;
          <a id="geotab" href="https://www.geotab.com/" target="blank">Geotab</a>
          .
          </p>
          <p className="text-xs font-bold px-6 mt-1 text-red-400">Past experience</p>
          <div className="flex flex-row mx-6 mt-2 space-x-2">
            <div className="flex items-center rounded-full bg-neutral-900 px-3 py-1">
              <Image src="/amazon.png" alt="Amazon" title="Amazon" width={60} height={35} />
            </div>

            <div className="flex items-center rounded-full bg-neutral-900 px-3 py-1">
              <Image src="/geotab.png" alt="Geotab" title="Geotab" width={60} height={35} />
            </div>

            <div className="flex items-center rounded-full bg-neutral-900 px-3 py-1">
              <Image src="/ansys.png" alt="Ansys" title="Ansys" width={60} height={35} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
