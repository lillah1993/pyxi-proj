import React from "react";
import TopHead from "../tophead/tophead";
import "./header.style.scss"

const Header = () => (
    <div className="head">
        <TopHead/>
        <img />
        <div className="info">
            <span className="name"></span>
            <span className="address"></span>
        </div>
        
    </div>
);

export default Header;