import React from 'react';
import { useTranslation} from 'react-i18next';
import { Typography } from "@material-tailwind/react";
import ultima from "./assets/ultima.svg";
import citi from "./assets/citi.svg";
import './styles.css';

const Footer = () => { 
    const { t } = useTranslation();

    return (
      <footer className="relative w-full gradient">
        <div className="mx-auto w-full px-12 py-12">
          <div className="flex flex-col-reverse md:flex-row flex-wrap items-center justify-center text-left md:justify-between">
            <img src={ultima} alt='Ulima' className='mt-6 md:mt-0' />
            <img src={citi} alt='Citi'  />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-12">
            <div className='text-xs text-footer-grey text-center md:text-left'>
              <p className='pb-2' dangerouslySetInnerHTML={{__html: t('footer.paragraph1')}}></p>
              <p className='pb-2' dangerouslySetInnerHTML={{__html: t('footer.paragraph2')}}></p>
              <p className='pb-2' dangerouslySetInnerHTML={{__html: t('footer.paragraph3')}}></p>
            </div>
            <div className='text-xs text-footer-grey flex items-end justify-center md:justify-end mt-6 md:mt-0'>
              <ul className="flex flex-wrap justify-center md:justify-end items-center gap-y-2 gap-x-8">
                <li>
                  <Typography
                    as="a"
                    href={t('footer.link1URL')}
                    className="font-normal text-xs transition-colors text-gold"
                  >
                    {t('footer.link1Text')}
                  </Typography>
                </li>|
                <li>
                  <Typography
                    as="a"
                    target="_blank"
                    href={t('footer.link2URL')}
                    className="font-normal text-xs transition-colors text-gold"
                  >
                    {t('footer.link2Text')}
                  </Typography>
                </li>
              </ul>
            </div>
          </div>        
        </div>
      </footer>
       );
 
}

export default Footer;
