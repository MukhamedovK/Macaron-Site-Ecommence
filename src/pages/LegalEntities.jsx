import React from 'react'
import { Link } from 'react-router-dom'

const LegalEntities = () => {
  return (
    <>
      <div className='flex w-[80%] mx-auto gap-[38px] pt-[138px ]'>
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
    </>
  )
}

export default LegalEntities
