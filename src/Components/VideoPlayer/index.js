"use client"

import { PlayCircle } from "@phosphor-icons/react"
import Image from "next/image"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({videoData}) => {
    const [isPlayed, setIsPlayed] = useState(false)

    const handleIsPlayed = () => {
        setIsPlayed(true)
    }

    const Thumbnail = () => {
        return (
            <div className="relative rounded-3xl">
                <div className="flex justify-center">
                    <Image 
                        className="object-cover w-full h-[300px] md:h-[700px] rounded-3xl"
                        width={500}
                        height={500}
                        alt={videoData?.images?.image_url}
                        src={videoData?.images?.maximum_image_url} 
                        />
                </div>

                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <button onClick={handleIsPlayed} className="p-2 transition-all bg-opacity-50 bg-main-accent rounded-3xl hover:bg-opacity-70">
                        <PlayCircle size={64} className="text-main-dark" />
                    </button>
                </div>
                
            </div>
        )
    }

    const opts = {
        playerVars : {
            autoplay: 1
        }
    }

    return (
        <div className="grid grid-cols-1 p-5 my-10 md:p-16 bg-main-secondary rounded-3xl">
            <span className="mb-2 text-lg font-bold md:text-2xl md:mb-5">
                📽️ Watch Trailer 📽️
            </span>
            {isPlayed ? <YouTube iframeClassName="w-full h-[300px] md:h-[700px]" opts={opts} videoId={videoData?.youtube_id} /> : <Thumbnail/>}
        </div>
    )
}

export default VideoPlayer