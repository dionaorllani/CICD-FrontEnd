import React from "react";
import {
  BsFillHandThumbsUpFill,
  BsFillChatFill,
  BsFillShareFill,
} from "react-icons/bs";
import { useTheme } from "../../ThemeContext";
import styles from "./PostActions.module.css";

function PostActions({ onCommentClick }) {
  const { theme } = useTheme();

  return (
    <div className="mt-2 d-flex align-items-center">
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
        onClick={onCommentClick}
        className={`btn d-flex align-items-center gap-1 ${styles.postActionButtons}`}
      >
        <BsFillChatFill className="text-primary" />
        <span
          className={`text-${theme === "light" ? "dark" : "light"}`}
          style={{ fontSize: "14px" }}
        >
          0 Comments
        </span>
      </button>

      <button
        className={`btn d-flex align-items-center gap-1 ms-auto ${styles.postActionButtons}`}
      >
        <BsFillShareFill className="text-primary" />
        <span
          className={`text-${theme === "light" ? "dark" : "light"}`}
          style={{ fontSize: "14px" }}
        >
          0 Shares
        </span>
      </button>
    </div>
  );
}

export default PostActions;
