import { createAction } from "@reduxjs/toolkit";

const getToDoDetails = createAction<{
    id: number;
  }>('GET_TO_DO_DETAILS');


  export const serviceActions ={
    getToDoDetails
  }