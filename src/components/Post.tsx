import { commentType, postType } from "../state/slice/postsSlice"
import Comment from './Comment'

type postProps = {
  post:postType
}

const Post:React.FC<postProps> = ({post}) => {
  return (
    <div>
      <h2>Title: {post.title}</h2>
      <p>message: {post.message}</p>
      <ul>
        {post.comments
        .map((comment) => <Comment key={comment.id} comment={comment} />)}
      </ul>
    </div>
  )
}

export default Post
