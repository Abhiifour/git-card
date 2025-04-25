import Card from "@/components/Card";



export default async function Page({
    params,
  }: {
    params: Promise<{ userid: string }>
  }) {
    
  const { userid } = await params;

  return (
        <div className="relative h-screen w-full bg-[#1E1E1E] flex justify-center items-center font-inter">
            <Card userId={userid}/>
            <div className="hidden md:block absolute h-16 w-full border border-b-0 border-r-0 border-l-0 border-dashed border-[#2cd13f] bottom-0 left-0"></div>
            <div className= " hidden md:block absolute h-screen w-16 border border-t-0 border-r-0 border-b-0 border-dashed border-[#2cd13f] top-0 right-0"></div>
            <div className=" hidden md:block absolute h-screen w-16 border border-b-0 border-l-0 border-t-0 border-dashed border-[#2cd13f] top-0 left-0"></div>
            <div className="hidden md:block absolute h-16 w-full border border-t-0 border-r-0 border-l-0 border-dashed border-[#2cd13f] top-0 left-0"></div>
        </div>
    )
    
    
}




