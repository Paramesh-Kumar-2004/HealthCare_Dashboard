import React from 'react';
import anatomyImage from '../Assets/anatomy.jpg';
import HealthStatusCards from '../Components/HealthStatusCards';

import Bone from "../Assets/Bone.jpg"
import Teeth from "../Assets/Teeth.jpg"
import Lungs from "../Assets/Lungs.jpg"

import './../Styles/Anatomy.css';


function Anatomy() {
    return (
        <div className="Anatomy_MainDiv">
            <div className='Anatomy_Status'>
                {/* <img src={anatomyImage} alt="Anatomical Illustration" className="Anatomy_Image" /> */}

                <div className="Body_Parts">
                    <img src={anatomyImage} alt="Anatomy" className="Anatomy_Image" />

                    <div className="label" style={{ top: "90px", left: "140px" }}>
                        <div className="Highlight_Box"></div>
                        <span style={{ background: "darkblue", color: "white" }} >❤️ Health Heart</span>
                    </div>

                    <div className="label" style={{ top: "290px", left: "-16px" }}>
                        <span style={{ background: "cyan", color: "black" }}>🦵 Healthy Leg</span>
                        <div className="Highlight_Box"></div>
                    </div>

                </div>


                <div className="Org_Details">
                    <HealthStatusCards Org_IMG={Lungs} Org_Name={"Lungs"} Apo_Date={"24-May-2025"} Color={"Darkred"} Status={60} />

                    <HealthStatusCards Org_IMG={Teeth} Org_Name={"Teeth"} Apo_Date={"25-May-2025"} Color={"Green"} Status={60} />

                    <HealthStatusCards Org_IMG={Bone} Org_Name={"Bone"} Apo_Date={"20-May-2025"} Color={"DarkOrange"} Status={60} />

                    <div style={{
                        alignSelf: "end",
                        color: 'grey'
                    }}>Details 🡢</div>
                </div>
            </div>
            

        </div>

    );
};

export default Anatomy;
