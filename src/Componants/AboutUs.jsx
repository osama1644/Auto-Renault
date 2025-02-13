import "./about.css"
import { useNavigate } from "react-router-dom"
function AboutUs() {
  const navigate =useNavigate()
  const navigator =()=>{
    navigate("/services")
  }
  return (
    <div className="about">
      <h2>من نحن</h2>
      <div className="container">
        <div className="box">
          <h2>+5 years</h2>
          <p>عدد سنوات الخبره في مجال صيانه السيارات</p>
        </div>
        <div className="box">
          <h2>+7k</h2>
          <p>عدد السيارات التي تمت صيانتها</p>
        </div>
        <div className="box">
          <h2>95%</h2>
          <p>درجة رضاء العملاء عن الصيانات والخدمة بشكل عام</p>
        </div>
      </div>
      <div className="btn" onClick={navigator}><button>عرض المزيد </button></div>
    </div>
  )
}

export default AboutUs