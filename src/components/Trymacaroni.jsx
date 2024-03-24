import React from 'react';
import { Link } from 'react-router-dom';

const Trymacaroni = () => {
    const items = [
        { img: "public/desertcatalog-img/Rectangle 172.png", title: "1 макарон и 1 эклер", description: "промо-набор", price: "90 руб" },
        { img: "public/desertcatalog-img/Rectangle 174.png", title: "Всего понемногу", description: "3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан", price: "750 руб" },
        { img: "public/desertcatalog-img/Rectangle 176.png", title: "Ещё побольше", description: "3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан", price: "3900 руб" },
        { img: "public/desertcatalog-img/Rectangle 223.png", title: "Ещё побольше", description: "3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан", price: "3900 руб" },
    ];

    return (
        <div className='flex flex-col items-center mt-10 text-[#292929]'>
            <h2 className='text-3xl font-semibold mb-[20px] text-center'>Хотите попробовать <br /> всё сразу? </h2>
            <p className='mb-8'>Тогда взгляните на наши комбо-наборы</p>
            <div className='flex flex-wrap justify-center gap-[30px]'>
                {items.map((item, index) => (
                    <div key={index} className='w-[271px] bg-white rounded-lg border border-gray-300 shadow-lg overflow-hidden'>
                        <img src={item.img} alt={item.title} />
                        <div className='p-4 h-[130px]'>
                            <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                            <p className='text-sm text-gray-600 mb-8'>{item.description}</p>
                        </div>
                            <div className='flex justify-between items-center  border-t border-gray-300 '>
                                <div className='border-r p-4 w-[45%]'><p className='text-[#E7426A] text-lg font-semibold'>{item.price}</p></div>
                                <div className='flex items-center p-4'>
                                    <img src="public/home-img/popularsets-img/Group 3 (1).png" alt="Cart Icon" className=' mr-2' />
                                    <Link to="/Basket"><button className='text-sm font-semibold'>В корзину</button></Link>
                                </div>
                            </div>
                        
                    </div>
                ))}
            </div>
            <Link to="/">
                <button className='mb-[87px] mt-[35px] px-[48px] py-[18px] border border-[#4E9DD3] text-sm font-semibold hover:text-white hover:bg-[#4E9DD3] transition-all'>
                    Все праздничные наборы
                </button>
            </Link>
        </div>
    );
};

export default Trymacaroni;
