import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, postType } from "../state/slice/postsSlice";

interface IPostFormProps {
}

const PostForm: React.FC<IPostFormProps> = (props) => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')


  const addPostForm = 
  (e:any) => {
    e.preventDefault()
    if(title&&message){
      const post:postType = {
        id: Math.floor(Math.random() * 100).toString(),
        title,
        message,
        comments: []
      }

      dispatch(addPost(post))
      setMessage('')
      setTitle('')
    }
  }

  return (
    <form>
      <label htmlFor="title">Title:</label><br/>
      <input 
        type="text" 
        name="title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br />
      <label htmlFor="message">Message:</label><br/>
      <input 
        type="text" 
        name="message" 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      /><br />
      <button onClick={addPostForm}>Add post</button>
    </form>
  );
};

export default PostForm;

