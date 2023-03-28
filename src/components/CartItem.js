import React from 'react';

import { Link } from 'react-router-dom';

import {IoMdClose} from 'react-icons/io'

const CartItem = ({item}) => {
  const {id, title, image, price, amount} = item

  return(
    <div className='felx'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/*image */}
        <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} alt=''/>
        </Link>
        <div>
          {/*title e rmove icon */}
          <div className='w-full flex flex-col' >
            <div className='flex justify-between mb-2'>
              <Link to={`/products/${id}`} className='text-sm uppercase font-medium max w-[240px] text-primary hover:underline'>
                  {title}
              </Link>
                {/*remove icon */}
              <div className='text-xl cursor-pointer'>
                  <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
              </div>
            </div>
             <div>
                {/*quantity */}
                <div>quantity</div>
                {/*item price */}
                <div>item price</div>
                {/*final price */}
                <div>final price</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
