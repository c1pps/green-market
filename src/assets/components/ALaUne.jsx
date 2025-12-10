import React, { useState, useEffect } from 'react';
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from './Loading'
import Error from './Error'

import 'swiper/css';

export default function ALaUne() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch {
        setError(true)
        return <Error></Error>;
      } finally {
        setLoading(false);
      }
    };

      fetchData();
    }, []);

    if (loading) return <Loading></Loading>;
    if(error) return <Error></Error>;

    return (
        <Swiper spaceBetween={50} slidesPerView={3.3} breakpoints={{
                0: { slidesPerView: 1.3, },
                768: { slidesPerView: 2.3, },
                1280: { slidesPerView: 3.3, },
            }}>
            {data && data.slice(0, 7).map(products => (
                <SwiperSlide key={products.id}>
                  <Link to={`/produit/${products.id}`}>
                    <div className='relative inline-block w-full h-[480px] mx-auto group'>
                        <div className='w-full h-full bg-black/[90%] border border-3 overflow-hidden'>
                            <img className='block w-full h-full object-cover transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-105' src={products.image} alt={`Image de ${products.title}`} />
                        </div>
                        <div
                          className={`absolute top-10 right-[3px] z-10 AGN3D-Font uppercase text-[18px] md:text-[28px] px-[10px] md:px-[15px] py-[2px]
                          ${(products.category === "women's clothing" || products.category === "men's clothing") ? "bg-[#FFC248]" :
                           products.category === "jewelery" ? "bg-[#70C4EF]" :
                           products.category === "electronics" ? "bg-[#61D07D]" : "bg-white"}`}>

                          {(products.category === "women's clothing" || products.category === "men's clothing") ? "vêtements" :
                           products.category === "jewelery" ? "bijoux" :
                           products.category === "electronics" ? "éléctroniques" : "autre"}
                        </div>
                    </div>
                    <h3 className='text-[20px] md:text-[40px] uppercase leading-6 md:leading-11 mb-[2rem] md:mb-[3rem] truncate'>{products.title}</h3>
                    <p className='AGN2D-Font text-[18px] md:text-[30px] px-[10px] md:px-[15px] py-[2px] bg-[#FFC248] inline-block'>${products.price}</p>
                    <p className='VSL-Font uppercase border-t border-t-5 border-[#FFC248] pt-[5px] truncate'>{products.description}</p>
                  </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
