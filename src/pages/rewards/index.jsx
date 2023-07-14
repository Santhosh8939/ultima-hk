import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import headerImage from "../../assets/images/rewards_header.jpg";
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import './styles.css';
import Privilege from '../../components/Privilege';

const RewardsPage = () => { 
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
            <section className='flex bg-black' data-scroll-section>
            <Header imageUrl={headerImage} type="image" title={t('rewards.header')} subTitle={t('rewards.subCopy')} preTitle={t('rewards.preTitle') !== 'rewards.preTitle' ? t('rewards.preTitle') : ''} />
            </section>   
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
                <StarField  />
                <div className="container mx-auto relative">                    
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center items-center bg-slash">
                            <h2 className='text-2xl text-center tracking-custom leading-10 reward-title max-w-sm' dangerouslySetInnerHTML={{__html: t('rewards.thankyouTitle')}}></h2>
                        </div>
                        <div className="flex justify-center items-center mx-10 mt-10 md:mt-0 md:mx-0">
                            <div className='text-center md:text-left'>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-semibold mb-4' dangerouslySetInnerHTML={{__html: t('rewards.thankyouCopy')}}></p>                                                                  
                                <p className='text-left reward-text text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('rewards.thankyouCopy2')}}></p>                                                                                                    
                            </div>
                        </div>
                    </div>
                </div> 
            </section>           
            <section className='bg-black'  data-scroll-section>
                <Privilege 
                    pageName = 'rewards'
                    privilege = 'offer1'
                    title={t('rewards.highestTitle')} 
                    subCopy={t('rewards.highestCopy')}
                />
            </section>  
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52'  data-scroll-section>
                <StarField  />
                <div className="container mx-auto relative">                    
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                        <div className="flex justify-center items-center bg-slash">
                            <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey max-w-sm' dangerouslySetInnerHTML={{__html: t('rewards.redeemTitle')}}></h2>
                        </div>
                        <div className="flex justify-center items-center mx-10 mt-10 md:mt-0 md:mx-0">
                            <div className='text-center md:text-left'>
                                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('rewards.redeemCopy')}}></p>
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

export default RewardsPage;