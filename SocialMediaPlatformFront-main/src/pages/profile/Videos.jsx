import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useTheme } from "../../ThemeContext";
import { FaSearchPlus } from "react-icons/fa";

const VideoThumbnail = ({ src, index, handleVideoClick }) => {
  return (
    <div className="col-5 position-relative">
      <video
        controls
        className="rounded"
        style={{ width: "100%", height: '100%' }}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <FaSearchPlus 
        key={index} // Add a unique key prop
        className="position-absolute top-50 start-50 translate-middle"
        style={{ fontSize: "3rem", color: "white", cursor: "pointer" }}
        onClick={() => handleVideoClick(index)}
      />
    </div>
  );
};

const VideoLightboxSlide = ({ slide }) => {
  return (
    <video controls style={{ height: "100%" }}>
      <source src={slide.src} type="video/mp4" />
      <source src={slide.src} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
};

function Videos() {
  const { theme } = useTheme();
  
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const videos = ["/video-2.mp4", "/video-1.mov"];
  
  const handleVideoClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="p-3">
      <h4>Videos</h4>
      <div className={`py-2 text-${theme === "light" ? "dark" : "light"}`}>
        <div className="row gap-3">
          {videos.map((src, index) => (
            <VideoThumbnail key={index} src={src} index={index} handleVideoClick={handleVideoClick} />
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={videos.map((src) => ({
            type: "video",
            src,
          }))}
          plugins={[Thumbnails]}
          index={photoIndex}
          onIndexChange={(index) => setPhotoIndex(index)}
          render={{
            slide: VideoLightboxSlide,
          }}
        />
      )}
    </div>
  );
}

export default Videos;