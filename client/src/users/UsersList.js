import { useEffect, useState } from "react"
import Axios from 'axios'
import { NavLink } from "react-router-dom"
import UsersItem from "./UsersItem"
import { FaPlusCircle } from "react-icons/fa";


const UsersList = () => {
    const [users, setUsers] = useState([])
    const [usersfilter, setUsersFilter] = useState(users)
    const [search, setSearch] = useState("name")
    const fetchUsers = async () => {
        const { data } = await Axios.get("http://localhost:2222/api/users")
        setUsers(data)
        setUsersFilter(data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const filterUsers = (e) => {
        setUsersFilter(users.filter(user => {
            console.log(user.search);
            return user[search].includes(e.target.value)

        }))
    }
    if (users.length === 0)
        return <>
            <NavLink className="addUser" to="/users/add"><FaPlusCircle /></NavLink>
            <h1>Loading</h1>
        </>
    return <>
        <NavLink className="addUser" to="/users/add"><FaPlusCircle /></NavLink>
        <input className="search" type="search" placeholder="search" onChange={(e) => filterUsers(e)}></input>
        <select onChange={(e) => { setSearch(e.target.value) }}>
            <option>name</option>
            <option>email</option>
            <option>phone</option>
            <option>username</option>
        </select>
        <div className="user-list">
            {usersfilter.map((user) => {
                return <UsersItem fetchUsers={fetchUsers} user={user} />
            })}
        </div>
    </>
}
export default UsersList