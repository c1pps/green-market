import { Swiper, SwiperSlide } from 'swiper/react';
import { RiStarFill } from '@remixicon/react'

import 'swiper/css';

export default function Avis() {
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={2.3}
            breakpoints={{
                0: { slidesPerView: 1.3, spaceBetween: 16 },
                768: { slidesPerView: 2.3, spaceBetween: 32 },
                1280: { slidesPerView: 2.3, spaceBetween: 40 },
            }}
        >
            <SwiperSlide>
                <div className='flex flex-col gap-[10px] justify-between p-[25px] bg-black text-white h-max w-full md:max-w-[540px] mx-auto'>
                    <div>
                        <div className="flex gap-[10px] mb-[10px]">
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                        </div>
                        <h4 className='uppercase AGN3D-Font text-[24px] md:text-[30px]'>Sophie Durand</h4>
                    </div>
                    <div>
                        <p className='VSR-Font text-[16px] md:text-[20px] uppercase leading-5 md:leading-6 mb-[0.5rem] md:mb-0'>Une expérience d'achat qui a du sens</p>
                        <p className='VSL-Font text-[14px] md:text-[16px] uppercase'>“Depuis que j'ai découvert GreenMarket, je ne commande plus mes produits écologiques ailleurs ! La sélection est soignée, les descriptions sont claires, et j'apprécie particulièrement la transparence sur l'origine des produits. Le site est fluide et agréable à utiliser. Enfin une plateforme qui allie consommation responsable et expérience utilisateur moderne !”</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col gap-[10px] justify-between p-[25px] bg-black text-white h-max w-full max-w-[540px] mx-auto'>
                    <div>
                        <div className="flex gap-[10px] mb-[10px]">
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#ffc24833'></RiStarFill>
                        </div>
                        <h4 className='uppercase AGN3D-Font text-[30px]'>Thomas Martin</h4>
                    </div>
                    <div>
                        <p className='VSR-Font text-[20px] uppercase'>Pratique et engagé</p>
                        <p className='VSL-Font uppercase'>“J'ai commandé plusieurs articles pour ma cuisine zéro-déchet et je suis très satisfait de la qualité. Le site est bien organisé, facile à naviguer même sur mobile. Mon seul petit bémol : j'aimerais avoir plus de filtres pour affiner mes recherches par type d'engagement (local, bio, recyclé...). Mais dans l'ensemble, c'est une excellente initiative que je recommande !”</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col gap-[10px] justify-between p-[25px] bg-black text-white w-full max-w-[540px] mx-auto'>
                    <div>
                        <div className="flex gap-[10px] mb-[10px]">
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#FFC248'></RiStarFill>
                            <RiStarFill size={30} color='#ffc24833'></RiStarFill>
                            <RiStarFill size={30} color='#ffc24833'></RiStarFill>
                            <RiStarFill size={30} color='#ffc24833'></RiStarFill>
                        </div>
                        <h4 className='uppercase AGN3D-Font text-[30px]'>Marc Dubois</h4>
                    </div>
                    <div>
                        <p className='VSR-Font text-[20px] uppercase'>Concept intéressant mais peut mieux faire</p>
                        <p className='VSL-Font uppercase'>L'idée de GreenMarket est louable, mais j'ai été déçu par mon expérience. Les prix sont assez élevés comparés à d'autres sites similaires, et j'ai trouvé le choix de produits un peu limité dans certaines catégories. De plus, j'aurais aimé avoir plus d'informations sur les certifications écologiques des articles.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
