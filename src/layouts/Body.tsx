import { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

// images
import BG1 from "/images/previews/bg.jpg";
import BG2 from "/images/previews/bg2.jpg";
import BG3 from "/images/previews/bg3.jpg";

import CarouselIndicator from "../components/CarouselIndicator";
import CarouselImages from "../components/CarouselImages";

function Body() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const images = useMemo(() => [BG1, BG2, BG3], []);

  useEffect(() => {
    if (!images || images?.length <= 0) return setCurrentIndex(null);

    const intervalId = setInterval(() => {
      setCurrentIndex((old) => {
        if (old !== 0 && !old) {
          return 0;
        } else if (old + 1 >= images.length) {
          return 0;
        } else {
          return old + 1;
        }
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <main
      className="min-h-screen w-screen overflow-scroll bg-[var(--bg)] relative flex flex-col z-10"
      id="top"
    >
      <Header />

      <div className="relative h-[50vh] w-screen  z-0 pt-[80px] ">
        <CarouselImages images={images} currentIndex={currentIndex} />

        <CarouselIndicator images={images} currentIndex={currentIndex} />
        <h1 className="title text-6xl md:text-8xl lg:text-9xl text-center my-8 ">
          Cali Resort
        </h1>
      </div>
      <Outlet />
    </main>
  );
}

export default Body;
