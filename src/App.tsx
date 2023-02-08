import React from 'react';
import { BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import './App.css';
import ListComponent from './pages/ListComponent';
import TestProgram from './pages/TestProgram';

function App() {
  return (
    <>   
    <BrowserRouter>
    <Link to="/">Trial 1</Link><br />
    <Link to="/trial-2">Trial 2</Link><br />
    <hr />
    <Routes>
      <Route path='/trial-2' element={<ListComponent />}></Route>
      <Route path='/' element={<TestProgram />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
