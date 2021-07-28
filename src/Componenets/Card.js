import React from "react";
import bookmark from "../bookmark.svg";
import "./Card.css";
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Card({ DummyData, key }) {
  return (
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
          <div className="card__location">{DummyData.location}</div>

          <div className="user__name">{DummyData.Poster}</div>

          <div className="card__description">
            {truncate(DummyData?.Description, 90)}
          </div>
        </div>
        <div>
          <img src={bookmark} alt="bookmark" className="bookmark" />
        </div>
      </div>
    </div>
  );
}

export default Card;
