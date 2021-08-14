import React, { useRef } from "react";
import useWindowScrollPosition from '../hooks/useWindowScrollPosition'
import Image from "next/image";
 
interface headerProps {
    logoLink: any;
}
const Header: React.FC<headerProps> = ({ children, logoLink }) => {
    const scrollY = useWindowScrollPosition();

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={`duration-500 overflow-hidden transition-colors flex z-1020  justify-between  items-center  px-2   md:px-10  py-3 md:py-6 top-0  
        ${scrollY > 51 ? 'bg-white sticky shadow-lg h-14 md:h-16 ' : ' bg-transparent absolute w-full py-4 h-16 md:h-28 '} `}  >
            <div onClick={scrollToTop} className=' object-cover w-20 p-2 md:w-28 h-14 md:h-10 relative  cursor-pointer '>
                <Image layout="fill" src={logoLink} />
            </div>

            {children}

        </div>
    )
}

export default Header
