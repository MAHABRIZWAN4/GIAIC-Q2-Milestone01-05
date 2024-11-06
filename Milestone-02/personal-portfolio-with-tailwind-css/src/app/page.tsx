
import Image from "next/image";
import Link from "next/link";



export default function  Home(){
  return(
    <main className="w-screen h-screen relative sm:h-screen  md:h-screen">







      {/* ***************************** Background Image ka Div ***************************** */}
    
    <div className="flex items-center bg-cover bg-center w-full h-full" style={{backgroundImage : "url('/main-bg.webp')"}}>








{/* ***************************** Content ***************************** */}

<div className="text-white pl-20 md:pl-20 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[800px] -ml-14 sm:max-w-[458px] mt-10 md:max-w-[540px] lg:mt-20 lg:ml-14 ">









{/* ***************************** Heading ***************************** */}
<h1 className="text-[45px] text-white font-semibold md:mt-4 md:leading-[1.3] lg:w-[600px]">
Empowering Tomorrow's Tech by {""}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
  Mahab Rizwan</span></h1>





{/* ***************************** Paragraph ***************************** */}
<p className="text-gray-200 hidden md:block lg:w-[550px]">
With a strong foundation in web development and a focus on user experience, I create solutions that are visually appealing and functionally robust. Through the Governor Initiative for Artificial Intelligence, Web 3.0, and Metaverse, I’m gaining expertise in cutting-edge technologies that drive the future.
</p>








{/* ***************************** Links/Button ***************************** */}
<div className="flex-col md:flex-row hidden md:flex gap-5 ">

<Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">Learn More</Link>
<Link href="/my-project" className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">My Project</Link> 
<Link href="contact-me" className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">Contact Me</Link>

</div>
</div>
</div>








{/* ***************************** Mobile Buttons (Hidden on Large Screens)    { Ye div buttons sirf mobile view ke liye banaye gaye hain. Ismein 3 buttons hain jo small devices ke liye alag style mein dikhai denge. }***************************** */}

<div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5 mb-14 ">


<Link href="/my-skills" className="rounded-[20px] group bg-blue-500  px-5 py-3 text-lg text-white max-w-[200px]">Learn More</Link>
<Link href="/my-project" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">My Project</Link> 
<Link href="contact-me" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">Contact Me</Link>



</div>









{/* ***************************** Images of horse and cliff***************************** */}

<div className="absolute bottom-0 right-0 z-[10] hidden sm:block sm:w-[300px] sm:h-[600px]  ">
  
  <Image src="/horse.png" alt="horse" height={300} width={300} className="absolute right-55 top-40 md:top-[185px] md:right-[18px] sm:-mt-32 md:h-[300px]" />

<Image src="/cliff.webp" alt="cliff" width={480} height={480}  className="sm:h-[500px] md:h-[599px] " />
</div>









{/* ***************************** Images of trees***************************** */}
<div className="absolute bottom-0 z-[5] w-full h-auto">

  <Image src="/trees.webp" alt="Trees" width={2000} height={3000} className="md:h-[700px] md:max-w-screen" />
</div>










{/* ***************************** Images of stars***************************** */}
<Image src="/stars.png" alt="stars" height={800} width={700} className="absolute top-0 left-0 z-[10]" />


 </main>
  )
}