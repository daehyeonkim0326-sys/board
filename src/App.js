import {useState} from "react";
import UserLogin from "./components/UserLogin";
import Posts from "./components/Posts.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail.js";
import NewPost from "./components/NewPost.js";
const App=()=> {
  const [loginUser,setLoginUser] = useState(null);
  const handleUserInfo =(user)=>{
    setLoginUser(user);
  }
  return (
    //github:HashRouter
    <BrowserRouter>
    <div id="app">
      {!loginUser ? (
      <UserLogin onUser={handleUserInfo}/>):
      ( 
        <>
        <p>오셨습니까! {loginUser.nickname}사마 </p>
      <Routes>
        <Route path="/" element={<Posts userID={loginUser.id}/>}/>
        <Route path="/post/:id" element={<PostDetail userID={loginUser.id}/>}/>
        <Route path="/newpost" element={<NewPost userID={loginUser.id}/>}/>
      </Routes>
      </>
      )
      }
    </div>
    </BrowserRouter>
  );
}

export default App;
