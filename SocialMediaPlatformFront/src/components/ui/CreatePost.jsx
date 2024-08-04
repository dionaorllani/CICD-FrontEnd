import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { BsImage, BsCameraReels, BsCalendar3 } from "react-icons/bs";
import styles from "./CreatePost.module.css";
import { useTheme } from "../../ThemeContext";
import AutoGrowingTextarea from "./AutoGrowingTextarea";
import ImageUploadModal from "./ImageUploadModal";
import VideoUploadModal from "./VideoUploadModal";

const CreatePost = () => {
  const { theme } = useTheme();
  const [showImageModal, setShowImageModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);

  return (
    <div className={`${styles.createPostBox} rounded p-3`}>
      <div className="d-flex mb-3">
        <Image
          className="align-self-start"
          src={`/default-profile${theme === "light" ? "" : "-dark"}.jpg`}
          width={60}
          roundedCircle
        />
        <AutoGrowingTextarea />
      </div>
      <div className="d-flex flex-wrap gap-2">
        <div
          className="text-success d-flex align-items-center gap-2 p-2 rounded"
          style={{ backgroundColor: "var(--bs-secondary)" }}
          onClick={() => setShowImageModal(true)}
        >
          <BsImage />
          <span className="fw-light">Photo</span>
        </div>

        <div
          className="text-info d-flex align-items-center gap-2 px-2 rounded"
          style={{ backgroundColor: "var(--bs-secondary)" }}
          onClick={() => setShowVideoModal(true)}
        >
          <BsCameraReels />
          <span className="fw-light">Video</span>
        </div>

        <div
          className="text-danger d-flex align-items-center gap-2 px-2 rounded"
          style={{ backgroundColor: "var(--bs-secondary)" }}
        >
          <BsCalendar3 />
          <span className="fw-light">Event</span>
        </div>

        <Button variant="outline-success" className="ms-auto">
          Post
        </Button>
      </div>

      <ImageUploadModal
        show={showImageModal}
        onHide={() => setShowImageModal(false)}
        files={imageFiles}
        setFiles={setImageFiles}
      />

      <VideoUploadModal
        show={showVideoModal}
        onHide={() => setShowVideoModal(false)}
        files={videoFiles}
        setFiles={setVideoFiles}
      />
    </div>
  );
};

export default CreatePost;
