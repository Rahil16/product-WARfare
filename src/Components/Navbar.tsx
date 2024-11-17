import React from 'react'
// import logoColor from '../assets/logo-color.png'
import logoNoBg from '../assets/logo-no-background.png'
// import logoGS from '../assets/logo-grayscale.png'
// import logoGSI from '../assets/logo-grayscale-inverted.png'
import '../App.css'



const Navbar:React.FC= ()=> {

  return (
    <div className='navbar-full' >
        <img src={logoNoBg} className='mainlogo' alt='logo image' onClick={()=>{window.location.assign('/')}}></img>
        <div className='parent-item'>
        <li className='navbar-Item' id='home' onClick={()=>{window.location.assign('/')}}>HOME</li>
        <li className='navbar-Item' onClick={()=>{window.location.replace("/#Offerings")}}>OFFERINGS</li>
        </div>
    </div>
  )
}

export default Navbar
