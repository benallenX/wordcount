import React, { useState } from 'react';
import TextArea from './component/TextArea';
import WordCountDisplay from './component/WordCountDisplay';


const App = () => {
  const [text, setText] = useState('');

  const countWords = (text) => {
    return text ? text.trim().split(/\s+/).length : 0;
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Word Counter</h1>
      <TextArea text={text} setText={setText} />
      <WordCountDisplay count={countWords(text)} />
    </div>
  );
};

export default App;

