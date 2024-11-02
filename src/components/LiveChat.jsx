// src/components/LiveChat/LiveChat.jsx
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

function LiveChat({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        { id: 1, name: "Jennie Sherlock", message: "Hey! I'm available.", time: "02 min" },
        { id: 2, name: "Stacie Dube", message: "I've finished it! See you soon", time: "10 min" },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { id: messages.length + 1, name: "You", message: newMessage, time: "Just now" }]);
            setNewMessage('');
        }
    };

    return (
        <Transition show={isOpen}>
            <div className="fixed inset-0 z-50 flex justify-end">
                {/* Overlay */}
                <Transition.Child
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-50"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-50"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                </Transition.Child>

                {/* Chat Panel */}
                <Transition.Child
                    enter="transition-transform duration-300"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition-transform duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div className="relative w-full max-w-md bg-zinc-800 text-white flex flex-col">
                        {/* Chat Header */}
                        <div className="flex items-center px-4 py-3 border-b border-zinc-700">
                            <img src="./assets/images/avatar-5.jpg" alt="avatar" className="w-8 h-8 mr-3" />
                            <div className="flex-1">
                                <h6 className="font-medium">Shawn</h6>
                                <p className="text-sm text-gray-400">Available</p>
                            </div>
                            <button onClick={onClose} className="text-gray-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 p-4 overflow-y-auto">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`mb-4 ${msg.name === "You" ? 'text-right' : 'text-left'}`}>
                                    <h5 className="text-sm font-semibold">{msg.name}</h5>
                                    <p className="text-gray-300">{msg.message}</p>
                                    <span className="text-xs text-gray-500">{msg.time}</span>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="flex items-center px-4 py-3 border-t border-zinc-700">
                            <input
                                type="text"
                                className="flex-1 p-2 bg-zinc-700 text-white placeholder-gray-400 focus:outline-none"
                                placeholder="Type your message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button
                                className="ml-3 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                                onClick={handleSendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Transition>
    );
}

export default LiveChat;
