import React from 'react'
import { FaBell, FaPlus } from 'react-icons/fa';
import "../Styles/Header.css"


function Header() {
    return (
        <header className="header">
            <div className="SearchBar_Bell_Icons">
                <div className="Search_Bar">
                    <input type="text" placeholder="Search..." disabled />
                    <FaBell className="icon" />
                </div>
            </div>

            <div className="Plus_Logo_Icons">
                <button className="Plus_Btn">
                    <FaPlus />
                </button>
                <div className="User_Logo">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="img err"
                        className="avatar"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header
