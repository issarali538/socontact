import 'bootstrap/dist/css/bootstrap.min.css';
// import path from 'path';
import './assets/css/Style.css';
import {Button, Modal} from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Billing from './Comps/BillingInfo/Billing';
import MemberList from './Comps/MemberList/MemberList';
import AddTaskMain from './Comps/AddTask/Main';

const App = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() =>handleShow, []);

  return (
    <>
      <div id="page-wrapper">
        <BrowserRouter>
          <Header />
          <Aside />
          <MainCont>
            <div className='page-content'>
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/services" exact element={<Services />} />
                <Route path="/package" exact element={<Package />} />
                <Route path="/leads" exact element={<Leads />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route path="/team" exact element={<Team />} />
                <Route path="/setting" exact element={<Setting />} />
                <Route path="/lead1" exact element={<Lead1 />} />
                <Route path="/lead2" exact element={<Lead2 />} />
                <Route path="/billing" exact element={<Billing />} />
                <Route path="/member-list" exact element={<MemberList />} />

              </Routes>
            </div>
          </MainCont>
        </BrowserRouter>
      </div>


      <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className='fw-bold'>Please!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h5 className='fw-bold'>
                <h3 className='text-center text-success'> <i className="fa-solid fa-circle-exclamation"></i> </h3>
                This Product is just for to show my work, so this is not proper functional. 

              </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>OK</Button>
          </Modal.Footer>
        </Modal>

    </>
  );
}

export default App;
