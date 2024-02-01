import { useSelector } from "react-redux";
import { selectContinentBroadcastMessage } from "../../app/redux-store/continents/selectors";

const Asia = () => {
  const continentBroadcastMessage = useSelector(
    selectContinentBroadcastMessage
  );
  return (
    <div
      style={{
        border: "5px solid pink",
        backgroundColor: "cyan",
        width: "50vw",
        margin: 25,
      }}
    >
      <div>Asia</div>
      <div>Message : {continentBroadcastMessage}</div>
    </div>
  );
};
export default Asia;
