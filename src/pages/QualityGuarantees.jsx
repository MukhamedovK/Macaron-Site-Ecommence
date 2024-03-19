import React from 'react'
import { Link } from 'react-router-dom'

const QualityGuarantees = () => {
  return (
    <>
      <main className='bg-[#F7F7F7] text-[#292929]'>
        <section className='container h-screen'>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="max-w-lg mx-auto">
              <h1 className='text-3xl lg:text-4xl font-semibold mt-16 lg:mt-32'>Гарантии вкуса и качества</h1>
              <p className='mt-6 lg:mt-8'>При изготовлении пирожных мы используем только натуральные<br /> ингредиенты, избегая использования консервантов</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-12 lg:mt-16">
              <div className="flex flex-col items-center">
                <img src="/QualityGuarantees-img/Rectangle 403.png" alt="" />
                <p className='text-xs lg:text-sm font-semibold mt-4'>100% <br /> миндальная мука</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="/QualityGuarantees-img/Rectangle 404.png" alt="" />
                <p className='text-xs lg:text-sm font-semibold mt-4'>100% <br />безопасные пищевые красители</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="/QualityGuarantees-img/Rectangle 405.png" alt="" />
                <p className='text-xs lg:text-sm font-semibold mt-4'>100% <br />фруктовые пюре и натуральные<br /> ингредиенты</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default QualityGuarantees
