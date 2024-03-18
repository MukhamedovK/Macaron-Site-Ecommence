import React from 'react'

const Home = () => {
  return (
    <>
      <main className='bg-[#F7F7F7] text-[#292929]'>
        <section className='container h-screen'>
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
          <div className="flex flex-wrap">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
