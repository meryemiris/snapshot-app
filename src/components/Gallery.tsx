import styles from "./Gallery.module.css";
import { ResponseAPI } from "../interfaces";

const Gallery: React.FC<ResponseAPI> = ({ results }) => {
  return (
    <div className={styles.galleryContainer}>
      {results.map((result) => (
        <img
          key={result.id}
          id={result.id}
          src={result.urls.full}
          alt={result.alt_description || ""}
          description={result.description || ""}
          className={styles.galleryImg}
        />
      ))}
    </div>
  );
};

export default Gallery;
