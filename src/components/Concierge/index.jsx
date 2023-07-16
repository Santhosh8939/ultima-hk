import React from 'react';
import GoldButton from '../../components/GoldButton';
import { useTranslation} from 'react-i18next';


const Concierge = () => { 

  const { t } = useTranslation();
    
    return (
      <div className="container mx-auto relative">                    
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
            <div className="flex justify-center items-center bg-slash">
                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey max-w-sm' dangerouslySetInnerHTML={{__html: t('concierge.conciergeTitle')}}></h2>
            </div>
            <div className="flex justify-center items-center mx-10 mt-10 md:mt-0 md:mx-0">
                <div className='text-center md:text-left'>
                    <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('concierge.conciergeBody')}}></p>
                    <GoldButton href='#/dedication#ContactUs' text={t('concierge.conciergeButton')} className='mt-16' />                                   
                     </div>
            </div>
        </div>
      </div>  
  );
}

export default Concierge;