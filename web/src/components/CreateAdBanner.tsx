import { MagnifyingGlassPlus } from 'phosphor-react'

export const CreateAdBanner = () => {
  return (
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
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  )
}
