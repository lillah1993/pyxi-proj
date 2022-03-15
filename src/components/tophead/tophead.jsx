import React from "react";
import { ReactComponent as Beil } from "../../img/svg/beil.svg";
import { ReactComponent as Settings } from "../../img/svg/settings.svg";
import { ReactComponent as Power } from "../../img/svg/power-vector.svg";
import "./tophead.style.scss";
import Title from "../title/title";
// import Language from "../language/language";

const TopHead = () => {
    const frtitles = ['MA SITUATION', 'MES FONDS', 'MES OPERATION' ,'SIMULATEUR', 'DOCUMENTATION'];
    // const languages = ['fr','en'];
    return(
    <div className="tophead">
        <div className="container"> 
                <div className="logo">
                    <span className="first">CDG CAPITAL</span>
                    <span className="second">GESTION</span>
                    <span className="third">GROUPE CDG</span>
                </div>
                <div className="languages">
                    {/* {
                        languages.map((language,index)=> <Language key={index} language={language}/>)
                    } */}
                    <span className="lang">FR</span>
                    <span className="line"/>
                    <span className="lang">EN</span>
                </div>

                {
                    frtitles.map((title,index)=> <Title key={index} title={title}/>)
                }
                <div className="icons">
                    <Beil className="beil"/>
                    <span className="badge"/>
                    <span className="little-line"/>
                    <Settings className="settings"/>
                    <span className="big-line"/>
                    <Power className="power"/>
                </div>
            </div>
    </div>
)}

export default TopHead;