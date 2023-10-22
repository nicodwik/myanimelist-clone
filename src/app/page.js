import Header from "@/Components/AnimeList/Header"
import dynamic from "next/dynamic"
import Loading from "./loading"

const LazyLoadAnimeList = dynamic(() => import("../Components/AnimeList"), {
  loading: () => <Loading/>
})

const Page = async () => {
  return (
    <main className="min-h-screen p-4 md:p-24">
      <Header title="Anime Populer" titleLink="Lihat Semua" hrefLink="/popular" />
      <LazyLoadAnimeList fetchUrl={'top/anime?limit=12'}/>
    </main>
  )
}

export default Page