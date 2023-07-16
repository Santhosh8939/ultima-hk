import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import ContactNumbers from '../../components/ContactNumbers';
import Phone from "../../assets/images/phone.png";
import headerImage from "../../assets/images/dedication_header.jpg";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";

const DedicationPage = () => {     
    
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();  

    useEffect(() => {
        if(scroll){
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll]);

    const { t } = useTranslation();

    let number = t('dedication.247Phone');
    let call = `tel:${number}`;


    return (
        <>
            <NavBar />            
            <section className='flex bg-black' data-scroll-section>
            <Header imageUrl={headerImage} type="image" title={t('dedication.header')} imagePos='bg-center' subTitle={t('dedication.subCopy')} preTitle={t('dedication.preTitle') !== 'dedication.preTitle' ? t('dedication.preTitle') : ''} />
            </section>               
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52 section-line' data-scroll-section>
                <div className="container mx-auto relative">                    
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center items-center bg-slash">
                            <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey max-w-sm' id='ContactUs' dangerouslySetInnerHTML={{__html: t('dedication.conciergeTitle')}}></h2>
                        </div>
                        <div className="flex justify-center items-center mx-10 mt-10 md:mt-0 md:mx-0">
                            <div className='text-center md:text-left'>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('dedication.conciergeBody')}}></p>                                                       
                            </div>
                        </div>
                    </div>
                </div>  
            </section> 
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52'  data-scroll-section>
                <div className="container mx-auto relative">                    
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center mb-14 md:mb-0">
                            <div className='flex-col text-left mx-10 md:mx-28'>
                                <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-8' dangerouslySetInnerHTML={{__html: t('dedication.247Title')}}></h2>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight privilege-text' dangerouslySetInnerHTML={{__html: t('dedication.247Copy')}}></p>
                                <div className='mt-10 flex-row uppercase flex'>
                                    <img src={Phone} alt='Phone' />
                                    <h4 className='text-lg text-left tracking-custom leading-10 text-white ml-6'>Call Us <br/><a href={call}>{t('dedication.247Phone')}</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mb-14 md:mb-0">
                            <div className='flex-col text-left mx-10 md:mx-28'>
                                <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-8' dangerouslySetInnerHTML={{__html: t('dedication.overseasTitle')}}></h2>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight privilege-text' dangerouslySetInnerHTML={{__html: t('dedication.overseasCopy')}}></p>    
                                <ContactNumbers />
                            </div>
                           
                        </div>
                         
                    </div>
                </div>  
            </section>
            <section className='bg-black'  data-scroll-section>
                <Footer/>
            </section>   
        </>            
    );
};

export default DedicationPage;