import { FaPlusCircle } from "react-icons/fa";
import Axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import PhotosItem from "./PhotosItem"

const PhotosList = () => {

    const [photos, setPhotos] = useState([])
    const [photosFilter, setPhotosFilter] = useState(photos)

    const fetchPhotos = async () => {
        const { data } = await Axios.get("http://localhost:2222/api/photos")
        setPhotos(data)
        setPhotosFilter(data)
    }
    useEffect(() => {
        fetchPhotos()
    }, [])

    const filterPhotos = (e) => {
        setPhotosFilter(photos.filter(photo => {
            return photo.title.includes(e.target.value)
        }))
    }
    if (photos.length === 0)
        return <>
            <NavLink to="/photos/add"><FaPlusCircle /></NavLink>
            <h1>Loading</h1>
        </>
    return <>
        <NavLink to="/photos/add"><FaPlusCircle /></NavLink>
        <input className="search" type="search" placeholder="search" onChange={(e) => filterPhotos(e)}></input>
        <div className="photos-list">

            {photosFilter.map(p => <PhotosItem fetchPhotos={fetchPhotos} photo={p} />)}
        </div>
    </>

}
export default PhotosList