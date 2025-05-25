import React from 'react';
import './../Styles/Anatomy.css';
import anatomyImage from '../Assets/anatomy.jpg';
import HealthStatusCards from '../Components/HealthStatusCards';


// const anatomyData = [
//     { label: 'Healthy Heart', color: 'green' },
//     { label: 'Lungs', color: 'red' },
//     { label: 'Teeth', color: 'orange' },
//     { label: 'Bone', color: 'gray' },
// ];


function Anatomy() {
    return (
        <div className="Anatomy_MainDiv">
            <img src={anatomyImage} alt="Anatomical Illustration" className="Anatomy_Image" />
            <div className="Org_Details">

            </div>
            <HealthStatusCards  Org_Name={"Lungs"} Apo_Date={"May-25-2025"} Color={"red"} Status={"Needs Attention"} />
        </div>

    );
};

export default Anatomy;

