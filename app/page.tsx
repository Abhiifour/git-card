"use client"

import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {
  const [user , setUser] = useState("")
  const [userData , setUserData] = useState<any>()

  const handleSubmit = async ()=>{
    const res = await axios.get(`http://127.0.0.1:8787/user/${user}`)
    console.log(res.data)
    setUserData(res.data.data)
  }

  
  return (
    <div className="flex justify-center items-center h-screen font-inter">
{/*      
      {
        userData ?
        <Card userData={userData}/> : 
        <div className="flex flex-col justify-center items-center gap-4 border rounded-4xl p-9"> 
        <h1>
          Please add you github username to continue
        </h1>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} className="border py-1 px-2"/>

        <button onClick={handleSubmit} className="border p-1 rounded-lg px-2 cursor-pointer">Continue</button>
        </div>
      } */}

      <Card/>

    </div>
  );
}
