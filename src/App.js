// import { useState } from 'react';

import Menu from './Component/Menu';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import BarChart from './Page/BarChart';
import PieChart from './Page/PieChart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BarChart" element={<BarChart />} />
          <Route path="/pieChart" element={<PieChart />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;