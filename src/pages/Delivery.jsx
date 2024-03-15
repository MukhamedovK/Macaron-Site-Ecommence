import React from 'react'

const Delivery = () => {
  return (
    <main>
      <section className='container bg-[#F7F7F7] h-screen'>
        <div className="flex flex-1 gap-[102px]">
          <div className="mb-[42px] ml-[157px]">
            <img src="public/images/delivery-img/Group.png" alt="" className='max-w-[500px] max-h-[277.61px] mt-[280px]' />
          </div>
          <div className="flex flex-col mt-[105px]">
            <h1 className='font-semibold text-[42px]'>Доставка и оплата</h1>
            <p className='max-w-[420px] text-[18px] mt-[17px]'>Для наших покупателей доступны 2 способа доставки: курьерская доставка по Санкт-Петербургу в пределах КАД и самовывоз.</p>
            <h3 className='font-[600] text-[18px] text-[#292929] mt-[20px] mb-[7px]'>Курьерска доставка:</h3>
            <p className='leading-[20.8px] text-gray-600'>Курьеры работают каждый день с 11 до 21 часа. <br /> Доставка макарон осуществляется только по<br /> Санкт-Петербургу в пределах кольцевой автомобильной<br /> дороги (КАД).
              <ul>
                <li>
                  <a href="#" className='text-pink-500 font-semibold'>Точная зона доставки.</a>
                </li>
              </ul>
              <p className='mt-[7px] text-gray-600'>Если Вы готовы принять заказ в интервале с 12 до 17 часов<br /> или с 17 до 21 часа, то доставка будет стоить 300 рублей.</p>

              <p className='mt-[7px] text-gray-600'>При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.</p>

              <p className='mt-[7px] text-gray-600'>При оформлении заказа до 15 часов возможна доставка <br /> в тот же день в промежутке с 17 до 21 часа.</p>

              <p className='mt-[7px] text-gray-600'>Курьер предупредит Вас о своём прибытии за 30-40 минут.</p>
            </p>
          </div>
        </div>
      </section>
      <section className='container h-screen'>
        <div className="flex flex-1 gap-[150px]">
          <div className="mt-[104px] ml-[245px] mb-[92px]">
            <p className='text-[18px] font-semibold text-[#292929]'>Самовывоз</p>
            <p className='mt-[10px]'>Вы можете сделать заказ и забрать его самостоятельно с<br /> нашего производства по адресу: ул. Маршала Тухачевского 22 <br /> БЦ "Сова"
              <p className='mt-[10px]'>Заказ необходимо сделать до 20 часов, чтобы забрать его на <br /> следующий день в пункте самовывоза в любое удобное время<br /> в промежутке с 13 до 22 часов.</p>
              <p className='mt-[10px]'>Оплатить заказ банковской картой можно заранее при<br /> оформлении. Непосредственно при получении банковской <br />картой расплатиться нельзя.</p>
            </p>
            <p className='text-[18px] font-semibold text-[#292929] mt-[40px]'>Оплата</p>
            <p className='mt-[10px]'>Вы можете оплатить заказ при получении наличными или<br /> заранее оплатить заказ банковской картой<div className="br"></div> Для этого укажите выбранный способ при оформлении<br /> заказа.
              <p className='mt-[10px]'>Оплата банковской картой удобна, если вы хотите отправить<br /> десерты в подарок или не желаете возиться с наличными при<br /> получении заказа.</p>
              <p className='mt-[10px]'>Если у Вас нет карты российского банка, мы можем принять<br /> оплату через платёжную систему PayPal.</p>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div id="map" style={{ width: '400px', height: '400px' }}></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Delivery
