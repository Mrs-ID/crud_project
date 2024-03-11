import Axios from "axios"
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const UsersItem = ({ user, fetchUsers }) => {
    const [name, setName] = useState(user.name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [street, setStreet] = useState(user.street)
    const [city, setCity] = useState(user.city)
    const [phone, setPhone] = useState(user.phone)
    const [inputBox, setInputBox] = useState(false)

    const deleteUser = async () => {
        const { data: responseData } = await Axios.delete("http://localhost:2222/api/users", {
            data: { id: user._id }
        })
        fetchUsers()
    }

    const updateUser = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:2222/api/users", { id: user._id, name, username, email, street, city, phone })
        setInputBox(false)
        fetchUsers()
    }

    return <div className="item">
        <h3>{user.name}</h3>
        <div className="btn-item">
            <button disabled={inputBox} onClick={() => setInputBox(true)}><FaPenNib /></button>
            <button disabled={inputBox} onClick={deleteUser}><FaTrashAlt /></button>
        </div>
        {inputBox &&
            <div>
                <form onSubmit={updateUser}>
                    <input value={name} placeholder="name" onChange={(e) => setName(e.target.value)}></input>
                    <input value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
                    <input value={email} placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input value={street} placeholder="street" onChange={(e) => setStreet(e.target.value)}></input>
                    <input value={city} placeholder="city" onChange={(e) => setCity(e.target.value)}></input>
                    <input value={phone} placeholder="phone" onChange={(e) => setPhone(e.target.value)}></input>
                    <button type="submit" disabled={name === ""}>send</button>
                </form>
            </div>
        }
    </div>



}

export default UsersItem