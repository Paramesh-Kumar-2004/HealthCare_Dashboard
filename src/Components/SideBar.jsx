import React from 'react';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaNotesMedical, FaChartBar, FaVial, FaComments, FaLifeRing, FaCog } from 'react-icons/fa';
import '../Styles/Sidebar.css';


const GeneralSideBar = [
    { label: 'Dashboard', icon: <FaTachometerAlt /> },
    { label: 'History', icon: <FaHistory /> },
    { label: 'Calendar', icon: <FaCalendarAlt /> },
    { label: 'Appointments', icon: <FaNotesMedical /> },
    { label: 'Statistics', icon: <FaChartBar /> },


];

const Tools = [
    { label: 'Chat', icon: <FaComments /> },
    { label: 'Support', icon: <FaLifeRing /> },
]

const SettingsIcon = { label: 'Setting', icon: <FaCog /> }


function SideBar_MainDiv() {
    return (
        <aside className="SideBar_MainDiv">

            <div id='Main'>

                <h1 className="logo">
                    <span style={{ color: 'cyan' }}>Health</span>
                    care<span>.</span></h1>
                <h2 className="SideBar_Heading">General</h2>
                <ul className="SideBar_All_Links">
                    {GeneralSideBar.map((item, index) => (
                        <li key={index} className="SideBar_Link">
                            <span className="SideBar_Icons">{item.icon}</span>
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>

                <h2 className="SideBar_Heading">Tools</h2>
                <ul className="SideBar_All_Links">
                    {Tools.map((item, index) => (
                        <li key={index} className="SideBar_Link">
                            <span className="SideBar_Icons">{item.icon}</span>
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>


            <div className='Settings_Link'>
                <span className="SideBar_Icons">{SettingsIcon.icon}</span>
                <span>{SettingsIcon.label}</span>
            </div>

        </aside>
    );
};

export default SideBar_MainDiv;
