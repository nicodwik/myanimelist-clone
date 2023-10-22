const fetchData = async (targetUrl, cache = 'no-store') => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}` + targetUrl, { cache })
    const json = await response.json()

    return json
}

export default fetchData