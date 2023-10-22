"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useRef } from "react"

const SearchInput = () => {
    const searchRef = useRef()
    const searchRouter = useRouter()
    const searchParams = useSearchParams()

    const handleSearch = (event) => {
        event.preventDefault()
        const searchInput = searchRef?.current?.value

        if (searchInput) {
            searchRouter.push(`/search?q=${searchInput}`)
        }
    }

    const currentSearchParams = searchParams.get('q') ?? ''

    return (
        <div className="relative">
            <input 
                type="text"
                placeholder="Cari Animek"
                className="w-full p-3 rounded-xl"
                // defaultValue={currentSearchParams}
                ref={searchRef}
            />
            <button 
                className="absolute top-3 end-3"
                onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default SearchInput