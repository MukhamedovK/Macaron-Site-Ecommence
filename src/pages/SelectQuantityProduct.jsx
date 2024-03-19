import React from 'react'
import { Link } from 'react-router-dom'



const SelectQuantityProduct = () => {
  let card = [
    {
      img: '/selectQtyProduct-img/Group 152.png',
      name: 'Набор из 6 макарон',
      price: 350
    },
    {
      img: '/selectQtyProduct-img/Group 153.png',
      name: 'Набор из 12 макарон',
      price: 700
    },
    {
      img: '/selectQtyProduct-img/Group 154.png',
      name: 'Набор из 24 макарон',
      price: 1400
    },
    {
      img: '/selectQtyProduct-img/Group 155.png',
      name: 'Набор из 48 макарон',
      price: 2800
    },
    {
      img: '/selectQtyProduct-img/Group 158.png',
      name: 'Набор из 40 макарон в круглой коробке',
      price: 3000
    },
    {
      img: '/selectQtyProduct-img/Group 159.png',
      name: 'Набор из 70 макарон в круглой коробке',
      price: 5000
    },
  ]
  console.log(card)
  return (
    <div className='flex flex-col justify-center items-center bg-[#EDEDF0]'>
      <h2 className='text-[30px] font-semibold leading-[36px] text-center mt-[70px]'>Выберите количество</h2>
      <div className='flex flex-wrap justify-center items-center gap-[30px] p-12'>
        {card.map((item, id) => (
          <div key={id} className='flex flex-col justify-center items-center bg-[#FFFFFF] w-[271px] h-[317px] rounded border-[1px] border-slate-300 text-center'>
            <img src={item.img} alt="" className='p-3' />
            <p className='mt-7 text-[14px] font-semibold leading-[17px] text-[#292929] w-[235px] text-center'>{item.name}</p>
            <p className='mt-[5px] text-[18px] font-semibold leading-[22px] text-[#E7426A] mb-[30px]'>{item.price} руб.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectQuantityProduct
