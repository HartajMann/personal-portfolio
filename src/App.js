import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from '@material-ui/icons';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/Experience' element={<Experience />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
