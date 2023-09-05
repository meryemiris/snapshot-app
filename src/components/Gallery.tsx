import styles from "../styles/Gallery.module.css";

interface Image {
  id: string;
  url: string;
  alt: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
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
