import './styles/main.css'
import logo from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    // title and main message
    <div className="max-w-7xl mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui
      </h1>

      {/* game list */}
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm mt-4">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">Dota 2</strong>
            <span className="text-zinc-300 text-sm mt-4">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="game-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              Counter Strike GO
            </strong>
            <span className="text-zinc-300 text-sm mt-4">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="game-4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">Apex</strong>
            <span className="text-zinc-300 text-sm mt-4">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="game-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">Fortnite</strong>
            <span className="text-zinc-300 text-sm mt-4">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="game-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              World Of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm mt-4">4 anúncios</span>
          </div>
        </a>
      </div>

      {/* new ad box */}
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex flex-row justify-between items-center">
          <div>
            <strong className="block text-white font-black text-2xl">
              Não encontrou seu DUO?
            </strong>
            <span className="text-zinc-400 block">
              Publique seu anúncio para encontrar novos players!
            </span>
          </div>
          <button className="px-4 py-3 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
