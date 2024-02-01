import { useSelector } from "react-redux";
import { selectContinentToDoDetails } from "../../app/redux-store/continents/selectors";

export const America = () => {
  const continentToDoDetails = useSelector(selectContinentToDoDetails);
  return (
    <div
      style={{
        border: "5px solid green",
        backgroundColor: "orange",
        width: "50vw",
        margin: 25,
      }}
    >
      <div>America</div>
      <div>ToDo ID : {continentToDoDetails?.id ?? ""}</div>
      <div>ToDo TITLE : {continentToDoDetails?.title?? ""}</div>
    </div>
  );
};
