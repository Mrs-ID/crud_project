import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import PostsItem from './PostsItem';

const PostsList = () => {
    const [posts, setPosts] = useState([])
    const [postsFilter, setPostsFilter] = useState(posts)

    const fetchPosts = async () => {
        const { data } = await Axios.get('http://localhost:2222/api/posts')
        setPosts(data)
        setPostsFilter(data)
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    const filterPosts = (e) => {
        const newPosts = posts.filter(p => p.title.includes(e.target.value) || p.body.includes(e.target.value))
        setPostsFilter(newPosts)
    }
    if (posts.length === 0)
        return <> <h1>Loading...</h1>
            <NavLink to='/posts/add'><FaPlusCircle /></NavLink>
        </>
    return <>
        <NavLink to='/posts/add'><FaPlusCircle /></NavLink>
        <input type="search" placeholder="search" onChange={(e) => filterPosts(e)} />

        {postsFilter.map(post => {
            return <PostsItem post={post} fetchPosts={fetchPosts} />
        })}
    </>
}
export default PostsList