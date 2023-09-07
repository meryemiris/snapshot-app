import Gallery from "../components/Gallery";
import Search from "../components/Search";

import { useEffect, useState } from "react";

interface Image {
  id: string;
  url: string;
  category: string;
}

export default function HomePage() {
  const [filter, setFilter] = useState({});
  const [images, setImages] = useState<Image[]>([]);
  // const DUMMY_DATA = [
  //   {
  //     id: "dog",
  //     url: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  //     alt: "dog",
  //   },
  //   {
  //     id: "cat",
  //     url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80",
  //     alt: "cat",
  //   },

  //   {
  //     id: "bird",
  //     url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  //     alt: "bird",
  //   },
  // ];

  const handleSearch = (searchTerm: string) => {
    const filtered = images.filter((image) =>
      image.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

        const response = await fetch(
          `https://api.unsplash.com/photos?client_id=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data: Image[] = await response.json();
        setImages(data);
      } catch (error) {
        console.log("Error fetching images:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Search onSearch={handleSearch} />
      <Gallery
        images={Array.isArray(filter) && filter.length > 0 ? filter : images}
      />
    </>
  );
}
