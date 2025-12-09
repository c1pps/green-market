import Logo from '../../../public/img/logo.svg'

export default function Footer() {
    return (
        <div className='flex justify-between items-start'>
            <div>
                <p className="AGN3D-Font underline text-[32px] mb-[10px]">Page</p>
                <nav>
                    <ul className="flex flex-col VSR-Font text-[34px] uppercase">
                        <li>
                            <a href="" className="group text-black transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-in-out'>Accueil</span></a>
                        </li>
                        <li>
                            <a href="" className="group text-black transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-in-out'>produits</span></a>
                        </li>
                        <li>
                            <a href="" className="group text-black transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-in-out'>à la une</span></a>
                        </li>
                        <li>
                            <a href="" className="group text-black transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-in-out'>avis</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <p className="AGN3D-Font underline text-[32px] mb-[10px]">Support</p>
                <nav>
                    <ul className="flex flex-col VSR-Font text-[34px] uppercase">
                        <li>
                            <a href="" className="group text-black transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-in-out'>faq</span></a>
                        </li>
                        <li>
                            <a href="" className="group text-black transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-in-out'>contact</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src={Logo} alt="Logo" className='h-[200px]' />
            </div>
        </div>
    )
}