import React from "react";
import CreatePost from "../../components/ui/CreatePost";
import Post from "../../components/post/Post";
import { useTheme } from "../../ThemeContext";
import RightSidebar from "../../components/layout/RightSidebar";
import styles from "./Homepage.module.css";
import posts from "../../fake-data";

function Homepage() {
  const { theme } = useTheme();

  return (
    <div className={styles.homepageContainer}>
      <div>
        <CreatePost />
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <RightSidebar className={styles.rightSidebar} />
    </div>
  );
}

export default Homepage;
