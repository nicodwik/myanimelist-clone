const AnimeDetail = ({title, content}) => {
    return (
        <>
            <div className="block my-5 md:my-10">
                <h2 className="mb-2 font-bold md:text-xl text-md">{title}</h2>
                <p className="col-span-2 text-sm md:col-span-7 md:text-md">{content}</p>
            </div> 
        </>
    )
}

export default AnimeDetail