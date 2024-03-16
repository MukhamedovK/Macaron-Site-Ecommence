import React from 'react'

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
              <a href="#" className='font-semibold'>Информация</a>
              <a href="#" className='text-[14px] mt-[18px]'>О компании</a>
              <a href="#" className='text-[14px] mt-[15px]'>Гарантии вкуса и  свежести</a>
              <a href="#" className='text-[14px] mt-[15px]'>Доставка и оплата</a>
              <a href="#" className='text-[14px] mt-[15px]'>Доставка и оплата</a>
            </li>
          </ul>


          <ul>
            <li className='flex flex-col gap-[15px]'>
              <a href="#" className='font-semibold'>Каталог</a>
              <a href="#" className='text-[14px] leading-[17px] '>Каталог десертов</a>
              <a href="#" className='text-[14px] leading-[17px] '>Готовые наборы</a>
              <a href="#" className='text-[14px] leading-[17px] '>Собрать свой набор</a>
              <a href="#" className='text-[14px] leading-[17px] '>Акции</a>
            </li>
          </ul>

          <ul>
            <li className='flex flex-col gap-[15px]'>
              <a href="#" className='font-semibold'>ДЛЯ БИЗНЕСА</a>
              <a href="#" className='text-[14px] leading-[17px] '>Корпоративные подарки</a>
              <a href="#" className='text-[14px] leading-[17px] '>Для юридических лиц</a>
              <a href="#" className='text-[14px] leading-[17px] '>Оповикам</a>
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
                <a href="https://www.instagram.com/">
                  <img src="/footer-img/Group 27.png" alt="" className='max-w-[40px] max-h-[40px]' />
                </a>
                <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjXjMHXgvaEAxUUZpEFHS5zBJsYABAAGgJscg&ase=2&gclid=CjwKCAjw48-vBhBbEiwAzqrZVJcGrmVo4IptDpzwcN3dOXYxUQL0_Z_A8VcHVTTszkq2w6DIxKGt1RoCLE4QAvD_BwE&ohost=www.google.com&cid=CAESVuD2xFzliR8WZD1gkCibd-3nD40ai_4h1GlCZpuRAbrHIgaI773KykgLRPh7KbwbEEC8AwpYW9tS7_ozH32qUPSa_1IQQBn2XeuBPpEiA4LOrqftr0RF&sig=AOD64_0zsCVQfma2Muhp-LHWZHxv4O4bXg&q&nis=4&adurl&ved=2ahUKEwjgybvXgvaEAxX-FBAIHfrEAVMQ0Qx6BAgGEAE">
                  <img src="/footer-img/Group 28.png" alt="" className='max-w-[40px] max-h-[40px]' />
                </a>
                <a href="https://m.vk.com/">
                  <img src="/footer-img/Group 29.png" alt="" className='max-w-[40px] max-h-[40px]' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
