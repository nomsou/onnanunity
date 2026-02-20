import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id:    "1",
    name:  "Adetunji Joseph",
    title: "Homeowner, Askia I",
    image: "/images/testimonials/person-1.jpg",
    quote:
      "The estate's unique design immediately caught my attention and the promise of privacy truly won me over. " +
      "With only a select few semi-detached houses on the premises, I knew I was entering a world where exclusivity " +
      "and seclusion reign supreme. Onnan Unity's ability to create such distinctive designs while maximising " +
      "the use of space is truly awe-inspiring.",
    rating: 5,
  },
  {
    id:    "2",
    name:  "Nkechi Duru",
    title: "Homeowner, Gana Villas",
    image: "/images/testimonials/person-2.jpg",
    quote:
      "Their commitment to timely delivery transformed my vision into reality faster than I could have imagined. " +
      "Onnan Unity's remarkable ability to uphold deadlines while maintaining top-notch quality and craftsmanship " +
      "truly sets them apart. They are not just property developers; they are a reliable partner who values time " +
      "and delivers on promises.",
    rating: 5,
  },
  {
    id:    "3",
    name:  "Abdul Kareem",
    title: "Homeowner, Samori Villas",
    image: "/images/testimonials/person-3.jpg",
    quote:
      "I have found the ultimate luxury spot with Onnan Unity Properties. It is not just about elegant living — " +
      "it is about having your own private sanctuary. The attention to detail, the quality of finishes, and the " +
      "seamless delivery process exceeded every expectation I had. I would not hesitate to recommend them.",
    rating: 5,
  },
];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
