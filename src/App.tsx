import Search from "./components/Search";
import Categories from "./components/Categories";
import { Loading } from "./components/Loading";
import Gallery from "./components/Gallery";

import { useState, useEffect } from "react";

import { Result } from "./interfaces";
import axios from "axios";

export default function App() {
  const [images, setImages] = useState<Result[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query: query,
            },
            headers: {
              Authorization: `Client-ID ${apiKey}`,
            },
          }
        );
        setLoading(true);

        if (response.status === 200) {
          const data = response.data;
          const results = data.results;
          console.log("image", results);
          setImages(results);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchData();
  }, [query, apiKey]);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    console.log("searchTerm", searchTerm);
  };

  const handleCategory = (category: string) => {
    setQuery(category);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <Categories onCategory={handleCategory} />
      {loading && <Loading />}
      <Gallery results={images} />
    </>
  );
}
