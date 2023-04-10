import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import DashboardHeader from "./pages/Dashboard/DashboardHeader";
import DashboardManutencao from "./pages/Dashboard/DashboardManutencao";
import DashboardDesligamento from "./pages/Dashboard/DashboardDesligamentos";
import Sobre from "./pages/Sobre/Sobre"


const MainRoutes = () => { 
    
    return (
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/Home" element={<Home />} />
            <Route path="/Dashboard" element={<DashboardHeader />}>
              <Route path="/Dashboard/DashboardManutencao" element={<DashboardManutencao />}/>
              <Route path="/Dashboard/DashboardDesligamentos" element={<DashboardDesligamento />}/>
            </Route>
            <Route path="/Sobre" element={<Sobre />} />
        </Routes>
    );
    }
export default MainRoutes;