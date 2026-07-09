import { gymGalleryData } from "./gymGalleryData";

export default function GymGalleryGrid() {
  return (
    <div className="columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-5 lg:gap-6">
      {gymGalleryData.map((item) => (
        <div
          key={item.id}
          className="mb-3 md:mb-5 lg:mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-card"
        >
          <img
            src={item.image}
            alt={item.alt}
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
