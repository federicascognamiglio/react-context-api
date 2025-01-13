import { useState } from 'react'
import { Link } from 'react-router-dom'
// Components
import PostCard from '../../components/PostCard'

// API Url
const apiUrl = import.meta.env.VITE_API_URL;

function PostsPage() {

    // VARIABILI DI STATO
    // Filter 
    const [filter, setFilter] = useState("all");

    // Delete Function
    const handleDelete = (idToDelete) => {
        axios.delete(`${apiUrl}/posts/${idToDelete}`).then((resp) => {
            const filteredList = postsList.filter(curArticle => curArticle.id !== idToDelete)
            setPostsList(filteredList);
        })
    }

    return (
        <>
            {/* Header */}
            <header>
                <h1 className='text-center pt-4 my-title'>RECIPES</h1>
            </header>
            {/* Main */}
            <main className='container'>
                {/* Posts */}
                <section className='mt-5' >
                    <div className='d-flex justify-content-between mb-4'>
                        <select onChange={(event) => setFilter(event.target.value)} value={filter} name="filter" id="filter" className='form-select w-25'>
                            <option value="all">All Posts</option>
                            {tagsList.map((curTag, index) => <option key={index} value={curTag}>{curTag}</option>)}
                        </select>
                        <div className='d-flex'>
                        <Link className='btn my-btn' to="/posts/create">Add Recipe</Link>
                        </div>
                    </div>
                    <div className="row">
                        {postsList.length !== 0 ? postsList.map((curPost, index) =>
                            <div key={index} className="col-4 mb-3">
                                <PostCard
                                    url={apiUrl}
                                    post={curPost}
                                    deleteHandler={handleDelete}
                                />
                            </div>) : <p>Nessun Post Disponibile</p>}
                    </div>
                </section >
            </main>
        </>
    )
}

export default PostsPage