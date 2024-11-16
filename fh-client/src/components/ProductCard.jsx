// import React from "react";

// function ProductCard() {
//   return (
//     // <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <div className="w-80 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
//         {/* Image and Discount Tag */}
//         <div className="relative">
//           <img
//             src=" "
//             alt="L-Shaped Sofa"
//             className="w-full h-48 object-cover"
//           />
//           <div className="absolute top-2 right-2 bg-orange-500 text-xs font-bold text-white px-2 py-1 rounded-full">
//             Save 47%
//           </div>
//         {/* </div> */}
        
//         {/* Product Information */}
//         <div className="p-4">
//           <p className="text-sm text-gray-400">L-Shape Sofas</p>
//           <h3 className="text-lg font-semibold mb-2">L-Shaped Velvet Corner | Grey</h3>
          
//           {/* Price */}
//           <div className="flex items-center mb-2">
//             <p className="text-2xl font-bold mr-2">26000</p>
//             {/* <span className="text-gray-400 line-through">49000</span>
//             <span className="text-gray-400 text-sm ml-1">/ Piece</span> */}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2">
//             <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-center font-semibold hover:bg-orange-600">
//               Add to cart
//             </button>
            
//           </div>

//           {/* Delivery Time */}
//           <p className="text-gray-400 text-sm mt-2">Delivered within 25-30 working days.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
import React from "react";

const ProductCard = ({
  image,
  discount,
  category,
  name,
  rating,
  price,
  originalPrice,
  deliveryTime,
}) => {
  return (
    <div className="bg-gray-700 text-white rounded-lg shadow-lg w-85 h-100 p-4 relative">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 bg-orange-500 text-white font-bold text-xs px-2 py-1 rounded">
        Save {discount}%
      </div>

      {/* Product Image */}
      <img
        src={image}
        alt="Product"
        className="w-full h-50 object-cover rounded-lg shadow-md"
      />

      {/* Category */}
      <p className="text-gray-400 text-xs mt-4">{category}</p>

      {/* Product Name */}
      <h2 className="text-lg font-bold mt-1">{name}</h2>

      {/* Rating */}
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? "#fbbf24" : "none"}
            viewBox="0 0 24 24"
            stroke="#fbbf24"
            className="w-4 h-4"
          >
            {/* <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.158 6.618a1 1 0 00.95.69h6.929c.969 0 1.371 1.24.588 1.81l-5.607 4.073a1 1 0 00-.364 1.118l2.157 6.618c.3.92-.755 1.688-1.54 1.118l-5.607-4.073a1 1 0 00-1.176 0l-5.607 4.073c-.785.57-1.84-.197-1.54-1.118l2.157-6.618a1 1 0 00-.364-1.118L2.34 12.045c-.783-.57-.38-1.81.588-1.81h6.929a1 1 0 00.95-.69l2.158-6.618z"
            /> */}
          </svg>
        ))}
      </div>

      {/* Price Section */}
      <div className="mt-3">
        <p className="text-2xl font-bold">{price} pounds</p>
        {/* <p className="text-gray-400 line-through text-sm">
          Instead {originalPrice} / Piece
        </p> */}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md">
          Add to cart
        </button>
        <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
          Wishlist
        </button>
      </div>

      {/* Delivery Info */}
      <p className="text-xs text-gray-400 mt-4">
        Delivered within {deliveryTime} working days.
      </p>
    </div>
  );
};

export default ProductCard;