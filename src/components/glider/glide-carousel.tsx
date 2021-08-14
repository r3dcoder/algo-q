import React, { useEffect,useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import classNames from "classnames";
import ServiceItem from "./service-item";
import Buttons from "./buttons";
import TestimonialItem from "./testimonial-item";
import { Key } from "react";


interface GlideProps {
  breakpoints: any;
  
  defaultPerView: number;
  carouselName: string;
  items: any;
  buttons: any;
  className?: string;
}

const GlideCarousel: React.FC<GlideProps> = ({ carouselName, breakpoints, className, buttons, items, defaultPerView,   }) => {
  const refDiv = useRef<HTMLDivElement|null>(null);
  
  const mainGlide = new Glide("."+carouselName , {
    type: 'carousel',
    startAt: 0,
    perView: defaultPerView,
    breakpoints: breakpoints
  });  
 
  useEffect(() => {
    mainGlide.mount();
    // return () => mainGlide.destroy();
  }, [mainGlide, refDiv]);

  return (
    <div ref={refDiv} id={carouselName} className={`${carouselName} relative  px-4`}   >
      <div className="glide__track" data-glide-el="track" >
        <ul className="glide__slides     ">
          {items.map((item: any, index: number) => (
            <li key={carouselName+index} className={classNames(` glide__slide h-auto     `, className)} >
              {carouselName == 'service_carousel' &&
                <ServiceItem item={item} />
              }
              {carouselName == 'testimonials_carousel' &&
                <TestimonialItem  item={item} />
              }
            </li>
          ))}
        </ul>
      </div>
      <Buttons />
    </div>
  )
}

export default GlideCarousel
