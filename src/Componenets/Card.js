import React, { useState } from "react";
import { ReactComponent as Bookmark } from '../bookmark.svg';
import "./Card.css";
import {Link } from 'react-router-dom';


function Card({ DummyData }) {


  const [active, setActive] = useState(false)

  // Used to add '...' to the end of the card descriptions if the exceed 50 characters
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
  // Used to stop click aciton from bubbling up to <Link> tag
  function handleChildClick(e){
    e.preventDefault();
    e.stopPropagation();
    setActive(!active);
  }
  
  return (
    // Dynamically linking to travel destination page based on key data element
    <Link to={`/travel/${DummyData.id}`} >

    <div
      className="card__container"
      style={{
        backgroundImage: `url(${DummyData.img})`,
        backgroundSize: "cover",
      }}
      >

      <div className="card__content">
      
        <div
          className="card__headshot"
          style={{
            backgroundImage: `url(${DummyData.profileImage})`,
            backgroundSize: "cover",
          }}
        />
        <div>
          <div className="card__location">
            <div className="fix">{DummyData.location}</div>
          </div>

          <div className="user__name">{DummyData.Poster}</div>

          <div className="card__description">
            {truncate(DummyData?.Description, 50)}
          </div>
        </div>
        <div className="bookmark">
          <Bookmark
            fill={active === true ? "white" : "none"}
            stroke="white"
            width="24"
            heigth="24"
            active={active}
            onClick={handleChildClick}
          />
        </div>
      </div>

    </div> 
    </Link>


  );
}

export default Card;
