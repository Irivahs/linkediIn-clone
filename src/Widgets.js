import React from 'react'
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React is on the on going way", "Top news -9009 readers" )}
            {newsArticle("Coronavirus: India Updates", "Top news -4809 readers" )}
            {newsArticle("Tesla hits new highs", "Cars & auto -9449 readers" )}
            {newsArticle("Bitcoin Breaks $22k", "Crypto -7109 readers" )}
            {newsArticle("Is Redux too good?", "code -8409 readers" )}
            {newsArticle("Sunny react launches course?!", "Top news -5689 readers" )}
        </div>
    )
}

export default Widgets
