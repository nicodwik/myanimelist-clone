const WatchTrailer = ({youtubeUrl}) => {
    return (
        <>
            <a href={youtubeUrl} 
                className="w-full px-3 py-2 mt-5 text-sm font-bold text-center transition-all border-2 rounded-lg md:w-1/2 hover:bg-main-primary hover:text-main-dark border-main-primary"
                target="_blank">
                ▶️ Watch Trailer
            </a>
        </>
    )
}

export default WatchTrailer