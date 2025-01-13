import { Link } from "react-router-dom";

function PostCard({ url, post, deleteHandler }) {
    return (
        <div className="card">
            <img src={`${url}/${post.img}`} alt="Placeholder image" />
            <div className="card-body">
                <h6 className='card-title'><strong>{post.title}</strong></h6>
                <p className='card-text'>{post.content.slice(0, 80) + "..."}</p>
                <div>
                    {post.tags.map((curTag, index) => <span key={index} className='badge text-bg-dark me-2 mb-4'>{curTag}</span>)}
                </div>
                <div>
                    <button onClick={() => deleteHandler(post.id)} className='btn btn-outline-danger me-3'>Delete</button>
                    <Link to={`/posts/${post.id}`} className="btn my-btn">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard