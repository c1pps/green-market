import Nav from '../components/Nav'
import Logo from '../../../public/img/logo.svg'
import illustrationBanner from '../../../public/img/friseheader.svg'
import lineSeparation from '../../../public/img/line.svg'
import { Link } from 'react-router'
import ALaUne from '../components/ALaUne'
import Avis from '../components/Avis'
import LogoText from '../../../public/img/logo_text.png'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <header>
                <Nav></Nav>
            </header>
            <div className='my-[45px]'>
                <div className='mx-[400px]'>
                    <div className='flex justify-between'>
                        <img src={Logo} alt="Logo" className='w-[15%]' />
                        <img src={illustrationBanner} alt="Illustration en guise de bannière" className='w-[80%]' />
                    </div>
                    <img src={lineSeparation} alt="Ligne de séparation" className='w-[100%] my-[40px]' />
                    <div className='mb-[120px]'>
                        {/* <h1 className='uppercase leading-none whitespace-nowrap overflow-hidden text-[clamp(64px,12vw,140px)] tracking-[clamp(16px,4vw,66px)]'>Greenmarket</h1> */}
                        <img src={LogoText} alt="Logo texte" className='w-[100%]' />
                        <p className='AGN3D-Font text-[36px] mb-[30px] mt-[10px]'>Des produits responsables pour un quotidien plus vert — faites le choix durable.</p>
                        <Link to="/produits" className='AGN3D-Font text-[36px] border border-3 border-black bg-transparent px-[20px] py-[10px] hover:bg-black hover:text-white transition duration-300 ease-in-out'>Découvrir les produits</Link>
                    </div>
                    <div className='mb-[120px]'>
                        <div className='flex justify-between mb-[20px] uppercase'>
                            <h2 className='text-[64px]'>_ notre séléction</h2>
                            {/* <Link to="/produits" className="AGN3D-Font text-[64px] group text-black transition-all duration-300 ease-in-out"><span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-300 ease-in-out">_ Les autres</span></Link> */}
                        </div>
                        <ALaUne></ALaUne>
                    </div>
                </div>
                <div>
                    <div className='uppercase bg-[#FFC248] px-[400px] py-[40px]'>
                        <h2 className='text-[64px] mb-[20px]'>_ ils en pensent quoi ?</h2>
                        <Avis></Avis>
                    </div>
                </div>
            </div>
            <footer className='mx-[400px] my-[80px]'>
                <Footer></Footer>
            </footer>
        </div>
    )
}
