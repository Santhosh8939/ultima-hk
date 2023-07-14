import {React, useState} from 'react';
import Term from '../Term';
import { useTranslation} from 'react-i18next';

const TermsList = () => { 
    const { t } = useTranslation();
    const [openTerm, setOpenTerm] = useState(0);

    let conditionCount = 40;
    let pageName = 'termsandconditions';
 
    const handleOpen = (value) => {
      setOpenTerm(openTerm === value ? 0 : value);
    };
    
    var Terms = [];
    for (var i = 1; i <= conditionCount; i++) {
  
      let conditionName = t(`${pageName}.condition${i}Title`);
      let conditionType = t(`${pageName}.condition${i}Type`);
  
      let showCondition = true;
  
  
      if(conditionType !== `${pageName}.condition${i}Type` && conditionType !== ''){
        if(window.journey !== conditionType) {
            showCondition = false;
        }
      }
  
      if(conditionName !== `${pageName}.condition${i}Title` && showCondition) {
        Terms.push(
          <Term 
            key={i}
            index={i}
            openTerm={openTerm}
            handleOpen={handleOpen}
            title={t(`${pageName}.condition${i}Title`)} 
            subTitle={t(`${pageName}.condition${i}SubTitle`)} 
            copy={t(`${pageName}.condition${i}Copy`)} 
            table={t(`${pageName}.condition${i}Table`) !== `${pageName}.condition${i}Table` ? t(`${pageName}.condition${i}Table`) : ''}            
          />);
      }
    }
  
    return Terms;
 
}

export default TermsList;
