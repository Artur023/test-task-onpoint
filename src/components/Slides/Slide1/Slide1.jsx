import s from "./Slide1.module.css"
import pageGlobal from "../../../img/pages/page-1.png"
import whatNext from "../../../img/static/what-next.png"

const Slide1 = () => {
    return <div className={s.container}>
        <div className={s.page}>
            <img src={pageGlobal} alt={"firstPage"}/>
        </div>
        <div className={s.textHello}>ПРИВЕТ</div>
        <div className={s.text}>ЭТО <b>НЕ</b> КОММЕРЧЕСКОЕ ЗАДАНИЕ</div>
        <div className={s.whatNext}>
            <img src={whatNext} alt={"whatNext"}/>
        </div>
    </div>
}

export default Slide1
