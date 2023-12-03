import { useEffect, useState } from 'react'
import './index.css'
import ToDo from './Components/ToDo'
import axios from "axios"
import { baseURL } from './utils/constant'
import PopUp from './Components/PopUp'

function App() {
  // const [count, setCount] = useState(0)
  const [toDos, setToDos] = useState([])
  const [input, setInput] = useState("")
  const [updateUI, setUpdateUI] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  let [popupContent, setPopupContent] = useState({})

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI])

  

  const saveToDo = () => {
    axios.post(`${baseURL}/save`, {toDo: input}).then(res => {
      console.log(res.data)
      setUpdateUI((prevState) => !prevState)
      setInput("")
      setPopupContent = {setPopupContent}
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <main>
        <div>
          <header className='text-center mt-10'>
            <h1 className='text-white text-3xl pt-4 font-medium mb-10 sm:text-5xl'>TASK MANAGER</h1>
          </header>
        </div>
        <div className='input_holder flex justify-evenly mt-8' >
          <input value={input} onChange={(e) => {setInput(e.target.value)}} type='text' placeholder='Add Your Task Here' className='w-full outline-none border-b-2 border-blue-50 bg-slate-600 text-white p-3 font-medium mr-2 rounded text-sm'></input>
          <button onClick={saveToDo} className='outline-none py-2 px-4 font-bold bg-white rounded'>ADD</button>
        </div>
        <h1 id='ToDoH1' className='mt-12 text-3xl font-light text-white border-b-2 border-blue-50'>Tasks</h1>
        <div className='list'>
          {toDos.map(el => <ToDo key={el._id} text={el.toDo} id={el._id} setUpdateUI={setUpdateUI} setShowPopup={setShowPopup} />)}
        </div>

        {showPopup && <PopUp setShowPopup={setShowPopup} popupContent={popupContent} />}

      </main>
    </>
  )
}

export default App
