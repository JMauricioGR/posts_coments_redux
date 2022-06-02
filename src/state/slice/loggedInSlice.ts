import { createSlice } from '@reduxjs/toolkit';

const initialState:boolean = false

const loggedInSlice = createSlice({
  name: 'logged',
  initialState,
  reducers:{
    toggleLogged(state){
      return !state
    }
  }
})


export const {toggleLogged} = loggedInSlice.actions

export default loggedInSlice.reducer