import './AboutItem.css';

function AboutItem({ ikey, value }) {
  return (
    <div className='about-detail-item'>
      <div className='about-detail-item-key'>{ikey} :</div>
      <div className='about-detail-item-value'>{value}</div>
    </div>
  );
}

export default AboutItem;
