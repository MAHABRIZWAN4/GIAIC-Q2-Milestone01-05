"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


import React, { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';


export default function Header(){



    const pathname = usePathname(); 



    const [menuOpen, setMenuOpen] = useState(false); // State to track the menu's open/close status

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


         return(
          
            <header id = "Header">
                <div id="logo">
                   <Image src="/logo.png" alt="logo" width={100} height={100}></Image>
                   <div id="name"> MR <br/>  PORTFOLIO</div>
                </div>
         <div id="navBar">
            <ul className="link">
               
            <li className={pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === "/about" ? "active" : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={pathname === "/contact-us" ? "active" : ""}>
            <Link href="/contact-us">Contact-Us</Link>
          </li>



            </ul>


            {/* Hamburger Icon (HiBars3) */}
        <div id="hamburger" onClick={toggleMenu}>
          <HiBars3 size={30} color="white" /> {/* Display HiBars3 icon */}
        </div>
         </div>
         </header>
        );
}