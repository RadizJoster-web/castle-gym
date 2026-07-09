import { RiCheckLine } from "react-icons/ri";
import { membershipPlans } from "./membershipData";

export default function MembershipCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {membershipPlans.map((plan) => (
        <div
          key={plan.id}
          className={`rounded-3xl border p-8 transition-all duration-300 ${
            plan.featured
              ? "border-primary bg-card scale-105"
              : "border-border-color bg-card hover:border-primary"
          }`}
        >
          {plan.featured && (
            <span className="inline-block mb-5 rounded-full bg-primary px-4 py-1 text-xs font-body font-semibold text-main uppercase">
              Most Popular
            </span>
          )}

          <h3 className="font-display text-3xl text-secondary uppercase">
            {plan.name}
          </h3>

          <p className="mt-3 font-body text-muted leading-7">
            {plan.description}
          </p>

          <div className="mt-8 flex items-end gap-2">
            <span className="font-display text-6xl text-primary">
              {plan.price}
            </span>

            <span className="font-body text-muted mb-2">{plan.duration}</span>
          </div>

          <div className="mt-8 space-y-4">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <RiCheckLine className="text-primary text-xl" />
                <span className="font-body text-secondary">{feature}</span>
              </div>
            ))}
          </div>

          <button
            className={`mt-10 w-full rounded-full py-3.5 font-body font-semibold transition-colors ${
              plan.featured
                ? "bg-primary text-main hover:bg-primary-hover"
                : "border border-border-color text-secondary hover:bg-card"
            }`}
          >
            {plan.button}
          </button>
        </div>
      ))}
    </div>
  );
}
