import MembershipHeader from "./MembershipHeader";
import MembershipCards from "./MembershipCards";

export default function MembershipSection() {
  return (
    <section id="pricing" className="px-6 py-24 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <MembershipHeader />
        <MembershipCards />
      </div>
    </section>
  );
}
