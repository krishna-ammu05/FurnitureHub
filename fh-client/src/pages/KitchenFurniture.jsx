import React from 'react';
import ProductCard from '../components/ProductCard';

const KitchenFurniture = () => {
  // Step 1: Define an array of products
  const products = [
    {
      id: 1,
      name: 'Sofa Set',
      price: '$799',
      image: 'sofa-image-url', // You would typically use an actual URL here
      description: 'A comfortable and stylish sofa set for your living room.'
    },
    {
      id: 2,
      name: 'Coffee Table',
      price: '$199',
      image: 'coffee-table-image-url',
      description: 'A modern coffee table to complement your living room decor.'
    },
    {
      id: 3,
      name: 'Bookshelf',
      price: '$299',
      image: 'bookshelf-image-url',
      description: 'A spacious bookshelf to store your books and decor.'
    },
    {
      id: 4,
      name: 'Accent Chair',
      price: '$129',
      image: 'accent-chair-image-url',
      description: 'An elegant accent chair to add a touch of style to your living room.'
    }
    
  ];

  return (
    <>
      {/* <h1 className="text-3xl justify-center items-center  font-bold text-center mb-6">Living Room Furniture</h1> */}

      {/* Step 2: Map through the products array and create a grid layout */}
      
      <div className=" items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl justify-center items-center text-white py-4 font-bold text-center mb-6">
        Kitchen Room Furniture</h1>
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

export default KitchenFurniture;
