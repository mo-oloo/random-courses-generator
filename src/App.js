import logo from './logo.svg';
import './App.css';
import CourseButton from './components/CourseButton';

function App() {
  return (
    <div className="App">
      <CourseButton courses={['React', 'Node', 'MongoDB', 'Express', 'JavaScript', 'HTML', 'CSS']} />
    </div>
  );
}

export default App;
