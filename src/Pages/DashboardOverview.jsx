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
      <div>
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

      <div>
        <CalendarView />
      </div>
    </div>
  );
};


export default DashboardOverview;