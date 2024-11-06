"use client";
import { useRef } from "react";
import Link from "next/link";

export default function ContactMe() {
  // Audio reference with type
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to play audio
  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      style={{ backgroundImage: "url(/myskills-bg.png)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center p-4"
    >
      <div
        style={{ backgroundImage: "url(/contact-bg.png)" }}
        className="h-[70%] w-full sm:w-[90%] md:w-[80%] lg:w-[60%] relative bg-cover bg-center rounded-xl border border-white p-4 md:p-10"
      >
        {/* Form */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
          <h1 className="text-white font-extrabold text-2xl">Contact Me</h1>
          <form action="backend" className="w-full flex flex-col items-center md:items-start space-y-4">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="w-full max-w-xs px-3 py-2 text-sm text-black font-extrabold placeholder-gray-400 bg-white border-0 rounded shadow"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full max-w-xs px-3 py-2 text-sm text-black font-extrabold placeholder-gray-400 bg-white border-0 rounded shadow"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="w-full max-w-xs px-3 py-2 text-sm text-black font-extrabold placeholder-gray-400 bg-white border-0 rounded shadow"
              rows={4}
            />
            {/* Button */}
            <button
              type="button"
              onClick={() => {
                handleButtonClick(); // Play audio
                setTimeout(() => {
                  window.location.href = "/backend"; // Redirect after sound plays
                }, 500); // Adjust time if necessary
              }}
              className="bg-blue-600 text-sm text-white p-3 font-semibold hover:bg-blue-500 rounded-lg w-full max-w-xs"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src="/audio2.mp3" preload="auto" />
    </div>
  );
}

