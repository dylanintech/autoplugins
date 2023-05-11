import Image from 'next/image'
import Buttons from './buttons'
import Plugins from './plugins/plugins'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">

        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <img src='https://media.discordapp.net/attachments/993733319386730541/1105874447057027223/Untitled_design.png?width=1000&height=1000' className='rounded-full w-20 h-20'></img>
            <h1 className='text-xl font-mono text-black'>autoplugins</h1>
          </div>
          <Buttons />
        </div>
        <Plugins />
        <p className='text-center text-black'>built with ❤️ by <a className='underline' href="https://twitter.com/dxlantxch" target='none'>dylan.</a></p>
    </main>
  )
}
