import React from 'react';

const Cared = () => {
    let care = [
        {img:"public/home-img/Cared/Rectangle 172 (4).png", title:"Сердце", description:"24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ", price: "2800 руб"},
        {img:"public/home-img/Cared/Rectangle 174.png", title:"Красота спасёт мир ", description:"Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан", price: "750 руб"},
        {img:"public/home-img/Cared/Rectangle 176.png", title:"Круглый набор", description:"40 макаронс в круглой коробке с персональной надписью", price: "3900 руб"},
        {img:"public/home-img/Cared/Rectangle 282.png", title:"Набор на 9", description:"Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня", price: "950 руб"},
        {img:"public/home-img/Cared/Rectangle 283.png", title:"Набор на 16", description:"Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ", price: "1500 руб"},
        {img:"public/home-img/Cared/Rectangle 176.png", title:"Сердце ", description:"24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ", price: "2500 руб"},
    ];

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-semibold mt-10 mb-6'>Мы обо всём позаботились</h2>
            <div className='flex flex-wrap justify-center gap-8'>
                {care.map((item, index) => (
                    <div key={index} className='w-[370px] bg-white rounded-md border border-gray-300 overflow-hidden shadow-lg flex flex-col'>
                        <img src={item.img} alt={item.title} className='w-full h-auto' />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                            <p className='text-sm text-gray-600 mb-4'>{item.description}</p>
                            <div className='flex justify-between items-center border-t border-gray-300 pt-4'>
                                <p className='text-[#E7426A] text-lg font-semibold'>{item.price}</p>
                                <div className='flex items-center'>
                                    <img src="public/home-img/Cared/Group 3.png" alt="Cart Icon" className='mr-2' />
                                    <button className='text-sm font-semibold'>В корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cared;
