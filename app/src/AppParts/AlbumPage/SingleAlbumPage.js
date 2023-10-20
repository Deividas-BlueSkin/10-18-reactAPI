import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleAlbumPage() {
    const { id } = useParams()

    const [data, setData] = useState(null)


    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/?_embed=photos`)
            const data = await res.json()

            setData(data)
        }

        getData()
    }, [id])

    const Element = data ? (
        <div>
            <div>{data.title}</div>
            <img
                src={data.photos[Math.floor(Math.random() * data.photos.length)].url}
                alt="album photo"
            />
        </div>
    ) : (
        <h3>Loading...</h3>
    )

    return (
        <>
            <h2>Single Album</h2>
            {Element}

        </>
    )
}