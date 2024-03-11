import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Axios from 'axios'
import TodosItem from "./TodosItem"
import { FaPlusCircle } from "react-icons/fa";


const TodosList = () => {
    const [todos, setTodos] = useState([])
    const [todosFilter, setTodosFilter] = useState(todos)

    const fetchTodos = async () => {
        const { data } = await Axios.get("http://localhost:2222/api/todos")
        setTodos(data)
        setTodosFilter(data)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const filterTodos = (e) => {
        setTodosFilter(todos.filter(todo => {
            return todo.title.includes(e.target.value)
        }))
    }
    if (todos.length === 0)
        return <>
            <NavLink className="addTodo" to="/todos/add"><FaPlusCircle /></NavLink>
            <h1>Loading</h1>
        </>
    return <>
        <NavLink className="addTodo" to="/todos/add"><FaPlusCircle /></NavLink>
        <input className="search" type="search" placeholder="search" onChange={(e) => filterTodos(e)}></input>
        <div className="todos-list">
            {todosFilter.map((todo) => {
                return <TodosItem fetchTodos={fetchTodos} todo={todo}
                />
            })}
        </div>
    </>
}
export default TodosList