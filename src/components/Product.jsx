import React from 'react'
import { Link } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';

const Product = ({ product }) => {
  console.log(product);
  const { id, thumbnail, price, title } = product;
  return (
    <div>
      {/* Product Thumbnail and add to cart */}
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* Image/Thumbnail */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={thumbnail}
              alt=""
            />
          </div>
          {/* Button to add to cart */}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BiPlus className="text-3xl" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Description and add view product */}
      <div>
        <Link to={`/product/${id}`}>
          <h1 className="font-semibold mb-1">{title}</h1>
        </Link>
        <div>
          <h4>Price: ${price}</h4>
        </div>
        <button className="w-full h-12 bg-[#008970] text-white mt-4">
          <Link to={`/product/${id}`}>View Product</Link>
        </button>
      </div>
    </div>
  );
}

export default Product
