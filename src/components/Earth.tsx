import { Africa } from "./continents/Africa";
import { America } from "./continents/America";
import Asia from "./continents/Asia";
import Europe from "./continents/Europe";

export const Earth = () => {
  return (
    <>
    <div style={{border:"2px solid purple",backgroundColor:'greenyellow'}}>
      <div >Earth</div>
      <Africa/>
      <America/>
      <Asia/>
      {/* <Europe/> */}
    </div>
    </>
  );
};
