import React from 'react'
import "./ProductCard.css"
const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transitional-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' 
            src='https://tse3.mm.bing.net/th?id=OIP.NmE6y7PPGqrTUTJLMX_bGwHaGa&pid=Api&P=0&h=180' alt=''></img>
        </div>
        <div className='textPart bg-white p-3'>
            <div>
              <p className='font-bold opacity-60'>
                YYYY
              </p>
              <p>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </p>
            </div>
            <div className='flex items-center spex '>
              <p className='font-semibold'>444</p>
              <p className='line-through opacity-50'>1000</p>
            </div>
        </div>
      
    </div>
  )
}

export default ProductCard
