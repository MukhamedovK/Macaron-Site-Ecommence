import React from 'react'

const Holidays = () => {
  return (
    <div className="flex flex-col text-center mt-[142px]">
            <p className='font-semibold text-[30px] mb-[47px]'>Ближайшие праздники</p>
            <div className="flex gap-[120px] items-center justify-center">
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm hover:scale-105 transition duration-150 hover:text-[#FF4D6D]">
              <img src="public/home-img/holidays-img/Frame (1).png" alt="" />
              <p className='mt-[3px]'>Скоро <br />День рождения<br /> близкого человека </p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm hover:scale-105 transition duration-150 hover:text-[#FF4D6D]">
              <img src="public/home-img/holidays-img/Frame (2).png" alt="" />
              <p className='mt-[7px]'>1 января <br />Новый Год <br />2021</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm hover:scale-105 transition duration-150 hover:text-[#FF4D6D]">
              <img src="public/home-img/holidays-img/Frame (3).png" alt="" />
              <p className='mt-[10px]'>14 февраля <br />День Святого <br />Валентина</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm hover:scale-105 transition duration-150 hover:text-[#FF4D6D]">
              <img src="public/home-img/holidays-img/Frame (4).png" alt="" />
              <p className='mt-[11px]'>23 февраля <br />День Защитника <br />Отечества</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm hover:scale-105 transition duration-150 hover:text-[#FF4D6D]">
              <img src="public/home-img/holidays-img/Frame (5).png" alt="" />
              <p className='mt-[16px]'>8 марта <br />Международный <br />Женский День</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm hover:scale-105 transition duration-150 hover:text-[#FF4D6D]">
              <img src="public/home-img/holidays-img/Frame (6).png" alt="" />
              <p className='mt-[22px]'>9 марта <br />День Сурка</p>
            </div>
            </div>
          </div>
  )
}

export default Holidays
