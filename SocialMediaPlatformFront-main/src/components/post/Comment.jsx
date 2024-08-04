import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { BsFillHandThumbsUpFill, BsFillChatFill, BsSend } from "react-icons/bs";
import AutoGrowingTextarea from "../ui/AutoGrowingTextarea";
import { useTheme } from "../../ThemeContext";
import styles from "./Comment.module.css";

function Comment({ user, time, text, replies }) {
  const { theme } = useTheme();
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReplyClick = () => {
    setShowReplyInput((cur) => !cur);
  };

  return (
    <div className={styles.commentContainer}>
      <div className="d-flex gap-2 mt-4">
        <Image
          src={`/default-profile${theme === "light" ? "" : "-dark"}.jpg`}
          width={60}
          roundedCircle
          className="align-self-start"
        />
        <div
          className="p-3 rounded"
          style={{ backgroundColor: "var(--bs-secondary)" }}
        >
          <h6 className="fw-bold">{user.name}</h6>
          {text}
        </div>
        <time>{time}</time>
      </div>

      <div className="mt-2 d-flex align-items-center ms-5">
        <button
          className={`btn d-flex align-items-center gap-1 ${styles.postActionButtons}`}
        >
          <BsFillHandThumbsUpFill className="text-primary" />
          <span
            className={`text-${theme === "light" ? "dark" : "light"}`}
            style={{ fontSize: "14px" }}
          >
            1 Likes
          </span>
        </button>

        <button
          className={`btn d-flex align-items-center gap-1 ${styles.postActionButtons}`}
          onClick={handleReplyClick}
        >
          <BsFillChatFill className="text-primary" />
          <span
            className={`text-${theme === "light" ? "dark" : "light"}`}
            style={{ fontSize: "14px" }}
          >
            0 Replies
          </span>
        </button>
      </div>

      {showReplyInput && (
        <div className="d-flex gap-2 mt-2">
          <Image
            src={`/default-profile${theme === "light" ? "" : "-dark"}.jpg`}
            width={60}
            roundedCircle
            className="align-self-start"
          />
          <AutoGrowingTextarea placeholderText="Add a reply..." />
          <BsSend className={`${styles.sendCommentIcon}`} />
        </div>
      )}

      <div className={styles.repliesContainer}>
        {replies &&
          replies.map((reply, index) => (
            <div key={index} className={styles.replyContainer}>
              <div className={styles.replyLine}></div>
              <Comment {...reply} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comment;
