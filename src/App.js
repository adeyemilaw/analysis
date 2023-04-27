// import { useState } from 'react';

import Menu from './Component/Menu';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import ChartJS from './Page/ChartJS';
import HighChartJS from './Page/HighChartJS';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChartJS" element={<ChartJS />} />
          <Route path="/HighChartJS" element={<HighChartJS />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App