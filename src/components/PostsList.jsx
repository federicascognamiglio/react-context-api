import { useContext, useEffect } from "react";
import axios from 'axios';
// Context
import GlobalContext from "../contexts/GlobalContext";
//Components
import PostCard from "./PostCard"

function PostsList() {

    const { getPosts, filter, postsList, setPostsList, apiUrl } = useContext(GlobalContext);

    // USE EFFECTS
    // Show Posts
    useEffect(() => getPosts(), [filter])

    // FUNCTIONS
    // Delete Function
    const handleDelete = (idToDelete) => {
        axios.delete(`${apiUrl}/posts/${idToDelete}`).then((resp) => {
            const filteredList = postsList.filter(curArticle => curArticle.id !== idToDelete)
            setPostsList(filteredList);
        })
    }

    return (
        <>
            {postsList.length !== 0 ? postsList.map((curPost, index) =>
                <div key={index} className="col-4 mb-3">
                    <PostCard
                        url={apiUrl}
                        post={curPost}
                        deleteHandler={handleDelete}
                    />
                </div>) : <p>Nessun Post Disponibile</p>}
        </>
    )
}

export default PostsList