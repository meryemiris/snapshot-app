import styles from "./Gallery.module.css";
import { ResponseAPI } from "../interfaces";

const Gallery: React.FC<ResponseAPI> = ({ results }) => {
  return (
    <div className={styles.galleryContainer}>
      {results.map((result) => (
        <img
          key={result.id}
          id={result.id}
          src={result.urls.small}
          alt={result.alt_description || ""}
          className={styles.galleryImg}
        />
      ))}
    </div>
  );
};

export default Gallery;
