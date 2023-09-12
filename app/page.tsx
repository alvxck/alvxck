import Banner from "./components/banner"
import FolderSelect from "./components/folderSelect"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-topography"/>
      <div id="container" className="flex flex-col items-center space-y-4">
        <div id="title" className="w-full flex flex-row space-x-7">
          <div className="flex flex-col grow justify-center">
            <FolderSelect />
            <h1 className="text-3xl md:text-4xl font-semibold">Alexander Carvalho</h1>
            <Banner />
          </div>
        </div>
        <div id="about" className="w-full space-y-4">
          <p className="text-md text-neutral-400">Hi – my name is <span className="font-medium text-white">Alex</span>.</p>
          <p className="text-md text-neutral-400">I&apos;m a <span className="font-medium text-white">Software Engineer</span> from from Toronto interested in <span className="font-medium text-white">finance-technology</span> and building <span className="font-medium text-white">sports cars</span>.</p>
          <p className="text-md text-neutral-400">Currently, I&apos;m working on <span className="font-medium text-white">backend</span> development for telematics integration at <a href="https://www.geotab.com/" target="blank" id="job" className="font-medium text-white">Geotab</a>. Previously at <a href="https://www.ansys.com/" target="blank" id="job" className="font-medium text-white">Ansys</a>.</p>
        </div>
        <div id='links' className="w-full">
          <p className="text-md font-medium">Links</p>
          <div className="flex flex-row flex-wrap space-x-3 mt-1"> 
            <a href="https://www.linkedin.com/in/alvx/" target="blank" className='text-sm text-neutral-400 hover:text-sky-500'>LinkedIn</a>
            <a href="https://github.com/alvxck" target="blank" className='text-sm text-neutral-400 hover:text-sky-500'>GitHub</a>
            <a href="mailto:alexander_sck@live.ca" target="blank" className='text-sm text-neutral-400 hover:text-sky-500'>Email</a>
          </div>
        </div>
      </div>
    </main>
  )
}
