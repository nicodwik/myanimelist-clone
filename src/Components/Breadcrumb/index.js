import Link from "next/link"

const BreadCrumb = ({array}) => {
    return (
        <>
            <div className="flex items-center justify-start mb-10">
                <Link className="text-xs font-bold md:text-lg" href={'/'} >Home</Link>
                {
                    array?.map(item => {
                        return (
                            <>
                                <span className="px-2 text-xs md:px-3"> ➡️ </span>
                                <p className="text-xs md:text-md">{item?.title}</p>
                                {/* <Link href={item.link}>{item.title}</Link> */}
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BreadCrumb