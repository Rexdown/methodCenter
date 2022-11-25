import { Link  } from 'react-router-dom';

import PdfBlock from '../../components/PdfBlock/PdfBlock';
import SecondHeader from '../../components/SecondHeader/SecondHeader'

import './InfoPage.scss';

function InfoPage() {
  return (
    <div className="infoPage">
      <SecondHeader activeNav='info' />
      <div className="infoPage__content">
        <h2 className="infoPage-title">Платные образовательные услуги</h2>
        <PdfBlock 
          text={
            `Положение об оказании платных образовательных услуг ГАУ ДПО 
            "Саратовский областной учебно-методический центр"`
          } 
        />
        <PdfBlock 
          text={
            `Приказ ГАУ ДПО "Саратовский областной учебно-методический центр" от 26.08.2020 №162/1 
            "О внесении изменений в Положение о платных образовательных услугах ГАУ ДПО "Саратовский 
            областной учебно-методический центр"`
          } 
        />
        <PdfBlock 
          text={
            `Приказ ГАУ ДПО "Саратовский областной учебно-методический центр" от 02.03.2020 №74/1 
            "О внесении изменений в Положение о платных образовательных услугах ГАУ ДПО "Саратовский 
            областной учебно-методический центр"`
          } 
        />
      </div>
    </div>
  );
}

export default InfoPage;
