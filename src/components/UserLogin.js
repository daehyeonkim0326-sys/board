import React from 'react'
import { loginUser } from '../api/usersAPI'
const UserLogin =({onUser})=>{
    
    const handleLogin= async()=>{
        const email ='chulsu@test.com';
        const password='1234';
        try{
            //api호출
            const userData = await loginUser({email,password});
            onUser(userData);
        }catch(error){
            alert(error.message);
        }
    }

  return (
    <div classname="user-login">
        <button onClick={handleLogin}></button>
    </div>
  )
}

export default UserLogin