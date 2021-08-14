import lightPreButton from '../data/buttons/light-prev-arrow.svg';
import lightNextButton from '../data/buttons/light-next-arrow.svg';
import Image from "next/image";
const Buttons = () => {
    return (
        <div>
            <div className="glide__arrows absolute top-1/2 left-0 rounded-full h-10 w-10 flex items-center justify-center bg-white  hover:bg-gray-400" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left text-gray-600 flex items-center justify-center " data-glide-dir="<">
          <Image className='' height={20} width={30} src={lightPreButton} />

        </button>
      </div>

      <div className="glide__arrows absolute top-1/2 right-0 rounded-full h-10 w-10 flex items-center justify-center bg-white  hover:bg-gray-400" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--right text-gray-600 flex items-center justify-center " data-glide-dir="<">
          <Image className='' height={20} width={30} src={lightNextButton} />

        </button>
      </div>
        </div>
    )
}

export default Buttons
