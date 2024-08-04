import { useState } from "react";
import { Image } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  BsBookmark,
  BsPersonSlash,
  BsXCircle,
  BsSlashCircle,
  BsThreeDots,
  BsStack,
  BsSend,
} from "react-icons/bs";
import PostActions from "./PostActions";
import Comment from "./Comment";
import AutoGrowingTextarea from "../ui/AutoGrowingTextarea";
import { useTheme } from "../../ThemeContext";
import styles from "./Post.module.css";

function Post({ user, time, text, mediaFiles, comments }) {
  const { theme } = useTheme();
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const toggleShowText = () => {
    setShowFullText((prev) => !prev);
  };

  const postThreshold = 100;
  const isTextLong = text.length > postThreshold;
  const displayedText = showFullText
    ? text
    : `${text.substring(0, postThreshold)}...`;

  const handleOpenLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const isImage = (file) => /\.(jpg|jpeg|png|gif)$/i.test(file);
  const isVideo = (file) => /\.(mp4|mov|webm|ogg)$/i.test(file);

  const handleCommentClick = () => {
    setShowCommentInput((cur) => !cur);
  };

  return (
    <div className={`${styles.postBox} rounded p-3 mt-4`}>
      <div className="d-flex align-items-center gap-1 mb-3">
        <Image
          src={`/default-profile${theme === "light" ? "" : "-dark"}.jpg`}
          width={60}
          roundedCircle
          className="align-self-start"
        />
        <div>
          <span className="mb-0 fw-semibold me-4">{user.name}</span>
          <span
            style={{ fontSize: "12px" }}
            className={`text-secondary ${styles.postTime}`}
          >
            {time}
          </span>
          <p style={{ fontSize: "14px" }} className="text-secondary">
            {user.job}
          </p>
        </div>
        <div
          className={`ms-auto align-self-start ${styles.postIconBox} dropdown`}
          data-bs-toggle="dropdown"
        >
          <BsThreeDots />
          <div
            className={`dropdown-menu dropdown-menu-end ${
              theme === "light" ? "" : "dropdown-menu-dark"
            }`}
          >
            <div className="p-2" style={{ width: "200px" }}>
              <ul
                className={`d-flex flex-column gap-2 ${styles.postOptionsList}`}
              >
                <li className="d-flex align-items-center gap-2">
                  <BsBookmark />
                  <span>Save post</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <BsPersonSlash />
                  <span>Unfollow</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <BsXCircle />
                  <span>Hide post</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <BsSlashCircle />
                  <span>Block</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p>
        {displayedText}
        {isTextLong && (
          <span
            onClick={toggleShowText}
            className="text-primary"
            style={{ cursor: "pointer" }}
          >
            {showFullText ? " Show less" : " Show more"}
          </span>
        )}
      </p>

      <div className={styles.postMediaBox}>
        {isImage(mediaFiles[0]) ? (
          <Image
            src={mediaFiles[0]}
            fluid
            className="rounded"
            onClick={() => handleOpenLightbox(0)}
            style={{ cursor: "pointer" }}
          />
        ) : isVideo(mediaFiles[0]) ? (
          <video
            controls
            className="rounded"
            style={{ height: "100%", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <source src={mediaFiles[0]} type="video/mp4" />
            <source src={mediaFiles[0]} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        ) : null}
        {mediaFiles.length > 1 && (
          <div
            className={styles.lightboxOverlay}
            onClick={() => handleOpenLightbox(0)}
          >
            <BsStack className={styles.multipleMediaIcon} size={24} />
          </div>
        )}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={mediaFiles.map((src) => ({
              type: isImage(src) ? "image" : "video",
              src,
            }))}
            plugins={[Thumbnails]}
            index={photoIndex}
            onIndexChange={(index) => setPhotoIndex(index)}
            render={{
              slide: ({ slide }) =>
                slide.type === "image" ? (
                  <img src={slide.src} alt="" style={{ height: "100%" }} />
                ) : (
                  <video controls style={{ height: "100%" }}>
                    <source src={slide.src} type="video/mp4" />
                    <source src={slide.src} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                ),
            }}
          />
        )}
      </div>

      <PostActions onCommentClick={handleCommentClick} />

      {showCommentInput && (
        <div className="d-flex gap-2 mt-2">
          <Image
            src={`/default-profile${theme === "light" ? "" : "-dark"}.jpg`}
            width={60}
            roundedCircle
            className="align-self-start"
          />
          <AutoGrowingTextarea placeholderText="Add a comment..." />
          <BsSend className={`${styles.sendCommentIcon}`} />
        </div>
      )}

      <div className="mt-4">
        {comments &&
          comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
      </div>
    </div>
  );
}

export default Post;
