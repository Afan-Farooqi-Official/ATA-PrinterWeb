import React from 'react'

const WhatsappBtn = () => {
    return (
    <a
      href="https://wa.me/923002517452?text=Hello%2C%20I%20recently%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-[0_4px_10px_rgba(0,0,0,0.25)] hover:bg-green-600 transition"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="w-7 h-7"
        >
            <path d="M16 2.9c-7.2 0-13 5.8-13 13 0 2.3.6 4.5 1.8 6.4L3 29l6.8-1.8c1.9 1 4.1 1.6 6.2 1.6 7.2 0 13-5.8 13-13s-5.8-12.9-13-12.9zm0 23.6c-1.9 0-3.8-.5-5.5-1.4l-.4-.2-4 .9 1.1-3.9-.3-.4c-1-1.7-1.5-3.6-1.5-5.5 0-6 4.9-10.9 10.9-10.9s10.9 4.9 10.9 10.9-4.9 10.5-10.9 10.5zm6-8.1c-.3-.1-1.7-.8-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1c-.3-.1-1.4-.5-2.6-1.7-1-1-1.7-2.2-1.9-2.5s0-.5.1-.6l.5-.5c.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.7 1.2 3.2 1.4 3.4c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
        </svg>
    </a>
  );
}

export default WhatsappBtn