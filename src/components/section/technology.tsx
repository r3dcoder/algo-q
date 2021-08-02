import Marquee from "react-fast-marquee";
import Image from "next/image";
import reactIcon from '@components/data/images/technology/react.svg'
import nextjsIcon from '@components/data/images/technology/nextjs.svg'
import graphQlIcon from '@components/data/images/technology/graphQl.svg'
const Technology = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 lg:py-12 2xl:py-14 border-b-2" >
            <div className="flex flex-col md:flex-row md:items-center  overflow-hidden">

                <div className='text-gray-700 text-center md:text-left mr-0 text-lg md:mr-8 flex-shrink-0'>What technology we used: </div>
                <div className='w-full flex-grow'>
                <Marquee>
                    <div className='flex justify-around gap-16   '>
                        <div className="w-40 h-20 relative">
                            <Image layout="fill" src={reactIcon} />
                        </div>
                        <div className="w-40 h-20 relative">
                            <Image layout="fill" src={nextjsIcon} />
                        </div>

                        <div className="w-40 h-20 relative">
                            <Image layout="fill" src={graphQlIcon} />
                        </div>
                        <div className="w-40 h-20 relative">
                            <Image layout="fill" src={graphQlIcon} />
                        </div>
                    </div>
                </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Technology
