import Header from "@/Components/AnimeList/Header"
import dynamic from "next/dynamic"
import Loading from "../loading"
import AnimeList from "@/Components/AnimeList"

const LazyLoadAnimeList = dynamic(() => import("@/Components/AnimeList"), {
  loading: () => <Loading/>
})

const Page = ({searchParams}) => {
    const currentPage = searchParams?.page ?? 1

    return (
        <div>
            <main className="min-h-screen p-3 md:p-24 ">
                <Header title={`Kumpulan Anime Populer #${currentPage}`} />
                <LazyLoadAnimeList fetchUrl={`top/anime`} withPagination currentPage={currentPage}/>
            </main>
        </div>
    )
}

export default Page