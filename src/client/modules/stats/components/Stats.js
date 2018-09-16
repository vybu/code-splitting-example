import React from 'react';
import VisitorsCountChart from './VisitorsCountChart';
import SimplePieChart from './SimplePieChart';
import SimpleBarChart from './SimpleBarChart';


const Stats = () => (
  <div>
    <VisitorsCountChart />
    <SimpleBarChart />
    <SimplePieChart />
  </div>
);

export default Stats;
