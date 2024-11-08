"use client"
import { useEffect } from "react";
import Image from "next/image";
export default function Home() {
  useEffect(() => {
    // JavaScript code inside useEffect hook
    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener('mousemove', (e) => {
        // Cast `box` to `HTMLElement` to access `offsetLeft` and `offsetTop`
        const targetBox = box as HTMLElement;

        const mouseEvent = e as MouseEvent; // Cast the event to MouseEvent
        let x = mouseEvent.pageX - targetBox.offsetLeft;
        let y = mouseEvent.pageY - targetBox.offsetTop;

        document.querySelectorAll("span").forEach((span) => {
          span.style.left = x + 'px';
          span.style.top = y + 'px';
        });
      });
    });

    // Cleanup the event listeners when the component unmounts
    return () => {
      document.querySelectorAll(".box").forEach((box) => {
        box.removeEventListener('mousemove', () => {});
      });
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return (

    <main id="HomePage">
      <div id="main">
        <div id="container">
          <div className="box">
            <div id="content">
              <h1 className="heading">
                Empowering Tomorrow's <br /> Tech by Mahab Rizwan
              </h1>
              <p className="paragraph">
                I’m a web developer passionate about creating user-friendly
                websites. Currently, I’m studying under the Governor Initiative
                for Artificial Intelligence, Web 3.0 & Metaverse. With skills in
                HTML, CSS, TypeScript, and Next.js, I enjoy blending design with
                functionality and tackling new challenges. Let’s connect and
                explore the tech world together!
              </p>
            </div>
            <span></span>
          </div>
        </div>






        <div id="pic">

          <Image src="/image.png" alt="Profile" height={100} width={100} id="profile"></Image>

         
        </div>


      </div>
    </main>
  );
}
