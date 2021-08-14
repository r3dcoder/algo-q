import React from "react";
import "@glidejs/glide/dist/css/glide.core.min.css";
import data from '../data/data.json'
import GlideCarousel from '../glider/glide-carousel'
import { Key } from "react";
 
const Testimonials: React.FC  = ( ) => {
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
        <div className="px-4 py-4">
            <div className="w-full text-center py-10">
                <div className="text-blue-700 font-medium 2xl:text-lg mb-3.5 ">
                Client Testimonial
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight">What our customers say about us</h2>
            </div>
            <GlideCarousel  items={data.testimonials} carouselName="testimonials_carousel" breakpoints={breakpoints} className="w-64 h-auto" buttons={buttons} defaultPerView={2} />
        </div>
    )
}

export default Testimonials
