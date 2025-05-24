import React from 'react';
import './../Styles/DashboardMainContent.css';

const healthCardData = [
    {
        title: 'Lungs',
        date: '24 May 2025',
        status: 'Needs Attention',
        color: 'red',
    },
    {
        title: 'Teeth',
        date: '20 May 2025',
        status: 'Good',
        color: 'orange',
    },
    {
        title: 'Bone',
        date: '12 May 2025',
        status: 'Healthy',
        color: 'green',
    },
];

function HealthStatusCards() {
    return (
        <div className="health-status-cards">
            {healthCardData.map((card, index) => (
                <div key={index} className="card">
                    <div className="card-title">{card.title}</div>
                    <div className="card-date">{card.date}</div>
                    <div className="card-status" style={{ color: card.color }}>
                        {card.status}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HealthStatusCards;
