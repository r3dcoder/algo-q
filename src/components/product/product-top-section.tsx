interface topSectionProps {
    data: any;
}

export const ProductTopSection:React.FC<topSectionProps> = ({data}) => {
    return (
        <div className="w-full h-screen bg-gray-100 flex   items-center justify-center px-2 sm:px-0 ">
              

             <div className='w-full md:w-2/3   absolute text-center top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 '>
                 
             <h1 className="text-5xl font-medium mb-5 md:text-4xl leading-tight lg:text-5xl 2xl:text-7xl lg:leading-tight xl:leading-tight 2xl:leading-tight   tracking-tight  ">{data.moto} <span className="font-bold">{data.title}!</span></h1>
                 

                <p className='text-gray-700 text-sm md:text-base leading-loose xl:text-base xl:leading-loose'>
                {data.description}
                </p>

                <div className="flex items-center gap-2 justify-center">
                <div className='mt-8 lg:mt-8 transform transition duration-300 hover:scale-105 hover:mt-4'>
                    <a className='outline-none   bg-gray-800 text-white font-semibold rounded py-4 px-10  hover:animate-bounce  '>Contact Us</a>
                </div>

                <div className='mt-8 lg:mt-8'>
                    <a className='cursor-pointer outline-none bg-white transition duration-100 transform hover:scale-150 text-black font-semibold rounded py-4 px-10  '>Contact Us</a>
                </div>
                </div>
            </div>
        </div>
    )
}
