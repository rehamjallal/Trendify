import Navbar from "./Landing";
import images from "../images/home.jpg";
import StepIndicator from "./Stepcircle";
import Footer from "./Footer";
function Home() {
    return (<>
        <Navbar />
        <div className="home" >
            <img style={{ width: "100%", }} src={images} alt="img" />
        </div>
        <StepIndicator />
        <Footer />
    </>)
}
export default Home;
