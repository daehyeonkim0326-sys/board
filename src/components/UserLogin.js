import { loginUser } from '../api/usersAPI'
import { useState } from 'react'
const UserLogin =({onUser})=>{
    
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const handleLogin= async()=>{
        try{
            //api호출
            const userData = await loginUser({email,password});
            onUser(userData);
        }catch(error){
            alert(error.message);
        }
    }

  return (
    <div className="user-login">
        <input 
        type='email'
        placeholder='EMAIL'
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <input 
        type='password'
        placeholder='PW'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button onClick={handleLogin}>로그인</button>
    </div>
  )
}

export default UserLogin