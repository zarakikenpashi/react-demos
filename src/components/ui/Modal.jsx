import { useState } from "react"
import { createPortal } from "react-dom"

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="m-h-screen bg-red-500">
        <button onClick={()=>setIsOpen(!isOpen)}>Open Modal</button>
        {isOpen && <ModalContent />} 
    </div>
  )
}

const ModalContent = () => {
    return createPortal(
      <div>Modal</div>,
      document.querySelector('#modal')
    )
}

export default Modal