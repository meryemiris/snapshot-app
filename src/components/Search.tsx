import React from "react";
import styles from "./Search.module.css";
// import { useState } from "react";

interface SearchProps {
  onSearch: (category: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const searchTerm = data.get("category") as string;

    if (searchTerm.trim().length === 0) return;

    onSearch(searchTerm);
  }

  return (
    <>
      <h1 className={styles.header}>Search Image</h1>
      <form className={styles.searchContainer} onSubmit={handleSearch}>
        <input
          type="text"
          name="category"
          placeholder="cat"
          className={styles.searchTerm}
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
