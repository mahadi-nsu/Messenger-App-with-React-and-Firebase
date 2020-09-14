import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

import './App.css';
import Message from './components/message';

function App() {
  const [inputData, setinputData] = useState('');
  const [messages, setmessages] = useState([
    { name: 'Mahadi', text: "Hello" },
    { name: 'Hassan', text: "Hiii" }
  ]);
  const [username, setusername] = useState('');
  useEffect(
    () => {
      setusername(prompt('Enter your name : '));
      // const name = prompt("Enter your Name");
      // setusername(name);
      // console.log(username);
    }, [])

  // console.log(username);

  const sendMessage = (event) => {
    event.preventDefault();
    setmessages([...messages, { name: username, text: inputData }]);
    setinputData('');
  }

  // console.log(inputData);
  return (
    <div className="App">
      <h1> Messenger Clone using React and firebase </h1>
      <h3>Welcome Mr. {username}</h3>
      <form noValidate autoComplete="off" className="form__inputs">
        <TextField
          label="Enter Message ..."
          value={inputData}
          onChange={(event) => setinputData(event.target.value)}
        />
        <Button
          disabled={!inputData}
          variant="contained"
          color="primary"
          onClick={sendMessage}

        >
          Send
       </Button>
      </form>
      {
        messages.map((data, i) =>
          <Message message={data} host = {username} key={i} />
        )
      }
    </div>
  );
}

export default App;
