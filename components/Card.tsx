"use client"

import Image from "next/image";
export default function Card({userData}:{userData:any}){
    const date = new Date(userData.created_at);
    return (
        <div className="shadow-3xl rounded-4xl w-[350px] p-8 font-inter bg-gradient-to-b from-[#2C2C2C] to-[#111111]  text-white tracking-tight">
          <p className="text-[10px] mb-4 flex justify-start items-center gap-1"> <span className="w-2 h-2 bg-green-600 rounded-full mb-[1px]"></span>{userData.location}</p>
          <div className="flex justify-start items-center gap-4 ">
          <div className=" w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
            src={userData.avatar}
            alt="Placeholder Image"
           
            />
          </div>
          <div>
          <p className="text-base text-[#F1F1F1]">{userData.name}</p>
          <p className="text-sm text-[#B0B0B0]">@{userData.username}</p>
          </div>
          </div>
          <p className="text-base mt-4">{userData.bio}</p>

          
          <div className="tracking-tight  grid grid-cols-2 gap-2 mt-4">
          <p className="text-sm py-4 px-3  rounded-lg text-[#B0B0B0] border bg-[#2f2f2f] border-[#474646]  flex flex-col justify-center items-center text-center"><a href="https://abhiifour.xyz">{userData.followers} <br></br>followers</a></p>
          <p className="text-sm py-4 px-3 rounded-lg text-[#B0B0B0] border bg-[#2f2f2f] border-[#474646]  flex flex-col justify-center items-center text-center"><a href="https://abhiifour.xyz">{userData.following} <br></br> following</a></p>
          <p className="text-sm py-4 px-3 rounded-lg text-[#B0B0B0] border bg-[#2f2f2f] border-[#474646] flex flex-col justify-center items-center text-center"><a href="https://abhiifour.xyz">{userData.gist}  <br></br>gists</a></p>
          <p className="text-sm py-4 px-3 rounded-lg text-[#B0B0B0] border bg-[#2f2f2f] border-[#474646]  flex flex-col justify-center items-center text-center"><a href="https://abhiifour.xyz">{userData.repos} <br></br> repos</a></p>
          
          </div>
          <p className="text-xs tracking-tight text-[#B0B0B0] mt-4">Joined on {date.toDateString()}</p>
        </div>
    )
}