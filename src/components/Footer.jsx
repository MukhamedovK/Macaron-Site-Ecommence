import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#EBEDEE] text-[#292929]'>
          <div className="flex w-[1380px] h-[318px] justify-between ml-[134px]">
            <div className="flex flex-col mt-[58px]">
              <div className="flex gap-[40px]">
                <div className="flex flex-col items-center">
                  <img src="/footer-img/Frame.png" alt="" className='w-[44.85px] h-[39px]' />
                  <p className='text-[12px] mt-[14px] text-center flex'>Готовим вручную <br /> и с любовью</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/footer-img/Group 18.png" alt="" className='w-[49.66px] h-[34.35px]' />
                  <p className='text-[12px] mt-[16.65px] flex text-center'>Доставим<br /> в день заказа</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/footer-img/Vector.png" alt="" className='w-[28.46px] h-[37px]' />
                  <p className='text-[12px] mt-[15px] flex text-center'>100% <br /> миндальная мука<br /> и натуральные <br /> ингредиенты</p>
                </div>
              </div>
              <p className='text-[12px] mt-[28px] text-gray-500'>© 2021 МакароншопООО<br /> "Квантум", Санкт-Петербург,  улица Маршала Тухачевского,<br /> дом 22</p>
            </div>
    
            <div className="flex gap-[60px] mt-[58px]">
              <ul className='flex'>
                <li className='flex flex-col'>
                  <p className='font-semibold'>ИНФОРМАЦИЯ</p>
                  <p className='text-[14px] mt-[18px]'>О компании</p>
                  <Link to="/guarantees"><p className='text-[14px] mt-[15px]'>Гарантии вкуса и  свежести</p></Link>
                  <Link to="/delivery"><p className='text-[14px] mt-[15px]'>Доставка и оплата</p></Link>
                  <Link to="/contacts"><p className='text-[14px] mt-[15px]'>Контакты</p></Link>
                </li>
              </ul>
    
    
              <ul>
                <li className='flex flex-col gap-[15px]'>
                  <p className='font-semibold'>КАТАЛОГ</p>
                  <Link to="/desertcatalog"><p className='text-[14px] leading-[17px] '>Каталог десертов</p></Link>
                  <Link to="/readysets"><p className='text-[14px] leading-[17px] '>Готовые наборы</p></Link>
                  <p className='text-[14px] leading-[17px] '>Собрать свой набор</p>
                  <p className='text-[14px] leading-[17px] '>Акции</p>
                </li>
              </ul>
    
              <ul>
                <li className='flex flex-col gap-[15px]'>
                  <p className='font-semibold'>ДЛЯ БИЗНЕСА</p>
                  <p className='text-[14px] leading-[17px] '>Корпоративные подарки</p>
                  <p className='text-[14px] leading-[17px] '>Для юридических лиц</p>
                  <p className='text-[14px] leading-[17px] '>Оптовикам</p>
                </li>
              </ul>
    
            </div>
    
            <div className="flex flex-col items-center ml-[49px] mr-[134px] mt-[58px]">
              <div className="flex flex-col text-end">
                <p className='text-[18px] font-semibold'>+7 (812) 309 82 88</p>
                <p className='mt-[5px]'>с 9:00 до 21:00</p>
              </div>
              <div>
                <ul>
                  <li className='flex gap-[18px] mt-[70px]'>
                    <Link><img src="/footer-img/Group 27.png" alt="" className='max-w-[40px] max-h-[40px]' /></Link>
                    <Link><img src="/footer-img/Group 28.png" alt="" className='max-w-[40px] max-h-[40px]' /></Link>
                    <Link><img src="/footer-img/Group 29.png" alt="" className='max-w-[40px] max-h-[40px]' /></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

  )
}

export default Footer
