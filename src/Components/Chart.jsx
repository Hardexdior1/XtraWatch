// components/BarChartComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan.', inflow: 200 },
  { name: 'Feb.', inflow: 250 },
  { name: 'Mar.', inflow: 220 },
  { name: 'Apr.', inflow: 180 },
  { name: 'May', inflow: 90 },
  { name: 'Jun.', inflow: 160 },
  { name: 'Jul.', inflow: 140 },
  { name: 'Aug.', inflow: 130 },
  { name: 'Sep.', inflow: 10 },
  { name: 'Oct.', inflow: 180 },
  { name: 'Nov.', inflow: 230 },
  { name: 'Dec.', inflow: 250 },
];

const Chart = () => {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="inflow" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
