import React  from "react";
import "@glidejs/glide/dist/css/glide.core.min.css";
import data from '../data/data.json'
import GlideCarousel from '../glider/glide-carousel'
 
interface ServiceProps {
  componentKey: string;
}
const Services: React.FC<ServiceProps> = ({componentKey}) => {
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

  const buttons = {
    prev: "<", next: ">",
  }
 
  return (
    <div className="px-4" key={componentKey}>
      
      <div className="w-full text-center py-10">
        <div className="text-blue-700 font-medium 2xl:text-lg mb-3.5 ">
          Area of expertise
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight">Services we provide to our customers</h2>
      </div>
      <GlideCarousel  key={componentKey+'123'} items={data.services} carouselName="service_carousel" breakpoints={breakpoints} className="w-64 h-auto" buttons={buttons} defaultPerView={4} />
    </div>

  )
}
export default Services;