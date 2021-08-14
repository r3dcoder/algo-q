import Image from "next/image";


export const Superprops = () => {
    return (
        <div className=" flex  w-full m-auto overflow-hidden mt-10 bg-gray-200 justify-between gap-x-4">
            <div className=" hidden lg:inline-flex opacity-0 lg:opacity-100 max-w-4xl xl:max-w-5xl 2xl:max-w-7xl w-3/4   transform rotate-8 -ml-72 xl:-ml-80 2xl:-ml-72">
                <div className="w-1/3 h-screen  relative transform translate-y-6">
                    <Image
                        alt="propstype1.png"
                        layout="fill"

                        src="/propstype1.png"
                    />
                </div>
                <div className="w-1/3 h-screen bg-pink-50 relative ml-7 2xl:ml-7 transform translate-y-0">
                    <Image
                        alt="propstype2.png"
                        layout="fill"

                        src="/propstype2.png"
                    />
                </div>
                <div className="w-1/3 h-screen   relative ml-7 2xl:ml-7 transform -translate-y-10">
                    <Image
                        alt="propstype3.png"
                        layout="fill"

                        src="/propstype3.png"
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2     px-16 pt-16 pb-16 lg:pb-0">
                <h1 className="leading-snug text-2xl xl:text-4xl xl:leading-snug 2xl:text-4xl  font-bold mb-5 xl:mb-7">
                    Superprops - Premium Next JS & Gatsby Landing Pages.
                </h1>

                <p className='text-gray-800 leading-loose'>Welcome to React Next Landing Page, built with React, Next Js, Gatsby Js & Styled Components. It’s super easy to deploy!</p>

                <div className="flex items-center mt-10 xl:mt-14">
                    <div className="w-10 h-10   relative    ">
                        <Image
                            alt="trophy.svg"
                            layout="fill"

                            src="/trophy.svg"
                        />
                    </div>

                    <div className="ml-6">
                        <h1 className="text-xl font-medium mb-1.5">Highly Crafted Product</h1>
                        <p className="text-gray-700">We just hand made our product with care.</p>
                    </div>
                </div>

                <div className="flex items-center mt-10 xl:mt-14">
                    <div className="w-10 h-10   relative    ">
                        <Image
                            alt="trophy.svg"
                            layout="fill"

                            src="/comment.svg"
                        />
                    </div>

                    <div className="ml-6">
                        <h1 className="text-xl font-medium mb-1.5">Instant Customer Support</h1>
                        <p className="text-gray-700">We made priority about our valuable customers</p>
                    </div>
                </div>

                <div className='flex justify-center md:justify-start'>

                    <a className='mt-12 lg:mt-12 2xl:mt-16 inline-block cursor-pointer outline-none bg-gray-800 text-white font-semibold rounded py-4 px-8 transition-colors duration-200 hover:bg-gray-700'> Veiw Demo</a>

                </div>

            </div>
        </div>
    )
}
