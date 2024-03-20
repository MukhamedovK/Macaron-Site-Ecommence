import React from 'react'

const MacaroniCakes = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className='mt-[62px] text-[30px] font-semibold'>Каталог десертов</h1>
          <div className="flex flex-wrap flex-col">
            <div className="flex flex-1 w-[1168px] h-[385px] bg-[#FEB0E1] mt-[46px] rounded-md cursor-pointer">
                <img src="public/desertcatalog-img/IMG_3027 копия 1.png" alt="" />
                <div className="flex flex-col text-center">
                  <p className='font-semibold text-[30px] mt-[95px]'>Пирожные макарон</p>
                  <p className='text-lg mt-[17px]'>Самые классные, самые лучшие, свежие, воздушные, <br /> хрустящие макарушки. лучшее, что мы умеем делать.</p>
                <div className="flex gap-[9px] mt-[43px]">
                  <button className='border-[#4E9DD3] border bg-inherit hover:bg-[#4E9DD3] hover:text-white w-[230.77px] h-[50px]'>Готовые наборы</button>
                  <button className='border-[#4E9DD3] border bg-inherit hover:bg-[#4E9DD3] hover:text-white w-[230.77px] h-[50px]'>Собрать свой набор</button>
                </div>
              </div>
            </div>

            <div className="flex gap-[30.5px] mt-[35px]">
            <div className="flex flex-col w-[369px] h-[341px] bg-[#FFB84E] rounded-md items-center justify-center cursor-pointer">
              <img src="public/desertcatalog-img/IMG_2745 1.png" alt="" />
              <p className='text-white font-semibold text-lg mt-[32px]'>Трубочки со сгущенкой</p>
            </div>

            <div className="flex flex-col w-[369px] h-[341px] bg-[#FEB0E1] rounded-md items-center justify-center cursor-pointer">
              <img src="public/desertcatalog-img/IMG_3098 копия 1.png" alt="" />
              <p className='text-white font-semibold text-lg'>Трубочки со сгущенкой</p>
            </div>

            <div className="flex flex-col w-[369px] h-[341px] bg-[#FECE95] rounded-md items-center justify-center cursor-pointer">
              <img src="public/desertcatalog-img/профитроли 1.png" alt="" className='mb-[24px]'/>
              <p className='text-white font-semibold text-lg'>Трубочки со сгущенкой</p>
            </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default MacaroniCakes
