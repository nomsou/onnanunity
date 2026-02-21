import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/shared/StatCounter";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import Button from "@/components/ui/Button";
import { getTeam } from "@/lib/team";
import { siteStats } from "@/lib/utils";
import { CheckCircle, Award, Users, Building2 } from "lucide-react";
import mission from "@/public/images/hero/misson.png";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Onnan Unity — our heritage, mission, leadership team, and commitment to redefining luxury real estate in Abuja.",
};

const timeline = [
  {
    year: "Est.",
    event: "Onnan Unity Founded",
    detail:
      "Born from a vision to deliver world-class residential developments in Abuja.",
  },
  {
    year: "2018",
    event: "First Estate Launched",
    detail:
      "Askia I marked our entry into Maitama, setting a new benchmark for quality in the FCT.",
  },
  {
    year: "2020",
    event: "Solar Division Launched",
    detail:
      "We integrated sustainable solar energy infrastructure into every new development.",
  },
  {
    year: "2022",
    event: "Smart Home Integration",
    detail:
      "FTTH broadband and AI-assisted security systems became standard across all estates.",
  },
  {
    year: "2023",
    event: "Portfolio Expands to 7 Estates",
    detail:
      "From Maitama to Jahi, our portfolio now spans Abuja's most desirable postcodes.",
  },
  {
    year: "2024",
    event: "2,000+ Residents Housed",
    detail:
      "A growing community of homeowners across the FCT now call an Onnan Unity estate home.",
  },
];

const values = [
  {
    Icon: Award,
    title: "Uncompromising Quality",
    description:
      "Every decision, from material selection to structural engineering, is made with quality as the absolute priority.",
  },
  {
    Icon: Users,
    title: "Client-First Ethos",
    description:
      "We treat every client as a long-term partner. Their satisfaction is our most important metric.",
  },
  {
    Icon: Building2,
    title: "Innovation in Design",
    description:
      "We blend timeless architectural principles with contemporary design thinking to create homes that endure.",
  },
  {
    Icon: CheckCircle,
    title: "Integrity & Trust",
    description:
      "We deliver what we promise — on time, on specification, and to the standard agreed from day one.",
  },
];

export default function AboutPage() {
  const team = getTeam();

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        heading="Built on a Foundation of Excellence"
        subheading="From a singular vision to one of Abuja's most trusted real estate names — the Onnan Unity story."
      />

      <SectionWrapper id="mission">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Who We Are"
              heading="More Than a Developer — A Legacy Builder"
            />
            <div className="space-y-4 font-sans text-sm text-luxury-muted leading-relaxed">
              <p>
                Onnan Unity was founded with a single, uncompromising belief:
                that every person deserves to live in a home that reflects their
                aspirations. In Abuja — a city of ambition, diplomacy, and
                growth — we set out to build residential communities that
                don&apos;t just shelter, but inspire.
              </p>
              <p>
                Over the years, we have expanded from a single development into
                a portfolio of seven distinct estates, each one a testament to
                our evolving design language and deepening expertise. Our
                approach is meticulous — every site is selected with intention,
                every plan is engineered with precision, and every finish is
                chosen to endure.
              </p>
              <p>
                Today, thousands of residents across the FCT trust Onnan Unity
                as the address behind their most important investment. That
                trust is something we earn afresh with every foundation we lay
                and every key we hand over.
              </p>
            </div>
            <Button
              href="/portfolio"
              variant="gold"
              size="md"
              className="w-fit"
            >
              Explore Our Portfolio
            </Button>
          </div>

          <div className="relative h-[500px] overflow-hidden">
            <Image
              src={mission}
              alt="Onnan Unity — Our Story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-luxury-gold/20 -z-10" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="dark2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
          {siteStats.map((stat, i) => (
            <div
              key={i}
              className="flex justify-center md:justify-start md:px-10 first:pl-0 last:pr-0"
            >
              <StatCounter value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="values">
        <SectionHeading
          eyebrow="Our Values"
          heading="The Principles We Build By"
          subheading="These four values underpin every decision we make — from site acquisition to the final handover."
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {values.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-luxury-charcoal p-10 flex flex-col gap-5 group hover:bg-luxury-charcoal2 transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-luxury-gold/20 flex items-center justify-center group-hover:border-luxury-gold/50 transition-colors duration-300">
                <Icon size={18} className="text-luxury-gold" />
              </div>
              <h3 className="font-display text-xl font-light text-luxury-cream">
                {title}
              </h3>
              <p className="font-sans text-sm text-luxury-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* <SectionWrapper background="dark2" id="timeline">
        <SectionHeading
          eyebrow="Our Journey"
          heading="Milestones That Shaped Us"
          className="mb-14"
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-luxury-gold/15 -translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 pb-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-luxury-gold rounded-full -translate-x-1/2 mt-1.5 shrink-0 z-10" />

                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right md:pr-12" : "md:pl-12 md:ml-auto"}`}
                  >
                    <span className="font-display text-luxury-gold text-2xl font-light block mb-1">
                      {item.year}
                    </span>
                    <h4 className="font-sans text-sm font-medium text-luxury-cream mb-2">
                      {item.event}
                    </h4>
                    <p className="font-sans text-xs text-luxury-muted leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper> */}

      {/* {team.length > 0 && (
        <SectionWrapper id="team">
          <SectionHeading
            eyebrow="Leadership"
            heading="The Minds Behind the Mission"
            subheading="A team of experienced professionals united by a shared passion for exceptional living spaces."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="card-dark overflow-hidden group hover:border-luxury-gold/20 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden bg-luxury-charcoal3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-display text-xl font-light text-luxury-cream">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-luxury-gold">
                    {member.role}
                  </p>
                  <p className="font-sans text-xs text-luxury-muted leading-relaxed mt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )} */}

      {/* <TestimonialsSection />
      <NewsletterSection /> */}
    </>
  );
}
