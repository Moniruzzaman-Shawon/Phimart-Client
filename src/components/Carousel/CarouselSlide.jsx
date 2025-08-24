import bgImg from '../../assets/images/banner-image-bg.jpg'


const CarouselSlide = ({title, subtitle, image}) => {
    return (
        <section className='w-full h-[650px] bg-cover bg-center flex justify-center px-8 items-center' style={{backgroundImage:`url(${bgImg})`}}>
            <div className='flex items-center justify-between max-w-6xl px-8' >
            {/* Left Content */}
            <div className='w-1/2'>
                <h1 className='text-5xl font-bold text-gray-900'>{title}</h1>
                <p className='text-gray-600 my-4'> {subtitle} </p>
                <button className='btn btn-secondary rounded-full shadow-md px-6 py-3'>Shop Product</button>
            </div>

            {/* Right Image  */}
            <div className='w-1/2 flex justify-center'>
                <img className='max-w-md drop-shadow-xl' src={image} alt="" />
            </div>
        </div>
        </section>
    );
};

export default CarouselSlide;