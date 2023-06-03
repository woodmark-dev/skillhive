import { Carousel } from "@material-tailwind/react";
export default function TestimonialWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel
      prevArrow={() => {}}
      nextArrow={() => {}}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-3">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-2 cursor-pointer rounded-full transition-all content-[''] ${
                activeIndex === i
                  ? "bg-secondaryColor w-8"
                  : "bg-secondaryColor/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {children}
    </Carousel>
  );
}
