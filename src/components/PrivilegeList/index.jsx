import React from 'react';
import { useTranslation} from 'react-i18next';
import Privilege from '../Privilege';


function PrivilegeList({
  offerCount = 20,
  pageName = 'moments',
  scrollToTop
}) {

  const { t } = useTranslation();

  var offers = [];
  for (var i = 1; i <= offerCount; i++) {

    let offerName = t(`${pageName}.offer${i}Title`);
    let offerType = t(`${pageName}.offer${i}Type`);

    let showOffer = true;


    if(offerType !== `${pageName}.offer${i}Type` && offerType !== ''){
      if(window.journey !== offerType) {
        showOffer = false;
      }
    }

    if(offerName !== `${pageName}.offer${i}Title` && showOffer) {
      offers.push(
        <Privilege 
          key={i}
          pageName = {pageName}
          scrollToTop = {scrollToTop}
          topText={t('navigation.backToTop')}
          privilege = {`offer${i}`}
          title={t(`${pageName}.offer${i}Title`)} 
          subCopy={t(`${pageName}.offer${i}Copy`)} 
          section1Title={t(`${pageName}.offer${i}IncludedTitle`)}
          section1SubTitle={t(`${pageName}.offer${i}IncludedSubTitle`)}
          section1Copy={t(`${pageName}.offer${i}IncludedCopy`)}  
          section1Copy2={t(`${pageName}.offer${i}IncludedCopy2`) !== `${pageName}.offer${i}IncludedCopy2` ? t(`${pageName}.offer${i}IncludedCopy2`) : ''}                  
          section1Table={t(`${pageName}.offer${i}IncludedTable`) !== `${pageName}.offer${i}IncludedTable` ? t(`${pageName}.offer${i}IncludedTable`) : ''}                  
          section1Table2={t(`${pageName}.offer${i}IncludedTable2`) !== `${pageName}.offer${i}IncludedTable2` ? t(`${pageName}.offer${i}IncludedTable2`) : ''}                  
          section2Title={t(`${pageName}.offer${i}DetailsTitle`)}
          section2SubTitle={t(`${pageName}.offer${i}DetailsSubTitle`)}
          section2Copy={t(`${pageName}.offer${i}DetailsCopy`)}
          section3Title={t(`${pageName}.offer${i}AccessTitle`)}
          section3SubTitle={t(`${pageName}.offer${i}AccessSubTitle`)}
          section3Copy={t(`${pageName}.offer${i}AccessCopy`)}
        />);
    }
  }

  return offers;
}

export default PrivilegeList;