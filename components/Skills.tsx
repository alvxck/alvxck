import Image from 'next/image'

export default function Skills() {

  return (
    <div id='skills' className="w-full p-2 bg-neutral-950 rounded-2xl outline outline-neutral-600">
      <h1 className="text-lg font-medium">What do I know?</h1>
      <p className="text-sm text-neutral-300">I specialize in XXX and Full Stack Web Development.</p>
      <p className="text-xs font-bold">Programming Languages</p>
      <div className="flex flex-row space-x-3 mt-1"> 
        <div className='flex flex-row items-center space-x-1'>
          <div className='w-3 h-3 rounded-full bg-blue-400 outline outline-blue-300'/>
          <span className='text-xs text-neutral-300'>Python</span>
        </div>
        <div className='flex flex-row items-center space-x-1'>
          <div className='w-3 h-3 rounded-full bg-pink-500 outline outline-pink-400'/>
          <span className='text-xs text-neutral-300'>C++</span>
        </div>
        <div className='flex flex-row items-center space-x-1'>
          <div className='w-3 h-3 rounded-full bg-gray-500 outline outline-gray-400'/>
          <span className='text-xs text-neutral-300'>C</span>
        </div>
        <div className='flex flex-row items-center space-x-1'>
          <div className='w-3 h-3 rounded-full bg-yellow-400 outline outline-yellow-300'/>
          <span className='text-xs text-neutral-300'>JavaScript</span>
        </div>
        <div className='flex flex-row items-center space-x-1'>
          <div className='w-3 h-3 rounded-full bg-sky-500 outline outline-sky-400'/>
          <span className='text-xs text-neutral-300'>TypeScript</span>
        </div>
        <div className='flex flex-row items-center space-x-1'>
          <div className='w-3 h-3 rounded-full bg-red-700 outline outline-red-600'/>
          <span className='text-xs text-neutral-300'>Ruby</span>
        </div>
        <div className='flex flex-row items-center space-x-1'>
          <div className='w-3 h-3 rounded-full bg-amber-700 outline outline-amber-600'/>
          <span className='text-xs text-neutral-300'>Java</span>
        </div>
      </div>
    </div>
  )
}