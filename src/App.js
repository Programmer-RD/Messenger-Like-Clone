import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, InputLabel, Input, IconButton } from "@material-ui/core";
import Head from "./header";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(prompt(" | Please Enter Your User Name | "));
  }, []);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <Head username={username} />
      <center>
          <form className="app__form">
            <FormControl className="app__formControl">
              <Input
                className="app__input"
                placeholder="Enter Message..."
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
              />
              <IconButton
                className="app__iconButton"
                type="submit"
                variant="contained"
                color="primary"
                onClick={sendMessage}
                disabled={!input}
              >
                <SendIcon />
              </IconButton>
            </FormControl>
          </form>
      </center>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
