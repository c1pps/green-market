import Nav from '../components/Nav'
import Logo from '../../../public/img/logo.svg'
import illustrationBanner from '../../../public/img/friseheader.svg'
import lineSeparation from '../../../public/img/line.svg'
import ProduitsLogoText from '../../../public/img/produitLogoText.webp'
import CategoryButtons from '../components/Produits'

export default function Produits() {
    return (
        <div>
            <header>
                <Nav></Nav>
            </header>
            <div className="my-[45px]">
                <div className='mx-[20px] md:mx-[400px]'>
                    <div className='flex justify-between'>
                        <img src={Logo} alt="Logo" className='w-[15%]' />
                        <img src={illustrationBanner} alt="Illustration en guise de bannière" className='w-[80%]' />
                    </div>
                    <img src={lineSeparation} alt="Ligne de séparation" className='w-[100%] my-[20px] md:my-[40px]' />
                    <div className='mb-[120px]'>
                        {/* <h1 className='uppercase leading-none whitespace-nowrap overflow-hidden text-[clamp(64px,12vw,140px)] tracking-[clamp(16px,4vw,66px)]'>Produits</h1> */}
                        <img src={ProduitsLogoText} alt="Logo produits texte" className='w-[100%]' />

                        <div className='mt-[35px]'>
                            <CategoryButtons></CategoryButtons>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}