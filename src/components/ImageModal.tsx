// ImageModal.tsx
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent}>
        <img src={imageUrl} alt="Large Image" />
      </div>
    </div>
  );
};

export default ImageModal;
