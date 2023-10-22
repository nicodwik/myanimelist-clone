import Image from "next/image"
import Link from "next/link"

const AnimeItem = ({id, image, title}) => {
    return (
        <div className="h-full transition-all rounded-md hover:scale-105 bg-main-secondary">
            <Link href={`/${id}`}>
                <Image
                    className="object-cover w-full h-96 rounded-t-md"
                    src={image} 
                    width={250} 
                    height={250} 
                    alt={title}
                />
                <h3 className="table-cell p-3 font-bold text-main-primary">{title}</h3>
            </Link>
        </div>
    )
}

export default AnimeItem