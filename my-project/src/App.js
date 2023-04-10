import React from 'react';
import "./index.css";
import { BrowserRouter as Router,  Outlet } from 'react-router-dom';
import Routes  from './routes'

import Navbar from './components/layout/navbar/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/footer/Footer';

import { Fragment, useState, useEffect } from 'react';

import {
  renderThumb,
  renderTrack,
  renderView,
} from "./components/layout/Scrollbar";

import { Scrollbars } from "react-custom-scrollbars-2";

const App = () => {

  return (
      <Router>
        <Container customClass ="flex flex-col min-h-screen min-h-3/4">
          <Navbar />
          <Scrollbars
          renderThumbVertical={renderThumb}
          renderTrackVertical={renderTrack}
          renderView={renderView}
          className="flex-grow"
          >
            <Routes />
            <Outlet/>
          </Scrollbars>
          <Footer/>
        </Container>
      </Router>
  );
}

export default App;
