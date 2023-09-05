import Gallery from "../components/Gallery";
import Search from "../components/Search";

import { useState } from "react";

export default function HomePage() {
  const [filter, setFilter] = useState({});

  const DUMMY_DATA = [
    {
      id: "dog",
      url: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      alt: "dog",
    },
    {
      id: "cat",
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80",
      alt: "cat",
    },

    {
      id: "bird",
      url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      alt: "bird",
    },
  ];

  const handleSearch = (searchTerm: string) => {
    const filtered = DUMMY_DATA.filter((image) =>
      image.alt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filtered);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <Gallery
        images={
          Array.isArray(filter) && filter.length > 0 ? filter : DUMMY_DATA
        }
      />
    </>
  );
}
