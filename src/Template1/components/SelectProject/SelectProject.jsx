import './SelectProject.css';

function SelectProject() {
  return (
    <select className='projects-navbar-list'>
      <option value='all'>All</option>
      <option value='datascience'>Data Science</option>
      <option value='machinelearning'>Machine Learning</option>
      <option value='web'>Web</option>
    </select>
  );
}

export default SelectProject;
