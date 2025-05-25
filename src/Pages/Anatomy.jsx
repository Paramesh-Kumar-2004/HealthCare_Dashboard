import React from 'react';
import anatomyImage from '../Assets/anatomy.jpg';
import HealthStatusCards from '../Components/HealthStatusCards';

import Bone from "../Assets/Bone.jpg"
import Teeth from "../Assets/Teeth.jpg"
import Lungs from "../Assets/Lungs.jpg"

import './../Styles/Anatomy.css';


// const anatomyData = [
//     { label: 'Healthy Heart', color: 'green' },
//     { label: 'Lungs', color: 'red' },
//     { label: 'Teeth', color: 'orange' },
//     { label: 'Bone', color: 'gray' },
// ];


function Anatomy() {
    return (
        <div className="Anatomy_MainDiv">
            <div className='Anatomy_Status'>
                <img src={anatomyImage} alt="Anatomical Illustration" className="Anatomy_Image" />

                <div className="Org_Details">
                    <HealthStatusCards Org_IMG={Lungs} Org_Name={"Lungs"} Apo_Date={"24-May-2025"} Color={"red"} Status={"Needs Attention"} />

                    <HealthStatusCards Org_IMG={Teeth} Org_Name={"Teeth"} Apo_Date={"25-May-2025"} Color={"Orange"} Status={"Good"} />

                    <HealthStatusCards Org_IMG={Bone} Org_Name={"Bone"} Apo_Date={"20-May-2025"} Color={"Green"} Status={"Healthy"} />
                </div>
            </div>

        </div>

    );
};

export default Anatomy;

