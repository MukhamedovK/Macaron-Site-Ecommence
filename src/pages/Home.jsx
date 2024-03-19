import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <main className='bg-[#F7F7F7] text-[#292929]'>
        <section className='container'>
          <div className="flex flex-1 items-center justify-center gap-[145px]">
            <div className="mt-[40px]">
              <img src="/home-img/Слой 0 1.png" alt="" />
            </div>
            <div className="text-center">
              <p className='text-[22px] font-semibold'>Macaronshop</p>
              <p className='font-semibold'>---since 2013---</p>
              <p className='text-[42px] font-semibold'>Настоящая любовь</p>
              <p className='text-lg'>Пирожные макарон и другие десерты<br /> из натуральных ингредиентов, приготовленные с любовью</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-[30px]  justify-center mt-[60px] text-center cursor-pointer">
          <div className="bg-[#FFDBC3] h-[260px] w-[40%] items-center flex justify-center flex-col">
            <img src="public/home-img/set-cards-img/Group 125 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Готовые наборы</p>
            <p className='mt-[10px]'>Готовые наборы со скидкой. <br /> Вы можете подобрать набор на подходящий случай.</p>
          </div>
          <div className="bg-[#FFC2CC] h-[260px] w-[40%] items-center flex justify-center flex-col">
            <img src="public/home-img/set-cards-img/Group 122 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Собрать свой набор</p>
            <p className='mt-[10px]'>Выбрать количество макарун, и выбрать вкусы</p>
          </div>
          <div className="bg-[#B4EAB3] h-[260px] w-[40%] items-center flex justify-center flex-col">
            <img src="public/home-img/set-cards-img/Group 124 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Набор с индивидуальной печатью</p>
            <p className='mt-[10px]'>Собрать набор макарон с уникальным дизайном. </p>
          </div>
          <div className="bg-[#FDD5CD] h-[260px] w-[40%] items-center flex justify-center flex-col">
            <img src="public/home-img/set-cards-img/Group 123 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Свадебные предложения</p>
            <p className='mt-[10px]'>Нежные пирожные макаронс с разными вкусами для<br /> украшения вашего свадебного торжества</p>
          </div>
          <div className="bg-[#A8DCDF] h-[260px] w-[40%] items-center flex justify-center flex-col">
            <img src="public/home-img/set-cards-img/Group 131 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Корпоративные подарки</p>
            <p className='mt-[10px]'>От 85 руб за шт. С уникальным дизайном. <br />Приятный комплимент для коллег и партнеров</p>
          </div>
          <div className="bg-[#C4C6EC] h-[260px] w-[40%] items-center flex justify-center flex-col">
            <img src="public/home-img/set-cards-img/Group 130 (2).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Оптовые поставки</p>
            <p className='mt-[10px]'>Предложение для кофеен, кафе, отелей и т.д. <br />Посмотрите условия сотрудничества и отзывы.</p>
          </div>
          </div>
        </section>
        <section className='container'>
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
          <div className="flex flex-col text-center mt-[142px]">
            <p className='font-semibold text-[30px] mb-[47px]'>Ближайшие праздники</p>
            <div className="flex gap-[120px] items-center justify-center">
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm">
              <img src="public/home-img/holidays-img/Frame (1).png" alt="" />
              <p className='mt-[3px]'>Скоро <br />День рождения<br /> близкого человека </p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm ">
              <img src="public/home-img/holidays-img/Frame (2).png" alt="" />
              <p className='mt-[7px]'>1 января <br />Новый Год <br />2021</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm ">
              <img src="public/home-img/holidays-img/Frame (3).png" alt="" />
              <p className='mt-[10px]'>14 февраля <br />День Святого <br />Валентина</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm ">
              <img src="public/home-img/holidays-img/Frame (4).png" alt="" />
              <p className='mt-[11px]'>23 февраля <br />День Защитника <br />Отечества</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm ">
              <img src="public/home-img/holidays-img/Frame (5).png" alt="" />
              <p className='mt-[16px]'>8 марта <br />Международный <br />Женский День</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center font-semibold text-sm ">
              <img src="public/home-img/holidays-img/Frame (6).png" alt="" />
              <p className='mt-[22px]'>9 марта <br />День Сурка</p>
            </div>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="flex flex-col mt-[112px] text-center">
            <p className='font-semibold text-[30px] mb-[42px]'>Популярные наборы</p>
            <div className="flex flex-wrap gap-[30px] items-start justify-center">
            <div class="w-[370px] h-[460px] bg-white rounded-md border border-gray-300 overflow-hidden shadow-lg flex flex-col">
              <img src="public/home-img/popular-sets-img/Rectangle 172 (4).png" alt="Heart Image" class="w-full h-auto" />
              <div class="p-6 flex flex-col justify-between">
                <div>
                  <h2 class="text-2xl font-bold text-gray-800 mb-2">Сердце</h2>
                  <p class="text-sm text-gray-600 mb-4">24 штуки в коробке в виде сердца.<br />Ассорти из 6 вкусов</p>
                </div>
              <div class="flex items-center justify-between">
                <p class="text-[#E7426A] text-lg font-semibold">$2990</p>
                <button class="px-4 py-2 bg-[#E7426A] text-white text-sm font-semibold rounded-md hover:bg-[#C72E58] focus:outline-none focus:bg-[#C72E58]">В корзину</button>                   
              </div>
            </div>
          </div>


            <div className="">
              <img src="public/home-img/popular-sets-img/Rectangle 174.png" alt="" />
              <p></p>
              <p></p>
              <div className="flex flex-1 gap-[95px] items-center justify-center">
                <p className='text-[#E7426A] text-[18px] font-semibold'>$2990</p>
                <ul><li><a href="#">В корзину</a></li> </ul>   
              </div>
            </div>
            <div className="">
              <img src="public/home-img/popular-sets-img/Rectangle 176.png" alt="" />
              <p></p>
              <p></p>
              <div className="flex flex-1 gap-[95px] items-center justify-center">
                <p className='text-[#E7426A] text-[18px] font-semibold'>$2990</p>
                <ul><li><a href="#">В корзину</a></li> </ul>   
              </div>
            </div>
            <div className="">
              <img src="public/home-img/popular-sets-img/Rectangle 282.png" alt="" />
              <p></p>
              <p></p>
              <div className="flex flex-1 gap-[95px] items-center justify-center">
                <p className='text-[#E7426A] text-[18px] font-semibold'>$2990</p>
                <ul><li><a href="#">В корзину</a></li> </ul>                  
              </div>
            </div>
            <div className="">
              <img src="public/home-img/popular-sets-img/Rectangle 283.png" alt="" />
              <p></p>
              <p></p>
              <div className="flex flex-1 gap-[95px] items-center justify-center">
                <p className='text-[#E7426A] text-[18px] font-semibold'>$2990</p>
                <ul><li><a href="#">В корзину</a></li> </ul>   
              </div>
            </div>
            <div className="">
              <img src="public/home-img/popular-sets-img/Rectangle 176.png" alt="" />
              <p></p>
              <p></p>
              <div className="flex flex-1 gap-[95px] items-center justify-center">
                <p className='text-[#E7426A] text-[18px] font-semibold'>$2990</p>
                <ul><li><a href="#">В корзину</a></li> </ul>               
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
