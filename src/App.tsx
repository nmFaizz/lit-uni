import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import LitNews from "./components/LitNews";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";



function LitAwards() {
  return (
    <div className="w-full flex gap-12 flex-wrap justify-center bg-red-700 py-12 ">
        <img src="qs-world.svg" alt="" width={300} />
        <img src="THE.svg" alt=""width={300} />
        <img src="webomet.png" alt="" width={300} />
    </div>
  )
}

function NavBar() {
  const [menu, setMenu] = useState(false)
  const navOpt: string[] = ['PROGRAMME', 'ADMISSIONS', 'RESEARCH', 'ABOUT', 'INTERNATIONAL']

  function isMenu() {
    setMenu(pervState => {
      return !pervState
    })
  }
  
  return (
    <header className="sticky top-0 z-50 w-full bg-stone-950">
      <div className='px-4 lg:px-24 flex h-[65px] lg:h-[90px] lg:justify-between lg:items-center animate-fade animate-once animate-ease-in-out'>
            <div className='flex items-center w-full lg:h-0 justify-between'>
              <div className="flex items-center gap-5">
                <img src="/lit-logo-white.png" alt="lit-logo" className="w-[50px]" decoding="async"/>
                <div className="w-24">
                  <p className='text-[11px] border-solid border-s-2 ps-5'>Lumii Institute Of Technology</p>
                </div>
              </div>

              <div className={`lg:hidden ${menu ? 'text-red-500' : 'text-white-500'}`} onClick={isMenu}>
                <RiMenu3Fill style={{fontSize: '2rem'}} />
              </div>
            </div>
            <nav className='gap-2 h-full items-center lg:flex hidden'>
              {navOpt.map(opt => <span className='hover:bg-red-600 lg:px-2 py-4 lg:py-1 h-full flex items-center cursor-pointer'>{opt}</span>)}
            </nav>
        </div>
        <nav className={`lg:hidden bg-stone-950 ${menu ? 'h-[100vh]' : 'h-0 overflow-hidden'} transition-all`}>
          <div>
            {navOpt.map(opt => <span className='hover:bg-red-600 px-2 py-4 lg:py-1 h-full flex items-center cursor-pointer'>{opt}</span> )}
          </div>
        </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <div>
      <div className="h-[560px] w-full relative">
        <img src="/institute.webp" alt="lit-uni" style={{width: '100%', height: '100%', objectFit: 'cover'}} decoding="async" />
        <div className='flex items-center md:px-[10rem] w-full h-full px-5 bg-gradient-to-r from-stone-950 absolute top-0 left-0'>
          <div className="animate-fade-right animate-once animate-ease-in-out">
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

function SideBar() {
  return (
    <div className="fixed right-0 bg-red-700 py-[1rem] px-[0.5rem] top-[30vh] rounded-s-md hidden md:block">
      <FaLinkedin style={{fontSize: '2.5rem'}}/>
      <FaInstagram style={{fontSize: '2.5rem'}} />
      <FaSquareXTwitter style={{fontSize: '2.5rem'}} />
    </div>
  )
}

function LitLocation() {
  const detailLoc = [
    {
      header: 'LIT - MALAYSIA',
      color: 'bg-red-700',
      location: 'SELANGOR, MALAYSIA',
      image: '/location-1.jpg',
      imgAlt: 'lit-malay'
    },
    {
      header: 'LIT - JAPAN',
      color: 'bg-blue-700',
      location: 'KYOTO, JAPAN',
      image: '/loc-2.jpg',
      imgAlt: 'lit-jpn'
    },
    {
      header: 'LIT - INDONESIA',
      color: 'bg-yellow-700',
      location: 'SURABAYA, INDONESIA',
      image: '/loc-3.jpg',
      imgAlt: 'lit-id'
    },

  ]

  return (
    <div className="w-full px-5 mb-24">
      <div className="py-12">
        <p className="text-3xl italic">OUR CAMPUSES</p>
        <div className="h-[1px] w-full bg-white mt-4"></div>
        <div className="h-4 w-24 bg-white"></div>
      </div>

      <div className="flex-col md:flex-row flex gap-4 justify-center items-center">
        {detailLoc.map(detail => 
          <div className="w-full md:flex-1">
            <div className="bg-white rounded-t-md w-full flex items-center px-4">
              <div className={`${detail.color} rounded-full w-[12px] h-[12px] mr-4`}></div>
              <p className="text-black inline">{detail.header}</p>
            </div>
  
            <div className="bg-black flex-1 h-[520px] bg-cover bg-no-repeat bg-center">
              <img src={detail.image} alt={detail.imgAlt} style={{width: '100%', height: '100%', objectFit: 'cover'}} decoding="async" />
            </div>
  
            <div className="bg-white w-full rounded-b-md text-black flex items-center px-4 py-2">
              <FaLocationDot style={{fontSize: '2rem'}} />
              <p className="italic ml-3">{detail.location}</p>
            </div>
          </div>
        )}
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
          <p className="mt-4 text-sm">PRIVACY POLICY DISCLAIMER </p>
          <p>Lumii Institute Of Technology is registered with the Committee for Private Education which is part of SkillsFuture.</p>
          <p>Registration No.: 199202950W Validity: 25/03/2023 - 24/03/2027</p>
          <p>Lumii Institute Of Technology is registered with the Commissioner of Charities as an Institution of a Public Character (IPC).</p>
          <p className="text-sm mt-4">©2023 Lumii Institute Of Technology. Copyrights. All rights reserved.</p>

          <div className="flex mt-12">
            <a href="#" className="pr-4 hover:text-red-600">EMAIL</a>
            <a href="#" className="border-slate-300 border-x-2 px-4 hover:text-red-600">FAX NUMBER</a>
            <a href="#" className="pl-4 hover:text-red-600">LINKEDIN</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function LitStat() {
  const stats = [
    {
      num: 123872,
      text: 'STUDENTS'
    },
    {
      num: 62,
      text: 'STUDY PROGRAMS'
    },
    {
      num: 17,
      text: 'FACULTIES'
    }
  ]

  return (
    <div className='flex gap-2 w-full md:justify-center flex-col md:flex-row'>

      {stats.map(stat => 
        <div className='bg-red-700 text-center h-[220px] p-4 flex-1 flex flex-col justify-center items-center'>
          <p className="text-[22px] sm:text-[35px]">{stat.num}</p>
          <p className="text-[22px] sm:text-[35px]">{stat.text}</p>
        </div> 
      )}
    </div>
  )
}

function App() {
  return (
    <div className='bg-stone-900'>
      <NavBar />
      <HeroSection />
  
      <LitStat />

      <LitNews />

      <LitAwards />

      <LitLocation />

      <LitFooter />

      <SideBar />
    </div>
  )
}

export default App
