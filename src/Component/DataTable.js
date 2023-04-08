import React from "react";
import jsonData from "../data.json";
import Table from 'react-bootstrap/Table';

const Tables = () => {
  return (
   <div className="w-50 m-auto p-5">
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Year</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {jsonData.labels.map((year, index) => (
          <tr key={year}>
            <td>{year}</td>
            <td>{jsonData.data[index]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
   </div>
  );
};

export default Tables;
