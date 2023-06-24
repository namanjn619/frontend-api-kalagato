import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from "../contexts/CartContext";
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive
          ? " bg-white text-black py-4 shadow-md"
          : "bg-none by-6 bg-[#008970] text-white"
      } fixed w-full z-10 transition-all `}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="flex flex-col justify-center items-center p-3">
            <h1 className="text-[#a5e6da] text-xl font-bold">KalaGato</h1>
            <p className="text-xs font-bold">Ecommerce</p>
          </div>
        </Link>
        {/*  cart*/}
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
