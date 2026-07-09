export default function LocationsMap() {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-border-color bg-card h-full min-h-[420px]">
      <iframe
        title="Castle GYM Locations"
        src="https://www.google.com/maps?q=Jakarta&output=embed"
        className="w-full flex-1 border-0"
        loading="lazy"
      />
    </div>
  );
}
