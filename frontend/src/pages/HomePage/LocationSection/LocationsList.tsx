import { RiMapPin2Fill, RiTimeLine } from "react-icons/ri";
import { locationsData } from "./locationsData";

export default function LocationsList() {
  return (
    <div className="flex flex-col gap-5">
      {locationsData.map(
        (location: {
          id: number;
          name: string;
          address: string;
          hours: string;
        }) => (
          <div
            key={location.id}
            className="rounded-2xl border border-border-color bg-card py-4 px-6 transition-all duration-300 hover:border-primary hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <RiMapPin2Fill size={22} />

              <div className="flex-1">
                <h3 className="font-display text-2xl uppercase text-secondary">
                  {location.name}
                </h3>

                <p className="font-inter text-muted leading-7">
                  {location.address}
                </p>

                <div className="mt-4 flex items-center gap-2 text-primary">
                  <RiTimeLine size={18} />
                  <span className="font-inter">{location.hours}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
