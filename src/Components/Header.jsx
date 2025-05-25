import React from 'react'
import { FaBell, FaPlus } from 'react-icons/fa';
import "../Styles/Header.css"
import Logo from "../Assets/Logo.jpeg"


function Header() {
    return (
        <header className="header">
            <div className="SearchBar_Bell_Icons">
                <div className="Search_Bar">
                    <input type="text" placeholder="Search..." disabled />
                    <FaBell className="Bell_Icon" />
                </div>
            </div>

            <div className="Plus_Logo_Icons">
                <button className="Plus_Btn">
                    <FaPlus />
                </button>
                <div className="User_Logo">
                    <img
                        src={Logo}
                        alt="err"
                        className="avatar"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header
