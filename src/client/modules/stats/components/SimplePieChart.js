import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import ChartTitle from './ChartTitle';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const SimplePieChart = () => (
  <div>
    <ChartTitle>Pie</ChartTitle>
    <PieChart width={600} height={200}>
      <Pie
        isAnimationActive={false}
        data={data}
        dataKey="value"
        cx={300}
        cy={100}
        outerRadius={80}
        fill="tomato"
        label
      />
      <Tooltip />
    </PieChart>
  </div>
);

export default SimplePieChart;
