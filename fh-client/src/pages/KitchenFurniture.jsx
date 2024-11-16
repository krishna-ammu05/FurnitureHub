import React from 'react';
import ProductCard from '../components/ProductCard';

const KitchenFurniture = () => {
  // Step 1: Define an array of products
  const products = [
    {
      id: 1,
      name: 'Kitchen pantry',
      price: '5999',
      image: 'https://stylesatlife.com/wp-content/uploads/2020/01/15-Latest-Kitchen-Furniture-Designs-With-Pictures.jpg', // You would typically use an actual URL here
      description: 'New Basic wise Kitchen Pantry with doors.'
    },
    {
      id: 2,
      name: 'Modern Kitchen Furnitre',
      price: '35999',
      image: 'https://stylesatlife.com/wp-content/uploads/2020/01/15-Latest-Kitchen-Furniture-Designs-With-Pictures.jpg',
      description: 'Stylish kitchen Furniture with Island Theme.'
    },
    {
      id: 3,
      name: 'Storage Cabinet',
      price: '5000',
      image: 'https://stylesatlife.com/wp-content/uploads/2020/01/15-Latest-Kitchen-Furniture-Designs-With-Pictures.jpg',
      description: 'A spacious bookshelf to store your books and decor.'
    },
    {
      id: 4,
      name: 'Kitchen Furniture',
      price: '25999',
      image: 'https://stylesatlife.com/wp-content/uploads/2020/01/15-Latest-Kitchen-Furniture-Designs-With-Pictures.jpg',
      description: 'An elegant accent wooden  Kitchen Furniture'
    }
    
  ];

  return (
    <>
     <div>
          
          <img className="h-[80vh] w-full object-cover" src="https://www.wakefit.co/guides/wp-content/uploads/2023/01/space-saving-furniture-1.jpg" />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Modern Kitchen Furniture</h2>
            <p className="mt-2">Comfortable and Modern Designs for Your Kitchen</p>
          </div>
          </div>
          
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
