import { useSelector } from "react-redux"
import { postType } from "../state/slice/postsSlice"
import { stateType } from "../state/store"
import Post from "./Post"

const PostsList = () => {

  const posts = useSelector((state:stateType) => state.posts)
  

  return (
    <div>
      {posts.map((post:postType) => <Post key={post.id} post={post}/>)}
    </div>
  )
}

export default PostsList
