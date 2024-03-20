import React from 'react'
import { Link } from 'react-router-dom'
import SwiperMain from '../components/SwiperMain';

const LegalEntities = () => {
  const cardData = [
    { img: 'public/legals-img/Group 131.png', text: 'Корпоративные подарки' },
    { img: 'public/legals-img/Group 178.png', text: 'Сотрудничество с интернет магазинами' },
    { img: 'public/legals-img/Group 179.png', text: 'Сотрудничество с кафе и ресторанами' },
    { img: 'public/legals-img/Group 180.png', text: 'Сотрудничество с кофейнями' },
    { img: 'public/legals-img/Group 181.png', text: 'Сотрудничество с отелями' },
    { img: 'public/legals-img/Group 182.png', text: 'Для Retail' },
    { img: 'public/legals-img/Group 183.png', text: 'Кенди бары для мероприятий' },
    { img: 'public/legals-img/Group 184.png', text: 'И для других сфер бизнеса' },
  ];

  const feedbacks = [
    { title: 'Очень хорошие пироженки и трубочки, рекомендую', text: 'Отзыв блаблабла' },
    { title: 'Очень хорошие пироженки и трубочки, рекомендую', text: 'Банальные, но неопровержимые выводы, а также представители современных социальных резервов ассоциативно распределены по отраслям. Противоположная точка зрения подразумевает, что многие известные личности могут быть обнародованы.  ' },
    { title: 'Заголовок отзыва', text: 'Ключевые особенности структуры проекта неоднозначны и будут указаны как претенденты на роль ключевых факторов. А также явные признаки победы институционализации будут заблокированы в рамках своих собственных рациональных ограничений. Элементы политического процесса функционально разнесены на независимые элементы. В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов обнародованы.' },
    { title: 'Очень хорошие пироженки и трубочки, рекомендую', text: 'Являясь всего лишь частью общей картины, активно развивающиеся страны третьего мира, вне зависимости от их уровня, должны быть указаны как претенденты на роль ключевых факторов. ' },

  ];


  return (
    <>
      <div className='py-[40px]'>
      <section className='w-[80%] mx-auto'>
      <div className='flex  gap-[38px] pt-[138px ]'>
        <div className="left">
          <img src="public/legals-img/image 1.png" alt="" />
        </div>
        <div className="right flex flex-col">
          <div className='text-center pb-[41px] justify-center'>
          <h2 className='text-[42px] font-semibold pb-[14px] '>Поставки пирожных оптом</h2>
          <p className='text-[18px] w-[499px] pb-[12px] leading-[21.92px] mx-auto'>Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга. Присоединяйтесь! </p>
          <div className='flex gap-[10px] justify-center'>
            <button className='w-[230px] h-[50px] flex items-center justify-center border border-[#4E9DD3] rounded-[3px] hover:bg-[#4E9DD3] hover:text-white transition duration-200 text-[14px] font-semibold'>Презентация</button>
            <button className='w-[230px] h-[50px] flex items-center justify-center border border-[#4E9DD3] rounded-[3px] hover:bg-[#4E9DD3] hover:text-white transition duration-200 text-[14px] font-semibold'>Прайс-лист</button>
          </div>
          </div>
          <div>
          <p>Мы предлагаем: </p>
          <ul className='flex flex-col leading-[19.49px]'>
            <li>•  прямые поставки от производителя, всегда свежая продукция;</li>
            <li>•  ассортимент с высоким средним чеком и маржой; </li>
            <li>•  бесплатные акриловые шоубоксы для витрины;</li>
            <li>•  продукцию для дегустации или снижение цены для проведения промо-акций; </li>
            <li>•  гибкие условия сотрудничества и поставок.  </li>
          </ul>
          </div>
        </div> 
      </div>
      </section>
      <section className='w-[80%] mx-auto text-center items-center justify-center mt-[67px] pb-[113px]'>
          <h4 className='text-[30px] font-semibold mb-[53px]'>Что мы можем вам предложить:</h4>
          <div className="cards flex flex-wrap gap-[30px] mx-auto items-center">
            {cardData.map((item, index) => (
              <div className="card flex flex-col justify-center items-center w-[280px]" key={index}>
              <img src={item.img} className='w-[90px] h-[90px]' alt="" />
              <p className='w-[150px] text-[14px] font-semibold'>{item.text}</p>
            </div>
            ))}
          </div>
        </section>
        <section className='inputs bg-[#F7EBE5]  flex flex-col  py-[76px]'>
            <div className='w-[80%] mx-auto flex flex-col items-center'>
            <h4 className='text-[30px] font-semibold w-[550px] text-center'>Заказать расчёт или отправить запрос на сотрудничество</h4>
            <form className='flex  gap-[30px] mt-[64px] pb-[39px]'>
              
                <div className='flex flex-col gap-[16px]'>
                  <div className='flex flex-col text-start gap-[5px]'>
                  <label htmlFor="inputName">Ваше имя*</label>
                  <input type="text" id='inputName' placeholder='Укажите имя' className='px-[14px] w-[370px] h-[50px] outline-none' />
                  </div>
                  
                  <div className='flex flex-col text-start gap-[5px]'>
                  <label htmlFor="phoneNumber">Ваш телефон*</label>
                  <input type="number " id='phoneNumber' placeholder='+998 (___) ___-__-__' className='px-[14px] w-[370px] h-[50px] outline-none' />
                  </div>
                </div>


                <div className='flex flex-col gap-[16px]'>
                  <div className='flex flex-col text-start gap-[5px]'>
                  <label htmlFor="companyName">Название компании</label>
                  <input type="text" id='companyName' placeholder='Укажите имя' className='px-[14px] w-[370px] h-[50px] outline-none' />
                  </div>

                  <div className='flex flex-col text-start gap-[5px]'>
                  <label htmlFor="Email">E-mail</label>
                  <input type="email" id='Email' placeholder="Укажите email" className='px-[14px] w-[370px] h-[50px] outline-none' />
                  </div>
                </div>
                <div className='text-start flex flex-col gap-[5px]'>
                  <label htmlFor="">Добавить комментарий</label>
                  <textarea name="" id="textarea" cols="50" rows="6"></textarea>
              </div>
            </form>  
            <button className='px-[60px] py-[17px] bg-[#E7426A] text-white rounded-[3px] mb-[23px] hover:bg-[#ed5d83] transition' >Заказать расчёт</button>
            <div className='text-[11px] text-start flex gap-[3px]'><p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с Договором оферты и разрешаю обработку моих персональных данных в соответствии с </p><Link to="/privacy-policy"><p className='text-[#4E9DD3] hover:text-black transition'>Политикой конфиденциальности</p></Link></div>
            </div>
        </section>
        <section className='recommendations flex items-center flex-col justify-center w-[80%] mx-auto py-[60px]'>
          <h4 className='text-[30px] font-semibold pb-[25px]'>Нас рекомендуют</h4>
          <div className='flex flex-wrap'>
            {feedbacks.map((item, id) => (
              <div key={id} className='w-[370px] border border-[#EDEDF0] rounded-[5px] '>
                  <div className='border-b border-[#EDEDF0] py-[25px] px-[20px]'>
                    <h4 className='text-[18px] font-semibold pb-[10px]'>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                  <div className='py-[20px] flex items-center gap-[13px] px-[20px] justify-end'>
                    <div className='flex flex-col items-end'>
                    <p className='text-[12px] font-semibold'>Иванов Иван</p>
                    <p className='text-[12px] font-semibold'>Генеральный директор ООО “ААА”</p>
                    </div>
                    <img src="public/legals-img/Rectangle 391.png" className='w-[36px] h-[36px]' alt="" />
                  </div>
              </div>
            ))}
          </div>
        </section>
        <section className='swiper '>
              <SwiperMain/>
        </section>
      </div>
    </>
  )
}

export default LegalEntities
