import React from 'react';
import ProductCard from '../components/ProductCard';
import MovingBar from '../components/MovingBar';

const OfficeFurniture = () => {
  
  // Step 1: Define an array of products
  const products = [
    {
      id: 1,
      name: ' Modern Office chair',
      price: '7799',
      image: 'https://th.bing.com/th/id/R.d1d97cb3fbe81aeab31b8bfb8588bcfa?rik=mlYJBgR3L00hUw&riu=http%3a%2f%2fcbservices.com%2fwp-content%2fuploads%2f2015%2f02%2fofficefurniture.jpg&ehk=nvX%2fyo0T9jEa7Ze%2bPhgOgPMCgdELVptA%2fS%2biBmc98ZM%3d&risl=&pid=ImgRaw&r=0', // You would typically use an actual URL here
      description: 'A comfortable and stylish chair for Office.'
    },
    {
      id: 2,
      name: 'Furniture Set',
      price: '25000',
      image: 'https://th.bing.com/th/id/R.d1d97cb3fbe81aeab31b8bfb8588bcfa?rik=mlYJBgR3L00hUw&riu=http%3a%2f%2fcbservices.com%2fwp-content%2fuploads%2f2015%2f02%2fofficefurniture.jpg&ehk=nvX%2fyo0T9jEa7Ze%2bPhgOgPMCgdELVptA%2fS%2biBmc98ZM%3d&risl=&pid=ImgRaw&r=0',
      description: ' A Modern Executive Office Furniture Set.'
    },
    {
      id: 3,
      name: 'Computer Desks',
      price: '30000',
      image: 'https://th.bing.com/th/id/R.d1d97cb3fbe81aeab31b8bfb8588bcfa?rik=mlYJBgR3L00hUw&riu=http%3a%2f%2fcbservices.com%2fwp-content%2fuploads%2f2015%2f02%2fofficefurniture.jpg&ehk=nvX%2fyo0T9jEa7Ze%2bPhgOgPMCgdELVptA%2fS%2biBmc98ZM%3d&risl=&pid=ImgRaw&r=0',
      description: 'White-Blue coloured Simple Computer Desks.'
    },
    {
      id: 4,
      name: 'Modular Office Desk',
      price: '35999',
      image: 'https://th.bing.com/th/id/R.d1d97cb3fbe81aeab31b8bfb8588bcfa?rik=mlYJBgR3L00hUw&riu=http%3a%2f%2fcbservices.com%2fwp-content%2fuploads%2f2015%2f02%2fofficefurniture.jpg&ehk=nvX%2fyo0T9jEa7Ze%2bPhgOgPMCgdELVptA%2fS%2biBmc98ZM%3d&risl=&pid=ImgRaw&r=0',
      description: 'Modular  simple Office Desk.'
    }
    
  ];

  return (
    <>
    <div>
      <MovingBar/>
          <img className="h-[80vh] w-full object-cover" src="https://png.pngtree.com/background/20230520/original/pngtree-modern-office-desk-design-ideas-picture-image_2677246.jpg" alt="Furniture 1" />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Stylish Sofas</h2>
            <p className="mt-2">Comfortable and Modern Designs for Your Living Room</p>
          </div>
          </div>
      {/* <h1 className="text-3xl justify-center items-center  font-bold text-center mb-6">Living Room Furniture</h1> */}

      {/* Step 2: Map through the products array and create a grid layout */}
      
      <div className=" items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl justify-center items-center py-4 text-white font-bold text-center mb-6">OfficeRoom Furniture</h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
      <div className='flex flex-row justify-center items-center gap-5'>
        {products.map((product) => (
          <ProductCard
            key={product.id} // Step 3: Pass product data as props
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default OfficeFurniture;
