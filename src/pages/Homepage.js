
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Video from '../components/Video';
import Sliders from '../components/Sliders';
import Productlist from '../components/Productlist';
import News from '../components/News';

export default function Homepage() {


    return (
        <div className="bg-white">

            <Navbar></Navbar>
            <Video></Video>
            <Sliders></Sliders>
            <Productlist></Productlist>
            <News></News>
            <Footer></Footer>
        </div>
    )
}
