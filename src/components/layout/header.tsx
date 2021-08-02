import React, { useRef } from "react";
import useWindowScrollPosition from '../hooks/useWindowScrollPosition'
import HeaderMenu from './header-menu'
import data from '@components/data/data.json';
import Image from "next/image";
import logoIcon from '@components/data/images/logo.svg'
const Header: React.FC = () => {
    const scrollY = useWindowScrollPosition();

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={`duration-300  transition-colors flex z-1020  justify-between  items-center  px-6   md:px-10   py-6 top-0  
        ${scrollY > 51 ? 'bg-white sticky shadow-lg h-20 ' : ' bg-transparent absolute w-full py-4 h-28 '} `}  >
            <div onClick={scrollToTop} className=' w-32 p-2 md:w-48 h-16  cursor-pointer '>
                 <Image src={logoIcon}/>
            </div>


            <HeaderMenu
                data={data.menu}
                className="hidden md:gap-6  md:flex justify-end md:mx-2 xl:mx-10"
            />



        </div>
    )
}

export default Header
