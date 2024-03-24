import React from 'react'
import { Link } from 'react-router-dom'
import SwiperMain from '../components/SwiperMain'

const ForWedding = () => {
  const cardData = [
    { img: 'public/forWedding-img/Rectangle 239.png', title: 'Набор из 9 макарон', description: "С праздничной печатью и пожеланиями для молодожёнов", price:'600 руб' },
    { img: 'public/forWedding-img/Rectangle 315.png', title: 'Для гостей', description: "Подарочный набор из 2 макарон с печатью жениха и невесты в прозрачной упаковке", price:'200 руб' },
    { img: 'public/forWedding-img/Rectangle 381.png', title: 'Пирамидка из макаронс', description: "Прекрасное дополнение праздничного стола ", price:'6600 руб' },
    { img: 'public/forWedding-img/Rectangle 382.png', title: 'Большая пирамида (10 этажей) ', description: "Для свадьбы или банкета, 240 макарон по вашему выбору ", price:'14400 руб' },
    { img: 'public/forWedding-img/Rectangle 385.png', title: 'Макаронс с именами гостей', description: "Описание предложения на пару строк или более", price:'80 руб' },
    { img: 'public/forWedding-img/Rectangle 386.png', title: 'Набор для девичника', description: "Дерзкий набор для девичника. 30 макаронс с разными вкусами и забавными назписями", price:'3900 руб' }
  ];

  const feedbacks = [
    { title: 'Очень хорошие пироженки и трубочки, рекомендую', text: 'Отзыв блаблабла' },
    { title: 'Очень хорошие пироженки и трубочки, рекомендую', text: 'Банальные, но неопровержимые выводы, а также представители современных социальных резервов ассоциативно распределены по отраслям. Противоположная точка зрения подразумевает, что многие известные личности могут быть обнародованы.  ' },
    { title: 'Заголовок отзыва', text: 'Ключевые особенности структуры проекта неоднозначны и будут указаны как претенденты на роль ключевых факторов. А также явные признаки победы институционализации будут заблокированы в рамках своих собственных рациональных ограничений. Элементы политического процесса функционально разнесены на независимые элементы. В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов обнародованы.' },
    { title: 'Очень хорошие пироженки и трубочки, рекомендую', text: 'Являясь всего лишь частью общей картины, активно развивающиеся страны третьего мира, вне зависимости от их уровня, должны быть указаны как претенденты на роль ключевых факторов. ' },

  ];

  return (
    <div>
      <div className='py-[40px]'>
      <section className='w-[80%] mx-auto'>
      <div className='flex  gap-[158px] pt-[138px ]'>
        <div className="left relative">
          
          <img src="public/forWedding-img/Ellipse 1.png" className='absolute bottom-0 left-[40%]' alt="" />
          <img src="public/forWedding-img/Ellipse 2.png" className='absolute ' alt="" />
          <img src="public/forWedding-img/вазочка 2.png" className='relative' alt="" />
          <img src="public/forWedding-img/Ellipse 6.png" className='absolute left-[20%] top-[20%]' alt="" />
          <img src="public/forWedding-img/Ellipse 7.png" className='absolute top-[50%] left-[30%]' alt="" />
          <img src="public/forWedding-img/Layer 23 2.png" className='absolute top-[20%] right-[-10%]' alt="" />
          <img src="public/forWedding-img/Группа 1 1.png" className='absolute top-[50%] right-[-30%]' alt="" />
          <img src="public/forWedding-img/Группа 2 1.png" className='absolute top-[30%] left-[-10%]' alt="" />

        </div>
        <div className="right flex flex-col">
          <div className='text-center pb-[41px] justify-center'>
          <h2 className='text-[42px] font-semibold pb-[14px] '>Свадебное предложение</h2>
          <p className='text-[18px] w-[499px] leading-[21.92px] mx-auto pb-[39px]'>Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества</p>
          <div className='flex gap-[10px] pb-[2rem] justify-center'>
            <button className='w-[230px] h-[50px] flex items-center justify-center border border-[#4E9DD3] rounded-[3px] hover:bg-[#4E9DD3] hover:text-white transition duration-200 text-[14px] font-semibold'>Презентация</button>
            <button className='w-[230px] h-[50px] flex items-center justify-center border border-[#4E9DD3] rounded-[3px] hover:bg-[#4E9DD3] hover:text-white transition duration-200 text-[14px] font-semibold'>Прайс-лист</button>
          </div>
          </div>
          <div>
          <p className='pb-[1rem]'>Мы предлагаем: </p>
          <p className=' max-w-[42rem]'>Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. </p>
          </div>
        </div> 
      </div>
      </section>
      <section className='w-[80%] mx-auto flex flex-col items-center mb-[6rem]'>
        <h2 className='font-semibold text-[30px] pb-[3rem]'>Наборы для свадьбы</h2>
      <div className='flex flex-wrap justify-center gap-[30px]'>
                {cardData.map((item, index) => (
                    <div key={index} className='w-[370px] bg-white rounded-lg border border-gray-300 shadow-lg overflow-hidden'>
                        <img src={item.img} alt={item.title} />
                        <div className='p-4 h-[130px]'>
                            <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                            <p className='text-sm text-gray-600 mb-8'>{item.description}</p>
                        </div>
                            <div className='flex justify-between items-center  border-t border-gray-300 '>
                                <div className='border-r p-4 w-[60%]'><p className='text-[#E7426A] text-lg font-semibold'>{item.price}</p></div>
                                <div className='flex items-center p-4'>
                                    <img src="public/home-img/popularsets-img/Group 3 (1).png" alt="Cart Icon" className=' mr-2' />
                                    <Link to="/Basket"><button className='text-sm font-semibold'>В корзину</button></Link>
                                </div>
                            </div>
                        
                    </div>
                ))}
            </div>
      </section>
      <section style={{ backgroundImage: "url('public/forWedding-img/Group 20.png')" }} className='h-[610px] bg-cover bg-no-repeat flex items-center' >
            <div className='flex flex-col w-[80%] mx-auto items-end'>
            <div className='w-[35.6rem]'>
            <h2 className='font-semibold text-[30px] pb-[13px]'>Мы открыты для новых идей</h2>
            <p className='pb-[42px] leading-[22px] text-[18px]'>Каждое событие уникально и мы готовы предложить индивидуальные решения для Вашего мероптиятия</p>
            <form action="" className='flex flex-col'>
              <div className='flex justify-between pb-[1rem]'>
                <div className='flex flex-col gap-[.5rem]'>
                  <label htmlFor="nameInput">Ваше имя*</label>
                  <input type="text" id='nameInput' placeholder='Укажите имя' className='w-[270px] h-[50px] px-[12px] border-none outline-none'/>
                </div>
                <div className='flex flex-col gap-[.5rem]'>
                  <label htmlFor="numberInput">Телефон*</label>
                  <input type="text" id='numberInput' placeholder='+998 (___) ___-__-__' className='w-[270px] h-[50px] px-[12px] border-none outline-none'/>
                </div>
              </div>
              <div className='flex flex-col gap-[.5rem]'>
                <label htmlFor="textarea">Опишите Вашу идею</label>
                <textarea name="" id="textarea" cols="30" rows="3" className='outline-none p-[12px] max-h-[12rem]'></textarea>
              </div>
              <div>
              <button className='px-[60px] py-[17px] bg-[#E7426A] text-white rounded-[3px] mb-[23px] hover:bg-[#ed5d83] transition mt-[1.5rem]' >Отправить заявку</button>
              <p className='text-[11px]'>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с Договором оферты и разрешаю обработку моих персональных данных в соответствии с <Link to='/policy'><span className='text-[#4E9DD3]'>Политикой конфиденциальности</span></Link></p>
              </div>
            </form>
            </div>
            </div>
      </section>
      </div>
    </div>
  )
}

export default ForWedding
