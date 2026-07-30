export const siteUrl = "https://napa-concierge.vercel.app";
export const siteName = "Napa Concierge";

export interface Service {
  slug: string;
  name: string;
  eyebrow: string;
  hook: string;
  heroTitle: string;
  subheadline: string;
  intro: string;
  metaDescription: string;
  related: string[];
}

export const services: Service[] = [
  {
    slug: "airport-pickup",
    name: "Airport Pickup",
    eyebrow: "Arrival & Departure",
    hook: "Arrive relaxed. We're there when you land.",
    heroTitle: "Your Napa arrival, handled.",
    subheadline: "Skip the rideshare lottery. We meet you at the gate, load your bags, and have you sipping wine within the hour.",
    intro: "Visitors who book airport pickup start their Napa experience without stress — no surge pricing, no wrong-car confusion, no waiting.",
    metaDescription: "Private airport pickup and drop-off service for Napa Valley visitors. Meet-and-greet, luggage handling, direct to your hotel or vineyard.",
    related: ["hotel-reservations", "wine-tours", "restaurant-bookings"],
  },
  {
    slug: "hotel-reservations",
    name: "Hotel Reservations",
    eyebrow: "Accommodation",
    hook: "The right room changes everything.",
    heroTitle: "Stay somewhere worth remembering.",
    subheadline: "Carneros Inn, Auberge du Soleil, Meadowood — we know which rooms face the vineyard and which are worth the upgrade.",
    intro: "Getting the right property at the right rate takes local knowledge. We've stayed at or toured every major property in the valley.",
    metaDescription: "Curated hotel and resort reservations across Napa Valley. Local expertise on rooms, rates, and upgrades.",
    related: ["airport-pickup", "restaurant-bookings", "wine-tours"],
  },
  {
    slug: "restaurant-bookings",
    name: "Restaurant Bookings",
    eyebrow: "Dining",
    hook: "Napa's best tables, reserved for you.",
    heroTitle: "Dinner at the table you actually wanted.",
    subheadline: "The French Laundry, Bouchon, Farmstead — we work the reservation system so you don't have to refresh Resy at midnight.",
    intro: "The best restaurants in Napa are booked weeks out. A local connection gets you in. That's what we provide.",
    metaDescription: "Restaurant reservations at Napa Valley's top dining destinations. The French Laundry, Bouchon, Farmstead, and more.",
    related: ["wine-tours", "hotel-reservations", "wine-train"],
  },
  {
    slug: "train-rides",
    name: "Train Rides",
    eyebrow: "Scenic Experiences",
    hook: "Iconic Napa Valley Rail experiences.",
    heroTitle: "Napa by rail. The slow, scenic way.",
    subheadline: "The Wine Train is one of Napa's most beloved experiences. We handle the booking, the upgrades, and the logistics.",
    intro: "Guests who ride the Wine Train consistently call it a highlight of their Napa trip. We make sure you're on the right departure.",
    metaDescription: "Napa Valley Wine Train reservations and scenic rail experiences. Booking, upgrades, and logistics handled.",
    related: ["wine-train", "wine-tours", "balloon-rides"],
  },
  {
    slug: "bicycle-rides",
    name: "Bicycle Rides",
    eyebrow: "Active Experiences",
    hook: "Wine country, two wheels at a time.",
    heroTitle: "The valley looks different from a bike.",
    subheadline: "Flat vineyard roads, morning light, and a picnic stop at a tasting room. We curate the route and arrange the bikes.",
    intro: "Napa's backroads are made for cycling. We match you with the right rental, route, and rest stops based on your pace and interests.",
    metaDescription: "Curated bicycle tours and rentals across Napa Valley. Vineyard routes, guided rides, and scenic cycling experiences.",
    related: ["hiking-trails", "wine-tours", "balloon-rides"],
  },
  {
    slug: "balloon-rides",
    name: "Balloon Rides",
    eyebrow: "Aerial Experiences",
    hook: "Napa from 3,000 feet. Unforgettable.",
    heroTitle: "See the valley the way the hawks do.",
    subheadline: "Hot air balloon rides over Napa Valley at sunrise are bucket-list material. We book the best operators and handle the timing.",
    intro: "Balloon rides sell out fast, especially in peak season. We secure your spot with reputable operators and brief you on what to expect.",
    metaDescription: "Hot air balloon rides over Napa Valley. Sunrise flights, top operators, and everything arranged for you.",
    related: ["bicycle-rides", "wine-tours", "boat-rides"],
  },
  {
    slug: "boat-rides",
    name: "Boat Rides & Wine Tasting",
    eyebrow: "On the Water",
    hook: "Napa River + world-class wine.",
    heroTitle: "Wine tasting on the Napa River.",
    subheadline: "Combine a private boat cruise on the Napa River with curated wine stops. Relaxing, scenic, and something most visitors never discover.",
    intro: "The Napa River is an underrated gem. Boat-based wine experiences give you a perspective on the valley that no vineyard tour can match.",
    metaDescription: "Private boat rides and wine tasting on the Napa River. Curated water-based experiences in Napa Valley.",
    related: ["balloon-rides", "wine-tours", "restaurant-bookings"],
  },
  {
    slug: "wine-tours",
    name: "Wine Tours",
    eyebrow: "Wine Country",
    hook: "Private driver or we drive yours.",
    heroTitle: "The wineries worth your afternoon.",
    subheadline: "We know which tasting rooms require reservations, which have the best cave tours, and which are worth the drive up Howell Mountain.",
    intro: "Not all wineries are created equal. We match your palate, group size, and interests to the right estates — and handle all the bookings.",
    metaDescription: "Curated private wine tours across Napa Valley. Tasting reservations, private drivers, and insider access to top estates.",
    related: ["restaurant-bookings", "hotel-reservations", "balloon-rides"],
  },
  {
    slug: "pickleball-carneros",
    name: "Pickleball at Carneros Inn",
    eyebrow: "Sport + Hospitality",
    hook: "Instruction, dining, spa — all in one.",
    heroTitle: "Pickleball at Carneros Inn.",
    subheadline: "Private pickleball instruction on the courts at Carneros Inn, followed by lunch or spa time. A Napa experience you won't find anywhere else.",
    intro: "Jeff Forcier — Napa's top pickleball instructor — runs private lessons at Carneros Inn. Combine it with a resort day for a full Napa afternoon.",
    metaDescription: "Private pickleball lessons at Carneros Inn Napa Valley. Instruction by Jeff Forcier, combined with resort dining and spa access.",
    related: ["hotel-reservations", "restaurant-bookings", "wine-tours"],
  },
  {
    slug: "hiking-trails",
    name: "Hiking Trails",
    eyebrow: "Outdoor Adventures",
    hook: "Napa's best trails, curated for you.",
    heroTitle: "Napa above the fog line.",
    subheadline: "Skyline Wilderness, Bothe-Napa Valley, Table Rock — we match you to the right trail based on your pace, views, and how much wine you had last night.",
    intro: "Napa has world-class hiking that most visitors never find. We point you to the best trailheads, conditions, and what to bring.",
    metaDescription: "Guided and self-guided hiking trails in Napa Valley. Trail recommendations, conditions, and curated outdoor experiences.",
    related: ["bicycle-rides", "balloon-rides", "wine-tours"],
  },
  {
    slug: "wine-train",
    name: "The Wine Train",
    eyebrow: "Iconic Napa Experience",
    hook: "The most iconic ride in wine country.",
    heroTitle: "All aboard the Napa Valley Wine Train.",
    subheadline: "A 36-mile round-trip through the valley's most scenic vineyards, with gourmet dining and wine pairings on board. We get you the right seats.",
    intro: "The Wine Train is a Napa institution. We handle reservations, seating upgrades, and make sure your departure time works with the rest of your itinerary.",
    metaDescription: "Napa Valley Wine Train reservations. Gourmet dining, scenic rail journey, and curated itinerary planning.",
    related: ["restaurant-bookings", "train-rides", "wine-tours"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export interface Testimonial {
  name: string;
  quote: string;
  context: string;
}

export const serviceTestimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    quote: "Jeff had our airport pickup, hotel, and dinner reservations sorted before we even landed. We just showed up and enjoyed.",
    context: "Weekend trip from San Francisco",
  },
  {
    name: "David & Karen L.",
    quote: "The balloon ride at sunrise was the highlight of our anniversary trip. Jeff booked the best operator and it was flawless.",
    context: "Anniversary getaway",
  },
  {
    name: "The Hendersons",
    quote: "We asked for a full weekend itinerary — wine tours, the Wine Train, pickleball at Carneros. He delivered every single thing.",
    context: "Family trip, party of six",
  },
];
