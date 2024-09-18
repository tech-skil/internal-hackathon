import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        <FaComments size={24} />
      </button>
      {isChatOpen && (
        <div className="absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-xl p-4">
          <h3 className="text-lg font-semibold mb-2">Welcome to career ai</h3>
          <p className="text-sm mb-4">
            24/7 support assistance by ai.
          </p>
          <button
            onClick={toggleChat}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 w-full"
          >
            Chat with assistense
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;