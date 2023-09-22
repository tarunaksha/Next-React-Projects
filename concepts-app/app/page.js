"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () =>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data); 
  }
  
  return (
    <div>
      <button onClick={getUsers} className="bg-green-600 text-xl text-white rounded-xl p-5 m-5">
        Get Users
      </button>
      <div className="p-8 bg-slate-200 mt-2">
        <ul>
        {users.map((e)=>{
          console.log(e);
          return <li>{e.username}</li>
        })}
        </ul>
      </div>
    </div>
  );
}

export default page;
