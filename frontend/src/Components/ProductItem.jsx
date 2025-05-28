import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link
      className='text-gray-700 cursor-pointer flex flex-col'
      to={`/product/${id}`}
      onClick={handleClick}
    >
      <div className='overflow-hidden w-full aspect-square'>
        <img
          src={image[0]}
          className='hover:scale-110 transition-transform duration-500 ease-in-out object-cover w-full h-full'
          alt="failed to load"
        />
      </div>

      <div className='flex items-center justify-center h-12'>
        <p className='text-center text-sm'>{name}</p>
      </div>

      <p className='text-center text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
}

export default ProductItem;
