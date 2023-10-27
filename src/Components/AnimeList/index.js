import fetchData from "@/Tools"
import AnimeItem from "../AnimeItem"
import Pagination from "./Pagination"

const AnimeList = async ({fetchUrl, withPagination = false, currentPage = 1}) => {
    const url = ! withPagination ? fetchUrl : `${fetchUrl}?page=${currentPage}`
    const animeLists = await fetchData(url)

    return (
        <>
            <div className="grid grid-cols-2 gap-3 md:gap-6 auto-rows-max md:grid-cols-6 sm:grid-cols-4">
                {animeLists?.data?.map(data => {
                    return (
                        <AnimeItem key={data.mal_id} id={data.mal_id} title={data.title} image={data.images.webp.image_url} />
                    )
                })}
            </div>

            {withPagination && <Pagination currentPage={currentPage} paginationData={animeLists?.pagination}/>}
        </>
    )
}

export default AnimeList