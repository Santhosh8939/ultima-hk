import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import headerImage from "../../assets/images/luxuries_header.jpg";
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import FivePanelCarousel from "../../components/FivePanelCarousel";
import circle from '../../assets/images/circle.svg';
import Concierge from '../../components/Concierge';

const LuxuriesPage = () => {    
    
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();  

    useEffect(() => {
        if(scroll){
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll]);

    const { t } = useTranslation();

    return (  
        <>
            <NavBar />            
            <section 
                className='flex bg-black'
                data-scroll
                data-scroll-speed="4"
                data-scroll-section
            >
                <Header imageUrl={headerImage} type="image" title={t('luxuries.header')} subTitle={t('luxuries.subCopy')} preTitle={t('luxuries.preTitle') !== 'luxuries.preTitle' ? t('luxuries.preTitle') : ''}  />
            </section>  
            <section style={{ '--circle-url': `url(${circle})` }} className='bg-black pb-36 bg-[image:var(--circle-url)] bg-no-repeat bg-left circle-bg'  data-scroll-section>
                <div className="container mx-auto relative py-16">   
                    <div className=' flex justify-center'>
                        <div className="grid grid-cols-1 max-w-md mx-10 mt-10 md:mt-0 md:mx-0">
                            <div>
                                <h2 className='text-2xl tracking-custom leading-10 text-light-grey text-center'>{t('luxuries.title')}</h2>
                            </div>
                            <div className='mt-8'>
                                <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight'>{t('luxuries.copy')}</p>                                                                                
                            </div>
                        </div>
                    </div>                 
                </div>  
                <div className="container mx-auto pb-36">
                    <FivePanelCarousel />
                </div>
            </section> 
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
                <StarField  />
                <Concierge />
            </section> 
            <section className='bg-black'  data-scroll-section>
                <Footer/>
            </section>    
        </>          
    );
};

export default LuxuriesPage;