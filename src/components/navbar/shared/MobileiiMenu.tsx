

"use client"

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <div className=" lg:hidden">
          <div onClick={toggleMenu} >
            {
              isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24}  />
            }
          </div>
        </div>
  )
}

export default MobileMenu
