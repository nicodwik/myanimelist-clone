"use client"

import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const options = {
        width: '300',
        height: '200'
    }

    return (
        <div className="fixed right-3 bottom-3">
            <YouTube videoId={youtubeId} opts={options} />
        </div>  
    )
   
}

export default VideoPlayer