import Link from "next/link"

const Pagination = ({currentPage, paginationData}) => {
    return (
        <>
            <div className="flex items-center justify-center my-10 text-main-primary">
                {
                    currentPage > 1 && <Link className="transition-all hover:text-main-accent hover:font-bold" href={`?page=${parseInt(currentPage) - 1}`}>
                        {'<'} Prev 
                    </Link>
                }
                <p className="mx-5">
                    <span className="font-bold">
                        {currentPage}
                    </span> 
                        &nbsp; of &nbsp;
                    <span className="font-bold">
                        {paginationData?.last_visible_page}
                    </span> 
                </p>
                <Link className="transition-all hover:text-main-accent hover:font-bold" href={`?page=${parseInt(currentPage) + 1}`}>
                    Next {'>'}
                </Link>
            </div>
        </>
    )
}

export default Pagination