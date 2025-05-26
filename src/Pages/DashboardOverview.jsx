import React from 'react';
import AnatomySection from './Anatomy';
import Anatomy from './Anatomy';
import HealthStatusCards from '../Components/HealthStatusCards';
import CalendarView from "../Components/CalendarView"
import ActivityChart from '../Components/ActivityChart';

import './../Styles/DashboardMainContent.css';



function DashboardOverview() {
  return (
    <div className="Dashboard_Component">
      <div style={{
        width: "40%",
        zIndex:1
      }}>
        <div>
          <Anatomy />
        </div>
        <div className='Activity_Chart'
          style={{
            height: '100%',
            width: "100%"
          }}
        >
          <ActivityChart />
        </div>
      </div>

      <div style={{
        width: "550px"
      }}>
        <CalendarView />
      </div>
    </div>
  );
};


export default DashboardOverview;