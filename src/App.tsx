import Search from "./components/Search";
import Loading from "./components/Loading";
import Gallery from "./components/Gallery";

import { useState, useEffect } from "react";

import { Result } from "./interfaces";
import axios from "axios";
import ImageModal from "./components/ImageModal";

export default function App() {
  const [images, setImages] = useState<Result[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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

        if (response.status === 200) {
          const data = response.data;
          const results = data.results;
          console.log("image", results);
          setImages(results);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, apiKey]);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  // const handleCategory = (category: string) => {
  //   setQuery(category);
  // };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Search onSearch={handleSearch} />

      {loading && <Loading />}
      <Gallery results={images} onImageClick={handleImageClick} />
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}
