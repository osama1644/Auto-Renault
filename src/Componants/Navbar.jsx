import { useState } from "react"
import Logo from "../assets/logo.jpg"
import "./navbar.css"
import { Link } from "react-router-dom"


function Navbar() {
    const [isOpen,setIsOpen]=useState(true)
   
  return (
    <>
    <div className="nav">
        <div className="container">
           <Link to="/">
            <div className="logo">
                <div className="img"><img src={Logo} alt="Logo" /></div>
                <p>Auto Renault</p>
            </div>
            </Link>
            <ul className={isOpen ? "" :"open" }>
                <li><Link to="/" className="active">الرئيسيه</Link></li>
                <li><Link to="/na7n">من نحن</Link></li>
                <li><Link to="/kahdamat">خدماتنا</Link></li>
                <li><Link to="/about">تواصل معنا</Link></li>
            </ul>
            <div className="icon"><i onClick={()=>setIsOpen(!isOpen)} className="fa-solid fa-bars"></i></div>
        </div>
    </div>
    
    </>

  )
}

export default Navbar