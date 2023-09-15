import styles from "./Gallery.module.css";
import { ResponseAPI } from "../interfaces";

const Gallery: React.FC<ResponseAPI> = ({ images }) => {
  return (
    <div className={styles.galleryContainer}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.alt}
          className={styles.galleryImg}
        />
      ))}
    </div>
  );
};

export default Gallery;
