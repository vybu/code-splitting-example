import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartTitle from './ChartTitle';

const data = [
  { name: 'February', pv: 2400 },
  { name: 'March', pv: 1398 },
  { name: 'April', pv: 2800 },
  { name: 'May', pv: 3908 },
  { name: 'June', pv: 4800 },
  { name: 'July', pv: 5800 },
  { name: 'August', pv: 6300 },
];

const VisitorsCountChart = () => (
  <div>
    <ChartTitle>Visitors</ChartTitle>
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </div>
);

export default VisitorsCountChart;
