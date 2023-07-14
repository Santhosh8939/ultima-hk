import React from 'react';
import { useTranslation} from 'react-i18next';
import GoldButton from '../../components/GoldButton';


function PrivilegeButtonList({
  offerCount = 20,
  pageName = 'moments',
  goToPrivilege
}) {

  const { t } = useTranslation();

  var offers = [];
  for (var i = 1; i <= offerCount; i++) {

    let offer = `offer${i}`;
    let offerName = t(`${pageName}.offer${i}Title`);
    let offerType = t(`${pageName}.offer${i}Type`);

    let showOffer = true;

    if(offerType !== `${pageName}.offer${i}Type` && offerType !== ''){
      if(window.journey !== offerType) {
        showOffer = false;
      }
    }

    if(offerName !== `${pageName}.offer${i}Title` && showOffer) {
      offers.push(<GoldButton key={i} onClick={() => {goToPrivilege(offer)}}  text={t(`${pageName}.offer${i}Button`)} className='mr-2 mb-2' />  );
    }
  }

  return offers;
}

export default PrivilegeButtonList;