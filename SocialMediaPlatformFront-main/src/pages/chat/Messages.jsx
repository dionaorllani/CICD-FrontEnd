import React, { useState } from "react";
import FriendList from "./FriendList";
import ChatWindow from "./ChatWindow";
import styles from "./Messages.module.css";
import { Button } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";

function Messages() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const { theme } = useTheme();

  return (
    <div className={`p-3 container-fluid ${styles.messages}`}>
      <div className="row">
        <div className="d-none d-md-block  col-md-3">
          <FriendList onSelectFriend={setSelectedFriend} />
        </div>

        <div className="col-2 d-md-none">
          <Button
            variant="outline-primary mb-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMessengerFriendsList"
          >
            Friends
          </Button>
        </div>
        <div className="col-md-9">
          {selectedFriend ? (
            <ChatWindow friend={selectedFriend} />
          ) : (
            <div className={styles.placeholder}>
              <h2>Select a friend to start chatting</h2>
            </div>
          )}
        </div>
      </div>

      <div
        className={`offcanvas offcanvas-start ${
          theme === "light" ? "" : "text-bg-dark"
        }`}
        data-bs-scroll="true"
        tabIndex="-1"
        id="mobileMessengerFriendsList"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className={`btn-close ${
              theme === "light"
                ? styles["btn-close-light"]
                : styles["btn-close-dark"]
            }`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
        <FriendList onSelectFriend={setSelectedFriend} />
        </div>
      </div>
    </div>
  );
}

export default Messages;
