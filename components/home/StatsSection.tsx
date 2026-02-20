import SectionWrapper from "@/components/layout/SectionWrapper";
import StatCounter from "@/components/shared/StatCounter";
import { siteStats } from "@/lib/utils";

export default function StatsSection() {
  return (
    <SectionWrapper background="dark2" noPadding>
      <div className="px-6 md:px-12 lg:px-20 py-16 border-y border-white/5">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
            {siteStats.map((stat, i) => (
              <div key={i} className="flex justify-center md:justify-start md:px-10 first:pl-0 last:pr-0">
                <StatCounter value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
