import Square from './Square'
import Input from './Input'
import {useState} from 'react'

function App() {
 const [colorValue,setColorValue]=useState("")
 const [hexValue,setHexValue]=useState("")
 const [darkText,setDarkText]=useState(true)

  return (
    <div className="App">
     <Square 
     colorValue={colorValue} 
     hexValue={hexValue}
     setColorValue={setColorValue}
     darkText={darkText}
     />

    <Input
     hexValue={hexValue}
     setHexValue={setHexValue}
     colorValue={colorValue} 
     setColorValue={setColorValue}
     darkText={darkText}
     setDarkText={setDarkText}
     />

    </div>
  );
}
export default App;
