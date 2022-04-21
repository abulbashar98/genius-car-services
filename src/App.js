import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
