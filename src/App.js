import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Skill from './components/Skill';
import EducationExperience from './components/EducationExperience';
import ExperienceActivities from './components/ExperienceActivities';

function App() {
  return (
    <div className="App">
    
      <Header/>
      <Skill/>
      <EducationExperience/>
      <ExperienceActivities/>
    </div>
  );
}

export default App;
