function CarouselIndicator({
  images,
  currentIndex,
}: {
  images: string[];
  currentIndex: number | null;
}) {
  return (
    <ul className="absolute w-full bottom-10 flex items-center justify-center gap-4">
      {images?.length > 0 &&
        images.map((_, i) => (
          <li
            style={{
              transform: `scale(${i === currentIndex ? 1.2 : 1})`,
              background: i === currentIndex ? "var(--pink)" : "black",
            }}
            className="w-[20px] aspect-square rounded-full transition-transform duration-500 bg-black"
            key={i}
          ></li>
        ))}
    </ul>
  );
}

export default CarouselIndicator;
