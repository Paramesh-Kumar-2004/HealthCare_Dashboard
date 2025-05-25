import React from 'react'
import "../Styles/Apoinment.css"


function Appointments({ Title, Icon, Apo_Time, Dr_Name, BGColor }) {
    return (
        <div>

            <div className="Appointments_List" style={{ background: BGColor }}>
                <div className='Title'>
                    <div>{Title}</div>
                    <div>{Icon}</div>
                </div>
                <div className="Apo_Time">
                    <div>{Apo_Time}</div>
                </div>
                <div className="Dr_Name">{Dr_Name}</div>
            </div>

        </div>
    )
}

export default Appointments