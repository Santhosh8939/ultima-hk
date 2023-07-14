import { React, useState } from 'react';
import { Carousel,
  Accordion,
  AccordionHeader,
  AccordionBody, } from "@material-tailwind/react";
import { Icon } from '../../helpers/common.helpers';
import Table from '../../components/Table';
import images from '../../assets/images/privileges';
import './styles.css';

  

function Privilege({
  pageName = 'journeys',
  privilege = 'accelerated-points',
  scrollToTop,
  topText,
  title = 'test',
  title2,
  subCopy,
  subCopy2,
  section1Title,
  section1SubTitle,
  section1Copy,
  section1Copy2,
  section1Table,
  section1Table2,
  section2Title,
  section2SubTitle,
  section2Copy,
  section3Title,
  section3SubTitle,
  section3Copy
}) {

  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div id={privilege} className="container mx-auto relative mb-24 md:mb-24">                    
        <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-10">
          {images[pageName][privilege] && (
            <div className="lg:pl-0 xlpl-10 lg:col-span-5">
            {images[pageName][privilege].length === 1 && (
                 <img
                 src={images[pageName][privilege]}
                 alt="Privilege 1"
                 className="h-full w-full md:w-full lg:w-auto object-cover"
               />        
            )} 
            {images[pageName][privilege].length > 1 && (
              <Carousel
              prevArrow={({ handlePrev }) => (
               <div className="!absolute top-2/4 -translate-y-2/4 left-4">
                 <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={handlePrev} >
                   <svg width="10" height="16" viewBox="0 0 10 16" fill="none"  className='m-auto' xmlns="http://www.w3.org/2000/svg">
                     <path d="M9 1.00293L1 8.00293L9 15.0029" stroke="#D2D2D2"/>
                   </svg>
                 </button>
               </div>
             )}
             nextArrow={({ handleNext }) => (
               <div className='!absolute top-2/4 -translate-y-2/4 !right-4'>
                 <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={handleNext} >
                   <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className='m-auto' xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 15.0029L9 8.00293L1 1.00293" stroke="#D2D2D2"/>
                   </svg>
                 </button>
               </div>
             )}
             navigation={({ setActiveIndex, activeIndex, length }) => (
               <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                 {new Array(length).fill("").map((_, i) => (
                   <span
                     key={i}
                     className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-['']  ${
                       activeIndex === i ? "bg-gold" : "bg-transparent border-gold border"
                     }`}
                     onClick={() => setActiveIndex(i)}
                   />
                 ))}
               </div>
             )}
             >
               {images[pageName][privilege]?.map((imageUrl, index) => (
                 <img
                 key={index}
                 src={imageUrl}
                 alt="Privilege 1"
                 className="object-cover"
               /> 
               ))}            
             </Carousel>
            )}            
            </div>
            )}
            <div className="flex lg:col-span-7 justify-start items-center mx-10 mt-10 md:mt-0 md:mx-0 relative">   
              <div className='w-full'>
                <h2 className='text-2xl text-left tracking-custom leading-10 text-white mb-8 uppercase' dangerouslySetInnerHTML={{__html: title}}></h2>
                <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight privilege-text' dangerouslySetInnerHTML={{__html: subCopy}}></p>
                {title2 && (
                  <p className='text-left text-white text-sm leading-5 tracking-widest font-bold privilege-text mt-6' dangerouslySetInnerHTML={{__html: title2}}></p>
                )}
                {subCopy2 && (
                  <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight privilege-text' dangerouslySetInnerHTML={{__html: subCopy2}}></p>
                )}
                <div className='mt-14'>
                {section1Copy && (
                  <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={customAnimation}>
                    <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm' onClick={() => handleOpen(1)}>
                      {section1Title}
                    </AccordionHeader>
                    <AccordionBody className='text-white text-xs'>
                      {section1SubTitle && (<span>{section1SubTitle}<br/></span>)}
                      <span className='privilege-text' dangerouslySetInnerHTML={{__html: section1Copy}}></span>
                      {section1Table && (
                        <Table tableType={section1Table} />
                      )}
                      {section1Copy2 && (<span className='privilege-text' dangerouslySetInnerHTML={{__html: section1Copy2}}></span>)}
                      {section1Table2 && (
                        <Table tableType={section1Table2} />
                      )}
                    </AccordionBody>
                  </Accordion>
                  )}
                  {section2Copy && (
                  <Accordion open={open === 2} icon={<Icon id={2} open={open} />}  animate={customAnimation}>
                    <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm' onClick={() => handleOpen(2)}>
                    {section2Title}
                    </AccordionHeader>
                    <AccordionBody className='text-white text-xs'>
                    {section2SubTitle && (<span>{section2SubTitle}<br/></span>)}
                      <span className='privilege-text' dangerouslySetInnerHTML={{__html: section2Copy}}></span>
                    </AccordionBody>
                  </Accordion>
                  )}
                  {section3Copy && (
                  <Accordion open={open === 3} icon={<Icon id={3} open={open} />}  animate={customAnimation}>
                    <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm' onClick={() => handleOpen(3)}>
                    {section3Title}
                    </AccordionHeader>
                    <AccordionBody className='text-white text-xs'>
                    {section3SubTitle && (<span>{section3SubTitle}<br/></span>)}
                      <span className='privilege-text' dangerouslySetInnerHTML={{__html: section3Copy}}></span>
                    </AccordionBody>
                  </Accordion>
                  )}                  
                </div>                
              </div>
              <div className='absolute left-0 -bottom-10 lg:bottom-0'>
                <button 
                  onClick={() => scrollToTop()} 
                  className='text-gold underline cursor-pointer uppercase'>{topText}</button>                          
              </div>              
            </div>
        </div>
    </div>  
  );
}

export default Privilege;