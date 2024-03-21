import React from 'react'

const NotFoundDay = () => {
  return (
    <>
      <div className='bg-[#F7F7F7] flex flex-col items-center justify-center'>
      <p className='text-xl mt-[109px] mb-[64px]'>Извините, страница не найдена</p>
      <div className="flex items-center justify-center relative mb-[85px]">
      <img src="public/notfound-img/404.png" alt="" />
      <img src="public/notfound-img/Group 313.png" alt="" className='absolute flex top-0'/>
      <img src="public/notfound-img/Layer 35 1.png" alt="" className='absolute top-0 left-48'/>
      </div>

      <button className='mb-[60px] text-center px-[90px] py-[17px] border rounded-[3px] text-[#E7426A] border-[#E7426A] font-semibold hover:text-white hover:bg-[#E7426A] transition-all'>Назад</button>
    </div>
    </>
  )
}

export default NotFoundDay
