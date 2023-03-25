import React, {useContext} from 'react';

import { Link } from 'react-router-dom';
import {BsPlus, BsEyeFill} from 'react-icons/bs'

const Product = ({product}) => {
  console.log(product)

  const {id, image,category, title,price } = product

  return(
    <div>
      <div className='border border -[#e4e4e4] h-[300px] mb-4 relative ocerflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/*image8*/}

          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=''/>
          </div>
          <div className='absolute top-0 right-0 bg-red-500 p-2'>
            <button>
              <div className='flex justify-center items-center text-white w-12 h-12'>
                <BsPlus className='text-3xl'/>
              </div>
            </button>
          </div>

        </div>
      </div>
      <div>2</div>
    </div>
  )
  
  
 
  
  
};

export default Product;


/*
<div className='w-full h-[300px] bg-gray-200' key={product.id}>
              {product.title}
  </div>
*/