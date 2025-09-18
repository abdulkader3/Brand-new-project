import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Chat = () => {
  const [animState, setAnimState] = useState("idle"); // idle | out | in

  useEffect(() => {
    // Inject animation CSS once
    if (!document.getElementById('send-anim-style')) {
      const style = document.createElement('style');
      style.id = 'send-anim-style';
      style.innerHTML = `
        @keyframes sendOut {
          0% { transform: scale(1) translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: scale(0.5) translateX(40px) rotate(90deg); opacity: 0; }
        }
        @keyframes sendIn {
          0% { transform: scale(2) translateX(-40px) translateY(40px) rotate(-90deg); opacity: 0; }
          100% { transform: scale(1) translateX(0) translateY(0) rotate(0deg); opacity: 1; }
        }
        .animate-send-out {
          animation: sendOut 0.4s forwards;
        }
        .animate-send-in {
          animation: sendIn 0.4s forwards;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const handleSendClick = () => {
    setAnimState("out");
    setTimeout(() => {
      setAnimState("in");
      setTimeout(() => setAnimState("idle"), 400); // match animation duration
    }, 400); // match animation duration
  };

  return (
    <>
      <div className="w-full h-fit bg-[#ffffffc7] relative pt-5 ">
        {/* navigate */}
        <div className="navigate flex justify-between px-4 py-3 text-xl h-fit items-center mb-10 w-full fixed top-15 left-0 z-40 bg-[#ffffff] border-b border-gray-200">
          <Link to="/" className="flex gap-2 items-center">
            {" "}
            <IoIosArrowBack /> Back
          </Link>
          <button>Chat</button>

          <button className="flex gap-2 items-center">
            Firt Name <IoChatbubbleEllipsesOutline />{" "}
          </button>
        </div>

        <div className="h-[60px] md:h-[70px] lg:h-[80px]"></div>
        {/* spacer for fixed nav */}

        <div className="w-full h-fit flex flex-col gap-5 ">
          {/* Incoming-message   */}
          <div className="Incoming-message w-full h-fit py-2 px-5 flex items-center gap-4 ">
            <div className="w-14 h-14  rounded-full overflow-hidden shrink-0 ">
              <img src="photos/incoming-message.webp" alt="profile-picture" />
            </div>
            <p
              className="text-[15px] bg-white rounded-xl p-2 shadow-[0px_2px_8px_5px_rgba(0,_0,_0,_0.1)]
 "
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur obcaecati ex commodi nesciunt illum necessitatibus,
              quae quidem quod cupiditate vel quam, explicabo debitis error quo
              quisquam sed voluptate voluptates cumque.{" "}
            </p>
          </div>
          {/* Incoming-message */}

          {/* Outgoing-message */}
          <div className="Outgoing-message w-full h-fit py-2 px-5 flex items-center gap-4 ">
            <p
              className="text-[15px] bg-white rounded-xl p-2 shadow-[0px_2px_8px_5px_rgba(0,_0,_0,_0.1)]
 "
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur obcaecati ex commodi nesciunt illum necessitatibus,
              quae quidem quod cupiditate vel quam, explicabo debitis error quo
              quisquam sed voluptate voluptates cumque.{" "}
            </p>
            <div className="w-14 h-14  rounded-full overflow-hidden shrink-0 ">
              <img src="photos/outgoing-massage.webp" alt="profile-picture" />
            </div>
          </div>
          {/* Outgoing-message */}
        </div>

        {/* textarea  */}
        <div
          className="w-full fixed left-0 bottom-16 flex items-center pr-14 bg-white rounded-2xl shadow-[0px_2px_8px_5px_rgba(0,_0,_0,_0.1)]"
          style={{ zIndex: 49 }}
        >
          {/* area  */}
          <textarea
            className="flex-1 resize-none bg-white rounded-xl border border-gray-300 px-3 py-2 text-[15px] md:text-[18px] lg:text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-200 my-2 min-h-[40px] max-h-[120px]"
            rows={4}
            placeholder="Type your message..."
          ></textarea>
          {/* area */}

          <div className="flex ">
            {/* Attachment  */}
            <button
              className="flex items-center justify-center text-gray-500 hover:text-blue-500 text-[22px] md:text-[28px] lg:text-[32px] p-2"
              title="Attach file"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 8.25V17a4.5 4.5 0 01-9 0V7a3 3 0 016 0v9.25"
                />
              </svg>
            </button>
            {/* attachment  */}

            {/* sand */}
            <div className="relative flex items-center justify-center">
              <button
                className="flex items-center justify-center rounded-full p-4 text-[22px] md:text-[28px] lg:text-[32px] shadow transition-all absolute top-0 left-0 bg-white"
                title="Send"
                onClick={animState === 'idle' ? handleSendClick : undefined}
                style={{ zIndex: 2, pointerEvents: animState === 'out' ? 'none' : 'auto' }}
              >
                {/* Animate icon only */}
                <span className={
                  animState === 'out' ? 'animate-send-out' : animState === 'in' ? 'animate-send-in' : ''
                }>
                  <FaPaperPlane />
                </span>
              </button>
            </div>
            {/* sand */}
          </div>
        </div>
        {/* textarea  */}
      </div>
    </>
  );
};

export default Chat;
