import { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import "./landing.css"
import one from "../assets/one-min-min.jpg"
import two from "../assets/two-min-min.jpg"
import three from "../assets/three-min-min.jpg"
import four from "../assets/four-min-min.jpg"

const images = [one, two, three, four]

function preloadImages(imageArray) {
    imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

function Landing() {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        preloadImages(images); 
        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${images[imageIndex]})`,
                transition: "background-image 1s ease-in-out"
            }}
            className="landing"
        >
            <h1>Auto Renault</h1>
            <div className="writing">
                <Typewriter
                key="typewriter"
                    words={[
                        "نقوم بأعمال الميكانيكا باحترافية.",
                        "نوفر خدمات العفشة بجودة عالية.",
                        "نقدم خدمات الكهرباء للسيارات.",
                        "نقوم بـ كشف أعطال الكمبيوتر بدقة.",
                        "متخصصون في السمكرة وإصلاح الهيكل.",
                        "نقدم خدمات الدهان والتجديد.",
                        "نوفر خدمة تغيير الزيت والفلاتر بسرعة وكفاءة.",
                        "نقدم صيانة الفيتيس بأحدث المعدات."
                    ]}
                    loop={Infinity}
                    typeSpeed={50}
                    delaySpeed={2000}
                    deleteSpeed={10}
                    cursor
                    cursorStyle="|"
                />
            </div>
        </div>
    );
}

export default Landing;
