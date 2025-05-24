import React from 'react';
import './../Styles/DashboardMainContent.css';
import DashboardOverview from './DashboardOverview';


function DashboardMainContent() {
    return (
        <div className="dashboard-main-content">
            <DashboardOverview />
        </div>
    );
};

export default DashboardMainContent;