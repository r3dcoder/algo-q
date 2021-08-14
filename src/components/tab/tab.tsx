import React, { useEffect, useState } from 'react';
import data from '../data/data.json'
import Image from "next/image";
 
function Tabs() {
     

    const toggleTab = (category: string) => {
        setCategory(category);
    };
    const [category, setCategory] = useState('all');
    const [flterProducts, setFilterProducts] = useState(data.products);

    useEffect(

        () => {
            category === 'all' ? setFilterProducts(data.products) : setFilterProducts(data.products.filter(product => product.category === category));
        },
        [category]
    );

    const uniqueTags: any = [];
    data.products.map(product => {
        if (uniqueTags.indexOf(product.category) === -1) {
            uniqueTags.push(product.category)
        }
    });

    return (
        <div className=" px-4 ">
            <div className="mt-4 lg:mt-10 flex flex-col md:flex-row flex-wrap items-center justify-center">
                <button
                    className={`${category === 'all' ? " bg-black text-white outline-none" : "focus:outline-none border border-solid "} min-w-96 md:min-w-0  rounded-3xl py-2.5 px-5 mr-1 md:mr-3  mt-4 lg:m-1 md:transition-colors md:duration-300
          text-filter-text border-gray-400`}
                    onClick={() => toggleTab('all')}
                >
                    All Items   
                </button>
                {uniqueTags.map((cat: any, index: number) => (
                    <button key={index}
                        className={`${category === cat ? " bg-black text-white outline-none" : "focus:outline-none border border-solid "} min-w-96 md:min-w-0  rounded-3xl py-2.5 px-5 mr-1 md:mr-3  mt-4 lg:m-1 md:transition-colors md:duration-300
          text-filter-text border-rq-gray-400`}
                        onClick={() => toggleTab(cat)}
                    >
                          {cat}
                    </button>
                ))}


            </div>

  

            <div className="  mt-6 md:mt-8 lg:mt-10 2xl:mt-12 grid  gap-6  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 " >
                {flterProducts.map((product, index) => (
                    <div key={index}
                        className={category === product.category ? "transition-opacity   duration-1000 ease-in w-full  block" : "  "}
                    >
                        <div className="w-full py-2 h-56 md:h-72 lg:h-80 relative">
                            <Image src={product.imageLink} layout="fill" />
                        </div>
                        <h2 className="text-lg xl:text-xl font-medium tracking-tight my-4">  {product.title}</h2>

                        <p className="text-gray-600 mb-3  ">
                            {product.description} {category}
                        </p>
                        <div className="flex items-center mb-4 ">
                            <button className="bg-black text-white font-semibold rounded-2xl py-1 px-3">${product.price}</button>
                            <span className='text-gray-500 ml-3 text-sm'>{product.compatibleWith}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tabs;