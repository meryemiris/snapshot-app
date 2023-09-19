import Search from "./components/Search";
import Loading from "./components/Loading";
import Gallery from "./components/Gallery";

import { useState, useEffect, useCallback } from "react";

import { Result } from "./interfaces";
import axios from "axios";
import ImageModal from "./components/ImageModal";

import InfiniteScroll from "react-infinite-scroll-component";

export default function App() {
  const [images, setImages] = useState<Result[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  const fetchData = useCallback(
    async (page: number) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query: query,
              page: page,
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
          setImages((prevImages) => [...prevImages, ...results]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    },
    [query, apiKey]
  );

  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    setPage(1);
  };

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

      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<Loading />}
      >
        <Gallery results={images} onImageClick={handleImageClick} />
      </InfiniteScroll>

      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}
