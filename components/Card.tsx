"use client"
import Image from "next/image";
export default function Card(){
    return (
        <div className="border rounded-4xl w-[400px] h-[400px] p-6">
          <div className="bg-gray-500 w-[50px] h-[50px] rounded-full">
            {/* <Image
            src="https://avatars.githubusercontent.com/u/116870561?v=4"
            alt="Placeholder Image"
            width={50}
            height={50}
            /> */}
          </div>
          <p>Abhishek</p>
          <p>Bio sdfljsdlfjlsdjlfjldfjds</p>
          <div>Blog</div>
        </div>
    )
}