import { Link } from "react-router";
import { HashLink } from 'react-router-hash-link';
import React from 'react';

export default function Nav() {
    return (
       <div>
            <div className="AGN3D-Font uppercase overflow-hidden">
                <div className="whitespace-nowrap flex gap-[10px] text-[clamp(28px,3vw,48px)] tracking-[clamp(2px,0.5vw,12px)] animate-[marquee_25s_linear_infinite]">
                    <span>Produits éco-responsables • Fabrication durable • Livraison responsable • Traçabilité garantie •</span>
                    <span aria-hidden="true">Produits éco-responsables • Fabrication durable • Livraison responsable • Traçabilité garantie •</span>
                </div>
            </div>
            <nav className="bg-[#FFC248]">
                <ul className="flex items-center justify-center gap-[20px] md:gap-[50px] py-[12px] AGN3D-Font uppercase text-[30px] md:text-[48px]">
                    <li>
                        <Link to="/" className="group text-black transition-all duration-300 ease-in-out">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-in-out"> Accueil</span>
                        </Link>
                    </li>
                    <li>
                        <HashLink smooth to="/#produits" className="group text-black transition-all duration-300 ease-in-out">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-in-out">Produits</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#a-la-une" className="group text-black transition-all duration-300 ease-in-out">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-in-out">à la une</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#avis" className="group text-black transition-all duration-300 ease-in-out">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-in-out">Avis</span>
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
