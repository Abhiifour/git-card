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
import { GrLinkNext } from "react-icons/gr";
import { SiGithubsponsors } from "react-icons/si";

import { useRouter } from 'next/navigation'

export default function Home() {
  const [user , setUser] = useState("")
  const [userData , setUserData] = useState<any>()
  const router = useRouter()

   const handleSubmit = async ()=>{
    router.push(`/${user}`)
  }

  
  return (
    <div className="h-screen w-full bg-[#1E1E1E] font-inter ">
      <div className=" h-[75%] max-w-[1180px]  bg-[url('/gitcat.jpeg')] bg-cover mx-auto border border-dashed border-[#2cd13f]">
       {/* <GoGitMerge className="absolute text-emerald-400 opacity-10 text-9xl top-10 left-10" />
      <FaGitAlt className="absolute text-emerald-400 opacity-10 text-9xl top-20 right-20" />
      <FaGithub className="absolute text-emerald-400 opacity-10 text-9xl bottom-20 left-20" />
      <IoGitPullRequestOutline className="absolute text-emerald-400 opacity-10 text-9xl bottom-10 right-10" />
      <SiGithubactions className="absolute text-emerald-400 opacity-10 text-9xl top-1/2 left-1/4 transform -translate-y-1/2" />
      <SiGithubcopilot className="absolute text-emerald-400 opacity-10 text-9xl top-1/4 right-1/4 transform -translate-x-1/2" />
      <SiGithubsponsors className="absolute text-emerald-400 opacity-10 text-9xl bottom-1/4 left-1/3 transform -translate-x-1/2" /> */}
    </div>
    <div className="h-[25%] flex flex-col justify-center items-center gap-4 py-8 border border-t-0 border-dashed border-[#2cd13f] max-w-[1180px] mx-auto"> 
        <h1 className="font- text-lg text-[#838080]">
          Please add you github username to continue
        </h1>
        <div className="flex gap-1 rounded-3xl border border-[#595858] bg-[#2f2f2f] py-2 pl-4 pr-2 ">
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} onKeyDown={(e) => {
          if(e.key === "Enter"){
            handleSubmit()
          }
        }} className=" py-1 px-2 border-0 outline-0 text-[#686767]"/>

        <button onClick={handleSubmit} className="border-2 p-2 rounded-full px-2 cursor-pointer bg-green-500 border-green-400"   ><GrLinkNext/></button>
        </div>
        </div>
      
    </div>
  );
}
