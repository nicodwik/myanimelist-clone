import dynamic from "next/dynamic"
import Loading from "../loading"

const LazyLoadDetail = dynamic(() => import('./detail'), {
    loading: () => <Loading/>
})

const Page = ({params}) => {
    const animeId = params?.animeId
    
    return (
        <>
            {/* <div className="p-5 md:px-40 md:py-16"> */}
            <div className="container p-5 mx-auto">
                <LazyLoadDetail fetchUrl={`anime/${animeId}`} />
            </div>
        </>
    )
}

export default Page