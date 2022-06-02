import { createSlice } from "@reduxjs/toolkit";

type commentType = {
  id: string,
  message: string
}

type postType = {
  id: string,
  title:string,
  message: string,
  comments: commentType[]
}


const initialState:postType[] = [
  {
    id: '1',
    title: 'first title',
    message: 'first message',
    comments: [
      {
        id: '2',
        message: 'message of the comment'
      }
    ]
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action){
      state.push(action.payload)
    }
  }
})

export const {addPost} = postsSlice.actions

export default postsSlice.reducer

export type {postType, commentType}