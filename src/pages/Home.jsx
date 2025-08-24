import HeroCarousel from "../components/Carousel/HeroCarousel";
import DiscountSection from "../components/Discount/DiscountSection";
import Featues from "../components/Featues";
import Product from "./Products/Product";


const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <Featues></Featues>
            <Product/>
            <DiscountSection/>
        </div>
    );
};

export default Home;