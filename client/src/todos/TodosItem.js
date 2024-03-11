import Axios from "axios"
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const TodosItem = ({ todo, fetchTodos }) => {
    const [title, setTitle] = useState(todo.title)
    const [tags, setTags] = useState(todo.tags)
    const [inputBox, setInputBox] = useState(false)

    const deleteTodo = async () => {
        const { data: responseData } = await Axios.delete("http://localhost:2222/api/todos", {
            data: { id: todo._id }
        })
        fetchTodos()
    }
    const updateTodo = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:2222/api/todos", { id: todo._id, title, tags })
        setInputBox(false)
        fetchTodos()
    }
    const updateCompleted = async () => {
        const { data } = await Axios.put(`http://localhost:2222/api/todos/${todo._id}`)
        fetchTodos()
    }
    return <div className="item">
        <div className="date">
            <h6>{todo.createdAt}</h6>
        </div>
        <h3>{todo.title}</h3>
        <div className="btn-item">
            <button disabled={inputBox} onClick={() => setInputBox(true)}><FaPenNib /></button>
            <button disabled={inputBox} onClick={deleteTodo}><FaTrashAlt /></button>
            <button style={{ backgroundColor: todo.completed ? "pink" : "grey" }} onClick={updateCompleted}>✔ completed</button>
        </div>
        {inputBox &&
            <div>
                <form onSubmit={updateTodo}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <input value={tags} onChange={(e) => setTags((e.target.value).split(","))}></input>
                    <button type="submit" disabled={title === ""}>send</button>
                </form>
            </div>  
        }
    </div>
}
export default TodosItem