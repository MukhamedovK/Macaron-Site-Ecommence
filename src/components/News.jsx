import React from 'react'

const News = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[85px]'>
      <h1 className='font-semibold text-[30px] text-[#292929] mb-[40px]'>Новости</h1>
      <div className="flex gap-[29px]">
      <div className="flex flex-col w-[370px] h-[420px] bg-white rounded-md border border-gray-300 overflow-hidden shadow-lg">
        <img src="public/home-img/News-img/Rectangle 282 (1).png" alt="" />
        <p className='text-sm text-[#969696] mt-5 ml-5'>25.02.2023</p>
        <p className='font-semibold text-lg text-[#292929] ml-5 mt-[10px]'>Скоро главный праздник весны!</p>
        <p className='text-sm text-gray-600 ml-5 mt-[10px]'>Девушки любят, когда вкусно, красиво и<br /> натурально. Смотрите больше наборов с<br /> десертами ручной работы</p>
      </div>

      <div className="flex flex-col w-[370px] h-[420px] bg-white rounded-md border border-gray-300 overflow-hidden shadow-lg">
        <img src="public/home-img/News-img/Rectangle 282 (2).png" alt="" />
        <p className='text-sm text-[#969696] mt-5 ml-5'>17.02.2023</p>
        <p className='font-semibold text-lg text-[#292929] ml-5 mt-[10px]'>Конкурс на 23 февраля!</p>
        <p className='text-sm text-gray-600 ml-5 mt-[10px]'>День Защитника Отечества уже совсем скоро! <br /> Порадуйте своего сладкоежку с помощью<br /> аппетитных наборов от МакаронШоп</p>
      </div>

      <div className="flex flex-col w-[370px] h-[420px] bg-white rounded-md border border-gray-300 overflow-hidden shadow-lg">
        <img src="public/home-img/News-img/Rectangle 282 (3).png" alt="" />
        <p className='text-sm text-[#969696] mt-5 ml-5'>11.02.2023</p>
        <p className='font-semibold text-lg text-[#292929] ml-5 mt-[10px]'>Экспресс-конкурс ко дню<br /> Святого Валентина</p>
        <p className='text-sm text-gray-600 ml-5 mt-[10px]'>Подарок уже через 2 дняДень всех влюблённых<br /> не за горами. Расскажи о своих чувствах с<br /> помощью сладкой валентинки от МакаронШоп</p>
      </div>     
      </div>
      <button className='mt-[35px] px-[48px] py-[18px] border border-[#4E9DD3] rounded-[3px] text-sm font-semibold hover:text-white hover:bg-[#4E9DD3] transition-all'>Все новости</button>
    </div>
  )
}

export default News
