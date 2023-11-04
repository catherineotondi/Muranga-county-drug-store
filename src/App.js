// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrugAddition from './components/DrugAddition';
import DrugsAdded from './components/DrugsAdded';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/Login' element={<LogIn />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/addDrug' element={<DrugAddition />}></Route>
          <Route path='/edit' element={<DrugsAdded />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
      
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
