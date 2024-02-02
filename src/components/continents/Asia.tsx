import { useDispatch, useSelector } from "react-redux";
import { selectContinentBroadcastMessage } from "../../app/redux-store/continents/selectors";
import { continentActions } from "../../app/redux-store/continents/slice";

const Asia = () => {
  const dispatch = useDispatch()
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
      <button onClick={()=>{ dispatch(continentActions.changeFlag())}}> Change flag</button>
    </div>
  );
};
export default Asia;
