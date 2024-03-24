import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="w-full">
        <navbar className="bg-[#F7EBE5] h-[48px] flex ">

          <div className="flex w-[85%] mx-auto container justify-between">
            <ul className="flex gap-[14px] items-center">
              <Link to="/guarantees">
                <li className=" relative">
                  <p className='hover:text-gray-300 transition duration-300'>Гарантия свежести</p>
                </li>
              </Link>
              <Link to="/delivery">
                <li className="hover:text-gray-500">Доставка и оплата</li>
              </Link>
              <Link to="/legals">
                <li className="hover:text-gray-500">Оптовые поставки</li>
              </Link>
              <Link to="/contacts">
                <li className="hover:text-gray-500">Контакты</li>
              </Link>
              <li className=" relative">
                <div class="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transition duration-300 transform scale-x-0 hover:scale-x-100 origin-left"></div>
              </li>
            </ul>

            <div className="flex items-center gap-[30px]">
              <div className="flex items-center">
                <img src="/nav-img/Vector (2).png" alt="" />
                <select name="" id="" className="bg-transparent cursor-pointer border-none outline-none flex items-center">
                  <option className="border-none  text-center" value="Санкт-Петербург">Санкт-Петербург</option>
                  <option value="Samarqand">Санкт-Петербург</option>
                  <option value="Buxoro">Санкт-Петербург</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <img src="/nav-img/Group 6.png" alt="" />
                <p>8 812 309-82-88</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/nav-img/Group 3.png" alt="" />
                <Link to="/basket"><p>В корзине (4 товара)</p></Link>
              </div>
              <div className="flex gap-[10px]">
                <img src="/nav-img/tg.png" alt="" />
                <img src="/nav-img/vk.png" alt="" />
                <img src="/nav-img/ok.png" alt="" />
              </div>
            </div>
          </div>
        </navbar>
        <navbar className='flex mx-auto mt-[18px] mb-[17px]'>
          <div className="flex items-center  mx-auto gap-[30px]">
            <ul className="flex gap-[30px]">
              <li className="flex gap-1">
                <p>СЛАДКИЕ ДНИ</p>
                <img src="/nav-img/Group 32.png" alt="" />
              </li>
              <li>
                <Link to="/forwedding"><select name="ПОДАРОЧНЫЕ НАБОРЫ" id="" className="bg-transparent border-none outline-none flex items-center">
                  
                  <option value="ПОДАРОЧНЫЕ НАБОРЫ"><Link to="/forwedding">СВАДЕБНЫЕ ПРЕДЛОЖКНИЯ</Link></option>
                  <option value="ПОДАРОЧНЫЕ НАБОРЫ">ПОДАРОЧНЫЕ НАБОРЫ</option>
                  <option value="ПОДАРОЧНЫЕ НАБОРЫ">ПОДАРОЧНЫЕ НАБОРЫ</option>
                </select></Link>
              </li>
              <li>
                <p>СОБРАТЬ НАБОР</p>
              </li>
            </ul>
            <Link to="/">
              <img src="/nav-img/лого.png" alt="" />
            </Link>
            <ul className="flex gap-[30px]">
              <li><p>СОЗДАТЬ ДИЗАЙН</p></li>
              <li>
                <select name="КОМПАНИЯМ" id="" className="bg-transparent cursor-pointer border-none outline-none flex items-center">лщ
                  <option value="КОМПАНИЯМ"><Link to="/legals">ОПТОВЫЕ ПОСТАВКИ</Link></option>
                  <option value="КОМПАНИЯМ">КОРПОРАТИВНЫЕ ПОДАРКИ</option>
                  <option value="КОМПАНИЯМ">ЭКЛЕРЫ ОПТОМ</option>
                </select>
              </li>
              <li>
                <select name="ВЕСЬ КАТАЛОГ" id="" className="bg-transparent cursor-pointer border-none outline-none flex items-center">
                  <option value="ВЕСЬ КАТАЛОГ">ВЕСЬ КАТАЛОГ</option>
                  <option value="ВЕСЬ КАТАЛОГ">ВЕСЬ КАТАЛОГ</option>
                  <option value="ВЕСЬ КАТАЛОГ">ВЕСЬ КАТАЛОГ</option>
                </select>
              </li>
            </ul>
          </div>


        </navbar>
      </nav>
    </div>

  )
}

export default Header
