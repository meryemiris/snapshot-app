import styles from "./Gallery.module.css";
import { Result } from "../interfaces";

interface GalleryProps {
  results: Result[];
  onImageClick: (imageUrl: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ results, onImageClick }) => {
  return (
    <div className={styles.galleryContainer}>
      {results.map((result) => (
        <img
          key={result.id}
          id={result.id}
          src={result.urls.small}
          alt={result.alt_description || ""}
          className={styles.galleryImg}
          onClick={() => onImageClick(result.urls.full)}
        />
      ))}
    </div>
  );
};

export default Gallery;
