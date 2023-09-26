import React, {useState} from 'react'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiInformationCircle, HiMenuAlt3} from 'react-icons/hi'
import {MdHomeRepairService} from 'react-icons/md'
import {BiSolidContact} from 'react-icons/bi'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const NavBar = () => {
  const [show, setShow] = useState(false)
  function handleToggle(){
    setShow(true)
  }
  function closeMenu(){
    setShow(false)
  }
  if (show == true){
    return (
    <nav className='menu-nav'>
      <div className="menu-top">
    <h1 className="logo">AfriQuest</h1>
   { show && <AiOutlineClose className='menu-icon' onClick={()=> closeMenu()}/>}
      </div>
   { show && <div className="menu-links">
    <Link to="/">
    <AiFillHome/>
        Home
    </Link>
    <Link to="/about">
        <HiInformationCircle/>
        About
    </Link>
    <Link to="/service">
        <MdHomeRepairService/>
        Service
    </Link>
    <Link to="/contact">
        <BiSolidContact/>
        Contact
    </Link>
      <button className='btn'>Sign Up</button>
    </div>}
  </nav> 
  )
  } else{
         return (
    <nav>
      <h1 className="logo">AfriQuest</h1>
      <div className="nav-links">
      <Link to="/">
      <AiFillHome/>
          Home
      </Link>
      <Link to="/about">
          <HiInformationCircle/>
          About
      </Link>
      <Link to="/service">
          <MdHomeRepairService/>
          Service
      </Link>
      <Link to="/contact">
          <BiSolidContact/>
          Contact
      </Link>
        <button className='btn'>Sign Up</button>
      </div>
      <HiMenuAlt3 className='menu-icon' onClick={()=> handleToggle()}/>
    </nav>
  )}
}

export default NavBar