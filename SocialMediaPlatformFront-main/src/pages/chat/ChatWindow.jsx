import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatWindow.module.css';
import { useTheme } from "../../ThemeContext";


function ChatWindow({ friend }) {
  const { theme} = useTheme();

  const [messages, setMessages] = useState([
    { sender: 'me', text: 'Hello!', timestamp: '10:00 AM' },
    { sender: friend.name, text: 'Hi there!', timestamp: '10:01 AM' },
    { sender: 'me', text: 'How are you?', timestamp: '10:02 AM' },
    { sender: friend.name, text: 'I\'m good, thanks! How about you?', timestamp: '10:03 AM' },
    { sender: 'me', text: 'I\'m doing well, thanks for asking!', timestamp: '10:04 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        sender: 'me',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        <h3>{friend.name}</h3>
      </div>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === 'me' ? styles.myMessage : styles.theirMessage}
          >
            <div className={`${styles.messageContent} text-dark`}>
              <span>{msg.text}</span>
              <div className={styles.messageInfo}>
                <span className={styles.timestamp}>{msg.timestamp}</span>
                {msg.sender !== 'me' && <span className={styles.senderName}>{friend.name}</span>}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          className={`form-control text-${theme === "light" ? "dark" : "light"}`}
          style={{backgroundColor: "var(--bs-secondary)"}}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message"
        />
        <button className="btn btn-primary" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
