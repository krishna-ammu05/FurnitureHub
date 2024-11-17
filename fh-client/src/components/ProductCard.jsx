import React from "react";

const ProductCard = ({
  image,
  Offer,
  name,
  price,
  deliveryTime,
}) => {
  return (
    <div className="bg-gray-700 text-white rounded-lg shadow-lg w-85 h-100 p-4 relative">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 bg-orange-500 text-white font-bold text-xs px-2 py-1 rounded">
        Save {Offer}%
      </div>

      {/* Product Image */}
      <img
        src={image}
        alt="Product"
        className="w-full h-50 object-cover rounded-lg shadow-md"
      />

      {/* Product Name */}
      <h2 className="text-lg font-bold mt-1">{name}</h2>

      {/* Price Section */}
      <div className="mt-3">
        <p className="text-2xl font-bold">{price} pounds</p>
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

export default ProductCard;
