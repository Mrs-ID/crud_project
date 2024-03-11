import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

const AddTodo = () => {
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState([])
    
    const navigate = useNavigate()
    
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:2222/api/todos", { title, tags })
        navigate("/todos")
    }
    return <>
        <form onSubmit={submitForm}>
            <input value={title} placeholder="title" required={true} onChange={(e) => setTitle(e.target.value)}></input>
            <input value={tags} placeholder="tags" onChange={(e) => setTags((e.target.value).split(","))}></input>
            <button type="submit" disabled={title === ""}>send</button>
        </form>
    </>

}
export default AddTodo