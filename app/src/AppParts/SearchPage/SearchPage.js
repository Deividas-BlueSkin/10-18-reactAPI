import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function SearchPage() {
    const [searchParams] = useSearchParams()

    const phrase = searchParams.get('search')

    const [users, setUsers] = useState(null)
    const [posts, setPosts] = useState(null)
    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        const getUserData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users?q=${phrase}`)
            const apiData = await res.json()
            setUsers(apiData)
        }
        const getPostsData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${phrase}`)
            const apiData = await res.json()
            setPosts(apiData)
        }
        const getAlbumsData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums?q=${phrase}`)
            const apiData = await res.json()
            setAlbums(apiData)
        }

        getUserData()
        getPostsData()
        getAlbumsData()

    }, [phrase])


    const LoadingElement = !users && !posts && !albums && (
        <h2>Loading...</h2>
    )

    const UnqualifiedElement = (phrase === '' || ((users && posts && albums) && users.length === 0 && posts.length === 0 && albums.length === 0)) && (
        <h3>Search phrase is unqualified to peer into the data...</h3>
    )

    phrase && users && posts && albums && console.log(users, posts, albums)
    console.log(phrase)

    const UsersListElement = users && users.map((obj) => (
        <li key={obj.id}>
            <Link to={`/users/${obj.id}`}>
                {obj.name}

            </Link>
            {/* <span>{obj.posts.length}</span> */}

        </li>
    ))

    const PostsListElement = posts && posts.map((obj) => (
        <li key={obj.id}>
            <Link to={`/posts/${obj.id}`}>
                {obj.title}

            </Link>
            {/* <span>{obj.comments.length}</span> */}


        </li>
    ))

    const AlbumsListElement = albums && albums.map((obj) => (
        <li key={obj.id}>
            <Link to={`/albums/${obj.id}`}>
                {obj.title}

            </Link>
            {/* <Link to={`/users/${obj.userId}`}>
                {obj.user.name}

            </Link> */}

            {/* <span>{obj.photos.length}</span>

            <div>
                <img src={obj.photos[0].thumbnailUrl} alt="album thumbnail" />
            </div> */}


        </li>
    ))




    return (
        <div>
            {LoadingElement || UnqualifiedElement || (
                <>
                    <h2>Search Results:</h2>
                    <h3>Users</h3>
                    <ul>
                        {UsersListElement}
                    </ul>
                    <h3>Posts</h3>
                    <ul>
                        {PostsListElement}
                    </ul>
                    <h3>Albums</h3>
                    <ul>
                        {AlbumsListElement}
                    </ul>

                </>
            )}



        </div>
    )
}



// 9. Sukurti paieškos funkcionalumą navigacijos elemente:
// 9.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).
// 9.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).
// 9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
// 9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.

// Papildoma:
// 9.4. Search puslapyje turi būti paieškos forma, kuri veikia neperkraunant puslapio.
// 9.5. Search puslapyje sukurtoje paieškos formoje pridėti galimybė ieškoti pagal pasirinktą kategoriją: posts, users, comments, albums, photos.

// 10. Sukurti pagrindinį puslapį (index). Jame laisva forma turi būti atvaizduoti:
//   1.1. Įrašai (post).
//   1.2. Albumai.
//   1.3. Vartotojai.