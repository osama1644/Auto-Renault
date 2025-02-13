import "./sevices.css"
import afsh from "../assets/afsh.jpg"
import fetes from "../assets/female-mechanic-holding-spare-parts-car.jpg"
import painting from "../assets/man-spraying-powder-paint-car-door-side-view.jpg"
import kahrabe from "../assets/electrical.jpg"
import computer from "../assets/hands-mechanic-using-diagnostic-tool.jpg"
import mechanica from "../assets/professional-car-mechanic-repair-shop.jpg"
import samkara from "../assets/repairman-preparing-car-painting-workshop.jpg"
import zeit from "../assets/mechanic-pouring-oil-into-car-engine.jpg"
import { useState } from "react"
function Servisec() {
    let [oneisopen,setone] =useState(false)
    let [twoisopen,settwo] =useState(false)
    let [threeisopen,setthree] =useState(false)
    let [fourisopen,setfour] =useState(false)
    let [fiveisopen,setfive] =useState(false)
    let [sixisopen,setsex] =useState(false)
    let [sevenisopen,setseven] =useState(false)
    let [eightisopen,seteight] =useState(false)
  return (
    <div className="services">
        <h2>خدماتنا</h2>
        <div className="container">
            <div className="box">
            <div className="img"><img src={afsh} alt="" /></div>
            <div className="content">
                <h3>تغيير عفشه السيارات</h3>
                <p> متخصصون في تغيير غفشه الشيارات</p>
                <button onClick={()=>setone(!oneisopen)}>{oneisopen ? "اعرض اقل" : "اعرض المزيد"}</button>
                {oneisopen? 
                    <div>
                    <p>تشمل هذه الخدمه</p>
                    <p> فحص شامل لنظام التعليق (العفشة) والتأكد من سلامته</p>
                    <p>تغيير المساعدين واليايات لتحسين امتصاص الصدمات</p>
                    <p>استبدال الأذرع والمقصات لضمان ثبات السيارة</p>
                    <p> ضبط زوايا العجلات لتوفير قيادة أكثر راحة وأمانًا</p>
                    <p>فحص وتجديد الجلب والمفاصل لضمان عدم وجود أصوات أو اهتزازات</p>
                
                </div> :null}
            </div>
            </div>
            <div className="box">
            <div className="img"><img src={fetes} alt="" /></div>
            <div className="content">
                <h3> فيتيس</h3>
                <p> متخصصون في إصلاح وصيانة الفتيس</p>
                <button onClick={()=>settwo(!twoisopen)}>{twoisopen ? "اعرض اقل" : "اعرض المزيد"}</button>
                {twoisopen? <div>
                    <p>تشمل هذه الخدمه</p>
                    <p>فحص زيت الفيتيس واستبداله إذا لزم الأمر لتحسين الأداء</p>
                    <p>تنظيف وتنقية ناقل الحركة من الرواسب والأوساخ </p>
                    <p>إصلاح أو استبدال أجزاء التروس التالفة لضمان سلاسة النقل</p>
                    <p>معايرة وبرمجة الفيتيس الأوتوماتيك للحصول على أداء مثالي</p>
                    <p> فحص حساس الفيتيس والتوصيلات الكهربائية لضمان عدم وجود مشاكل كهربائية</p>
                
                </div> :null}
            </div>
            </div>
            <div className="box">
            <div className="img"><img src={painting} alt="" /></div>
            <div className="content">
                <h3>دهان</h3>
                <p> نقوم بأعمال دهان السيارات بأفضل الخامات</p>
                <button onClick={()=>setthree(!threeisopen)}>{threeisopen ? "اعرض اقل" : "اعرض المزيد"}</button>
                {threeisopen? <div>
                    <p>تشمل هذه الخدمه</p>
                    <p> إزالة الخدوش والتشققات قبل الدهان لضمان سطح ناعم</p>
                    <p>اختيار اللون المناسب وتطبيقه بدقة لمطابقة لون السيارة الأصلي</p>
                    <p>استخدام طبقات دهان مقاومة للعوامل الجوية لحماية السيارة من الشمس والمطر</p>
                    <p> إضافة طبقة حماية شفافة (Clear Coat) لمنح السيارة لمعة وحماية أطول</p>
                    <p>تلميع وتشميع السيارة بعد الدهان للحفاظ على المظهر الجمالي</p>
                
                </div> :null}
            </div>
            </div>
            <div className="box">
            <div className="img"><img src={kahrabe} alt="" /></div>
            <div className="content">
                <h3>اعطال الكهربا</h3>
                <p> إصلاح جميع أعطال الكهرباء</p>
                <button onClick={()=>setfour(!fourisopen)}>{fourisopen ? "اعرض اقل" : "اعرض المزيد"}</button>
                {fourisopen? 
                <div>
                <p>تشمل هذه الخدمه</p>
                <p> فحص البطارية والدينامو والتأكد من كفاءة الشحن</p>
                <p>اكتشاف الأعطال الكهربائية باستخدام أجهزة الفحص الحديثة</p>
                <p>إصلاح مشاكل الإضاءة الداخلية والخارجية مثل المصابيح والفوانيس</p>
                <p> إصلاح الدوائر الكهربائية والتوصيلات التالفة لتجنب حدوث أعطال مفاجئة</p>
                <p>عادة برمجة حساسات السيارة والكمبيوتر الداخلي</p>
            
            </div> :null}
            </div>
            </div>
            <div className="box">
            <div className="img"><img src={computer} alt="" /></div>
            <div className="content">
                <h3>كمبيوتر</h3>
                <p> تشخيص الأعطال بالكمبيوتر</p>
                <button onClick={()=>setfive(!fiveisopen)}>{fiveisopen ? "اعرض اقل" : "اعرض المزيد"}</button>
                {fiveisopen? 
                <div>
                <p>تشمل هذه الخدمه</p>
                <p> فحص شامل لأنظمة السيارة الإلكترونية باستخدام أجهزة الكمبيوتر الحديثة</p>
                <p>فحص أداء المحرك، ناقل الحركة، ونظام الوقود لاكتشاف أي خلل مبكرًا</p>
                <p>كتشاف مشاكل الحساسات والدوائر الكهربائية لمنع الأعطال المفاجئة</p>
            
            </div> :null}
            </div>
            </div>
            <div className="box">
            <div className="img"><img src={mechanica} alt="" /></div>
            <div className="content">
                <h3>ميكانيكا</h3>
                <p> نقوم بجميع اعمال ميكانيكا السيارات</p>
                <button onClick={()=>setsex(!sixisopen)}>{sixisopen ? "اعرض اقل" : "اعرض المزيد"}</button>
                {sixisopen? 
                <div>
                <p>تشمل هذه الخدمه</p>
                <p>إصلاح وتسوية وش السلندر لمنع تسريب الزيت أو المياه </p>
                <p>صيانة نظام التبريد (الردياتير والمراوح) لتجنب ارتفاع حرارة المحرك</p>
                <p>صلاح نظام الوقود (الطرمبة، الرشاشات، والبخاخات) لتحسين استهلاك البنزين</p>
                <p> إصلاح أو استبدال السيور والتروس للحفاظ على تشغيل سلس</p>
                <p>فحص وإصلاح أعطال المحرك لضمان أداء مثالي</p>
            
            </div> :null}
            </div>
            </div>
            <div className="box">
            <div className="img"><img src={samkara} alt="" /></div>
            <div className="content">
                <h3>اعمال السمكره</h3>
                <p> اصلاح هيكل السيارة وسمكرة احترافية</p>
                <button onClick={()=>setseven(!sevenisopen)}>{sevenisopen ? "اعرض اقل" : "اعرض المزيد"}</button>
                {sevenisopen? 
                <div>
                <p>تشمل هذه الخدمه</p>
                <p>فك وتركيب الأجزاء المتضررة مثل الأبواب، الرفارف، والكبوت </p>
                <p>معالجة الصدأ والتآكل للحفاظ على متانة الهيكل</p>
                <p>تسوية وتعديل الهيكل باستخدام أجهزة متخصصة لإعادة الشكل الأصلي</p>
                <p> صلاح الصدمات والخدوش باستخدام أحدث تقنيات السمكرة</p>
            
            </div> :null}
            </div>
            </div>
            <div className="box">
            <div className="img"><img src={zeit} alt="" /></div>
            <div className="content">
                <h3>تغيير الزيت</h3>
                <p> تغيير زيت المحرك والفلتر بأفضل الأنواع</p>
                <button onClick={()=>seteight(!eightisopen)}>{eightisopen ? "اعرض اقل" : "اعرض المزيد"}</button>
                {eightisopen? <div>
                    <p>تشمل هذه الخدمه</p>
                    <p> استبدال الزيت القديم بزيت جديد للحفاظ على كفاءة المحرك</p>
                    <p>تغيير فلتر الزيت لضمان عدم وجود شوائب تؤثر على أداء المحرك</p>
                    <p>فحص مستوى الزيت والتأكد من ملاءمته لمواصفات السيارة</p>
                    <p> تحسين أداء المحرك وتقليل الاحتكاك بين الأجزاء الداخلية</p>
                    <p>توفير حماية للمحرك من التلف بسبب الأوساخ والترسبات</p>
                </div> :null}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Servisec