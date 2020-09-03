import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import './App.css';
import Message from './components/message';

function App() {
  const [inputData, setinputData] = useState('');
  const [messages, setmessages] = useState(['Hi', 'Hello', 'Mahadi']);

  const sendMessage = (event) => {
    event.preventDefault();
    setmessages([...messages, inputData]);

  }

  console.log(inputData);
  return (
    <div className="App">
      <h1> Messenger Clone using React and firebase </h1>
      <form noValidate autoComplete="off">
        <TextField
          label="Standard"
          value={inputData}
          onChange={(event) => setinputData(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={sendMessage}
        >
          Send
       </Button>

        <Message messages={messages} />
      </form>
    </div>
  );
}

export default App;
