import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleUserPage() {
    const { id } = useParams()

    const [data, setData] = useState(null)


    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await res.json()

            setData(data)
        }

        getData()
    }, [id])

    const Element = data ? (
        <div>
            <div>{data.name}</div>
            <div>{data.username}</div>
            <div>{data.address.city}</div>
            <div>{data.company.name}</div>
        </div>
    ) : (
        <h3>Loading...</h3>
    )

    return (
        <>
            <h2>Single User</h2>
            {Element}

        </>
    )
}