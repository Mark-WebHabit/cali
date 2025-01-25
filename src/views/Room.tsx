import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Header from "../components/Header";

type Index = {
  prev: null | number;
  current: null | number;
  next: null | number;
};

const images = [
  "/images/previews/bg.jpg",
  "/images/bedroom.jpg",
  "/images/previews/bg2.jpg",
  "/images/previews/bg3.jpg",
];

function Room() {
  const [indexes, setIndexes] = useState<Index>({
    prev: null,
    current: 0,
    next: 1,
  });

  const handleSwipe = (direction: string) => {
    setIndexes((prevIndexes) => {
      const newIndexes = { ...prevIndexes };
      if (direction === "LEFT") {
        newIndexes.prev = newIndexes.current;
        newIndexes.current = newIndexes.next;
        newIndexes.next =
          newIndexes.next !== null
            ? (newIndexes.next + 1) % images.length
            : null;
      } else if (direction === "RIGHT") {
        newIndexes.next = newIndexes.current;
        newIndexes.current = newIndexes.prev;
        newIndexes.prev =
          newIndexes.prev !== null
            ? (newIndexes.prev - 1 + images.length) % images.length
            : 0;
      }
      return newIndexes;
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    trackMouse: true,
  });

  return (
    <main className="w-screen h-screen">
      <Header />
      <div className="w-full h-full pt-[80px] grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <div
            className="flex-1 border grid place-items-center relative"
            {...swipeHandlers}
          >
            {indexes.prev !== null && (
              <img
                src={images[indexes.prev]}
                alt="Room"
                draggable={false}
                className="select-none pointer-events-none h-[70%] absolute top-[50%] left-2 -translate-y-[50%] rounded-md transition-transform duration-500"
              />
            )}
            {indexes.current !== null && (
              <img
                src={images[indexes.current]}
                alt="Room"
                draggable={false}
                className="select-none pointer-events-none h-[80%] w-[80%] z-10 rounded-md transition-transform duration-500"
              />
            )}
            {indexes.next !== null && (
              <img
                src={images[indexes.next]}
                alt="Room"
                draggable={false}
                className="select-none pointer-events-none h-[70%] absolute top-[50%] right-2 -translate-y-[50%] rounded-md transition-transform duration-500"
              />
            )}
          </div>
          <div className="flex-1 border"></div>
        </div>
      </div>
    </main>
  );
}

export default Room;
