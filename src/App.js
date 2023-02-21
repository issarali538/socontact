import 'bootstrap/dist/css/bootstrap.min.css';
// import path from 'path';
import './assets/css/Style.css';
import {createContext, useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Config/Header';
import Aside from './Config/Aside';
import MainCont from './MainCont';
import Dashboard from './Comps/Dashboard/Dashboard';
import Services from './Comps/Services/Service';
import Package from './Comps/Package/Package';
import Leads from './Comps/Leads/Leads';
import Profile from './Comps/Profile/Profile';
import Team from './Comps/Team/Team';
import Setting from './Comps/Setting/Setting';
import Lead1 from './Comps/Leads/Lead1';
import Lead2 from './Comps/Leads/Lead2';

const App = () => {
  
  return (
    <div id="page-wrapper">
      <BrowserRouter>
        <Header />
        <Aside />
        <MainCont>
          <div className='page-content'>
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/services" element={<Services />} />
              <Route path="/package" element={<Package />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/team" element={<Team />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/lead1" element={<Lead1 />} />
              <Route path="/lead2" element={<Lead2 />} />
            </Routes>
          </div>
        </MainCont>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
