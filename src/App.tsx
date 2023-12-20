import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import LitNews from "./components/LitNews";



function LitAwards() {
  return (
    <div className="w-full flex gap-12 flex-wrap justify-center bg-red-700 py-12">
        <img src="qs-world.svg" alt="" width={300} />
        <img src="THE.svg" alt=""width={300} />
        <img src="webomet.png" alt="" width={300} />
    </div>
  )
}

function NavBar() {
  return (
    <header className='bg-stone-950 px-24 flex justify-between items-center h-20 sticky top-0 z-[999] animate-fade animate-once animate-ease-in-out'>
          <div className='flex items-center gap-5'>
            <img src="/lit-logo-white.png" alt="lit-logo" className="w-[50px]" />
            <div className="w-24">
              <p className='text-[11px] border-solid border-s-2 ps-5'>Lumii Institute Of Technology</p>
            </div>
          </div>
          
          <nav className=' gap-2 h-full items-center relative z-[-1] lg:flex'>
            <span className='hover:bg-red-600 px-2 py-1 h-full flex items-center cursor-pointer'>PROGRAMME</span>
            <span className='hover:bg-red-600 px-2 py-1 h-full flex items-center cursor-pointer'>ADMISSIONS</span>
            <span className='hover:bg-red-600 px-2 py-1 h-full flex items-center cursor-pointer'>RESEARCH</span>
            <span className='hover:bg-red-600 px-2 py-1 h-full flex items-center cursor-pointer'>ABOUT</span>
            <span className='hover:bg-red-600 px-2 py-1 h-full flex items-center cursor-pointer'>INTERNATIONAL</span>
          </nav>
      </header>
  )
}

function HeroSection() {
  return (
    <>
      <div className="bg-red h-[560px] bg-[url(/institute.webp)] bg-cover bg-center">
        <div className='flex items-center md:px-[10rem] h-full px-5 bg-gradient-to-r from-stone-950'>
          <div className="animate-fade-right animate-once animate-ease-in-out">
            <p className="font-bold text-[2.5rem]">STUDY AT LIT.</p>
            <p className="font-bold text-[2.5rem]">TECHNO CAMPUS</p>
            <div className="w-full bg-white h-[2px] mt-2"></div>
            <div className="w-24 h-2 bg-white"></div>
          </div>
        </div>
        
      </div>

      <div className='w-full bg-stone-950 text-white py-1 px-5 flex items-center justify-center flex-col'>
        <p className="text-md">GET TO KNOW LIT - TECHNO CAMPUS</p>
        <TbTriangleInvertedFilled style={{fontSize: '15px', marginTop: '5px'}} className='animate-fade animate-infinite animate-ease-in-out' />
      </div>
    </>
  )
}

function SideBar() {
  return (
    <div className="fixed right-0 bg-red-700 py-[1rem] px-[0.5rem] top-[30vh] rounded-s-md">
      <FaLinkedin style={{fontSize: '2.5rem'}}/>
      <FaInstagram style={{fontSize: '2.5rem'}} />
      <FaSquareXTwitter style={{fontSize: '2.5rem'}} />
    </div>
  )
}

