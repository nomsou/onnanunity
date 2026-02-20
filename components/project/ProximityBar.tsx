import type { ProximityStat } from "@/types";

interface ProximityBarProps {
  stats: ProximityStat[];
}

export default function ProximityBar({ stats }: ProximityBarProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="bg-luxury-gold w-full">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap divide-x divide-luxury-charcoal/20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-8 flex-1 min-w-[120px] gap-0.5"
            >
              <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-luxury-charcoal/60 font-medium">
                {stat.label}
              </p>
              <p className="font-display text-2xl font-light text-luxury-charcoal leading-none">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
