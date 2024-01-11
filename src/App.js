import logo from './logo.svg';
import './App.css';
import Restaurant from './Restaurant';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Body from './Body';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Task from './pages/Task';
import Comment from './pages/Comment';
import Form from './pages/Form';
import ControlInputs from './pages/ControlInputs';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/task'>Task</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/career'>Career</Link>
              </li>
              <li>
                <Link to='/comment'>Comment</Link>
              </li>
              <li>
                <Link to='/form'>Form</Link>
              </li>
              <li>
                <Link to='/controlInputs'>ControlInputs</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path='/task' element={<Task />} />
            <Route path='/career' element={<Career />} />
            <Route path='/comment' element={<Comment />} />
            <Route path='/form' element={<Form />} />
            <Route path='/controlInputs' element={<ControlInputs />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}
export default App;
