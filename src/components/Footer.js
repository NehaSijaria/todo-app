import React from 'react'
import './footer.css';

export default function Footer() {
  let footerStyle = {
    position: "absolute",
    top:"100vh",
    width:"100%",
    // backgroundColor:"yellow"
   
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      
      <p className="text-center">
        Contact Me
      </p>
    </footer>
  )
}
