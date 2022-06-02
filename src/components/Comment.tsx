import { commentType } from "../state/slice/postsSlice"

type commentProps = {
  comment: commentType
}

const Comment:React.FC<commentProps> = ({comment}) => {
  return (
    <li>
      {comment.message}
    </li>
  )
}

export default Comment
