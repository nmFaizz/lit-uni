import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

export default function SideBar() {
    return (
      <aside className="fixed right-0 bg-red-700 py-[1rem] px-[0.5rem] top-[30vh] rounded-s-md hidden md:block animate-fade-left animate-once animate-duration-[1500ms]">
        <FaLinkedin style={{fontSize: '2.5rem'}}/>
        <FaInstagram style={{fontSize: '2.5rem'}} />
        <FaSquareXTwitter style={{fontSize: '2.5rem'}} />
      </aside>
    )
  }