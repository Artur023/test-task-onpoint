import s from "./Slider2.module.css"
import {useState, useEffect, Children, cloneElement} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const PAGE_WIDTH = 1024

export const Slider2 = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                    return cloneElement(child, {
                        style: {
                            height: "768px",
                            minWidth: `${PAGE_WIDTH}px`,
                            maxWidth: `${PAGE_WIDTH}px`
                        },
                    })
                }
            )
        )
    }, [])


    return <div className={s.mainContainer}>
        <FaChevronLeft className={s.arrow} onClick={handleLeftArrowClick}/>
        <div className={s.window}>
            <div className={s.allPagesContainer}
                 style={{
                     transform: `translateX(${offset}px)`
                 }}>{pages}
            </div>
        </div>
        <FaChevronRight className={s.arrow} onClick={handleRightArrowClick}/>

    </div>
}


export default Slider2