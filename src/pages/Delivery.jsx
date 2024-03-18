import React from 'react'

const Delivery = () => {
  return (
    <>
      <main>
      <section className='container bg-[#F7F7F7] h-screen'>
        <div className="flex flex-1 gap-[102px]">
          <div className="mb-[42px] ml-[157px]">
            <img src="/delivery-img/Group.png" alt="" className='max-w-[500px] max-h-[277.61px] mt-[280px]' />
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
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63877.579563231884!2d30.43530608155774!3d59.9790181203503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963239d71977d5%3A0xe425f7af1f8f4a4e!2z0JHQpiAi0KHQvtCy0LAiLCDRg9C7LiDQnNCw0YDRiNCw0LvQsCBU0YPRhdCw0YfQtdCy0YHQutC-0LPQviwgMjIsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5NTA2Nw!5e0!3m2!1sru!2s!4v1710552342909!5m2!1sru!2s"
          width="100%"
          height="387"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
    </>
  )
}

export default Delivery
