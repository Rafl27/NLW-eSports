import './styles/main.css'
import logo from './assets/Logo.svg'
import { useState, useEffect } from 'react'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  //<> é um generic, é como se fosse um parametro, mas só de tipagem, exclusivo do TS, por isso é diferente
  const [games, setGames] = useState<Game[]>([])
  useEffect(() => {
    fetch('http://localhost:3333/games/')
      .then((response) => response.json())
      .then((data) => {
        setGames(data)
      })
  }, [])

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
        {games.map((game) => {
          return (
            <GameBanner
            key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      {/* new ad box */}
      <CreateAdBanner />
    </div>
  )
}

export default App
