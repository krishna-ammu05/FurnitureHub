import React from 'react';
import ProductCard from '../components/ProductCard';

const BedRoomFurniture = () => {
  
  // Step 1: Define an array of products
  const products = [
    {
      id: 1,
      name: 'Sofa Set',
      price: '$799',
      image: 'https://wakefitdev.gumlet.io/img/CoffeeTablesNew/AbertoACSG/1.jpg?w=3056', // You would typically use an actual URL here
      description: 'A comfortable and stylish sofa set for your living room.'
    },
    {
      id: 2,
      name: 'Coffee Table',
      price: '$199',
      image: 'https://wakefitdev.gumlet.io/img/CoffeeTablesNew/AbertoACSG/1.jpg?w=3056',
      description: 'A modern coffee table to complement your living room decor.'
    },
    {
      id: 3,
      name: 'Bookshelf',
      price: '$299',
      image: 'https://wakefitdev.gumlet.io/img/CoffeeTablesNew/AbertoACSG/1.jpg?w=3056',
      description: 'A spacious bookshelf to store your books and decor.'
    },
    {
      id: 4,
      name: 'Accent Chair',
      price: '$129',
      image: 'https://wakefitdev.gumlet.io/img/CoffeeTablesNew/AbertoACSG/1.jpg?w=3056',
      description: 'An elegant accent chair to add a touch of style to your living room.'
    }
    
  ];

  return (
    <>
    <div>
          <img className="h-[80vh] w-full object-cover" src="https://starmodernfurniture.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/bedroom-furniture_modern-bedrooms_elena_side_5_1.jpg" alt="Furniture 1" />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Comfortable Beds</h2>
            <p className="mt-2">Comfortable and Modern Designs for Beds</p>
          </div>
          </div>
      {/* <h1 className="text-3xl justify-center items-center  font-bold text-center mb-6">Living Room Furniture</h1> */}

      {/* Step 2: Map through the products array and create a grid layout */}
      
      <div className=" items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl justify-center items-center py-4 text-white font-bold text-center mb-6">BedRoom Furniture</h1>
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

export default BedRoomFurniture;
