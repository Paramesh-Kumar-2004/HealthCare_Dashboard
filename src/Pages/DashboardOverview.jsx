import React from 'react';
import AnatomySection from './Anatomy';
import Anatomy from './Anatomy';
import HealthStatusCards from '../Components/HealthStatusCards';
import './../Styles/DashboardMainContent.css';


function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      {/* <AnatomySection /> */}
      <Anatomy />
      <HealthStatusCards />
    </div>
  );
};

export default DashboardOverview;