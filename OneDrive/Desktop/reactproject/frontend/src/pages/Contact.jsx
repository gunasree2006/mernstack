/*import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [user,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h1>Users</h1>
      {user.map((user)=>(
        <div key={user.id}>
          <h4>Name:{user.name}</h4>
          <h4>Email:{user.email}</h4>
        </div>
      ))}
    </div>
  )
}

export default Contact*/

import axios from "axios"
import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [user,setUsers]=useState([])
  const fetchData=async()=>{
    try{
      const res=await axios.get("https://jsonplaceholder.typicode.com/users/1/posts")
      setUsers(res.data)
    }catch(error){
      console.log('Error:',error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <h1>Users</h1>
      {user.map((user)=>(
        <div key={user.id}>
          <h4>Body:{user.body}</h4>
          <h4>Title:{user.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default Contact