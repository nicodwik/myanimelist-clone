import AnimeDetail from "@/Components/AnimeDetail"
import BreadCrumb from "@/Components/Breadcrumb"
import VideoPlayer from "@/Components/VideoPlayer"
import fetchData from "@/Tools"
import Image from "next/image"
import WatchTrailer from "./watch-trailer"

const Detail = async ({fetchUrl}) => {
    const response = await fetchData(fetchUrl)
    const anime = response?.data

    console.log(anime)

    return (
        <>
            <BreadCrumb array={[{'title': anime?.title}]} />
            
            <h1 className="mb-8 text-3xl font-bold">💥 {anime?.title}
                <span className="font-light md:ms-5 ms-2">({anime?.title_japanese}) 💥</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
                
                <div className="grid">
                    <Image 
                        className="w-full transition-all rounded-3xl hover:shadow-lg hover:shadow-main-primary" 
                        src={anime?.images?.webp?.large_image_url} 
                        alt={anime?.images?.jpg?.large_image_url}
                        width={250} 
                        height={250} 
                    />
                    <WatchTrailer youtubeUrl={anime?.trailer?.url} />
                </div>
               
                
                <div className="px-5 mt-5 md:mt-0 md:px-10 md:col-span-2 rounded-3xl bg-main-secondary">
                    <AnimeDetail title={'Title 📑 '} content={`${anime?.title} `} />
                    <AnimeDetail title={'Genre 💫'} content={anime?.genres?.map(({ name }) => name).join(', ')} />
                    <AnimeDetail title={'Episodes 📓'} content={anime?.episodes} />
                    <AnimeDetail title={'Year 📦'} content={anime?.year} />
                    <AnimeDetail title={'Rating 🌟'} content={anime?.rating} />
                    <AnimeDetail title={'Score 🏚️'} content={`${anime?.score}`} />
                </div>
            </div>

            <div className="grid grid-cols-1 mt-5 md:mt-10">
                <div className="px-5 md:px-10 rounded-3xl bg-main-secondary">
                    <AnimeDetail title={'Synopsis 🗒️'} content={anime?.synopsis} />
                </div>
            </div>
        </>
    )
}

export default Detail