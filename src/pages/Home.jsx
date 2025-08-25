import HeroCarousel from "../components/Carousel/HeroCarousel";
import Category from "../components/Categories/Category";
import DiscountSection from "../components/Discount/DiscountSection";
import Featues from "../components/Featues";
import Product from "./Products/Product";


const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <Featues></Featues>
            <Category/>
            <Product/>
            <DiscountSection/>
        </div>
    );
};

export default Home;