import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Category from "../components/Home/Categories/Category";
import DiscountSection from "../components/Home/Discount/DiscountSection";
import Featues from "../components/Home/Featues";
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