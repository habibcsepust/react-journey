import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import './App.css'
import BasicInfo from './Component/JsonHandle/BasicInfo.jsx';


function App() {
  //const [count, setCount] = useState(0)
  const strDate = new Date();

  const dateStyle = {
  fontSize: '30px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  color: '#333',
  backgroundColor:'purple'
}

  return (
    <>
      <h1 style={{backgroundColor: 'red', color:'white', fontSize:'50px'}}>Hello React</h1>
      <h3 style={dateStyle}>{"Today is: "+ strDate.getDate()+"/"+(strDate.getMonth()+1)+"/"+strDate.getFullYear()}</h3>
      <h4 className='timeStyle'>{"Time is: "+ strDate.getHours()+" hours "+(strDate.getMinutes())+" Minutes "+strDate.getSeconds()+" Seconds"}</h4>
       <span className="nameStyle">
        My Name is: Habibur Rahman
      </span>
      <BasicInfo />
    </>
  )
}

export default App
