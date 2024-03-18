import React from 'react'

const Contact = () => {
  return (
    <>
<main className='bg-[#F7F7F7]'>
  <section className='container  min-h-screen'>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[134px]">
      <div className="lg:mt-[50px]">
        <img 
          className='h-[434px] lg:h-auto'
          src="public/contacts-img/Group 207.png" 
          alt="" />
      </div>
      <div className="lg:mt-[110px] text-[#292929]">
        <h1 className='text-[42px] lg:text-[48px] font-semibold mb-[30px]'>Контакты</h1>
        <p className='text-lg lg:text-xl font-semibold'>Производство</p>
        <p className='text-lg lg:text-xl mt-[5px]'>Маршала Тухачевского, 22 <br /> Время работы: с 8 до 19:30.</p>
        <p className='mt-7 mb-[5px] text-lg lg:text-xl font-semibold'>Пункты самовывоза:</p>
        <p className='mb-[5px]'>Кафе “Морошка”. Маршала Тухачевского, 22 <br /> (с 8 до 19:30)</p>
        <p className='mb-8'>Кафе “Мята”. Наб канала Грибоедова, 37 <br /> (с 10 до 22)</p>
        <p className='font-semibold text-lg lg:text-xl'>Телефоны:</p>
        <p className='mt-[5px]'>8 (812) 309-82-88 основной номер</p>
        <p className='mt-[8px]'>8 (981) 841-85-25 для жалоб и предложений</p>
      </div>
    </div>
  </section>
</main>

    </> 
  )
}

export default Contact
