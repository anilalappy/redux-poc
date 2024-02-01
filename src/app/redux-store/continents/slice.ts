import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { serviceActions } from './async-actions';

export interface ContinentState {
  counterValue: number,
  continentMessage:string,
  toDoDetails:any
}

const initialState: ContinentState = {
  counterValue: 0,
  continentMessage:"Default value",
  toDoDetails:{}
}

export const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.counterValue += 1
    // },
    // decrement: (state) => {
    //   state.counterValue -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.counterValue += action.payload
    // },
    broadCastContinentMessage:(state,action:PayloadAction<string>)=>{
        state.continentMessage = action.payload
    },
    setToDoDetails:(state,action:PayloadAction<any>)=>{
        state.toDoDetails = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount,broadCastContinentMessage } = continentsSlice.actions
export const continentActions = {...continentsSlice.actions,...serviceActions}

export const {reducer:continent} = continentsSlice