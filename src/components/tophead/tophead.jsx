import React from "react";
import { ReactComponent as Beil } from "../../img/svg/beil.svg";
import { ReactComponent as Settings } from "../../img/svg/settings.svg";
import { ReactComponent as Power } from "../../img/svg/power-vector.svg";
import "./tophead.style.scss";
import Title from "../title/title";
import Language from "../language/language";

const TopHead = () => {
    const frtitles = ['ma situation', 'mes fonds', 'mes operarions' ,'simulateur', 'documenatation'];
    const languages = ['fr','en'];
    return(
    <div className="tophead">
        <div className="logo">
            <span></span>
        </div>
        <div className="languges">
            {
                languages.map((language,index)=> <Language key={index} language={language}/>)
            }
        </div>

        {
            frtitles.map((title,index)=> <Title key={index} title={title}/>)
        }
        <div className="icons">
            <div className="beil">
                <Beil />
            </div>
            <div className="settings">
                <Settings />
            </div>
            <div className="power">
                <Power />
            </div>
        </div>
    </div>
)}

export default TopHead;