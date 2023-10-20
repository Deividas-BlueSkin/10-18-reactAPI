import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SinglePostPage() {
    const { id } = useParams()

    const [data, setData] = useState(null)


    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}?_embed=comments&_expand=user`)
            const data = await res.json()

            setData(data)
        }

        getData()
    }, [id])

    const Element = data ? (
        <div>
            <div>
                {data.title}
            </div>
            <p>{data.body}</p>
        </div>
    ) : (
        <h3>Loading...</h3>
    )

    return (
        <>
            <h2>Single Post</h2>
            {Element}

        </>
    )
}