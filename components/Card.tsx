"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";

// import Image from "next/image";
interface CardProps{
  userId:any
}
export default function Card({userId}:CardProps){
    const [data , setData] = useState<any>()

     const getData = async() =>{
          
          const res = await axios.get(`https://git-card-backend.as8998013.workers.dev/user/${userId}`)
          console.log(res.data)
          setData(res.data.data)
    }
    useEffect(()=>{
        getData()
    },[])

    const date = new Date(data?.created_at);

    if(!data) return (
      <div className="h-screen w-full bg-[#1E1E1E] flex justify-center items-center font-inter">
          <h1 className=" text-[#B0B0B0]">Loading...</h1>
      </div>
    )

    return (
        <div className="shadow-2xl rounded-4xl w-[350px] p-8 font-inter bg-[#2C2C2C]   text-white tracking-tight bg-blur-lg">
          <div className="flex justify-between items-center mb-4">   <p className="text-[10px]  flex justify-start items-center gap-1"> <span className="w-2 h-2 bg-green-600 rounded-full mb-[1px]"></span>{data?.location}</p>
          {
            data?.url && (
              <p><a href={data?.url}><CiGlobe className="text-base text-[#B0B0B0] cursor-pointer"/></a></p>
            )

          }
          </div>
          <div className="flex justify-start items-center gap-4 ">
          <div className=" w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
            src={data?.avatar}
            alt="Placeholder Image"
           
            />
          </div>
          <div>
          <p className="text-base text-[#F1F1F1] font-medium">{data?.name}</p>
          <p className="text-sm text-[#B0B0B0]">@{data?.username}</p>
          </div>
          </div>
          <p className="text-base mt-4 text-[#F1F1F1]">{data?.bio}</p>

          
          <div className="tracking-tight  grid grid-cols-2 gap-2 mt-4">
          <p className="text-sm py-3 px-3  rounded-lg text-[#B0B0B0] border bg-[#393939] border-[#585858]  flex flex-col justify-center items-center text-center">{data?.followers} <br></br>followers</p>
          <p className="text-sm py-3 px-3 rounded-lg text-[#B0B0B0] border bg-[#393939] border-[#585858]  flex flex-col justify-center items-center text-center">{data?.following} <br></br> following</p>
          <p className="text-sm py-3 px-3 rounded-lg text-[#B0B0B0] border bg-[#393939] border-[#585858] flex flex-col justify-center items-center text-center">{data?.gist}  <br></br>gists</p>
          <p className="text-sm py-3 px-3 rounded-lg text-[#B0B0B0] border bg-[#393939] border-[#585858]  flex flex-col justify-center items-center text-center">{data?.repos} <br></br> repos</p>
          
          </div>
          <p className="text-xs tracking-tight text-[#B0B0B0] mt-4">Joined on {date?.toDateString()}</p>
        </div>
    )
}