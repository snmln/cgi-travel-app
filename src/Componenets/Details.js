import React, { useState, useEffect } from "react";
import { FeedDummyData } from "../data";
import './Details.css';
import { ReactComponent as Bookmark } from '../bookmark.svg';
import spinner from '../89.gif';

function Details({ match }) {
    const [active, setActive] = useState(false)

    // This is the methodolgy I would use if access an API dynamically
    //   
    // useEffect(()=>{
    //     fetchLocation();
    // })
    // const [locationDetails, setLocationDetails] = useState({
    // });
    // const fetchLocation = () => {
    //     const fetchLocation =  fetch(`url`)

    //     const location =  fetchLocation.json();
    //     setLocationDetails(location);
    // };

    // Used to grab specific data from data.js pertaining to the selected travel location

    const detailID = parseInt(match.params.id);
    const location = FeedDummyData.find(Data => {
        return Data.id === detailID
    })

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

// Used to force a load screen to demonstrate spinner functionality
   const helloHandeler = () => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    setShow(!show);
    }, 2000)

  };
  useEffect(() => {
    helloHandeler()
  }, []);
    return (

        <div className="details__container">
            <div className="details__flagship"
                style={{
                    backgroundImage: `url(${location.img})`,
                    backgroundSize: "cover",
                }}>
                <div className="details__location">
                    <div className="fix">{location.location}</div>
                </div>
            </div>
            <div className="details__content">
                <div className="poster__information">
                    <div
                        className="details__headshot"
                        style={{
                            backgroundImage: `url(${location.profileImage})`,
                            backgroundSize: "cover",
                        }}
                    />
                    <div className="poster__informaiton">
                        <div className="poster__name">{location.Poster}</div>
                        <div className="details__date">{location.Date}</div>
                    </div>
                    <div className="bookmark">
                        <Bookmark
                            fill={active === true ? "white" : "none"}
                            stroke="white"
                            width="24"
                            heigth="24"
                            active={active}
                            onClick={() => { setActive(!active) }}
                        />
                    </div>
                </div>
                {!show &&  <div className="spinner__container">
                    <img src={spinner} className="spinner"/>
                </div>}
                {show && <p>{location.Description}</p>} 
             
            </div>
        </div>
    )
}

export default Details
