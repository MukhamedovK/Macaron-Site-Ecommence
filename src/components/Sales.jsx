import React from 'react'

const Sales = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[94px]">
            <p className='font-semibold text-[30px] mb-[50px]'>Акции</p>
            <div className="flex gap-[30px] text-white">
            <div className="bg-[#8CC4EC]  rounded-md w-[270px] h-[380px] text-center">
              <img src="public/home-img/sales-img/Rectangle 172.png" alt="" />
              <p className='font-semibold p-5'>По СПб в районе КАД –  от<br /> 3000₽ <br />По МСК – от 5000₽</p>
            </div>
            <div className="bg-[#FF4D6D]  rounded-md w-[270px] h-[380px] text-center">
              <img src="public/home-img/sales-img/Rectangle 172 (1).png" alt="" />
              <p className='font-semibold p-5'>Шоколадное пирожное<br /> картошка на основе<br /> бисквита!</p>
            </div>
            <div className="bg-[#FF4D6D]  rounded-md w-[270px] h-[380px] text-center">
              <img src="public/home-img/sales-img/Rectangle 172 (2).png" alt="" />
              <p className='font-semibold p-5'>Аппетитные конфеты<br /> на основе миндального<br /> печенья и крема</p>
            </div>
            <div className="bg-[#FF4D6D]  rounded-md w-[270px] h-[380px] text-center">
              <img src="public/home-img/sales-img/Rectangle 172 (3).png" alt="" />
              <p className='font-semibold p-5'>Карамель на палочке <br />из натуральных<br /> ингредиентов</p>
            </div>
            </div>
          </div>
  )
}

export default Sales
