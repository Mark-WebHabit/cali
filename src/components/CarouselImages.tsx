function CarouselImages({
  images,
  currentIndex,
}: {
  images: string[];
  currentIndex: number | null;
}) {
  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden flex -z-20`}
      style={{
        height: "calc(50vh)",
      }}
    >
      {images?.length > 0 &&
        images.map((src, i) => (
          <div key={i} className="w-screen h-full flex-shrink-0">
            <img
              src={src}
              alt={`BG ${i}`}
              className="opacity-70 w-full h-full object-cover relative transition-transform duration-500"
              style={{
                transform: `translateX(-${(currentIndex ?? 0) * 100}%)`,
              }}
            />
          </div>
        ))}
    </div>
  );
}

export default CarouselImages;
