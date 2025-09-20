import { CheckIcon } from "@heroicons/react/20/solid";
import { Link, Route, Routes} from "react-router";
import Individual from "./Individual";
import Busines from "./Busines";

// const tiers = [
//   {
//     name: "Hobby",
//     id: "tier-hobby",
//     href: "#",
//     priceMonthly: "$29",
//     description:
//       "The perfect plan if you're just getting started with our product.",
//     features: [
//       "25 products",
//       "Up to 10,000 subscribers",
//       "Advanced analytics",
//       "24-hour support response time",
//     ],
//     featured: false,
//   },
//   {
//     name: "Enterprise",
//     id: "tier-enterprise",
//     href: "#",
//     priceMonthly: "$99",
//     description: "Dedicated support and infrastructure for your company.",
//     features: [
//       "Unlimited products",
//       "Unlimited subscribers",
//       "Advanced analytics",
//       "Dedicated support representative",
//       "Marketing automations",
//       "Custom integrations",
//     ],
//     featured: true,
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Pricing() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/pricing/individual"
            className="text-sm/6 font-semibold text-black"
          >
            Individual
          </Link>

          <Link
            to="/pricing/business"
            className="text-sm/6 font-semibold text-black"
          >
            business
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="individual" element={<Individual />} />
        <Route path="business" element={<Busines />} />
      </Routes>
    </div>
  );
}
