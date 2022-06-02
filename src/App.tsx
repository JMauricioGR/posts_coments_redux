import { useSelector } from "react-redux"
import Logged from "./components/Logged"
import PostForm from "./components/PostForm"
import PostsList from "./components/PostsList"
import { stateType } from "./state/store"


function App() {

  const logged = useSelector((state:stateType) => state.logged)

  return (
    <div className="App">
      <Logged />
      {logged?
      <div>
        <PostForm />
        <PostsList />
      </div>:
      <h1>You are not logged in</h1> 
    }
      
    </div>
  )
}

export default App
