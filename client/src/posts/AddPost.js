import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddPosts = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:2222/api/posts", { title, body })
        navigate("/posts")
    }
    return <form onSubmit={submitForm}>
        <input value={title} placeholder="title" required={true} onChange={(e) => setTitle(e.target.value)} />
        <input value={body} placeholder="body" onChange={(e) => setBody(e.target.value)} />
        <button type="submit" disabled={title === ""}>send</button>
    </form>
    
}
export default AddPosts