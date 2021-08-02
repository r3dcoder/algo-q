import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import data from '../data/data.json'
import preButton from '../data/buttons/prev.svg';
import lightPreButton from '../data/buttons/light-prev-arrow.svg';
import lightNextButton from '../data/buttons/light-next-arrow.svg';
import Image from "next/image";

const Services: React.FC = () => {
  const breakpoints = {
    400: {
      perView: 1
    },
    650: {
      perView: 2
    },
    800: {
      perView: 3
    },
    1100: {
      perView: 4
    }
  };
  const prev = "<";
  const next = ">";
  const mainGlide = new Glide(".main__glide", {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    breakpoints: breakpoints
  }); // default options

  useEffect(() => {
    mainGlide.mount();
    // return () => mainGlide.destroy();
  }, [mainGlide]);

  return (

    <div className="main__glide relative  px-4  ">

      <div className="glide__track" data-glide-el="track">

        <ul className="glide__slides ">
          {data.services.map((service, index) => (
            <li key={index} className="glide__slide h-auto w-64">
              <div className="  px-6 py-12 2xl:py-14 xl:mb-10 2xl:px-7 text-center rounded-md border border-solid border-gray-100 transition-shadow duration-300 hover:shadow-large">
                <div className=" space-y-6  items-center justify-center m-auto">
                  <div className="w-20 h-20 bg-white relative m-auto">
                    <Image
                      alt={service.imageLink}
                      layout="fill"

                      src={service.imageLink}
                    />
                  </div>
                  <h1 className="text-xl">{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              </div>
            </li>
          ))}

        </ul>
      </div>

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
export default Services;