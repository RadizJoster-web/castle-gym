import LocationsHeader from "./LocationsHeader";
import LocationsMap from "./LocationsMap";
import LocationsList from "./LocationsList";

export default function LocationsSection() {
  return (
    <section id="location" className="px-6 py-24 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <LocationsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <LocationsMap />
          </div>

          <div className="lg:col-span-7">
            <LocationsList />
          </div>
        </div>
      </div>
    </section>
  );
}
