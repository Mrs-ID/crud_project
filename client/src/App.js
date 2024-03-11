import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './common/Layout';
import UsersList from './users/UsersList'
import AddUser from './users/AddUser'
import TodosList from './todos/TodosList'
import AddTodo from './todos/AddTodo'
import PostsList from './posts/PostsList'
import AddPost from './posts/AddPost'
import PhotosList from './photos/PhotosList'
import AddPhoto from './photos/AddPhoto'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' element={<Layout />}>
            <Route index element={<h1>home page</h1>} />
            <Route path='/users' element={<UsersList />} />
            <Route path='/users/add' element={<AddUser />} />
            <Route path='/todos' element={<TodosList/>} />
            <Route path='/todos/add' element={<AddTodo />} />
            <Route path='/posts' element={<PostsList />} />
            <Route path='/posts/add' element={<AddPost />} />
            <Route path='/photos' element={<PhotosList />} />
            <Route path='/photos/add' element={<AddPhoto />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
