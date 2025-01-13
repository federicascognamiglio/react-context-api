import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function SinglePostPage() {
    // Post
    const [post, setPost] = useState(null);
    // Id
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${apiUrl}/posts/${id}`)
        .then((resp) => { setPost(resp.data) })
        .catch((err) => {err.status === 404 && (navigate("/not-found"))})
    }, [id])

    return (
        <section className="container d-flex justify-content-center pt-5">
            {post && (
                <>
                <div className="card w-50 mt-4">
                    <img src={`${apiUrl}/${post.img}`} alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{post.title}</h3>
                        <p className="card-text">{post.content}</p>
                        <div>
                            {post.tags.map((curTag, index) => <span key={index} className="badge text-bg-dark me-2 mb-4">{curTag}</span>)}
                        </div>
                        <div>
                        <a onClick={() => navigate(-1)} className="btn my-btn-outline me-3">Back</a>
                        <Link className="btn my-btn" to="/posts">Recipes</Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between position-absolute top-50 start-50 translate-middle w-75">
                    <Link to={`/posts/${post.id -1}`} className="btn my-btn">&lt;</Link>
                    <Link to={`/posts/${post.id +1}`} className="btn my-btn">&gt;</Link>
                </div>
                </>
            )}
        </section>
    )
}

export default SinglePostPage