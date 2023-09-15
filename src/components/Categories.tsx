import styles from "./Categories.module.css";

interface CategoryProps {
  onCategory: (category: string) => void;
}

const Categories: React.FC<CategoryProps> = ({ onCategory }) => {
  const handleCategory = (category: string) => {
    onCategory(category);
  };

  return (
    <form className={styles.categories}>
      <button
        className={styles.categoryButton}
        onClick={() => handleCategory("bird")}
        type="button"
        name="birds"
      >
        Birds
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => handleCategory("cat")}
        type="button"
        name="cats"
      >
        Cats
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => handleCategory("dog")} // Pass the category as a string
        type="button" // Use type="button" to prevent form submission
        name="dogs"
      >
        Dogs
      </button>
    </form>
  );
};

export default Categories;
