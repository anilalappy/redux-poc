import { ChangeEvent, FocusEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { continentActions } from "../../app/redux-store/continents/slice";
import { selectTree } from "../../app/redux-store/continents/selectors";

export const Africa = () => {
  const dispatch = useDispatch();
  const localTree = useSelector(selectTree)
  const [value, setvalue] = useState("");
  const [id, setId] = useState(1);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value);
  };
  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.target.value));
  };
  const handleClick = () => {
    dispatch(continentActions.broadCastContinentMessage(value));
  };
  const handleServiceCall = () => {
    dispatch(continentActions.getToDoDetails({ id }));
  };
  return (
    <div
      style={{
        border: "5px solid blue",
        backgroundColor: "yellow",
        width: "50vw",
        margin: 25,
      }}
    >
      <div>Africa</div>
      <div>Tree :  {localTree ? "TRUE" : "FALSE"}</div>
      <div>
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <button onClick={handleClick}>Broadcast</button>
      </div>
      <hr />
      <div>
        <input type="number" value={id} onChange={(e) => handleChangeId(e)} />
      </div>
      <div>
        <button onClick={handleServiceCall}>Call To Do</button>
      </div>
    </div>
  );
};
