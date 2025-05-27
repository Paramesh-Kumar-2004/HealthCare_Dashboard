import React from 'react'
import Appointments from './Appointments';
import UpcomingSchedule from './UpcomingSchedule';

import "../Styles/CalendarView.css"



function CalendarView() {

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = ["25", "26", "27", "28", "29", "30", "31"];

  const dailyTimes = {
    "25": ["12:00", "13:00", "14:00"],
    "26": ["08:00", "09:00", "10:00"],
    "27": ["12:00", "-", "13:00"],
    "28": ["10:00", "11:00", "-"],
    "29": ["-", "14:00", "16:00"],
    "30": ["12:00", "14:00", "15:00"],
    "31": ["09:00", "10:00", "11:00"],
  };

  return (
    <div className="Calendar_Container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: '24px'
        }}>
        <h1 className="Calendar_Title">October 2021</h1>
        <span>⭪  &#160;&#160; ⭬</span>
      </div>

      <div className="Week_Table">
        {weekDays.map((day, i) => {
          const date = dates[i];
          const times = dailyTimes[date] || [];

          return (
            <div key={i} className="Week_Day full"
              style={{
                backgroundColor: date === "26" ? "rgba(0,0,0,0.1)" : "",
                borderRadius: date === "26" ? "10px" : ""
              }}
            >
              <div className="Day_Label">
                <div>{day}</div>
                <div>{date}</div>
              </div>
              <div className="Day_Times">
                {times.length > 0 ? (
                  times.map((time, idx) => (
                    <div key={idx} className="Time_Slot">
                      {time}
                    </div>
                  ))
                ) : (
                  <div className="Time_Slot empty">—</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className='Appointments' >
        <div>
          <Appointments Title={"Dentist"} Icon={"🦷"} Apo_Time={"09:00 - 11:00"} Dr_Name={"Dr. Cameron Williamson"} BGColor={"Darkblue"} />
        </div>

        <div>
          <Appointments Title={"Physiotherapy Appointment"} Icon={"💪"} Apo_Time={"11:00 - 12:00"} Dr_Name={"Dr. Kevin Djones"} />
        </div>
      </div>

      <div className="Up_Coming_Title">The Up Coming Schedule</div>

      <h4 className='Upcoming_Day'>On Thursday</h4>
      <div className="Up_Comings">
        <div>
          <UpcomingSchedule Upcoming_Title={"Health checkup complete"} Icon={"💉"} Upcoming_Time={"11:00"} />
        </div>
        <div>
          <UpcomingSchedule Upcoming_Title={"Ophthalmologist"} Icon={"👀"} Upcoming_Time={"14:00"} />
        </div>
      </div>

      <h4 className='Upcoming_Day'>On Saturday</h4>
      <div className="Up_Comings">
        <div>
          <UpcomingSchedule Upcoming_Title={"Cardiologist"} Icon={"❤️"} Upcoming_Time={"12:00"} />
        </div>
        <div>
          <UpcomingSchedule Upcoming_Title={"Neurologist"} Icon={"🧠"} Upcoming_Time={"16:00"} />
        </div>
      </div>


    </div>
  );
};

export default CalendarView;