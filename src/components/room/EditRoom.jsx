import React , { useEffect, useState }from 'react'
import { getRoomById, updateRoom } from '../utils/ApiFunctions'
import { Link } from 'react-router-dom'

const EditRoom = () => {
    const [room, setRoom] = useState({
        photo : null,
        roomType : " ",
        roomPrice : " "
    })

    const[imagePreview, setImagePreview] = useState("")
    const[successMessage, setSuccessMessage] = useState("")
    const[errorMessage, setErrorMessage] = useState("")

    const {roomId} =  useParams()

    const handleImageChange = (e) =>{
        const selectedImage = e.target.files[0]
        setRoom({...room, photo: selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }

    const handleInputChanges = (event) =>{
        const {name, value} = event.target
        setRoom({...room,[name]: value})
    }
    useEffect(() => {
        const fetchRoom = async () => {
            try{
                const roomData = await getRoomById(roomId)
                setRoom(roomData)
                setImagePreview(roomData.photo)
            }catch(error){
                console.error(error)
            }
        }
        fetchRoom()
    }, [roomId])

    const handleSubmit = async (event) =>{
        event.preventDefault()
        try{
            const response = await updateRoom(roomId, room)
            if(response.status === 200){
                setSuccessMessage("Room updated Successfully!")
                const updatedRoomData = await getRoomById(roomId)
                setRoom(updatedRoomData)
                setImagePreview(updatedRoomData.photo)
                setErrorMessage("")
            }else{
                setErrorMessage("Error updating room")
            }
        }catch(error){
            console.error(error)
            setErrorMessage(error.message)

        }
    }
    return (
        <>
          <div className='container, mt-5 mb-5'>
            <h3 className='text-center mb-5 mt-5'>Edit Room</h3>
            <div className='row justify-content-center'>
                <div className='col-md-8 col-lg-6'>
    
                    {successMessage && (
                        <div className='alert alert-success' role='alert'>{successMessage}</div>
                    )}
    
                    {errorMessage && (
                        <div className='alert alert-danger' role='alert'>{errorMessage}</div>
                    )}
    
                    <form onSubmit = {handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor = "roomType" className='form-lable' hotel-color>
                                Room Type
                            </label>
                            <input 
                            type='text'
                            className='form-control'
                            id='roomType'
                            name='roomType'
                            value={room.roomType}
                            onChange={handleInputChanges}
                            />
                        </div>
    
                        <div className='mb-3'>
                            <label htmlFor = "roomPrice" className='form-lable' hotel-color>
                                Room Price
                            </label>
                            <input
                                className='form-control'
                                required
                                id='roomPrice'
                                type='text'
                                name='roomPrice'
                                value={newRoom.roomPrice}
                                onChange={handleRoomInputChange}
                            />
    
                           
                        </div>
    
                        <div className='mb-3'>
                            <label htmlFor = "photo" className='form-lable hotel-color'>
                               
                                Photo
                            </label>
                            <input
                            required
                            type='file'
                            id='photo'
                            name='photo'
                            className='form-control'
                            onChange={handleImageChange}
                            />
                            {imagePreview && (
                                <img scr={`data:image/jpeg;base64,${imagePreview}`}
                                alt='Room Preview'
                                style={{maxWidth:"400px", maxHeight:"400px"}}
                                className='mb-3' />
                            )}
                            
                        </div>
                        <div className='d-grid d-md-flex mt-2'>
                           <Link to={"/existing-rooms"} className='btn btn-outline-info ml-5'>
                            back
                           </Link>
                           <button type='submit' className='btn btn-outline-warning'>
                            Edit Room
                           </button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </>
      )
    }

export default EditRoom
