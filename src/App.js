// import { useState } from 'react';

import Menu from './Component/Menu';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import BarChart from './Page/BarChart';
import PieChart from './Page/PieChart';
import LineChart from './Page/LineChart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BarChart" element={<BarChart />} />
          <Route path="/PieChart" element={<PieChart />} />
          <Route path="/LineChart" element={<LineChart />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App