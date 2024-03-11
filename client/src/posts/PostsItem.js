import Axios from "axios"
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const PostsItem = ({ post, fetchPosts }) => {
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)
    const [inputBox, setInputBox] = useState(false)

    const deletePost = async () => {
        const { data: responseData } = await Axios.delete("http://localhost:2222/api/posts", {
            data: { id: post._id }
        })
        fetchPosts()
    }

    const updatePost = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:2222/api/posts", { id: post._id, title, body })
        setInputBox(false)
        fetchPosts()
    }
    return <div className="item">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <div className="btn-item">
            <button disabled={inputBox} onClick={() => setInputBox(true)}><FaPenNib /></button>
            <button disabled={inputBox} onClick={deletePost}><FaTrashAlt /></button>
        </div>
        {inputBox &&
            <div>
                <form onSubmit={updatePost}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <input value={body} onChange={(e) => setBody(e.target.value)}></input>
                    <button type="submit" disabled={title === ""}>send</button>
                </form>
            </div>
        }
    </div>
}
export default PostsItem