import React, { useState, useEffect } from "react";
const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30"
];
const ITEMS_PER_PAGE = 10; // Change the number of items to load at a time

const LoadMoreList = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // Initial stage: Load 0 items
    setVisibleItems([]);
    setStartIndex(0);
  }, []);

  const loadItems = (start, count) => {
    const newItems = items.slice(start, start + count);
    setVisibleItems((prevItems) => [...prevItems, ...newItems]);
    setStartIndex(start + count);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // User has scrolled to the bottom
      loadItems(startIndex, ITEMS_PER_PAGE);
    }
  };

  const handleLoadMoreClick = () => {
    // Button click behavior
    loadItems(startIndex, ITEMS_PER_PAGE);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startIndex]);

  return (
    <div>
      <ul>
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleLoadMoreClick}>Load More</button>
    </div>
  );
};

export default LoadMoreList;