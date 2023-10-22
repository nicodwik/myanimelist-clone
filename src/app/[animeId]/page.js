import dynamic from "next/dynamic"
import Loading from "../loading"

const LazyLoadDetail = dynamic(() => import('./detail'), {
    loading: () => <Loading/>
})

const Page = ({params}) => {
    const animeId = params?.animeId
    
    return (
        <>
            <div className="p-5 md:p-24">
                <LazyLoadDetail fetchUrl={`anime/${animeId}`} />
            </div>
        </>
    )
}

export default Page