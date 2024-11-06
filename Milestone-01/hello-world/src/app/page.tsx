import Image from "next/image";
import pic from "../app/public/vegetable.jpg"
export default function Home() {
  return (

    <div className=" flex justify-center relative h-screen bg-cover bg-center">
    <Image
      src={pic}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      quality={100}
      priority={true} // You can enable priority if this image is a top priority
      style={{ opacity: 0.5 }}
    />
      
    <div className=" flex justify-center ">


  <div className="bg-green-400 mt-56 h-24 w-80 px-12 py-7 rounded-3xl font-extrabold text-black shadow-lg text-3xl ">
  <h1>HELLO WORLD</h1>
 
  </div>

  </div>


  </div>
)}















