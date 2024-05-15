import Navbar from "./Landing";
import images from "../images/home.jpg";
import StepIndicator from "./Stepcircle";
import Features from "./Features";
import Footer from "./Footer";
import AboutUs from "./About";
function Home() {
    return (<>
        <Navbar />
        <div className="home" >
            <img style={{ width: "100%", }} src={images} />
        </div>
        <StepIndicator />
        <Footer />

    </>)
}
export default Home;
