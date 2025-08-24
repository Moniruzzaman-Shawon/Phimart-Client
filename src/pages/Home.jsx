import HeroCarousel from "../components/Carousel/HeroCarousel";
import Featues from "../components/Featues";
import Product from "./Products/Product";


const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <Featues></Featues>
            <Product/>
        </div>
    );
};

export default Home;