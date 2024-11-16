import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import f1 from '../assets/img/f1.jpeg';

const HomeCarousel = () => {
  return (
    <div className="relative mt-0"> {/* Ensure no margin-top */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="h-[80vh] max-w-screen-xl mx-auto" // Keep the height based on viewport height
      >
        <div>
          <img className="h-[80vh] w-full object-cover" src={f1} alt="Furniture 1" />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Stylish Sofas</h2>
            <p className="mt-2">Comfortable and Modern Designs for Your Living Room</p>
          </div>
        </div>
        <div>
          <img
            className="h-[80vh] w-full object-cover"
            src="https://png.pngtree.com/background/20230520/original/pngtree-modern-office-desk-design-ideas-picture-image_2677246.jpg"
            alt="Furniture 2"
          />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Office Desks</h2>
            <p className="mt-2">Functional & Elegant Designs for Your Workspace</p>
          </div>
        </div>
        <div>
          <img
            className="h-[80vh] w-full object-cover"
            src="https://wakefitdev.gumlet.io/img/CoffeeTablesNew/AbertoACSG/1.jpg?w=3056"
            alt="Furniture 3"
          />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Coffee Tables</h2>
            <p className="mt-2">Elegant and Functional Coffee Tables for Every Living Room</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;