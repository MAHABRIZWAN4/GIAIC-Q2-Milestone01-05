"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener("mousemove", (e) => {
        const targetBox = box as HTMLElement;
        const mouseEvent = e as MouseEvent;

        
        const x = mouseEvent.pageX - targetBox.offsetLeft; 
        const y = mouseEvent.pageY - targetBox.offsetTop; 

       document.querySelectorAll("span").forEach((span) => {
          span.style.left = x + "px";
          span.style.top = y + "px";
        });});});
    return () => {
      document.querySelectorAll(".box").forEach((box) => {
        box.removeEventListener("mousemove", () => {});
      });}; }, []);

  return (
    <main id="HomePage">
      <div id="main">
        <div id="container">
          <div className="box">
            <div id="content">
              <h1 className="heading">
                Empowering Tomorrow&apos;s <br /> Tech by Mahab Rizwan
              </h1>
              <p className="paragraph">
                I’m a web developer passionate about creating user-friendly
                websites. Currently, I’m studying under the Governor Initiative
                for Artificial Intelligence, Web 3.0 &amp; Metaverse. With skills in
                HTML, CSS, TypeScript, and Next.js, I enjoy blending design with
                functionality and tackling new challenges. Let’s connect and
                explore the tech world together!
              </p>
            </div>
            <span></span>
          </div>
        </div>

        <div id="pic">
          <Image src="/image.png" alt="Profile" height={100} width={100} id="profile"
          />
        </div>
      </div>
    </main>
  );
}
