import s from "./Slide1.moduls.css"
import pageGlobal from "../../../img/pages/page-1.png"

const Slide1 = () => {
    return <div>
        <div className={s.page}>
            <img src={pageGlobal}/>
        </div>
    </div>
}

export default Slide1