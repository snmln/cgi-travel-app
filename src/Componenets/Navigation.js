import React from 'react'
import './Navigation.css'
import {ReactComponent as Map} from '../map.svg';
import {ReactComponent as Bookmark} from '../bookmark.svg';
import {ReactComponent as Briefcase} from '../briefcase.svg';

function Navigation() {

    
    return (
        // Current functionality is established to have then header and footer navigation work in tandem. These might want to be broken apart for certain functionality
        <div>
        <div className="header__container">
            <div className="header__options">
            <h2>FEED</h2>
            <h2>MAPS</h2>
            </div>
        </div>
        <div className="footer__container">
            <button type="button" >
                <Map 
                fill="none" 
                stroke="#335F08" 
                width="36" 
                heigth="36"
                />Explore</button>
            <button type="button">
                    <Bookmark fill="none" 
                    stroke= "#C4C4C4"
                    width="24" 
                    heigth="24"
                    />{/*Saved*/}</button>
            <button type="button">
                <Briefcase 
                fill="none" 
                stroke= "#C4C4C4"
                width="24" 
                heigth="24"
                />{/*Travel*/}</button>

        </div> 
        </div>
    )
}

export default Navigation
