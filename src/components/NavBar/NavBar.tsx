import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri"

export default function NavBar() {
    const [isMenu, setIsMenu] = useState(false)
    const navOpt: string[] = ['PROGRAMME', 'ADMISSIONS', 'RESEARCH', 'ABOUT', 'INTERNATIONAL']
    
    return (
      <header className="sticky top-0 z-50 w-full bg-stone-950">
        <div className='px-4 lg:px-24 flex h-[65px] lg:h-[75px] lg:justify-between lg:items-center animate-fade animate-once animate-duration-[1500ms] animate-ease-in-out'>
              <div className='flex items-center w-full lg:h-0 justify-between'>
                <div className="flex items-center gap-5">
                  <img src="/lit-logo-white.png" alt="lit-logo" className="w-[50px]"/>
                  <div className="w-24">
                    <p className='text-[11px] border-solid border-s-2 ps-5'>Lumii Institute Of Technology</p>
                  </div>
                </div>
  
                <div 
                  className={`lg:hidden ${isMenu ? 'text-red-500' : 'text-white-500'}`} 
                  onClick={() => setIsMenu(pervState => !pervState)}
                >
                  <RiMenu3Fill style={{fontSize: '2rem'}} />
                </div>
              </div>
              <nav className='gap-2 h-full items-center lg:flex hidden'>
                {navOpt.map(opt => 
                  <span className='hover:bg-red-600 lg:px-2 py-4 lg:py-1 h-full flex items-center cursor-pointer' key={opt}>{opt}</span>
                )}
              </nav>
          </div>
          <nav className={`lg:hidden bg-stone-950 ${isMenu ? 'h-[100vh]' : 'h-0 overflow-hidden'} transition-all`}>
            <div>
              {navOpt.map(opt => 
                <span className='hover:bg-red-600 px-2 py-4 lg:py-1 h-full flex items-center cursor-pointer' key={opt}>{opt}</span> 
              )}
            </div>
          </nav>
      </header>
    )
}