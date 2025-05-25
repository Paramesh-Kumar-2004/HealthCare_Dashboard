import React from 'react'
import "../Styles/CalendarView.css"



const appointments = {
  "2021-10-26": [
    {
      time: "09:00 - 11:00",
      title: "Dentist",
      doctor: "Dr. Cameron Williamson",
      colorClass: "appointment-blue",
      icon: "🦷",
    },
  ],
  "2021-10-28": [
    {
      time: "11:00 - 12:00",
      title: "Physiotherapy Appointment",
      doctor: "Dr. Kevin Djones",
      colorClass: "appointment-gray",
      icon: "🏋️‍♂️",
    },
  ],
};

const upcomingSchedule = [
  {
    day: "Thursday",
    events: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "🩺" },
      { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
    ],
  },
  {
    day: "Saturday",
    events: [
      { title: "Cardiologist", time: "12:00 PM", icon: "❤️" },
      { title: "Neurologist", time: "16:00 PM", icon: "🧠" },
    ],
  },
];


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
      <h1 className="Calendar_Title">October 2021</h1>

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

      <div className="Appointments_List">

      </div>

      <h2 className="upcoming-title">The Upcoming Schedule</h2>

    </div>
  );
};

export default CalendarView;
