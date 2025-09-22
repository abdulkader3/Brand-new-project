import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { IoChatbubbleEllipsesOutline, IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ManuBar from "../Page/ManuBar";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageAccounts, MdOutlineNotificationsNone } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import { LiaCartArrowDownSolid } from "react-icons/lia";

const Chat = () => {
  const [animState, setAnimState] = useState("idle"); // idle | out | in
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      sender: "Roger Welch",
      timestamp: new Date(Date.now() - 60000 * 30), // 30 minutes ago
      isOutgoing: false,
      avatar: "photos/incoming-message.webp"
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sender: "Me",
      timestamp: new Date(Date.now() - 60000 * 25), // 25 minutes ago
      isOutgoing: true,
      avatar: "photos/outgoing-massage.webp"
    },
    {
      id: 3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      sender: "Roger Welch",
      timestamp: new Date(Date.now() - 60000 * 20), // 20 minutes ago
      isOutgoing: false,
      avatar: "photos/incoming-message.webp"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  // Handle message input change
  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
    setTimeout(adjustTextareaHeight, 0);
  };

  // Format timestamp like "Today 06:30 am"
  const formatTimestamp = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    const isToday = messageDate.toDateString() === now.toDateString();
    
    const timeString = messageDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    
    return isToday ? `Today ${timeString}` : messageDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    if (newMessage.trim() || previewUrl) {
      // Create new message
      const messageToSend = {
        id: Date.now(),
        text: newMessage.trim(),
        sender: "Me",
        timestamp: new Date(),
        isOutgoing: true,
        avatar: "photos/outgoing-massage.webp",
        image: previewUrl
      };

      // Start send animation
      setAnimState("out");
      
      setTimeout(() => {
        // Add message to state
        setMessages(prev => [...prev, messageToSend]);
        // Clear input and preview
        setNewMessage("");
        setPreviewUrl(null);
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
        
        setAnimState("in");
        setTimeout(() => setAnimState("idle"), 400);
      }, 400);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  return (
    <>
      {/* Desktop Layout (lg screens and up) */}
      <div className="hidden lg:flex w-full h-screen bg-[#ffffffc7]">
        {/* Left Sidebar - Navigation */}
        <div className="w-64 xl:w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* <div className="p-6 border-b border-gray-200">
            <Link to="/">
              <img className="w-[80px] xl:w-[100px] hover:scale-105 transition-transform" src="photos/insparetionLogo.webp" alt="logo" />
            </Link>
          </div> */}
          <div className="flex-1 p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
              <nav className="space-y-2">
                <Link to="/" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <IoHomeOutline className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Home</span>
                </Link>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-blue-50 text-blue-600">
                  <PiChats className="text-xl" />
                  <span className="font-medium">Chat</span>
                </div>
                <Link to="/cart" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <LiaCartArrowDownSolid className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Cart</span>
                </Link>
                <Link to="/profile" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <CgProfile className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Profile</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Center - Chat Area */}
        <div className="flex-1 flex flex-col relative bg-gray-50">
          {/* Navigation */}
          <div className="flex justify-between items-center px-8 py-6 bg-white border-b border-gray-200 shadow-sm">
            <div className="flex gap-4 items-center">
              <Link to="/" className="flex gap-3 items-center text-gray-600 hover:text-blue-600 transition-colors">
                <IoIosArrowBack className="text-2xl" /> 
                <span className="font-medium">Back</span>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">Chat with Roger Welch</h1>
              <p className="text-sm text-gray-600">Online now</p>
            </div>
            <div className="w-20"></div> {/* Spacer for center alignment */}
          </div>

          {/* Messages Area */}
          <div className="flex-1 flex flex-col gap-6 overflow-y-auto overflow-x-hidden px-8 py-6" style={{WebkitOverflowScrolling: 'touch'}}>
            {messages.map((message) => (
              <div key={message.id} className={`w-full h-fit flex items-start gap-4 ${message.isOutgoing ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-gray-100">
                  <img src={message.avatar} alt="profile-picture" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 max-w-[70%] xl:max-w-[60%]">
                  <div className="flex items-center gap-3 text-xs xl:text-sm text-gray-500">
                    <span className="font-medium">{message.sender}</span>
                    <span>{formatTimestamp(message.timestamp)}</span>
                  </div>
                  {message.image && (
                    <div className="mb-2">
                      <img 
                        src={message.image} 
                        alt="attachment" 
                        className="max-w-full h-auto rounded-xl max-h-72 xl:max-h-80 object-cover shadow-lg" 
                      />
                    </div>
                  )}
                  {message.text && (
                    <p className="text-sm xl:text-base bg-white rounded-xl p-4 xl:p-5 shadow-md break-words leading-relaxed border border-gray-100">
                      {message.text}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="px-8 py-6 bg-white border-t border-gray-200 shadow-lg">
            <div className="flex items-center gap-4">
              <textarea
                ref={textareaRef}
                className="flex-1 resize-none bg-gray-50 rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-white min-h-[48px] xl:min-h-[52px] max-h-[120px] overflow-y-auto transition-colors"
                rows={1}
                placeholder="Type your message..."
                value={newMessage}
                onChange={handleMessageChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendClick();
                  }
                }}
              />

              <div className="flex flex-col items-center justify-center">
                {previewUrl && (
                  <div className="mb-2 w-12 h-12 xl:w-14 xl:h-14 rounded overflow-hidden border-2 border-gray-200 flex items-center justify-center">
                    <img src={previewUrl} alt="preview" className="object-cover w-full h-full" />
                  </div>
                )}
                <label className="flex items-center justify-center p-3 xl:p-4 cursor-pointer hover:bg-blue-50 rounded-lg transition-colors" title="Attach file">
                  <input type="file" className="hidden" onChange={handleFileChange} />
                  <ImAttachment className="text-gray-500 hover:text-blue-500 text-[22px] xl:text-[24px] transition-colors" />
                </label>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className={`flex items-center justify-center rounded-full p-3 xl:p-4 text-[22px] xl:text-[24px] shadow-md transition-all bg-blue-500 hover:bg-blue-600 text-white ${
                    (!newMessage.trim() && !previewUrl) || animState === 'out' 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:scale-105 hover:shadow-lg'
                  }`}
                  title="Send"
                  onClick={animState === 'idle' && (newMessage.trim() || previewUrl) ? handleSendClick : undefined}
                  style={{ zIndex: 2, pointerEvents: animState === 'out' ? 'none' : 'auto' }}
                  disabled={(!newMessage.trim() && !previewUrl) || animState === 'out'}
                >
                  <span className={
                    animState === 'out' ? 'animate-send-out' : animState === 'in' ? 'animate-send-in' : ''
                  }>
                    <FaPaperPlane className="text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Profile */}
        <div className="w-64 xl:w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden mb-4 ring-2 ring-blue-100">
                <img src="photos/demoProfileImage.webp" alt="profile" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <p className="font-bold text-lg xl:text-xl">Name Joni</p>
                <p className="font-semibold text-gray-600 text-sm xl:text-base">ID: 002 21</p>
                <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Online
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link to="/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <CgProfile className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="text-sm font-medium group-hover:text-blue-600">View Profile</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <MdOutlineManageAccounts className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="text-sm font-medium group-hover:text-blue-600">Account Settings</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <MdOutlineNotificationsNone className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="text-sm font-medium group-hover:text-blue-600">Notifications</span>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Chat Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Messages</span>
                  <span className="font-medium">{messages.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Active</span>
                  <span className="font-medium">Now</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Chat Started</span>
                  <span className="font-medium">Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout (hidden on lg+ screens) */}
      <div className="lg:hidden w-full h-screen bg-[#ffffffc7] relative pt-5 overflow-hidden flex flex-col">
        {/* Navigation */}
        <div className="navigate flex justify-between px-4 md:px-6 lg:px-8 xl:px-12 py-3 md:py-4 lg:py-5 xl:py-6 text-xl md:text-2xl lg:text-2xl xl:text-3xl h-fit items-center mb-10 md:mb-12 lg:mb-16 xl:mb-20 w-full fixed top-15 left-0 z-40 bg-[#ffffff] border-b border-gray-200">
          <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 items-center hover:text-blue-600 transition-colors">
              <IoIosArrowBack className="text-xl md:text-2xl lg:text-3xl xl:text-4xl" /> 
              <span>Back</span>
            </Link>
            <button className="font-semibold">Chat</button>
            <button className="flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 items-center hover:text-blue-600 transition-colors">
              <span>First Name</span>
              <IoChatbubbleEllipsesOutline className="text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
            </button>
          </div>
        </div>

        {/* Container for desktop centering */}
        <div className="w-full max-w-4xl mx-auto lg:max-w-5xl xl:max-w-7xl flex flex-col h-full">
          <div className="h-[60px] md:h-[75px] lg:h-[90px] shrink-0"></div>
          {/* spacer for fixed nav */}

          <div className="w-full flex-1 flex flex-col gap-5 md:gap-6 lg:gap-8 overflow-y-auto overflow-x-hidden px-0 pb-24 md:pb-28 lg:pb-32 xl:pb-36" style={{WebkitOverflowScrolling: 'touch'}}>
            {messages.map((message) => (
              <div key={message.id} className={`w-full h-fit py-2 md:py-3 lg:py-4 xl:py-5 px-5 md:px-8 lg:px-12 xl:px-16 flex items-start gap-4 md:gap-5 lg:gap-6 xl:gap-8 ${message.isOutgoing ? 'flex-row-reverse' : ''}`}>
                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden shrink-0">
                  <img src={message.avatar} alt="profile-picture" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3 max-w-[70%] md:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%]">
                  <div className="flex items-center gap-2 md:gap-3 xl:gap-4 text-xs md:text-sm lg:text-base xl:text-lg text-gray-500">
                    <span className="font-medium">{message.sender}</span>
                    <span>{formatTimestamp(message.timestamp)}</span>
                  </div>
                  {message.image && (
                    <div className="mb-2 md:mb-3 xl:mb-4">
                      <img 
                        src={message.image} 
                        alt="attachment" 
                        className="max-w-full h-auto rounded-xl max-h-64 md:max-h-80 lg:max-h-96 xl:max-h-[28rem] object-cover shadow-[0px_2px_8px_5px_rgba(0,_0,_0,_0.1)]" 
                      />
                    </div>
                  )}
                  {message.text && (
                    <p className="text-[15px] md:text-base lg:text-lg xl:text-xl bg-white rounded-xl p-3 md:p-4 lg:p-5 xl:p-6 shadow-[0px_2px_8px_5px_rgba(0,_0,_0,_0.1)] break-words leading-relaxed">
                      {message.text}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Textarea */}
        <div
          className="w-full fixed left-0 bottom-16 md:bottom-20 lg:bottom-24 xl:bottom-28 flex items-center px-5 md:px-8 lg:px-12 xl:px-16 bg-white rounded-2xl shadow-[0px_2px_8px_5px_rgba(0,_0,_0,_0.1)]"
          style={{ zIndex: 49 }}
        >
          <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
            {/* Textarea */}
            <textarea
              ref={textareaRef}
              className="flex-1 resize-none bg-white rounded-xl border border-gray-300 px-3 md:px-4 lg:px-5 xl:px-6 py-2 md:py-3 lg:py-4 xl:py-5 text-[15px] md:text-base lg:text-lg xl:text-xl focus:outline-none focus:ring-2 focus:ring-blue-200 my-2 md:my-3 lg:my-4 xl:my-5 min-h-[40px] md:min-h-[48px] lg:min-h-[56px] xl:min-h-[64px] max-h-[120px] md:max-h-[140px] lg:max-h-[160px] xl:max-h-[180px] overflow-y-auto"
              rows={1}
              placeholder="Type your message..."
              value={newMessage}
              onChange={handleMessageChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendClick();
                }
              }}
            ></textarea>

            {/* Attachment */}
            <div className="flex flex-col items-center justify-center">
              {previewUrl && (
                <div className="mb-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded overflow-hidden border border-gray-300 flex items-center justify-center">
                  <img src={previewUrl} alt="preview" className="object-cover w-full h-full" />
                </div>
              )}
              <label className="flex items-center justify-center p-2 md:p-3 lg:p-4 xl:p-5 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors" title="Attach file">
                <input type="file" className="hidden" onChange={handleFileChange} />
                <ImAttachment className="text-gray-500 hover:text-blue-500 text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] transition-colors" />
              </label>
            </div>

            {/* Send Button */}
            <div className="flex items-center justify-center">
              <button
                className={`flex items-center justify-center rounded-full p-3 md:p-4 lg:p-5 xl:p-6 text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] shadow transition-all bg-white hover:shadow-md ${
                  (!newMessage.trim() && !previewUrl) || animState === 'out' 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-blue-50 hover:scale-105'
                }`}
                title="Send"
                onClick={animState === 'idle' && (newMessage.trim() || previewUrl) ? handleSendClick : undefined}
                style={{ zIndex: 2, pointerEvents: animState === 'out' ? 'none' : 'auto' }}
                disabled={(!newMessage.trim() && !previewUrl) || animState === 'out'}
              >
                {/* Animate icon only */}
                <span className={
                  animState === 'out' ? 'animate-send-out' : animState === 'in' ? 'animate-send-in' : ''
                }>
                  <FaPaperPlane className={(!newMessage.trim() && !previewUrl) ? 'text-gray-400' : 'text-blue-500'} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;