import Link from "next/link";

export default function Header(){
         return(

            <header id = "Header">
                <div>
                    Mahab
                </div>
         <div id="navBar">
            <ul>
                <Link href="/"><li> Home </li></Link>
                <Link href="/"><li> About </li></Link>
                <Link href="/"><li> Contact-Us </li></Link>
            </ul>
         </div>
         </header>
        );
}