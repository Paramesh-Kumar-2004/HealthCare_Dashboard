import React from 'react'
import "../Styles/UpcomingSchedule.css"



function UpcomingSchedule({ Upcoming_Title, Icon, Upcoming_Time }) {
    return (

        <div className='UpcomingSchedule_MainDiv'>
            <div className='UpcomingSchedule_Title'>
                <div>{Upcoming_Title}</div>
                <span className='Upcoming_Img'>{Icon}</span>
            </div>

            <div>{Upcoming_Time}</div>

        </div>
    )
}

export default UpcomingSchedule