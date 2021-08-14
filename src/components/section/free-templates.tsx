import Image from "next/image";
 
const FreeTemplates = () => {
    return (
        <div className="px-4  ">
            <div className="  overflow-hidden w-full bg-cover h-auto md:h-screen bg-pattern-2 py-16 mt-8 text-center relative justify-between">
            <div className=" text-center text-xl text-medium">
                    staruplanding.io
            </div>
            <h2 className="my-6 text-2xl leading-snug xl:text-4xl tracking-tight font-bold mb-6">Looking for free landing templates? Try Startup Landing</h2>
            <p className="mb-8 lg:mb-11 leading-relaxed text-lg text-gray-600">Fully free and customizable React, Next JS & Gatsby JS based landing page templates.</p>
            <a className="inline-block cursor-pointer outline-none bg-gray-800 text-white font-semibold rounded py-4 px-8 transition-colors duration-200 hover:bg-gray-700">Explore Now</a>
            <div className="absolute bottom-0  hidden md:block w-full h-2/6 overflow-hidden">
            <div className="w-full   h-full   relative overflow-hidden "> 
                <Image layout="fill" src="/free-template.webp"/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default FreeTemplates
