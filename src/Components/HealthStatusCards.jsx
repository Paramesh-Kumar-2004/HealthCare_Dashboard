import React from 'react';
import Health_Status_Bar from "./Health_Status_Bar"
import './../Styles/HealthCard.css';



function HealthStatusCards({ Org_IMG, Org_Name, Apo_Date, Color, Status }) {
    return (
        <div className="Health_Status">
            <div className="card">
                <div className='Img_Name'>
                    <img src={Org_IMG} alt="Lung" />
                    <div className="card-title">{Org_Name}</div>
                </div>
                <div className="card-date">Date : {Apo_Date}</div>
                {/* <div className="card-status" style={{ color: Color }}>{Status}</div> */}
                <Health_Status_Bar Percentage={Status} Fill_Color={Color} />
            </div>
        </div>
    );
};

export default HealthStatusCards;
