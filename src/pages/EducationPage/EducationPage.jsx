import SecondHeader from '../../components/SecondHeader/SecondHeader'
import PdfBlock from '../../components/PdfBlock/PdfBlock'

import { educationTableOne, educationTableTwo, educationTableThree, educationTableFour, educationTableFive, educationTableSix } from '../../constants'

import './EducationPage.scss';

function EducationPage() {
  return (
    <div className="educationPage">
      <SecondHeader activeNav='education' />
      <div className="educationPage-content">
        <h2 className="educationPage-title">
            Образование
        </h2>
        <h3 className="educationPage-subtitle">
            ИНФОРМАЦИЯ ПО ОБРАЗОВАТЕЛЬНЫМ ПРОГРАММАМ 2020-2021 УЧЕБНЫЙ ГОД
        </h3>

        <table className="educationPage__table">
          <thead>
            <tr className='educationPage__table-mainheader'>
              <th className="educationPage__table__column-1" colspan="10">
                ДОПОЛНИТЕЛЬНОЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ
              </th>
            </tr>
            <tr className='educationPage__table-subheader'>
              <th className="educationPage__table__column-1" colspan="10">
                Реализация дополнительных профессиональных программ (программ повышения квалификации)
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column-1">
                Наименование дополнительной профессиональной программы (ДПП)
              </th>
              <th className="educationPage__table__column-2">
                Язык образования
              </th>
              <th className="educationPage__table__column-3">
                Срок обучения
              </th>
              <th className="educationPage__table__column-4">
                Форма обучения
              </th>
              <th className="educationPage__table__column-5">
                Ссылка на ДПП с приложением ее копии
              </th>
              <th className="educationPage__table__column-6">
                Ссылка на учебный план с приложением его копии
              </th>
              <th className="educationPage__table__column-7">
                Ссылка на аннотацию к ДПП
              </th>
              <th className="educationPage__table__column-8">
                Ссылка на календарный учебный график с приложением его копии
              </th>
              <th className="educationPage__table__column-9">
                Ссылка на методические и иные документы, разработанные СОУМЦ для обеспечения образовательного процесса
              </th>
              <th className="educationPage__table__column-10">
                Использование при реализации ДПП электронного обучения (ЭО) и ДОТ
              </th>
            </tr>
          </thead>
          <tbody>
            {educationTableOne.map((row) => (
              <tr>
                <td className="educationPage__table__column-1">{row.col_1}</td>
                <td className="educationPage__table__column-2">{row.col_2}</td>
                <td className="educationPage__table__column-3">{row.col_3}</td>
                <td className="educationPage__table__column-4">{row.col_4}</td>
                <td className="educationPage__table__column-5 lastRow">
                    {row.col_5 !== '' ? <img src={row.col_5} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-6 lastRow">
                    {row.col_6 !== '' ? <img src={row.col_6} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-7 lastRow">
                    {row.col_7 !== '' ? <img src={row.col_7} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-8 lastRow">
                    {row.col_8 !== '' ? <img src={row.col_8} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-9 lastRow">
                    {row.col_9 !== '' ? <img src={row.col_9} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-10">{row.col_10}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="educationPage__table">
          <thead>
            <tr className='educationPage__table-subheader'>
              <th className="educationPage__table__column-1" colspan="10">
                Реализация дополнительных профессиональных программ (программ профессиональной переподготовки)
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column-1">
                Наименование дополнительной профессиональной программы (ДПП)
              </th>
              <th className="educationPage__table__column-2">
                Язык образования
              </th>
              <th className="educationPage__table__column-3">
                Срок обучения
              </th>
              <th className="educationPage__table__column-4">
                Форма обучения
              </th>
              <th className="educationPage__table__column-5">
                Ссылка на ДПП с приложением ее копии
              </th>
              <th className="educationPage__table__column-6">
                Ссылка на учебный план с приложением его копии
              </th>
              <th className="educationPage__table__column-7">
                Ссылка на аннотацию к ДПП
              </th>
              <th className="educationPage__table__column-8">
                Ссылка на календарный учебный график с приложением его копии
              </th>
              <th className="educationPage__table__column-9">
                Ссылка на методические и иные документы, разработанные СОУМЦ для обеспечения образовательного процесса
              </th>
              <th className="educationPage__table__column-10">
                Использование при реализации ДПП электронного обучения (ЭО) и ДОТ
              </th>
            </tr>
          </thead>
          <tbody>
            {educationTableTwo.map((row) => (
              <tr>
                <td className="educationPage__table__column-1">{row.col_1}</td>
                <td className="educationPage__table__column-2">{row.col_2}</td>
                <td className="educationPage__table__column-3">{row.col_3}</td>
                <td className="educationPage__table__column-4">{row.col_4}</td>
                <td className="educationPage__table__column-5 lastRow">
                    {row.col_5 !== '' ? <img src={row.col_5} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-6 lastRow">
                    {row.col_6 !== '' ? <img src={row.col_6} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-7 lastRow">
                    {row.col_7 !== '' ? <img src={row.col_7} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-8 lastRow">
                    {row.col_8 !== '' ? <img src={row.col_8} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-9 lastRow">
                    {row.col_9 !== '' ? <img src={row.col_9} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-10">{row.col_10}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="educationPage__table lastTable">
          <thead>
            <tr className='educationPage__table-header'>
              <th className="educationPage__table__column-1" colspan="10">
                ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ ДЕТЕЙ И ВЗРОСЛЫХ
              </th>
            </tr>
            <tr className='educationPage__table-subheader'>
              <th className="educationPage__table__column-1" colspan="10">
                Реализация дополнительных общеразвивающих программ (для детей)
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column-1">
                Наименование дополнительной профессиональной программы (ДПП)
              </th>
              <th className="educationPage__table__column-2">
                Язык образования
              </th>
              <th className="educationPage__table__column-3">
                Срок обучения
              </th>
              <th className="educationPage__table__column-4">
                Форма обучения
              </th>
              <th className="educationPage__table__column-5">
                Ссылка на ДПП с приложением ее копии
              </th>
              <th className="educationPage__table__column-6">
                Ссылка на учебный план с приложением его копии
              </th>
              <th className="educationPage__table__column-7">
                Ссылка на аннотацию к ДПП
              </th>
              <th className="educationPage__table__column-8">
                Ссылка на календарный учебный график с приложением его копии
              </th>
              <th className="educationPage__table__column-9">
                Ссылка на методические и иные документы, разработанные СОУМЦ для обеспечения образовательного процесса
              </th>
              <th className="educationPage__table__column-10">
                Использование при реализации ДПП электронного обучения (ЭО) и ДОТ
              </th>
            </tr>
          </thead>
          <tbody>
            {educationTableThree.map((row) => (
              <tr>
                <td className="educationPage__table__column-1 lastRow">{row.col_1}</td>
                <td className="educationPage__table__column-2 lastRow">{row.col_2}</td>
                <td className="educationPage__table__column-3 lastRow">{row.col_3}</td>
                <td className="educationPage__table__column-4 lastRow">{row.col_4}</td>
                <td className="educationPage__table__column-5 lastRow">
                    {row.col_5 !== '' ? <img src={row.col_5} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-6 lastRow">
                    {row.col_6 !== '' ? <img src={row.col_6} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-7 lastRow">
                    {row.col_7 !== '' ? <img src={row.col_7} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-8 lastRow">
                    {row.col_8 !== '' ? <img src={row.col_8} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-9 lastRow">
                    {row.col_9 !== '' ? <img src={row.col_9} alt="pdf" /> : ''}
                </td>
                <td className="educationPage__table__column-10 lastRow">{row.col_10}</td>
              </tr>
            ))}
          </tbody>
        </table>


        <h3 className="educationPage-subtitle">
            ИНФОРМАЦИЯ О ЧИСЛЕННОСТИ ОБУЧАЮЩИХСЯ 2020-2021 УЧЕБНЫЙ ГОД НА 01.04.2021 ГОДА
        </h3>


        <table className="educationPage__table">
          <thead>
            <tr className='educationPage__table-mainheader'>
              <th className="educationPage__table__column" colspan="10">
                Реализация дополнительных профессиональных программ (программ повышения квалификации)
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column" rowspan="2" >
                Наименование дополнительной профессиональной программы (повышения квалификации)
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Вид образования
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Форма обучения
              </th>
              <th className="educationPage__table__column" colspan="2">
                Численность обучающихся за счет (количество человек)
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Численность обучающихся, являющихся иностранными гражданами
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column" >
                бюджетов субъектов РФ
              </th>
              <th className="educationPage__table__column" rowspan="2">
                средств физических и (или) юридических лиц
              </th>
            </tr>
          </thead>
          <tbody>
            {educationTableFour.map((row) => (
              <tr>
                <td className="educationPage__table__column-one">{row.col_1}</td>
                <td className="educationPage__table__column-two">{row.col_2}</td>
                <td className="educationPage__table__column-three">{row.col_3}</td>
                <td className="educationPage__table__column-four">{row.col_4}</td>
                <td className="educationPage__table__column-five">{row.col_5}</td>
                <td className="educationPage__table__column-six">{row.col_6}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="educationPage__table">
          <thead>
            <tr className='educationPage__table-subheader'>
              <th className="educationPage__table__column" colspan="10">
                Реализация дополнительных профессиональных программ (программ профессиональной переподготовки)
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column" rowspan="2" >
                Наименование дополнительной профессиональной программы (повышения квалификации)
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Вид образования
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Форма обучения
              </th>
              <th className="educationPage__table__column" colspan="2">
                Численность обучающихся за счет (количество человек)
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Численность обучающихся, являющихся иностранными гражданами
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column" >
                бюджетов субъектов РФ
              </th>
              <th className="educationPage__table__column" rowspan="2">
                средств физических и (или) юридических лиц
              </th>
            </tr>
          </thead>
          <tbody>
            {educationTableFive.map((row) => (
              <tr>
                <td className="educationPage__table__column-one">{row.col_1}</td>
                <td className="educationPage__table__column-two">{row.col_2}</td>
                <td className="educationPage__table__column-three">{row.col_3}</td>
                <td className="educationPage__table__column-four">{row.col_4}</td>
                <td className="educationPage__table__column-five">{row.col_5}</td>
                <td className="educationPage__table__column-six">{row.col_6}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="educationPage__table">
          <thead>
            <tr className='educationPage__table-subheader'>
              <th className="educationPage__table__column" colspan="10">
                Реализация дополнительных общеразвивающих программ (для взрослых)
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column" rowspan="2" >
                Наименование дополнительной профессиональной программы (повышения квалификации)
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Вид образования
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Форма обучения
              </th>
              <th className="educationPage__table__column" colspan="2">
                Численность обучающихся за счет (количество человек)
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Численность обучающихся, являющихся иностранными гражданами
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column" >
                бюджетов субъектов РФ
              </th>
              <th className="educationPage__table__column" rowspan="2">
                средств физических и (или) юридических лиц
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="educationPage__table__column-one"></td>
            <td className="educationPage__table__column-two"></td>
            <td className="educationPage__table__column-three"></td>
            <td className="educationPage__table__column-four"></td>
            <td className="educationPage__table__column-five"></td>
            <td className="educationPage__table__column-six"></td>
            </tr>
          </tbody>
        </table>

        <table className="educationPage__table realLastTable">
          <thead>
            <tr className='educationPage__table-subheader'>
              <th className="educationPage__table__column" colspan="10">
                Реализация дополнительных общеразвивающих программ (для детей)
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column" rowspan="2" >
                Наименование дополнительной профессиональной программы (повышения квалификации)
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Вид образования
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Форма обучения
              </th>
              <th className="educationPage__table__column" colspan="2">
                Численность обучающихся за счет (количество человек)
              </th>
              <th className="educationPage__table__column" rowspan="2">
                Численность обучающихся, являющихся иностранными гражданами
              </th>
            </tr>
            <tr>
              <th className="educationPage__table__column" >
                бюджетов субъектов РФ
              </th>
              <th className="educationPage__table__column" rowspan="2">
                средств физических и (или) юридических лиц
              </th>
            </tr>
          </thead>
          <tbody>
            {educationTableSix.map((row) => (
              <tr>
                <td className="educationPage__table__column-one lastRow">{row.col_1}</td>
                <td className="educationPage__table__column-two lastRow">{row.col_2}</td>
                <td className="educationPage__table__column-three lastRow">{row.col_3}</td>
                <td className="educationPage__table__column-four lastRow">{row.col_4}</td>
                <td className="educationPage__table__column-five lastRow">{row.col_5}</td>
                <td className="educationPage__table__column-six lastRow">{row.col_6}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <PdfBlock text="Лицензия на осуществление образовательной деятельности" />
        <PdfBlock text="Приложение №1 к лицензии" />
      </div>
    </div>
  );
}

export default EducationPage;
