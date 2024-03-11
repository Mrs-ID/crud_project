import { NavLink } from "react-router-dom"
import { MdLocalPostOffice } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { FaHome } from "react-icons/fa";


const Navigate = () => {
    return <>
        <NavLink to='/todos'><LuListTodo /> Todos </NavLink>
        <NavLink to='/posts'><MdLocalPostOffice />Posts </NavLink>
        <NavLink to='/photos'><FaPhotoVideo /> Albums </NavLink>
        <NavLink to='/users'><FaRegUser /> Users </NavLink>
        <NavLink to='/'> <FaHome /> home </NavLink>

    </>
}
export default Navigate