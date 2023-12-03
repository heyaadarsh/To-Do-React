import React from 'react'
import '../index.css'
import {AiFillEdit} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"
import axios from "axios"
import { baseURL } from '../utils/constant'

const ToDo = ({text, id, setUpdateUI, setShowPopup, setPopupContent}) => {

    const deleteToDo = () => {
        axios.delete(`${baseURL}/delete/${id}`).then(res => {
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);
        })
      }

      const updateToDo = () => {
        setPopupContent({text, id});
        setShowPopup(true);
      }

    return (
        <>
            <div className='ToDo'>
                {text}
                <div className='icons'>
                    {/* <AiFillEdit className='icon' onClick={setShowPopup} /> */}
                    <RxCross1 className='icon' onClick={deleteToDo} />
                </div>
            </div>
        </>
    )
}

export default ToDo