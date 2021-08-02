const BannerSection = () => {
    return (
        <div className='w-full h-screen bg-white-background  bg-cover bg-no-repeat flex   items-center justify-center px-2 sm:px-0 '>

            <div className='w-full md:w-2/3 xl:w-auto absolute text-center top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 '>
                <div className='inline-block py-2 px-3 lg:py-2 lg:px-6 xl:py-3 xl:px-7 rounded-full text-blue-800 bg-white mb-5' >
                    <span className='font-bold text-sm xl:text-base'>🎉 UPDATED: </span>
                    <span className='font-medium text-sm xl:text-base'>Pickbazar Laravel is now Multivendor supported!</span>
                </div>

                <h1 className='font-bold text-3xl md:text-4xl leading-tight lg:text-5xl 2xl:text-6xl lg:leading-tight xl:leading-tight 2xl:leading-tight 2xl:text-70px tracking-tight mb-5'>
                    Future focused full-stack
                    software development agency.
                </h1>

                <p className='text-gray-700 text-base md:text-lg leading-loose xl:text-xl xl:leading-loose'>
                    REDQ is a creative agency specializing in building scalable, high performance web & mobile application.
                </p>
            </div>
        </div>
    )
}

export default BannerSection
