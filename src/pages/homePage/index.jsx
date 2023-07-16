import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
// import { Typography } from "@material-tailwind/react";
import {
    Card,
    CardBody,
  } from "@material-tailwind/react";
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import GoldButton from '../../components/GoldButton';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import FivePanelCarousel from "../../components/FivePanelCarousel";
import Concierge from '../../components/Concierge';
import BrandVideo from '../../components/BrandVideo';

const HomePage = () => {
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
            <section className='bg-black' data-scroll-section >
                <Header 
                    type="video"
                    title={t('home.header')}
                    subTitle={t('home.subCopy')}
                />
            </section>
            <section className='bg-black py-10 lg:py-40' data-scroll-section>
                <div className='inline-block w-full'>          
                    <BrandVideo />
                </div>      
            </section>
            <section className='bg-black' data-scroll-section>
                <StarField stars={30}  />
                <div className="container mx-auto relative py-16">   
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-48">
                            <div>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.pillarTitle')}</h2>
                            </div>
                            <div className='mt-8'>
                            <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('home.pillarCopy')}}></p> 
                            </div>
                        </div>
                    </div>                 
                </div>                   
                <div className="container mx-auto relative">                    
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-20 mx-2 md:mx-20">
                        <Card className='border-2 bg-black gradient-border'>
                            <CardBody className="text-center lg:px-20 lg:py-60 md:px-10 md:py-40 py-20">
                                <h2 className='text-2xl md:text-3xl text-center tracking-custom leading-10 text-light-grey mb-20' dangerouslySetInnerHTML={{__html: t('home.cardOneTitle')}}></h2>
                                <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight mb-20' dangerouslySetInnerHTML={{__html: t('home.cardOneBody')}}></p>
                                <GoldButton href='#/rewards' text='Learn more' />                                
                            </CardBody>                                
                        </Card>
                        <Card className='border-2 bg-black gradient-border'>                                
                            <CardBody className="text-center lg:px-20 lg:py-60 md:px-10 md:py-40">
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey mb-20' dangerouslySetInnerHTML={{__html: t('home.cardTwoTitle')}}></h2>
                                <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight mb-20' dangerouslySetInnerHTML={{__html: t('home.cardTwoBody')}}></p>
                                <GoldButton href='#/rewards' text='Learn more' />   
                            </CardBody>                                
                        </Card>
                    </div>
                </div>        
            </section>          
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52'  data-scroll-section>
                <StarField stars={30}  />
                <div className="container mx-auto relative py-16">   
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-48">
                            <div>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.carouselTitle')}</h2>
                            </div>
                            <div className='mt-8'>
                                <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight'>{t('home.carouselCopy')}</p>                                                                                
                            </div>
                        </div>
                    </div>                 
                </div>
                <div className="container mx-auto pb-36">
                    <FivePanelCarousel />
                </div>
            </section>
            <section className='bg-black pt-10 md:pt-32 pb-10 md:pb-22' data-scroll-section>
                <StarField stars={30}  />
                <Concierge />  
            </section> 

            {/* new sec */}

            <section className='bg-black pt-5 md:pt-32 pb-10 md:pb-22' data-scroll-section>
                <StarField stars={30}  />
                <div className="container mx-auto relative py-16">   
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 ">
                            <div>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.pillarFootTitle1')}</h2>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.pillarFootTitle2')}</h2>
                            </div>
                            <div className='mt-8'>
                            <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('home.pillarFootCopy')}}></p> 
                            </div>
                            <div className='mt-6'>
                            <a className='reward-text  text-sm leading-5 tracking-widest font-extralight link-text-1' href={t('home.footUrl1')} target='_blank' rel='noreferrer'>
                            <p className='text-center link-text-1' dangerouslySetInnerHTML={{__html: t('home.footUrl1Copy')}}></p> 
                            </a>
                            <br/><br/>
                            {/* <Typography
                    as="a"
                    href={t('home.footUrl1')}
                    className="font-normal text-xs transition-colors text-gold"
                  >
                    {t('home.footUrl1Copy')}
                  </Typography> */}
                            
                                <a className='reward-text  text-sm leading-5 tracking-widest font-extralight link-text-1' href={t('home.footUrl2')} target='_blank' rel='noreferrer'>
                                <p className='text-center link-text-1' dangerouslySetInnerHTML={{__html: t('home.footUrl2Copy')}}></p></a>
                            
                            
                            <a className='text-center reward-text text-white text-sm leading-5 tracking-widest font-extralight link-text-1' href={t('home.footUrl3')} target='_blank' rel='noreferrer'>
                            <p className='text-center mt-5 link-text-1' dangerouslySetInnerHTML={{__html: t('home.footUrl3Copy')}}></p>
                            </a>

                            
                                <a className='text-center reward-text text-sm leading-5 tracking-widest font-extralight link-text-1' href={t('home.footUrl4')} target='_blank' rel='noreferrer'>
                                <p className='text-center mt-5 link-text-1' dangerouslySetInnerHTML={{__html: t('home.footUrl4Copy')}}></p>
                                </a>

                            </div>
                        </div>
                    </div>                 
                </div>                   
                       
            </section>  



            {/* new sec close */}
            <section className='bg-black'  data-scroll-section>
                <Footer/>
            </section>       
        </>     
    );
};

export default HomePage;