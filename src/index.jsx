import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header, Footer, Subheader } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Smap from './containers/projects/development/Smap';
import Kuben from './containers/projects/development/Kuben';
import AIM from './containers/projects/designs/AIM';
import UMUBook from './containers/projects/development/UMUBook';
import Boujt from './containers/projects/designs/Boujt';
import ScrollToTop from './ScrollToTop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route path="/portfolio_v2" element={<App />} />
            <Route path="/portfolio_v2/kuben" element={<Kuben />} />
            <Route path="/portfolio_v2/smap" element={<Smap />} />
            <Route path="/portfolio_v2/aim" element={<AIM />} />
            <Route path="/portfolio_v2/umubook" element={<UMUBook />} />
            <Route path="/portfolio_v2/boujt" element={<Boujt />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
);