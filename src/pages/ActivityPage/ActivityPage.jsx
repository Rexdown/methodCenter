import SecondHeader from '../../components/SecondHeader/SecondHeader'
import { activityArr } from '../../constants';
import './ActivityPage.scss';

const ActivityItem = (item) => {
  return (
    <div className="activityPage__list__item">
      <img src={item.url} alt="pdf" className="activityPage__list__item-img" />
      <p className="activityPage__list__item-text">{item.text}</p>
    </div>
  )
}

function ActivityPage() {
  return (
    <div className="activityPage">
      <SecondHeader activeNav='activity' />
      <div className="activityPage-content">
        <h2 className="activityPage-title">​Региональный центр поддержки одаренных детей</h2>
        <div className="activityPage__list">
          {activityArr.map((item) => (
            ActivityItem(item)
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
