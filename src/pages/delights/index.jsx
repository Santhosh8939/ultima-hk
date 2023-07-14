import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import PrivilegeList from '../../components/PrivilegeList';
import PrivilegeButtonList from '../../components/PrivilegeButtonList';
import headerImage from "../../assets/images/delights_header.jpg";
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Concierge from '../../components/Concierge';

const DelightsPage = () => { 
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();  

    const goToPrivilege = (element) => {        
        const sectionSelector = document.getElementById(element); 
        scroll && scroll.scrollTo(sectionSelector, {disableLerp: true, offset: -100});
    }   
    
    const scrollToTop = () => {
        scroll.scrollTo(0, { disableLerp: true })  
    }

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
                <Header imageUrl={headerImage} type="image" title={t('delights.header')} subTitle={t('delights.subCopy')} preTitle={t('delights.preTitle') !== 'delights.preTitle' ? t('delights.preTitle') : ''} />
            </section>  
            <section className='bg-black'  data-scroll-section>
                <div className="container md:m-auto mx-10 relative py-16">                    
                    <div className="grid grid-cols-1">
                        <div>
                            <h2 className='text-2xl text-left tracking-custom leading-10 text-light-grey'>JUMP TO</h2>
                        </div>
                        <div className='mt-8'>
                            <PrivilegeButtonList pageName='delights' goToPrivilege={goToPrivilege} />
                        </div>
                    </div>
                </div>  
            </section>
            <section className='bg-black'  data-scroll-section>
                <PrivilegeList pageName='delights' scrollToTop={scrollToTop} />                
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

export default DelightsPage;