import React,{useState} from "react";
import './App.css';

function User(){
    const [user,setUser] = useState('Muhammad Abbas');

    const changeName = () => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
          setUser(data.results[0].name.first + data.results[0].name.last);
        })
      }
    
      setTimeout(changeName,5000);

    return(
        <div>
            <h1>{user}</h1>
        </div>    );

}

export default User;