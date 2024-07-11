import React from 'react';

const TextArea = ({ text, setText }) => {
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <textarea
      className="w-full h-40 p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={text}
      onChange={handleTextChange}
      placeholder="Type your text here..."
    />
  );
};

export default TextArea;
