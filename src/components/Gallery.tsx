import styles from "./Gallery.module.css";
import { ResponseAPI } from "../interfaces";

const Gallery: React.FC<ResponseAPI> = ({ results }) => {
  return (
    <div className={styles.galleryContainer}>
      {results.map((result) => (
        <img
          key={result.id}
          src={result.urls}
          alt={result.alt || ""}
          className={styles.galleryImg}
        />
      ))}
    </div>
  );
};

export default Gallery;
