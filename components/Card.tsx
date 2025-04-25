"use client"
import { CiGlobe } from "react-icons/ci";

// import Image from "next/image";
export default function Card({userData}:{userData:any}){
    const date = new Date(userData?.created_at);
    return (
        <div className="shadow-2xl rounded-4xl w-[350px] p-8 font-inter bg-[#2C2C2C]   text-white tracking-tight bg-blur-lg">
          <div className="flex justify-between items-center mb-4">   <p className="text-[10px]  flex justify-start items-center gap-1"> <span className="w-2 h-2 bg-green-600 rounded-full mb-[1px]"></span>{userData?.location}</p>
          {
            userData?.url && (
              <p><a href={userData?.url}><CiGlobe className="text-base text-[#B0B0B0] cursor-pointer"/></a></p>
            )

          }
          </div>
          <div className="flex justify-start items-center gap-4 ">
          <div className=" w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
            src={userData?.avatar}
            alt="Placeholder Image"
           
            />
          </div>
          <div>
          <p className="text-base text-[#F1F1F1] font-medium">{userData?.name}</p>
          <p className="text-sm text-[#B0B0B0]">@{userData?.username}</p>
          </div>
          </div>
          <p className="text-base mt-4 text-[#F1F1F1]">{userData?.bio}</p>

          
          <div className="tracking-tight  grid grid-cols-2 gap-2 mt-4">
          <p className="text-sm py-3 px-3  rounded-lg text-[#B0B0B0] border bg-[#393939] border-[#585858]  flex flex-col justify-center items-center text-center">{userData?.followers} <br></br>followers</p>
          <p className="text-sm py-3 px-3 rounded-lg text-[#B0B0B0] border bg-[#393939] border-[#585858]  flex flex-col justify-center items-center text-center">{userData?.following} <br></br> following</p>
          <p className="text-sm py-3 px-3 rounded-lg text-[#B0B0B0] border bg-[#393939] border-[#585858] flex flex-col justify-center items-center text-center">{userData?.gist}  <br></br>gists</p>
          <p className="text-sm py-3 px-3 rounded-lg text-[#B0B0B0] border bg-[#393939] border-[#585858]  flex flex-col justify-center items-center text-center">{userData?.repos} <br></br> repos</p>
          
          </div>
          <p className="text-xs tracking-tight text-[#B0B0B0] mt-4">Joined on {date?.toDateString()}</p>
        </div>
    )
}