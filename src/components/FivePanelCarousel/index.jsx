import React from 'react';
import { useTranslation} from 'react-i18next';
import Carousel from 'react-multi-carousel';
import CarouselPanel from '../CarouselPanel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 6000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 1000 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {  
  return (
    <div className="absolute left-0 right-0">
      <div className='flex justify-center items-center mt-16'>
        <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={() => previous()} >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none"  className='m-auto' xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1.00293L1 8.00293L9 15.0029" stroke="#D2D2D2"/>
          </svg>
        </button>
        <span className='text-white uppercase opacity-50 font-bold text-center text-xs mx-6 md:mx-24'>BROWSE PRIVILEGE CATEGORIES</span>
        <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={() => next()} >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className='m-auto' xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15.0029L9 8.00293L1 1.00293" stroke="#D2D2D2"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

  const FivePanelCarousel = () => {

    const { t } = useTranslation();

      return (
        <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        centerMode={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        containerClass=""
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="p-4 pb-10"
      >
        <CarouselPanel privilege='journeys' title={t('categoryCarousel.titleOne')} subLine={t('categoryCarousel.subLineOne')} link="#/journeys" />
        <CarouselPanel privilege='tastemaker' title={t('categoryCarousel.titleTwo')} subLine={t('categoryCarousel.subLineTwo')} link="#/tastemakers" />
        <CarouselPanel privilege='balance' title={t('categoryCarousel.titleThree')} subLine={t('categoryCarousel.subLineThree')} link="#/balance" />
        <CarouselPanel privilege='moments' title={t('categoryCarousel.titleFour')} subLine={t('categoryCarousel.subLineFour')} link="#/moments" />
        <CarouselPanel privilege='delights' title={t('categoryCarousel.titleFive')} subLine={t('categoryCarousel.subLineFive')} link="#/delights" />
        <CarouselPanel privilege='dedication' title={t('categoryCarousel.titleSix')} subLine={t('categoryCarousel.subLineSix')} link="#/dedication" />
      </Carousel>   
         );
  }

export default FivePanelCarousel;
