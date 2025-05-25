import React from 'react';
import AnatomySection from './Anatomy';
import Anatomy from './Anatomy';
import HealthStatusCards from '../Components/HealthStatusCards';
import CalendarView from "../Components/CalendarView"
import './../Styles/DashboardMainContent.css';


function DashboardOverview() {
  return (
    <div className="Dashboard_Component">
      <div>
        <Anatomy />
      </div>

      <div>
        <CalendarView />
      </div>
    </div>
  );
};


export default DashboardOverview;