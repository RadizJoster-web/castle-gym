import GymGalleryHeader from "./GymGalleryHeader";
import GymGalleryGrid from "./GymGalleryGrid.tsx";

export default function GymGallerySection() {
  return (
    <section id="gallery" className="px-6 py-24 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <GymGalleryHeader />
        <GymGalleryGrid />
      </div>
    </section>
  );
}
