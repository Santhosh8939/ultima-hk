import {React, useState} from 'react';
import { useTranslation} from 'react-i18next';
import {
  Accordion,
  AccordionHeader,
  AccordionBody, } from "@material-tailwind/react";
import ContactTable from '../ContactTable';
import { Icon } from '../../helpers/common.helpers';

const ContactNumbers = () => { 
    const { t } = useTranslation();
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 1 : value);
    };
    
    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
      <>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={customAnimation} className='mt-10'>
          <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(1)}>
            Asia pacific
            </AccordionHeader>
            <AccordionBody className='text-white text-xs'>
              <ContactTable region='asia'/>
              <span className='show-bullets' dangerouslySetInnerHTML={{__html: t('dedication.asia')}}></span>
            </AccordionBody>
        </Accordion>                               
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}  animate={customAnimation}>
            <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(2)}>
            Europe
            </AccordionHeader>
            <AccordionBody className='text-white text-xs'>
              <ContactTable region='europe'/>
              <span className='show-bullets' dangerouslySetInnerHTML={{__html: t('dedication.europe')}}></span>
            </AccordionBody>
        </Accordion>   
        <Accordion open={open ===3} icon={<Icon id={3} open={open} />} animate={customAnimation}>
            <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(3)}>
            North America
            </AccordionHeader>
            <AccordionBody className='text-white text-xs'>
                <ContactTable region='northAmerica'/>
                <span className='show-bullets' dangerouslySetInnerHTML={{__html: t('dedication.northAmerica')}}></span>
            </AccordionBody>
        </Accordion>                               
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}  animate={customAnimation}>
            <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(4)}>
            South America
            </AccordionHeader>
            <AccordionBody className='text-white text-xs'>
                <ContactTable region='southAmerica'/>
                <span className='show-bullets' dangerouslySetInnerHTML={{__html: t('dedication.southAmerica')}}></span>
            </AccordionBody>
        </Accordion>    

        {/* new sec */}
        <div>
                            <a className='text-right reward-text text-sm leading-5 tracking-widest font-extralight link-text-1' href={t('dedication.footNextUrl')} target='_blank' rel='noreferrer'>
                                <p className='text-right mt-5 link-text-1' dangerouslySetInnerHTML={{__html: t('dedication.footNextCopy')}}></p>
                                </a>
                            </div>
                            {/* new sec close */} 
      </>
       );
 
}

export default ContactNumbers;
