import { useState } from "react";
import { Image } from "react-bootstrap";
import styles from "../../styles/Profile.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaSearchPlus } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

function Photos() {
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="p-3">
      <h4>Photos</h4>
      <div
        className={`py-2 text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="row gap-3">
          {images.map((src, index) => (
            <div
              key={index}
              className={`${styles.galleryImage} col-5 col-md-3 col-lg-2 mx-auto`}
              onClick={() => handleImageClick(index)}
            >
              <Image fluid src={src} rounded />
              <FaSearchPlus className={styles.magnifyingGlass} size={24} />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={currentIndex}
        plugins={[Thumbnails]}
        thumbnails={{ height: 50, width: 50 }}
      />
    </div>
  );
}

export default Photos;
