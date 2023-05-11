import Image from 'next/image'
import Buttons from './buttons'
import Plugins from './plugins/plugins'
import Board from './plugins/board'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-white">

        <div className='flex flex-row items-center justify-between my-2 w-full'>
          <div className='flex flex-row items-center gap-1'>
            <img src='https://media.discordapp.net/attachments/993733319386730541/1105874447057027223/Untitled_design.png?width=1000&height=1000' className='border-2 rounded-full w-10 h-10'></img>
            <h1 className='text-xl font-mono text-black'>autoplugins</h1>
          </div>
          <Buttons />
        </div>
        <Plugins />
        <Board />
        <p className='text-center text-black my-2 text-right w-full'>built with ❤️ by <a className='underline' href="https://twitter.com/dxlantxch" target='none'>dylan</a>.</p>
    </main>
  )
}
