import React from 'react';
import './../Styles/DashboardMainContent.css';
import anatomyImage from '../Assets/anatomy.jpg';


const anatomyData = [
    { label: 'Healthy Heart', color: 'green' },
    { label: 'Lungs', color: 'red' },
    { label: 'Teeth', color: 'orange' },
    { label: 'Bone', color: 'gray' },
];


function AnatomySection() {
    return (
        <div className="anatomy-section">
            <img src={anatomyImage} alt="Anatomical Illustration" className="anatomy-image" />
            <div className="anatomy-indicators">
                {anatomyData.map((item, index) => (
                    <div key={index} className="indicator">
                        <span
                            className="status-dot"
                            style={{ backgroundColor: item.color }}
                        ></span>
                        <span className="label">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnatomySection;

