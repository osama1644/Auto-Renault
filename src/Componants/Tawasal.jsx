import Footer from "./Footer"
import Navbar from "./Navbar"
import "./tawasal.css"
function Tawasal() {
  return (
    <>
    <Navbar />
    <div className="map">
    <div className="container">
    <div style={{  height: "450px" }} className="iframe">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d209819.77215964056!2d31.564522743763344!3d30.177361682543022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d30.215372799999997!2d31.4671104!4m3!3m2!1d30.1278351!2d31.357778999999997!5e1!3m2!1sar!2seg!4v1739391531435!5m2!1sar!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <a href="https://www.google.com/maps/dir/30.2153728,31.4671104/30.1278351,31.357779/@30.1773617,31.5645227,48183m/data=!3m2!1e3!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><button>عرض خريطه اكبر</button></a>
    </div>
    <div className="address">
        <h2>العنوان</h2>
        <p>شارع جسر السويس الرئيسي - بعد محطة مترو النزهة - قبل اشرفكو للإطارات Cairo, Egypt</p>
        <h2>التليفون</h2>
        <p>010 12370277</p>
        <h2>mohamedlateef1644@gmail.com</h2>
    </div>
    </div>
    </div>
    <Footer />
    </>
   
  )
}

export default Tawasal