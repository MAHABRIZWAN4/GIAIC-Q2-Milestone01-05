// components/Navigation.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiOutlineUser, AiOutlineAppstore, AiOutlineDelete } from "react-icons/ai";

import { FaCode } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Navigation = () => {
  const path = usePathname();





  
  // Navigation links
  const navLinks = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    { name: "About", link: "/about", icon: AiOutlineUser },
    { name: "Profile", link: "/my-skills", icon:  FaCode },
    { name: "Projects", link: "/my-projects", icon: AiOutlineAppstore },
    { name: "Trash", link: "/contact-me", icon: AiOutlineMail  },
    

  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 sm:w-80 md:w-60 max-h-16 rounded-full flex justify-around items-center border border-white bg-black px-4 py-2 mb-4 w-56">
      



      

     {navLinks.map((nav) => (



<Link key={nav.name} href={nav.link}>



<nav.icon
className={` w-6 h-6  ${
path === nav.link ? "text-purple-600" : "text-white"
} 
 hover:text-purple-500 
 `}
/>

</Link>
     ))




     }
    </div>
  );
};

export default Navigation;










