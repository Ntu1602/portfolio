'use client'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
export default function Header(){
    const [showMenu, setShowMenu] = useState(false)
    return <header className="flex justify-between items-center sticky top-0 z-100 shadow-[0_1px_1px_#6a0dad] bg-[#1A0B2E] w-full px-4 py-1">
        <div>
            <img className='max-w-10 drop-shadow-[0_0_20px_#6a0dad]' src="/logo/logo.png" alt="" />
        </div>
        <Menu onClick={()=>{setShowMenu(!showMenu)}} className='text-white'/>
        <div className={`fixed z-100 flex flex-col items-end top-0 right-0 px-2 py-4 h-screen  transition-all duration-300 bg-white w-[60%]
                        lg:w-[40%] 
            ${showMenu ? 'translate-x-0 shadow-[-10px_0_20px_#6a0dad]' : 'translate-x-full'}`}>
            <X onClick={()=>{
                setShowMenu(!showMenu)
            }} className='hover:scale-110 hover:bg-amber-50'/>
            <ul className='w-full'>
                <li><a href="#">About</a></li>
                <li><a href="#">Certificate</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </header>
}