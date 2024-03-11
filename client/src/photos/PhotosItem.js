
import Axios from "axios"
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const PhotosItem = ({ fetchPhotos, photo }) => {

    const [title, setTitle] = useState(photo.title)
    const [imageUrl, setImageUrl] = useState(photo.imageUrl)
    const [inputBox, setInputBox] = useState(false)

    const deletePhoto = async () => {
        const { data: responseData } = await Axios.delete("http://localhost:2222/api/photos", {
            data: { id: photo._id }
        })
        fetchPhotos()
    }
    const updatePhoto = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:2222/api/photos", { id: photo._id, title, imageUrl })
        setInputBox(false)
        fetchPhotos()
    }

    return <div className="item">
        <h1>{photo.title}</h1>

        <img style={{ "width": "100px" }} src={`http://localhost:2222/${photo.imageUrl}`} />

        <div className="btn-item">
            <button disabled={inputBox} onClick={() => setInputBox(true)}><FaPenNib />
            </button>
            <button disabled={inputBox} onClick={deletePhoto}><FaTrashAlt /></button>
        </div>

        {inputBox &&
            <div>
                <form onSubmit={updatePhoto}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
                    <button type="submit" disabled={title === ""}>send</button>
                </form>
            </div>
        }


    </div>
}
export default PhotosItem