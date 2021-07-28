import { FeedDummyData } from "../data";
import Card from "./Card";

function CardList() {
  return (
    <div>
      {FeedDummyData.map((DummyData, key) => {
        return <Card DummyData={DummyData} key={key} />;
      })}
    </div>
  );
}

export default CardList;
