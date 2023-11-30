import React, { useState } from 'react'
import '../index.css'
import {RxCross1} from "react-icons/rx"

const PopUp = ({setShowPopup, popupContent}) => {
    const[input, setInput] = useState(popupContent.text);
  return (
    <div className='popup'>
        <RxCross1 className='cross-icon' onClick={() => setShowPopup(false)} />
        <h1>Update Task Name</h1>

        <div className='input_popup_holder'>
            <input value={input} onChange={(e) => {setInput(e.target.value)}} type='text' placeholder='Update Task Name'
            className='updateInput'
            />
            <button>UPDATE</button>
        </div>
    </div>


  )
}

export default PopUp