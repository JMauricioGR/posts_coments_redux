import { configureStore } from "@reduxjs/toolkit";
import postsReducer, { postType } from './slice/postsSlice'
import loggedInReducer from './slice/loggedInSlice'


const store = configureStore({
  reducer: {
    posts: postsReducer,
    logged: loggedInReducer
  }
})

type stateType = {
  posts: postType[]
  logged: boolean
}

export default store

export type {stateType}