import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


const AddUser = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")

    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:2222/api/users", { name, username, email, phone })
        navigate("/users")
    }


    return <>
        <form onSubmit={submitForm}>
            <input value={name} placeholder="name" onChange={(e) => setName(e.target.value)}></input>
            <input value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
            <input value={email} placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <input value={street} placeholder="street" onChange={(e) => setStreet(e.target.value)}></input>
            <input value={city} placeholder="city" onChange={(e) => setCity(e.target.value)}></input>
            <input value={phone} placeholder="phone" onChange={(e) => setPhone(e.target.value)}></input>
            <button type="submit" disabled={name === "" || phone === ""}>send</button>
        </form>
    </>
}
export default AddUser