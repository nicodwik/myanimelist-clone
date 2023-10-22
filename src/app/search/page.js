import Header from "@/Components/AnimeList/Header"
import AnimeList from "@/Components/AnimeList"
import dynamic from "next/dynamic"
import Loading from "./loading"

const LazyLoadAnimeList = dynamic(() => import("@/Components/AnimeList"), {
    loading: () => <Loading/>
})

const Page = ({searchParams}) => {
    const searchInput = searchParams?.q
    
    return (
        <main className="min-h-screen p-4 md:p-24">
            <Header title={`Pencarian untuk ${searchInput} ...`} />
            <LazyLoadAnimeList fetchUrl={`anime?q=${searchInput}`}/>
        </main>
    )
}

export default Page