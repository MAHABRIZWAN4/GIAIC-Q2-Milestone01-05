import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


import Image from "next/image";
export default  function Navbar(){
  return(
  <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20 lg:ml-14">
    
    <div className="flex flex-row  gap-3 items-center ">




<div className='relative -ml-5  md:-ml-14 md:h-14 '>
    <Image src="/horseLogo.jpg" alt="horseLogo" width={40} height={40} className="w-full h-full object-contain rounded-full lg:h-16 "/>
   
    </div>



    <h1 className="text-white text-[16px] font-semibold -ml-2  leading-[1.2] md:text-[16px] lg:text-[18px] lg:mt-3">Mahab's <br/> Portfolio</h1>


    </div>




    <div className="flex flex-row gap-5 mb-2 text-white -mr-4 xl:mr-11">
      <FaFacebook size={28} />
      <FaTwitter size={28} />
      <FaLinkedin size={28} />
    </div>

    </div>
  )
}