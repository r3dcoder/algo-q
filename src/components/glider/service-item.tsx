
import Image from "next/image";

interface ServiceItemProps {
  item: any;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
  return (
    <div className="  px-6 py-12 2xl:py-14 xl:mb-10 2xl:px-7 text-center rounded-md border border-solid border-gray-100 transition-shadow duration-300 hover:shadow-large">
      <div className=" space-y-6  items-center justify-center m-auto">
        <div className="w-20 h-20 bg-white relative m-auto">
          <Image
            alt={item.imageLink}
            layout="fill"

            src={item.imageLink}
          />
        </div>
        <h1 className="text-xl">{item.title}</h1>
        <p>{item.description} {item.clientName}</p>
      </div>
    </div>
  )
}

export default ServiceItem
