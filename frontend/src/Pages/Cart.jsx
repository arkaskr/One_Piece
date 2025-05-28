import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';
import { assets } from '../Assets/assets';
import CartTotal from '../Components/CartTotal';

const Cart = () => {

  const {products,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext);

  const[cartData,setCartData]=useState([]);

  useEffect(()=>{

    const tempData=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
            tempData.push({
              _id: items,
              size: item,
              quantity:cartItems[items][item]
            })
        }
      }
    }
    setCartData(tempData);
  },[cartItems])

  return (
    <div className='border-t border-gray-400 pt-14'>
       <div className='text-2xl mb-3'>
        <Title text1={'YOUR '} text2={'CART'}/>
       </div>

       <div>
        {
          cartData.map((item) => {
  const productData = products.find((product) => product._id === item._id);

  // Skip rendering if product not found
  if (!productData) return null;

  return (
    <div key={`${item._id}-${item.size}`} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
      <div className='flex items-start gap-6'>
        <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
        <div>
          <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
          <div className='flex items-center gap-5 mt-2'>
            <p>{currency}{productData.price}</p>
            <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
          </div> 
        </div>   
      </div>
      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (!isNaN(value) && value >= 1) {
            updateQuantity(item._id, item.size, value);
          }
        }}
        className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
      />
      <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
    </div>
  );

          })
        }
       </div>

       <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <div className='w-full text-center'>
              <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 rounded-md cursor-pointer'>PROCEED TO PAYMENT</button>
            </div>
          </div>
       </div>

    </div>
  )
}

export default Cart