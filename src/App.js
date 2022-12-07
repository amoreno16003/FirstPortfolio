import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import ThemeSwitcher from './components/ThemeSwitcher';
import Navbar from './components/Navbar';
import About from './components/About'
import Blog from './components/Blog'
import Projects from './components/Projects'
import Weather from './components/Weather'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ThemeSwitcher/> */}
      <Router>
      <div>
          <Routes>
          <Route path='/' element={<Homepage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/weather' element={<Weather/>}/>
          </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
