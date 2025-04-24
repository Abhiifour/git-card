"use client"

import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoGitMerge } from "react-icons/go";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { SiGithubactions } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import { SiGithubsponsors } from "react-icons/si";



export default function Home() {
  const [user , setUser] = useState("")
  const [userData , setUserData] = useState<any>()

   const handleSubmit = async ()=>{
    const res = await axios.get(`http://127.0.0.1:8787/user/${user}`)
    console.log(res.data)
    setUserData(res.data.data)
  }

  
  return (
    <div className="absolute flex justify-center items-center h-screen w-full font-inter">
       <GoGitMerge className="absolute text-emerald-400 opacity-10 text-9xl top-10 left-10" />
      <FaGitAlt className="absolute text-emerald-400 opacity-10 text-9xl top-20 right-20" />
      <FaGithub className="absolute text-emerald-400 opacity-10 text-9xl bottom-20 left-20" />
      <IoGitPullRequestOutline className="absolute text-emerald-400 opacity-10 text-9xl bottom-10 right-10" />
      <SiGithubactions className="absolute text-emerald-400 opacity-10 text-9xl top-1/2 left-1/4 transform -translate-y-1/2" />
      <SiGithubcopilot className="absolute text-emerald-400 opacity-10 text-9xl top-1/4 right-1/4 transform -translate-x-1/2" />
      <SiGithubsponsors className="absolute text-emerald-400 opacity-10 text-9xl bottom-1/4 left-1/3 transform -translate-x-1/2" />
     
      {
        userData ?
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center h-screen ">
        {/* Concentric circles */}
        <div className="absolute w-[400px] h-[480px] rounded-3xl border border-emerald-400/30"></div>
        <div className="absolute w-[390px] h-[460px] rounded-3xl border border-emerald-400/40"></div>
        <div className="absolute w-[380px] h-[440px] rounded-3xl border border-emerald-400/50"></div>
        <div className="absolute w-[370px] h-[420px] rounded-3xl border border-emerald-400/60"></div>
        
        {/* App icon */}
        <div className="relative z-10">
        <Card userData={userData}/>
        </div>

      <div className="absolute top-20 left-16 text-emerald-400 text-2xl">✦</div>
      <div className="absolute top-16 right-16 text-emerald-400 text-2xl">✦</div>
      <div className="absolute bottom-24 left-24 text-emerald-400 text-2xl">✦</div>
      <div className="absolute bottom-24 right-32 text-emerald-400 text-2xl">✦</div>
  </div>
: 
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 border rounded-4xl p-9 "> 
        <h1 className="font-semibold text-lg">
          Please add you github username to continue
        </h1>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} className="border py-1 px-2"/>

        <button onClick={handleSubmit} className="border p-1 rounded-lg px-2 cursor-pointer">Continue</button>
        </div>
      }


      

    </div>
  );
}
