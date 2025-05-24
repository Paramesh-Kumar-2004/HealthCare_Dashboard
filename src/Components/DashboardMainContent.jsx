import React from 'react';
import './../Styles/DashboardMainContent.css';
import DashboardOverview from './DashboardOverview';


function DashboardMainContent() {
    return (
        <div className="dashboard-Main_Content">
            <DashboardOverview />
        </div>
    );
};

export default DashboardMainContent;