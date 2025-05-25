import React from 'react';
import './../Styles/HealthCard.css';

// const healthCardData = [
//     {
//         title: 'Lungs',
//         date: '24 May 2025',
//         status: 'Needs Attention',
//         color: 'red',
//     },
//     {
//         title: 'Teeth',
//         date: '20 May 2025',
//         status: 'Good',
//         color: 'orange',
//     },
//     {
//         title: 'Bone',
//         date: '12 May 2025',
//         status: 'Healthy',
//         color: 'green',
//     },
// ];

function HealthStatusCards({ Org_IMG, Org_Name, Apo_Date, Color, Status }) {
    return (
        <div className="Health_Status">
            <div className="card">
                <div className='Img_Name'>
                    <img src={Org_IMG} alt="Lung" />
                    <div className="card-title">{Org_Name}</div>
                </div>
                <div className="card-date">Date : {Apo_Date}</div>
                <div className="card-status" style={{ color: Color }}>{Status}</div>
            </div>
        </div>
    );
};

export default HealthStatusCards;
