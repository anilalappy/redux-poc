import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { serviceActions } from './async-actions';

export interface ContinentState {
  counterValue: number,
  continentMessage:string,
  toDoDetails:any,
  tree:boolean,
  treeValue:string
}

const initialState: ContinentState = {
  counterValue: 0,
  continentMessage:"Default value",
  toDoDetails:{},
  tree:false,
  treeValue:"FALSE"
}
const {tree} =  initialState
console.log("🚀 ~ initialState:",tree)
// console.log("🚀 ~ initialState:", {...initialState,counterValue:150})


export const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  reducers: {
    broadCastContinentMessage:(state,action:PayloadAction<string>)=>{
        state.continentMessage = action.payload
    },
    setToDoDetails:(state,action:PayloadAction<any>)=>{
        state.toDoDetails = action.payload
    },
    changeFlag:(state)=>{
      // state.treeValue = state.tree ? "TRUE":"FALSE"
    }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount,broadCastContinentMessage } = continentsSlice.actions
export const continentActions = {...continentsSlice.actions,...serviceActions}
console.log("🚀 ~ continentActions:", continentActions)

export const {reducer:continent} = continentsSlice