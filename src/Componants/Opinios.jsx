
import one from"../assets/o1.png"
import two from "../assets/o2.png"
import three from "../assets/o3.png"
import four from "../assets/o4.png"
import five from "../assets/o5.png"
import six from"../assets/o6.png"
import "./opinion.css"
function Opinios() {
  return (
    <div className="opinions">
        <h2>اراء عملائنا</h2>
        <div className="container">
            <div className="img"><img src={one} alt="" /></div>
            <div className="img"><img src={two} alt="" /></div>
            <div className="img"><img src={three} alt="" /></div>
            <div className="img"><img src={four} alt="" /></div>
            <div className="img"><img src={five} alt="" /></div>
            <div className="img"><img src={six} alt="" /></div>
        </div>
        <h2><a href="https://www.facebook.com/photo/?fbid=122121381500124806&set=pcb.122121381698124806" target="_blank">عرض المزيد</a></h2>
      

    </div>
    
  )
}

export default Opinios