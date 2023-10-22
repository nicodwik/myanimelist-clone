const AnimeDetail = ({title, content}) => {
    return (
        <>
            <div className="grid items-start grid-cols-3 gap-3 mb-10 md:grid-cols-8">
                <h2 className="font-bold md:text-xl text-md">{title}</h2>
                <p className="col-span-2 text-sm md:col-span-7 md:text-md">{content}</p>
            </div> 
        </>
    )
}

export default AnimeDetail