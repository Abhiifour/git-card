"use client"

import Card from "@/components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default  function Page({params}: {params: {userid: string}}) {
    
    
    const [data , setData] = useState<any>()
    
    const getData = async() =>{
        const {userid} = await params;
        const res = await axios.get(`https://git-card-backend.as8998013.workers.dev/user/${userid}`)
        console.log(res.data)
        setData(res.data.data)
    }

 
    useEffect(()=>{
        getData()
    },[])



    if(!data) return (
        <div className="h-screen w-full bg-[#1E1E1E] flex justify-center items-center font-inter">
            <h1 className="text-white">Loading...</h1>
        </div>
    )
    return (
        <div className="relative h-screen w-full bg-[#1E1E1E] flex justify-center items-center font-inter">
            <Card userData={data}/>
            <div className="hidden md:block absolute h-16 w-full border border-b-0 border-r-0 border-l-0 border-dashed border-green-400 bottom-0 left-0"></div>
            <div className= " hidden md:block absolute h-screen w-16 border border-t-0 border-r-0 border-b-0 border-dashed border-green-400 top-0 right-0"></div>
            <div className=" hidden md:block absolute h-screen w-16 border border-b-0 border-l-0 border-t-0 border-dashed border-green-400 top-0 left-0"></div>
            <div className="hidden md:block absolute h-16 w-full border border-t-0 border-r-0 border-l-0 border-dashed border-green-400 top-0 left-0"></div>
        </div>
    )
    
    
}




