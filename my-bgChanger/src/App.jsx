import { useState } from 'react'
import ButtonBtn from './component/Button'

function App() {
  const [color,setColor]=useState('pink')
 return (
  <div className="  text-xl font-semibold w-full h-screen" 
  style={{backgroundColor:color}}>
    <div className='fixed  w-5/6 h-1/3 left-28 bottom-12 flex justify-center pt-20 flex-wrap gap-10 '  >

     <ButtonBtn colortype="red" setColor={setColor} ></ButtonBtn>
     <ButtonBtn  colortype="blue" setColor={setColor}></ButtonBtn>
     <ButtonBtn  colortype="green" setColor={setColor}></ButtonBtn>
     <ButtonBtn  colortype="chocolate" setColor={setColor}></ButtonBtn>
     <ButtonBtn  colortype="yellow" setColor={setColor}></ButtonBtn>
    
    </div>
  </div>
 )
}

export default App
