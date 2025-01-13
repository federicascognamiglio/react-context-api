import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
// Context
import GlobalContext from '../../contexts/GlobalContext';
// Components
import PostsList from "../../components/PostsList"

function PostsPage() {
    const { getTags, tagsList, filter, setFilter } = useContext(GlobalContext);

    // Show Tags
    useEffect(() => getTags(), [])

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
                        <PostsList />
                    </div>
                </section >
            </main>
        </>
    )
}

export default PostsPage