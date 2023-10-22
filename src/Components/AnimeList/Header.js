import Link from "next/link"

const Header = ({title, titleLink, hrefLink}) => {
    return (
        <div className="flex items-center justify-between py-4">
            <h2 className="text-xl font-bold md:text-2xl text-main-primary">
                {title}
            </h2>
            {
                hrefLink && titleLink 
                ? 
                    <Link className="font-semibold transition-all text-main-primary hover:text-main-accent" href={hrefLink}>
                        {titleLink}
                    </Link>
                : null
            }
        </div>
    )
}

export default Header