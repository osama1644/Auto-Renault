import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg"
import "./footer.css"
function Footer() {
  return (
    <div className="footer">
        <div className="container">
           <div className="log">
           <div className="img"><img src={logo} alt="" /></div>
           <p>Auto Renault</p>
           </div>
           <p> راحتك وامانك اولياتنا🔧🚘</p>
          <Link to="/about"> <button >تواصل معنا</button></Link>
           <div className="links">
            <a href="https://www.tiktok.com/@auto.renault?_t=ZS-8thHkGw0J4a&_r=1" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
            <a href="https://www.instagram.com/autorenault/"><i className="fa-brands fa-instagram" target="_blank"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61553744193881" target="_blank"><i className="fa-brands fa-facebook"></i></a>
           </div>
        </div>
    </div>
  )
}

export default Footer