function LitLocation() {
  return (
    <div className="w-full px-5 mb-24">
      <div className="py-12">
        <p className="text-3xl italic">OUR CAMPUSES</p>
        <div className="h-[1px] w-full bg-white mt-4"></div>
        <div className="h-4 w-24 bg-white"></div>
      </div>

      <div className="flex-col md:flex-row flex gap-4 justify-center items-center">
        <div className="w-full md:flex-1">
          <div className="bg-white rounded-t-md w-full flex items-center px-4">
            <div className="bg-red-700 rounded-full w-[12px] h-[12px] mr-4"></div>
            <p className="text-black inline">LIT - MALAYSIA</p>
          </div>
          <div className="bg-black h-[520px] bg-[url(/location-1.jpg)] bg-cover bg-bottom bg-no-repeat">
            
          </div>

          <div className="bg-white w-full rounded-b-md text-black flex items-center px-4 py-2">
            <FaLocationDot style={{fontSize: '2rem'}} />
            <p className="italic ml-3">SELANGOR, MALAYSIA</p>
          </div>
        </div>

        <div className="w-full md:flex-1">
          <div className="bg-white rounded-t-md w-full flex items-center px-4">
            <div className="bg-blue-700 rounded-full w-[12px] h-[12px] mr-4"></div>
            <p className="text-black inline">LIT - JAPAN</p>
          </div>
          <div className="bg-black flex-1 h-[520px] bg-[url(/loc-2.jpg)] bg-cover bg-no-repeat bg-center">
        
          </div>

          <div className="bg-white w-full rounded-b-md text-black flex items-center px-4 py-2">
            <FaLocationDot style={{fontSize: '2rem'}} />
            <p className="italic ml-3">KYOTO, JAPAN</p>
          </div>
        </div>

        <div className="w-full md:flex-1">
          <div className="bg-white rounded-t-md w-full flex items-center px-4">
            <div className="bg-yellow-700 rounded-full w-[12px] h-[12px] mr-4"></div>
            <p className="text-black inline">LIT - INDONESIA</p>
          </div>
          <div className="bg-black flex-1 h-[520px] bg-[url(/loc-3.jpg)] bg-cover bg-no-repeat bg-bottom">
        
          </div>

          <div className="bg-white w-full rounded-b-md text-black flex items-center px-4 py-2">
            <FaLocationDot style={{fontSize: '2rem'}} />
            <p className="italic ml-3">SURABAYA, INDONESIA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function LitFooter() {
  return (
    <div className="bg-black px-12 py-4">
      <div className="flex gap-4 items-center">
        <img src="/lit-logo-white.png" alt="lit-logo" className="w-[120px]" />
        <div className="w-32">
          <p className='text-[16px] border-solid border-s-2 ps-5'>Lumii Institute Of Technology</p>
        </div>
      </div>

      <div>
        <div className="max-w-[1000px] text-slate-300 mt-12">
          <p className="text-sm">Privacy Policy | DISCLAIMER</p>
          <p className="mt-4 text-sm">PRIVACY POLICY DISCLAIMER
Lumii Institute Of Technology is registered with the Committee for Private Education which is part of SkillsFuture.

Registration No.: 199202950W Validity: 25/03/2023 - 24/03/2027

Lumii Institute Of Technology is registered with the Commissioner of Charities as an Institution of a Public Character (IPC).</p>
          <p className="text-sm mt-4">©2023 Lumii Institute Of Technology. Copyrights. All rights reserved.</p>

          <div className="flex mt-12">
            <a href="#" className="pr-4 hover:text-red-600">EMAIL</a>
            <a href="#" className="border-white border-x-2 px-4 hover:text-red-600">FAX NUMBER</a>
            <a href="#" className="pl-4 hover:text-red-600">LINKEDIN</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className='bg-stone-900'>
        <NavBar />
        <HeroSection />
    
        <div className='flex gap-2 w-full md:justify-center flex-col md:flex-row'>
          <div className='bg-red-700 text-center h-[220px] p-4 flex-1 flex flex-col justify-center items-center'>
            <p className="text-[35px]">120.000+</p>
            <p className="text-[35px]">STUDENTS</p>
          </div>

          <div className='bg-red-700 text-center h-[220px] p-4 flex-1 flex flex-col justify-center items-center'>
            <p className="text-[35px]">62</p>
            <p className="text-[35px]">STUDY PROGRAMS</p>
          </div>

          <div className='bg-red-700 text-center h-[220px] p-4 flex-1 flex flex-col justify-center items-center'>
            <p className="text-[35px]">17</p>
            <p className="text-[35px]">FACULTIES</p>
          </div>
        </div>

        <LitNews />

        <LitAwards />

        <LitLocation />

        <LitFooter />

        <SideBar />
      </div>
    </>
  )
}

export default App
