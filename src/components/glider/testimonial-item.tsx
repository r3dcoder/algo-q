
import Image from "next/image";

interface TestimonialItemProps {
  item: any;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ item }) => {
  return (
    <div className="  px-6 py-12 2xl:py-14 xl:mb-10 2xl:px-7 text-left rounded-md border border-solid border-gray-100 transition-shadow duration-300 hover:shadow-large">
      <div className=" space-y-5   justify-left   ">
        <p className="  text-gray-800 mb-6 2xl:mb-8">{item.description}</p>
        <div className="flex p-2 gap-1 h-12 w-full   ">
        <div className="w-10 h-12 bg-white relative  ">
          <Image
            alt={item.imageLink}
            layout="fill"

            src={item.imageLink}
          />
        </div>
        <div className="ml-3">
        <h1 className="font-medium text-gray-700  ">{item.company}</h1>
        <h1 className="text-sm text-blue-600">{item.clientName}</h1>
        </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default TestimonialItem
