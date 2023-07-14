import React from 'react';
import { useTranslation} from 'react-i18next';
import { Carousel } from "@material-tailwind/react";
import Slide from "../Slide";
import featureBoat from "../../assets/images/feature_boat.png";
import featureFood from "../../assets/images/feature_food.png";
import featureHealth from "../../assets/images/feature_health.png"
import featureMoments from "../../assets/images/feature_moments.png";
import featuresurprises from "../../assets/images/feature_surprises.png";
import featureDedication from "../../assets/images/feature_dedication.png";

const CategorySlider = () => {

  const { t } = useTranslation();

  return (
    <Carousel 
      loop={true}      
      prevArrow={({ handlePrev }) => (
        <div className="!absolute top-2/4 -translate-y-2/4 left-4 hidden md:block">
          <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={handlePrev} >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none"  className='m-auto' xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1.00293L1 8.00293L9 15.0029" stroke="#D2D2D2"/>
            </svg>
          </button>
        </div>
      )}
      nextArrow={({ handleNext }) => (
        <div className='!absolute top-2/4 -translate-y-2/4 !right-4 hidden md:block'>
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
      <Slide image={featureBoat} title={t('features.FeatureOneTitle')} body={t('features.FeatureOneBody')} linkText={t('features.FeatureOneLinkText')} link="#/journeys" />
      <Slide image={featureFood} title={t('features.FeatureTwoTitle')} body={t('features.FeatureTwoBody')} linkText={t('features.FeatureTwoLinkText')} link="#/tastemakers" />
      <Slide image={featureHealth} title={t('features.FeatureThreeTitle')} body={t('features.FeatureThreeBody')} linkText={t('features.FeatureThreeLinkText')} link="#/balance" />
      <Slide image={featureMoments} title={t('features.FeatureFourTitle')} body={t('features.FeatureFourBody')} linkText={t('features.FeatureFourLinkText')} link="#/moments" />
      <Slide image={featuresurprises} title={t('features.FeatureFiveTitle')} body={t('features.FeatureFiveBody')} linkText={t('features.FeatureFiveLinkText')} link="#/surprises" />
      <Slide image={featureDedication} title={t('features.FeatureSixTitle')} body={t('features.FeatureSixBody')} linkText={t('features.FeatureSixLinkText')} link="#/dedication" />
    </Carousel>
  );
}

export default CategorySlider;