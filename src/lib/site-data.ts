import { siteUrl } from "@/lib/metadata";

export type ServiceEntry = {
  slug: string;
  name: string;
  hook: string;
  eyebrow: string;
  heroTitle: string;
  subheadline: string;
  intro: string;
  highlights: string[];
  related: string[];
  metaDescription: string;
};

export const services: ServiceEntry[] = [
  {
    slug: "airport-pickup",
    name: "Airport Pickup",
    hook: "Arrive relaxed. We're there when you land.",
    eyebrow: "Arrival logistics",
    heroTitle: "Arrive in Napa without juggling the transfer details yourself.",
    subheadline: "For guests who want the airport handoff handled cleanly before the trip even begins.",
    intro: "Private, well-timed transportation removes the most fragile part of the itinerary before it ever becomes a problem.",
    highlights: [
      "Coordinated pickup windows around your flight timing and guest count.",
      "A polished first impression for couples, groups, and wine country weekends.",
      "Clear handoff details so your group knows where to go and when to expect the ride.",
      "Local concierge follow-up if your arrival changes the rest of the itinerary.",
    ],
    related: ["hotel-reservations", "restaurant-bookings", "wine-tours"],
    metaDescription:
      "Arrange Napa Valley airport transportation with a concierge who coordinates timing, guest logistics, and the right arrival experience.",
  },
  {
    slug: "hotel-reservations",
    name: "Hotel Reservations",
    hook: "The right room changes everything.",
    eyebrow: "Stay curation",
    heroTitle: "Book the hotel that fits your Napa weekend, not just the one with availability.",
    subheadline: "Ideal for visitors who want a stay aligned with the pace, mood, and priorities of the trip.",
    intro: "Room choice shapes the entire valley experience, from drive times and walkability to whether the whole weekend feels effortless.",
    highlights: [
      "Recommendations matched to your trip style, budget comfort, and preferred part of the valley.",
      "Local insight on which properties fit couples, friend groups, or activity-heavy stays.",
      "Coordination with the rest of the itinerary so your location works with dinner, tastings, and transport.",
      "A smoother booking path when you want confidence before committing.",
    ],
    related: ["restaurant-bookings", "wine-tours", "pickleball-carneros"],
    metaDescription:
      "Get help with Napa Valley luxury hotel booking and local recommendations that match your weekend plans and preferred experience.",
  },
  {
    slug: "restaurant-bookings",
    name: "Restaurant Bookings",
    hook: "Napa's best tables, reserved for you.",
    eyebrow: "Dining access",
    heroTitle: "Get the right Napa tables on the right nights without chasing reservations.",
    subheadline: "For travelers who want their dinners to feel intentional, local, and worth building the day around.",
    intro: "Dining is where Napa trips often win or lose momentum, so the right reservations deserve as much care as the wine tastings.",
    highlights: [
      "Restaurant picks based on group size, pace, cuisine preferences, and the rest of your day.",
      "Reservation coordination that accounts for tasting schedules, traffic, and evening plans.",
      "Options for iconic dinners, hidden gems, and celebratory harvest-table experiences.",
      "Less app refreshing, more confidence that the evening is handled.",
    ],
    related: ["hotel-reservations", "wine-tours", "wine-train"],
    metaDescription:
      "Secure Napa Valley restaurant reservations with local guidance on the valley's best tables, timing, and dining flow.",
  },
  {
    slug: "train-rides",
    name: "Train Rides",
    hook: "Iconic Napa Valley Rail experiences.",
    eyebrow: "Classic outings",
    heroTitle: "Choose the Napa rail experience that actually fits your trip style.",
    subheadline: "Perfect for guests who want scenic nostalgia, great pacing, and a signature valley memory.",
    intro: "Train experiences can anchor a Napa itinerary beautifully when the timing, atmosphere, and add-on plans are curated around them.",
    highlights: [
      "Guidance on the right rail experience for couples, celebratory groups, or first-time visitors.",
      "Coordination with nearby tastings, meals, or transfers before and after the ride.",
      "Support around availability windows and schedule fit.",
      "A polished itinerary flow so the train feels like a highlight, not a puzzle piece.",
    ],
    related: ["wine-train", "restaurant-bookings", "airport-pickup"],
    metaDescription:
      "Plan a Napa Valley train experience with concierge support that matches the right rail outing to your weekend itinerary.",
  },
  {
    slug: "bicycle-rides",
    name: "Bicycle Rides",
    hook: "Wine country, two wheels at a time.",
    eyebrow: "Outdoor pacing",
    heroTitle: "See Napa at the rhythm it deserves, with the right route and support already lined up.",
    subheadline: "For visitors who want an active wine country day without guessing which ride is worth the effort.",
    intro: "A bike day should feel freeing, scenic, and well-paced, not like a scramble around routes, rentals, and timing.",
    highlights: [
      "Recommendations for the right ride style, terrain, and stop cadence.",
      "Help pairing cycling with lunch, tastings, or a lighter afternoon itinerary.",
      "Planning around group comfort, fitness, and how ambitious the day should feel.",
      "Cleaner coordination so the outdoor day still works with the broader trip.",
    ],
    related: ["hiking-trails", "wine-tours", "restaurant-bookings"],
    metaDescription:
      "Coordinate Napa Valley bike tours and scenic cycling days with local concierge insight on routes, pacing, and experience fit.",
  },
  {
    slug: "balloon-rides",
    name: "Balloon Rides",
    hook: "Napa from 3,000 feet. Unforgettable.",
    eyebrow: "Signature views",
    heroTitle: "Add the kind of sunrise experience people talk about long after the trip ends.",
    subheadline: "Built for guests who want a true marquee moment woven into the rest of the weekend.",
    intro: "Hot air balloon rides are unforgettable when they are timed well, paired with the right follow-up plans, and treated like the headline event they are.",
    highlights: [
      "Concierge guidance on timing, weather sensitivity, and morning itinerary flow.",
      "A smoother plan for what happens before pickup and after touchdown.",
      "Options that fit romantic trips, celebratory weekends, or first-time Napa visits.",
      "Less uncertainty around one of the valley’s most iconic experiences.",
    ],
    related: ["restaurant-bookings", "hotel-reservations", "boat-rides"],
    metaDescription:
      "Explore Napa Valley hot air balloon rides with concierge help on planning, timing, and building the rest of the day around the experience.",
  },
  {
    slug: "boat-rides",
    name: "Boat Rides & Wine Tasting",
    hook: "Napa River + world-class wine.",
    eyebrow: "Waterfront escape",
    heroTitle: "Pair river time with tasting time for a Napa day that feels distinctly different.",
    subheadline: "For guests who want a quieter, more layered outing than the standard tasting route alone.",
    intro: "A river-based experience changes the texture of the weekend and creates a strong contrast to the usual car-to-winery cadence.",
    highlights: [
      "Help pairing boat experiences with nearby wine tasting and lunch options.",
      "Recommendations that fit group energy, timing, and preferred level of activity.",
      "A more curated route through the day so the river segment feels intentional.",
      "Local planning support that balances scenery, pace, and ease.",
    ],
    related: ["wine-tours", "restaurant-bookings", "balloon-rides"],
    metaDescription:
      "Plan a Napa River boat tour and wine tasting day with local concierge recommendations, itinerary flow, and experience matching.",
  },
  {
    slug: "wine-tours",
    name: "Wine Tours",
    hook: "Private driver or we drive yours.",
    eyebrow: "Valley essential",
    heroTitle: "Build a wine day that feels private, paced, and actually tailored to your tastes.",
    subheadline: "Made for visitors who want the right tastings and transport without overbooking the day.",
    intro: "Wine country works best when the tasting lineup, pacing, and driver plan all support the same outcome: a relaxed, memorable day.",
    highlights: [
      "Route planning around preferred wine styles, group pace, and must-visit areas.",
      "Support for private driver options or coordination when someone else drives the group vehicle.",
      "Scheduling that leaves room to enjoy the valley instead of racing it.",
      "Recommendations rooted in real local fit, not generic tourist lists.",
    ],
    related: ["restaurant-bookings", "boat-rides", "hotel-reservations"],
    metaDescription:
      "Coordinate private Napa Valley wine tours with local concierge guidance on tastings, route planning, and transportation.",
  },
  {
    slug: "pickleball-carneros",
    name: "Pickleball at Carneros Inn",
    hook: "Instruction, dining, spa — all in one.",
    eyebrow: "Signature experience",
    heroTitle: "Turn pickleball at Carneros Inn into a full Napa lifestyle day, not just a lesson slot.",
    subheadline: "For guests who want Jeff’s flagship experience paired with dining, spa time, and the right atmosphere.",
    intro: "This is the clearest expression of the brand: sport, hospitality, and wine country ease combined into one polished experience.",
    highlights: [
      "Pickleball instruction shaped for your group’s skill level and energy.",
      "Support pairing the court time with dining, spa, or nearby valley plans.",
      "A flagship concierge offering that feels premium without becoming stiff.",
      "Ideal for couples, retreat groups, or visitors who want an activity with personality.",
    ],
    related: ["hotel-reservations", "wine-tours", "restaurant-bookings"],
    metaDescription:
      "Book pickleball at Carneros Inn in Napa with concierge support that combines instruction, hospitality, and nearby experiences.",
  },
  {
    slug: "hiking-trails",
    name: "Hiking Trails",
    hook: "Napa's best trails, curated for you.",
    eyebrow: "Local discovery",
    heroTitle: "Choose the trail that fits your group, your timing, and the kind of Napa view you actually want.",
    subheadline: "For travelers who want a better outdoor plan than a random map pin and a guess.",
    intro: "The best hiking day depends on view payoff, drive time, trail difficulty, and what else you want the day to hold.",
    highlights: [
      "Trail recommendations matched to fitness level, weather, and available time.",
      "Guidance on pairing the hike with brunch, tasting, or recovery plans afterward.",
      "Local perspective on which routes feel scenic, worthwhile, and guest-friendly.",
      "A more intentional outdoor option for active Napa visitors.",
    ],
    related: ["bicycle-rides", "balloon-rides", "restaurant-bookings"],
    metaDescription:
      "Discover guided Napa Valley hiking trail recommendations with concierge planning for route fit, scenery, and itinerary flow.",
  },
  {
    slug: "wine-train",
    name: "The Wine Train",
    hook: "The most iconic ride in wine country.",
    eyebrow: "Iconic Napa",
    heroTitle: "Make the Wine Train feel like the centerpiece of the trip, not just another booking to figure out.",
    subheadline: "For guests who want the valley’s most recognizable rail experience handled with smart surrounding plans.",
    intro: "The Wine Train can become a true signature day when the reservation, pacing, and before-and-after itinerary are all aligned.",
    highlights: [
      "Support selecting the right Wine Train experience for your group and travel goals.",
      "Itinerary coordination around pickups, meals, and nearby experiences.",
      "Local insight on whether the Wine Train is the right anchor for the weekend.",
      "A more polished version of Napa’s most iconic ride.",
    ],
    related: ["train-rides", "restaurant-bookings", "airport-pickup"],
    metaDescription:
      "Book the Napa Valley Wine Train with concierge support for timing, surrounding plans, and a smoother signature rail experience.",
  },
];

export const serviceTestimonials = [
  {
    quote:
      "We stopped trying to piece Napa together ourselves and finally enjoyed the weekend. Every handoff felt easier.",
    name: "Future guest placeholder",
    context: "Airport pickup + dinners + tastings",
  },
  {
    quote:
      "Jeff helped us choose experiences that fit our group instead of just booking the obvious tourist version.",
    name: "Future guest placeholder",
    context: "Friends trip itinerary",
  },
  {
    quote:
      "The whole trip felt more local, more polished, and way less stressful than our past Napa visits.",
    name: "Future guest placeholder",
    context: "Couples weekend planning",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export { siteUrl };
