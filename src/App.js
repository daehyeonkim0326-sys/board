import {useState} from "react";
import UserLogin from "./components/UserLogin";
import Posts from "./components/Posts.js";
const App=()=> {
  const [loginUser,setLoginUser] = useState(null);
  const handleUserInfo =(user)=>{
    setLoginUser(user);
  }
  return (
    <div id="App">
      {loginUser ? <p>{loginUser.nickname}님 환영</p> :
      <UserLogin onUser={handleUserInfo}/>
      }
      <Posts/>
    </div>
  );
}

export default App;
