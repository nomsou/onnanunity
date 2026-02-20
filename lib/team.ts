import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Onnan Unity Leadership",
    role: "Chief Executive Officer",
    bio:
      "With decades of experience shaping Abuja's residential landscape, our CEO has led " +
      "Onnan Unity from a vision into one of the FCT's most trusted real estate names. " +
      "Their commitment to quality, innovation, and client satisfaction drives every decision.",
    image: "/images/team/ceo.jpg",
  },
];

export function getTeam(): TeamMember[] {
  return team;
}
