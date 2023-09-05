import styles from "../styles/Gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <img
        className={styles.galleryImg}
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80"
        alt="cat"
        id="cat"
      ></img>
      <img
        className={styles.galleryImg}
        src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        alt="dog"
        id="dog"
      ></img>
      <img
        className={styles.galleryImg}
        src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="bird"
        id="bird"
      ></img>
      <img
        className={styles.galleryImg}
        src="https://images.unsplash.com/photo-1570652514166-86011c098003?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvbmtleXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="donkey"
        id="donkey"
      ></img>
      <img
        className={styles.galleryImg}
        src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="fish"
        id="fish"
      ></img>
    </div>
  );
}
