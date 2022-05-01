import './App.css';
import {Slider2} from "./components/Slider2/Slider2";
import Slide1 from "./components/Slides/Slide1/Slide1";
import Slide2 from "./components/Slides/Slide2/Slide2";
import Slide3 from "./components/Slides/Slide3/Slide3";
import home from "./img/common/home.png"
import logo from "./img/common/logo.png"


function App() {
    return (<div>
            <div className="home">
                <img src={home} alt="home"/>
            </div>
            <Slider2>
                <div className="item"><Slide1/></div>
                <div className="item"><Slide2/></div>
                <div className="item"><Slide3/></div>
            </Slider2>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    );
}

export default App;
