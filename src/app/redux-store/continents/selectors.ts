import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectDomain = (state:RootState) => state?.continent
export const selectContinentBroadcastMessage = createSelector([selectDomain],continent=>continent.continentMessage)
export const selectContinentToDoDetails = createSelector([selectDomain],continent=>continent.toDoDetails)