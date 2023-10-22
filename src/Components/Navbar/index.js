import Link from "next/link"
import SearchInput from "./SearchInput"

const Navbar = () => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME

    return (
        <div>
            <header className="p-4 md:flex md:items-center md:justify-between bg-main-accent">
                <Link href={'/'}>
                    <h1 className="my-3 text-3xl font-bold md:my-0 text-main-dark">{appName}</h1>
                </Link>
                <SearchInput />
            </header>
        </div>
    )
}

export default Navbar