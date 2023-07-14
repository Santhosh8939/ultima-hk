import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody, } from "@material-tailwind/react";
import { Icon } from '../../helpers/common.helpers';
import Table from '../../components/Table';


function Term({
  index,
  openTerm,
  handleOpen,
  title,
  subTitle,
  copy,
  table
}) {

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Accordion open={openTerm === index} icon={<Icon id={index} open={openTerm} />} animate={customAnimation} className='mt-4'>
      <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(index)}>
        {title}
      </AccordionHeader>
      <AccordionBody className='text-white text-xs px-8'>
          {subTitle && (<span className='inline-block mb-4' dangerouslySetInnerHTML={{__html:subTitle}}></span>)}
          <div className='opacity-70 terms-text leading-5' dangerouslySetInnerHTML={{__html: copy}}></div>
          {table && (
            <Table tableType={table} />
          )}
      </AccordionBody>
    </Accordion> 
  );
}

export default Term;