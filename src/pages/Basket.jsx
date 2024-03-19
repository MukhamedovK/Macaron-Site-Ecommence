import React from 'react'
import { Link } from 'react-router-dom'

const Basket = () => {
  return (
    <div className='bg-[#EDEDF0]'>
      <h1 className='text-[30px] font-semibold leading-[36px] text-center pt-[70px]'>Ваша корзина</h1>
      <p className='text-center text-[#292929] text-[16px] font-[400] leading-[22px] mt-[10px]'>3 товара / 1030 руб.</p>
      <div className='flex justify-center gap-[30px] mt-[35px]'>
        <div className='bg-[#FFFFFF] w-[670px] h-[453px]'>
        </div>
        <div className='bg-[#FFFFFF] h-[369px] w-[473px] p-8'>
          <h3 className='text-[18px] font-semibold leading-[22px] mb-[10px]'>Итого</h3>
          <div className='flex justify-around items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px]'>Стоимость товаров</p>
            <hr className='w-[199px]' />
            <p>700 руб</p>
          </div>
          <div className='flex justify-around items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px]'>Скидка</p>
            <hr className='w-[309px]' />
            <p>0 руб</p>
          </div>
          <div className='flex justify-around items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px]'>Доставка</p>
            <hr className='w-[268px]' />
            <p>400 руб</p>
          </div>

          <hr className='mt-[20px] mb-[15px]' />
          <div className='flex justify-between items-baseline'>
            <p className='text-[16px] font-[400] leading-[22px]'>К оплате</p>
            <p className='text-[18px] font-[600] leading-[22px]'>1100 руб</p>
          </div>

          <hr className='mt-[20px] mb-[15px]' />
          <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-between items-center'>
              <label className='text-[16px] font-[400] leading-[22px]'>Промокод:</label>
              <div className='flex'>
                <input type="text" placeholder='Введите промокод' className='p-[12px] border-[1px] border-[#F7F7F7] outline-none h-[40px]' />
                <button className='w-[118px] bg-[#E7426A] text-[#FFFFFF]'>Применить</button>
              </div>
            </div>
            <button className='w-[254px] h-[50px] mt-[20px] rounded bg-[#E7426A] text-[#FFFFFF]'>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket
