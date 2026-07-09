import OperatingHoursHeader from "./OperatingHoursHeader";
import OperatingHoursTable from "./OperatingHoursTable";

export default function OperatingHours() {
  return (
    <section id="operation" className="px-6 py-20 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <OperatingHoursHeader />
        <OperatingHoursTable />
      </div>
    </section>
  );
}
