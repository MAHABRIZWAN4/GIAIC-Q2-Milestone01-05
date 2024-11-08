"use client"
import Head from 'next/head';
import { useEffect } from "react";
export default function About() {

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


    <>
     
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me and my skills" />
      </Head>
     
      <div className="about-container">
        {/* Meri Information Section */}
        <section  id="section1" className="section">
          <h2>About Me</h2>
          <p>Hi, I am Mahab Rizwan. I am passionate about web development and AI. I have been working on web technologies like HTML, CSS, JavaScript, and TypeScript. I also have experience with frameworks like Next.js, and I am always eager to learn and improve my skills.</p>
        </section>

        {/* My Skills Section */}
        <section  id="section2" className="section">
          <h2>My Skills</h2>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Figma</li>
          </ul>
        </section>

        {/* WHY I AM Section */}
        <section  id="section3" className="section">
          <h2>WHY I AM</h2>
          <p>My passion for technology and innovation drives me to continuously explore new concepts. I am constantly motivated to enhance my problem-solving skills and build applications that make a positive impact. I believe in creating solutions that not only fulfill the need but also enhance the user experience.</p>
        </section>
      </div>
     
    </>
  );
}
