import LitNews from "./components/LitNews/LitNews";
import CountUp from 'react-countup';
import { InView } from "react-intersection-observer";
import LitLocation from "./components/LitLocation/LitLocation";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import HeroSection from "./components/HeroSection/HeroSection";

function LitAwards() {
  return (
    <div className="w-full flex gap-12 flex-wrap justify-center bg-red-700 py-12 ">
        <img src="qs-world.svg" alt="" width={300} />
        <img src="THE.svg" alt="" width={300} />
        <img src="webomet.png" alt="" width={300} />
    </div>
  )
}



// function LitLocation() {
//   const detailLoc = [
//     {
//       id: 1,
//       header: 'LIT - MALAYSIA',
//       color: 'bg-red-700',
//       location: 'SELANGOR, MALAYSIA',
//       image: '/location-1.webp',
//     },
//     {
//       id: 2,
//       header: 'LIT - JAPAN',
//       color: 'bg-blue-700',
//       location: 'KYOTO, JAPAN',
//       image: '/loc-2.webp',
//     },
//     {
//       id: 3,
//       header: 'LIT - INDONESIA',
//       color: 'bg-yellow-700',
//       location: 'SURABAYA, INDONESIA',
//       image: '/loc-3.webp',
//     },

//   ]

//   return (
//     <div className="w-full px-5 mb-24">
//       <div className="py-12">
//         <p className="text-3xl italic">OUR CAMPUSES</p>
//         <div className="h-[1px] w-full bg-white mt-4"></div>
//         <div className="h-4 w-24 bg-white"></div>
//       </div>

//       <div className="flex-col md:flex-row flex gap-4 justify-center items-center">
//         {detailLoc.map(detail => 
//           <LocItems campus={detail} key={detail.id} />
//         )}
//       </div>
//     </div>
//   )
// }

// interface Campus {
//   id: number,
//   header: string,
//   color: string,
//   location: string,
//   image: string
// }

// function LocItems(props: { campus: Campus }) {
//   const { campus } = props

//   return (
//     <div className="w-full md:flex-1" key={campus.id}>
//       <div className="bg-white rounded-t-md w-full flex items-center px-4">
//         <div className={`${campus.color} rounded-full w-[12px] h-[12px] mr-4`}></div>
//         <p className="text-black inline">{campus.header}</p>
//       </div>

//       <div 
//         className="bg-black flex-1 h-[520px] w-full bg-cover bg-no-repeat bg-center" 
//         style={{ backgroundImage: `url(${campus.image})` }}
//       >  
//       </div>


//       <div className="bg-white w-full rounded-b-md text-black flex items-center px-4 py-2">
//         <FaLocationDot style={{fontSize: '2rem'}} />
//         <p className="italic ml-3">{campus.location}</p>
//       </div>
//     </div>
//   )
// }

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
            <a href="#" className="border-slate-300 border-x-2 px-4 hover:text-red-600">FAX</a>
            <a href="#" className="pl-4 hover:text-red-600">LINKEDIN</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function LitStat() {


  const details = [
    {
      id: 1,
      num: 123872,
      text: 'STUDENTS'
    },
    {
      id: 2,
      num: 62,
      text: 'STUDY PROGRAMS'
    },
    {
      id: 3,
      num: 17,
      text: 'FACULTIES'
    }
  ]
  
  
  return (
    
    <InView>
    {({ inView, ref }) => (
      <div className='flex gap-2 w-full md:justify-center flex-col md:flex-row' ref={ref}>
        {details.map(detail => 
          <div className='bg-red-700 text-center h-[220px] p-4 flex-1 flex flex-col justify-center items-center' key={detail.id}>
            <p className="text-[22px] sm:text-[35px]">
              {
                inView &&
                <CountUp start={0} end={detail.num} duration={3} />
              }
            </p>
            <p className="text-[22px] sm:text-[35px]">{detail.text}</p>
          </div> 
        )}
      </div>
    )}
    </InView>
    
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
