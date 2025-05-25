import React from 'react';
import AnatomySection from './Anatomy';
import Anatomy from './Anatomy';
import HealthStatusCards from '../Components/HealthStatusCards';
import './../Styles/DashboardMainContent.css';
import CalendarView from "../Components/CalendarView"


function DashboardOverview() {
  return (
    <div className="Dashboard_Component">
      <Anatomy />
      <CalendarView />
    </div>
  );
};

export default DashboardOverview;