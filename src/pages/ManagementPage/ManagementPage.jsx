import SecondHeader from '../../components/SecondHeader/SecondHeader'

import { managementArr, managementTable } from '../../constants'

import post from '../../assets/icons/post.svg'
import phone from '../../assets/icons/phone.svg'

import './ManagementPage.scss';

const ManagementItem = (item) => {
  return (
    <div className="managementPage__personal">
      <div className="managementPage__personal-box">
        <img src={item.ava} alt="ava" className="managementPage__personal-ava" />
        <h3 className="managementPage__personal-name">{item.name}</h3>
        <p className="managementPage__personal-post">{item.post}</p>
      </div>
      <div className="managementPage__personal-box">
        <div className="managementPage__personal__info">
          <img src={post} alt="post" className="managementPage__personal__info-icon" />
          <p className="managementPage__personal__info-text">{item.mail}</p>
        </div>
        <div className="managementPage__personal__info">
          <img src={phone} alt="phone" className="managementPage__personal__info-icon" />
          <p className="managementPage__personal__info-text">{item.phone}</p>
        </div>
      </div>
    </div>
  )
}

function ManagementPage() {
  return (
    <div className="managementPage">
      <SecondHeader activeNav='management' />
      <div className="managementPage-content">
        <h2 className="managementPage-title">
          Руководство. Педагогический (научно-педагогический) состав
        </h2>
        <h3 className="managementPage-subtitle">РУКОВОДСТВО</h3>
        <p className="managementPage-text">
          Государственного автономного учреждения дополнительного профессионального образования в сфере 
          культуры и искусства «Саратовский областной учебно-методический центр».
        </p>

        <div className="managementPage-list">
          {managementArr.map((item) => (
            ManagementItem(item)
          ))}
        </div>

        <h3 className="managementPage-subtitle">ПЕДАГОГИЧЕСКИЙ СОСТАВ</h3>

        <table className="managementPage__table">
          <thead>
            <tr>
              <th className="managementPage__table__column-1">№ п/ п</th>
              <th className="managementPage__table__column-2">Ф.И.О</th>
              <th className="managementPage__table__column-3">Должность/ квалификационная категория (при наличии)</th>
              <th className="managementPage__table__column-4">Образование (квалификация)</th>
              <th className="managementPage__table__column-5">Общий стаж работы</th>
              <th className="managementPage__table__column-6">Стаж работы по должности в данном учреждении</th>
              <th className="managementPage__table__column-7">Повышение квалификации, профессиональная переподготовка</th>
              <th className="managementPage__table__column-8">Ученая степень/ Ученое звание</th>
              <th className="managementPage__table__column-9">Награды</th>
            </tr>
          </thead>
          <tbody>
            {managementTable.map((row) => (
              <tr>
                <td className="managementPage__table__column-1">{row.col_1}</td>
                <td className="managementPage__table__column-2">{row.col_2}</td>
                <td className="managementPage__table__column-3">{row.col_3}</td>
                <td className="managementPage__table__column-4">{row.col_4}</td>
                <td className="managementPage__table__column-5">{row.col_5}</td>
                <td className="managementPage__table__column-6">{row.col_6}</td>
                <td className="managementPage__table__column-7">{row.col_7}</td>
                <td className="managementPage__table__column-8">{row.col_8}</td>
                <td className="managementPage__table__column-9">{row.col_9}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManagementPage;
