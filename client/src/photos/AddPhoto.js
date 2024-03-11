import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddPhoto=()=>{

    const [title,setTitle]=useState("")
    const [imageUrl,setImageUrl]=useState("")

    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:2222/api/photos", { title, imageUrl })
        navigate("/photos")
    }

    return <form onSubmit={submitForm}>
    <input value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
    <input value={imageUrl} placeholder="url" onChange={(e) => setImageUrl(e.target.value)} />
    <button type="submit" disabled={title === ""}>send</button>
</form> 

}
export default AddPhoto