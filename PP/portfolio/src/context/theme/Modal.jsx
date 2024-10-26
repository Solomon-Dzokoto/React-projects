import data from './data'
import './Modal.css'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
const Modal = ({openModal,setOpenModal,applyTheme}) => {
    const [selectedPrimary, setSelectedPrimary] = useState('');
    const [selectedBackground, setSelectedBackground] = useState('');
  return (
    <>
    {openModal?(
        <div  className="modal">
        <div className='modal__content'>
          <h3>Customize Your Theme</h3>
          <p>
            Change the primary and background color to you preference.
          </p>
           <h4>Primary Color</h4>
           <ul>
            {
                data.map(item => (
                    <li className='list' key={item.id}><button onClick={()=>{setSelectedPrimary(item.color);applyTheme(item.color,selectedBackground)}} className='primary__colors'  style={{background:item.color}}></button></li>
                ))
            }
           </ul>
            <h4>Background Color</h4>
            <div className="background__btn">
            <button className='white-btn btnn' onClick={()=>{
                setSelectedBackground('white')
                applyTheme(selectedPrimary,'white')
                }}>
             </button>
            <button className='black-btn btnn' onClick={()=>{
                setSelectedBackground('#001')
                applyTheme(selectedPrimary,'#001')}}>               
            </button>
            </div>   
            <IoMdClose  
             onClick={()=>setOpenModal(!openModal)}
             role='button'
             className='close__modal'
            />     
        </div>
    </div>
    ):null}
   </>
  )
}

export default Modal
