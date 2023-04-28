import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="text-center">
        <Link to="/ChartJS">
          <Button variant="primary" size="lg" className="mx-5" block style={{ fontSize: "2rem", padding: "1.5rem" }}>
            ChartJS
          </Button>
        </Link>
        <Link to="/HighChartJS">
          <Button variant="danger" size="lg" className="mx-5" block style={{ fontSize: "2rem", padding: "1.5rem" }}>
            HighCharts
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
