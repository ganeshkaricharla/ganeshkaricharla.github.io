import './PageHeading.css';

function PageHeading({ pageHeading }) {
  return (
    <div className='contact-header'>
      <h1 className='contact-title'>{pageHeading}</h1>
    </div>
  );
}

export default PageHeading;
