import React from 'react';
import AnatomySection from '../Components/AnatomySection';
import HealthStatusCards from '../Components/HealthStatusCards';
import './../Styles/DashboardMainContent.css';


function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </div>
  );
};

export default DashboardOverview;