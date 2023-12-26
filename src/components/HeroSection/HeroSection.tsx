import { TbTriangleInvertedFilled } from "react-icons/tb"

export default function HeroSection() {
    return (
        <div>
            <div className="h-[605px] w-full bg-[url(/institute.webp)] bg-cover bg-center">
                <div className='flex items-center md:px-[10rem] w-full h-full px-5 bg-gradient-to-r from-stone-950'>
                <div className="animate-fade-right animate-once animate-duration-[1500ms] animate-ease-in-out ">
                    <p className="font-bold text-3xl md:text-[2.5rem]">STUDY AT LIT.</p>
                    <p className="font-bold text-3xl md:text-[2.5rem]">TECHNO CAMPUS</p>
                    <div className="w-full bg-white h-[2px] mt-2"></div>
                    <div className="w-24 h-2 bg-white"></div>
                </div>
                </div>

            </div>
            
                
            <div className='w-full bg-stone-950 text-white py-1 px-5 flex items-center justify-center flex-col'>
                <p className="text-md">GET TO KNOW LIT - TECHNO CAMPUS</p>
                <TbTriangleInvertedFilled style={{fontSize: '15px', marginTop: '5px'}} className='animate-fade animate-infinite animate-ease-in-out' />
            </div>
        </div>
    )
}