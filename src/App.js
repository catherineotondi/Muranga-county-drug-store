// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrugAddition from './component/DrugAddition';
import DrugsAdded from './component/DrugsAdded';
import HomePage from './component/HomePage';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';


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
