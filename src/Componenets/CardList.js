import { FeedDummyData } from "../data";
import Card from "./Card";
import "./CardList.css";

function CardList() {
  return (
    <div className="card__list__container">
      <p className="timline__agrigation">
        today
      </p>
      {/* Mapping over card component for each element within data.js file */}
      {FeedDummyData.map((DummyData) => {
        return <Card DummyData={DummyData} key={DummyData.id} />
      })}
    </div>
  );
}

export default CardList;
