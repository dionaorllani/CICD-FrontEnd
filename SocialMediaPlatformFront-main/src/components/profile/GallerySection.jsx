import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/Profile.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaSearchPlus } from "react-icons/fa";

function GallerySection({ theme }) {
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
    <div className="p-3 rounded">
      <div className="d-flex align-items-center justify-content-between">
        <h4 className={`fw-bold text-${theme === "light" ? "dark" : "light"}`}>
          Photos
        </h4>
        <Link to="photos" className="btn btn-primary btn-sm">
          See All
        </Link>
      </div>

      <div className={`${styles.galleryGridRow1} mt-3`}>
        {images.slice(0, 2).map((src, index) => (
          <div
            key={index}
            className={styles.galleryImage}
            onClick={() => handleImageClick(index)}
          >
            <Image fluid src={src} rounded />
            <FaSearchPlus className={styles.magnifyingGlass} size={24} />
          </div>
        ))}
      </div>

      <div className={`${styles.galleryGridRow2} mt-3`}>
        {images.slice(2).map((src, index) => (
          <div
            key={index + 2}
            className={styles.galleryImage}
            onClick={() => handleImageClick(index + 2)}
          >
            <Image fluid src={src} rounded />
            <FaSearchPlus className={styles.magnifyingGlass} size={24} />
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "var(--bs-secondary)",
          width: "100%",
          height: "20px",
        }}
      ></div>

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

export default GallerySection;
