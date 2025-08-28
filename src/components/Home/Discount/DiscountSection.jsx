import bgImg from "../../../assets/images/banner-image-bg-1.jpg";
import banner3 from "../../../assets/images/banner-image3.png";
import DiscountTImer from "./DiscountTImer";

const DiscountSection = () => {
  return (
    <section
      className="w-full h-[600px] bg-cover bg-center flex justify-center px-8 items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between ">
        {/* Left Content */}

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className=" md:max-w-md drop-shadow-xl w-full max-w-md rounded-lg"
            src={banner3}
            alt=""
          />
        </div>
        {/* Right Image  */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            30% Discount On All items. Hurry Up!!!
          </h1>
          {/* Count Down Timer */}
          <DiscountTImer/>

          <button className="btn btn-secondary rounded-full shadow-md px-6 py-3">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
