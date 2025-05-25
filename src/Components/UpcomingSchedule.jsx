import React from 'react'

function UpcomingSchedule({ Upcoming_Title, Upcoming_Time }) {
    return (
        <div className='UpcomingSchedule_MainDiv'>

            <div>
                <div>{Upcoming_Title}</div>
                <span></span>
            </div>

        </div>
    )
}

export default UpcomingSchedule