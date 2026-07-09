const schedules = [
  {
    day: "Monday – Friday",
    time: "05.00 – 23.00",
  },
  {
    day: "Saturday",
    time: "06.00 – 22.00",
  },
  {
    day: "Sunday & Public Holidays",
    time: "07.00 – 20.00",
  },
];

export default function OperatingHoursCards() {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-border-color bg-card p-6 md:p-8 mx-auto">
      <div className="flex flex-col">
        {schedules.map((item, index) => (
          <div
            key={item.day}
            className={`flex items-center justify-between py-5 first:pt-2 last:pb-2 ${
              index !== schedules.length - 1
                ? "border-b border-border-color/40"
                : ""
            }`}
          >
            {/* Sisi Kiri: Hari */}
            <div>
              <p className="font-body text-base md:text-lg font-medium text-secondary">
                {item.day}
              </p>
            </div>

            {/* Sisi Kanan: Jam Operasional */}
            <div>
              <span className="font-mono text-base md:text-lg text-primary tracking-wide">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
