export const siteUrl = "https://napa-pickleball-concierge.vercel.app";
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
  image: string;
  whatYouGet: string[];
  testimonial: { quote: string; name: string; context: string };
}

export const services: Service[] = [
  {
    slug: "airport-pickup",
    name: "Airport Pickup",
    eyebrow: "Arrival & Departure",
    hook: "You arrive relaxed — no surge pricing, no wrong-car confusion.",
    heroTitle: "You land. We're already there.",
    subheadline: "Private door-to-door transfer from SFO or OAK directly to your Napa hotel — bags handled, no stress.",
    intro: "Skip the rideshare lottery. We meet you at arrivals, load your bags, and have you sipping wine within the hour.",
    metaDescription: "Private airport pickup and drop-off service for Napa Valley visitors. Meet-and-greet, luggage handling, direct to your hotel or vineyard.",
    related: ["hotel-reservations", "wine-tours", "restaurant-bookings"],
    image: "/images/airport-pickup.jpg",
    whatYouGet: [
      "Meet-and-greet at arrivals — your name on a sign, zero wait",
      "Private vehicle, no shared rides or detours",
      "Door-to-door to any Napa hotel or vineyard",
    ],
    testimonial: {
      quote: "We landed at SFO and Jeff was already texting us. Easiest arrival ever — straight to the hotel with our luggage handled.",
      name: "Sarah K.",
      context: "San Francisco weekend trip",
    },
  },
  {
    slug: "hotel-reservations",
    name: "Hotel Reservations",
    eyebrow: "Accommodation",
    hook: "You wake up somewhere worth photographing.",
    heroTitle: "The room that makes the whole trip.",
    subheadline: "Carneros Inn, Auberge du Soleil, Meadowood — we know which rooms face the vineyard and which are worth the upgrade.",
    intro: "Getting the right property at the right rate takes local knowledge. We've toured every major property in the valley.",
    metaDescription: "Curated hotel and resort reservations across Napa Valley. Local expertise on rooms, rates, and upgrades.",
    related: ["airport-pickup", "restaurant-bookings", "wine-tours"],
    image: "/images/hotel.jpg",
    whatYouGet: [
      "Insider knowledge on which rooms, views, and upgrades are worth it",
      "Rates and availability checks across top Napa properties",
      "Coordination with arrival transfers and dining reservations",
    ],
    testimonial: {
      quote: "Jeff got us into Carneros Inn during peak season — vineyard-view cottage, perfect timing. We would never have found it on our own.",
      name: "Michael & Dana R.",
      context: "Anniversary getaway, Napa Valley",
    },
  },
  {
    slug: "restaurant-bookings",
    name: "Restaurant Bookings",
    eyebrow: "Dining",
    hook: "You get the table everyone else couldn't.",
    heroTitle: "Dinner at the table you actually wanted.",
    subheadline: "The French Laundry, Bouchon, Farmstead — we work the reservation system so you don't have to refresh Resy at midnight.",
    intro: "The best restaurants in Napa are booked weeks out. A local connection gets you in.",
    metaDescription: "Restaurant reservations at Napa Valley's top dining destinations. The French Laundry, Bouchon, Farmstead, and more.",
    related: ["wine-tours", "hotel-reservations", "wine-train"],
    image: "/images/restaurant.jpg",
    whatYouGet: [
      "Access to Napa's most sought-after tables — even on short notice",
      "Dining timing coordinated with your full itinerary",
      "Recommendations tailored to your cuisine preferences and group size",
    ],
    testimonial: {
      quote: "French Laundry on a 4-day notice. I don't know how Jeff did it, but dinner was flawless. Best meal of my life.",
      name: "James T.",
      context: "Business trip, corporate dining",
    },
  },
  {
    slug: "wine-train",
    name: "Napa Valley Wine Train",
    eyebrow: "Iconic Rail Experience",
    hook: "You ride wine country's most iconic rails — effortlessly.",
    heroTitle: "All aboard the Napa Valley Wine Train.",
    subheadline: "36 miles through the valley's most scenic vineyards — gourmet dining, wine pairings, and the booking handled for you.",
    intro: "The Wine Train is a Napa institution and a consistent trip highlight. We secure the right departure, the right seats, and the right dining package — all timed to the rest of your itinerary.",
    metaDescription: "Napa Valley Wine Train reservations. Gourmet dining, scenic rail journey, seating upgrades, and itinerary planning — all handled for you.",
    related: ["restaurant-bookings", "wine-tours", "balloon-rides"],
    image: "/images/wine-train.jpg",
    whatYouGet: [
      "Confirmed reservations with the departure time that fits your itinerary",
      "Best seating and gourmet dining upgrades selected in advance",
      "One call covers everything — no booking confusion, no guesswork",
    ],
    testimonial: {
      quote: "We wanted the Wine Train but had no idea how to pick the right experience. Jeff sorted everything — gourmet package, window seats. It was the highlight of our whole trip.",
      name: "Rachel & Greg P.",
      context: "First-time Napa visitors",
    },
  },
  {
    slug: "bicycle-rides",
    name: "Bicycle Rides",
    eyebrow: "Active Experiences",
    hook: "You see Napa the way locals do — slowly, beautifully.",
    heroTitle: "Wine country at your own pace.",
    subheadline: "Flat vineyard roads, morning light, a picnic stop at a tasting room. We curate the route and arrange the bikes.",
    intro: "Napa's backroads are made for cycling. We match you with the right rental, route, and rest stops for your pace.",
    metaDescription: "Curated bicycle tours and rentals across Napa Valley. Vineyard routes, guided rides, and scenic cycling experiences.",
    related: ["hiking-trails", "wine-tours", "balloon-rides"],
    image: "/images/bicycle.jpg",
    whatYouGet: [
      "Route curated for your fitness level — flat or challenging",
      "Quality bike rental arranged and ready when you arrive",
      "Tasting room stops and picnic spots pre-selected along the way",
    ],
    testimonial: {
      quote: "Jeff mapped us a 15-mile loop through three vineyards with a lunch stop built in. Most perfect morning we've ever had.",
      name: "Chris & Maya L.",
      context: "Active weekend from Sacramento",
    },
  },
  {
    slug: "balloon-rides",
    name: "Balloon Rides",
    eyebrow: "Aerial Experiences",
    hook: "You see Napa Valley from 3,000 feet at sunrise.",
    heroTitle: "Napa from above — bucket-list checked.",
    subheadline: "Hot air balloon at sunrise over Napa Valley. We book the best operators and handle the 5am logistics.",
    intro: "Balloon rides sell out fast in peak season. We secure your spot and brief you so the only thing left is the awe.",
    metaDescription: "Hot air balloon rides over Napa Valley. Sunrise flights, top operators, and everything arranged for you.",
    related: ["bicycle-rides", "wine-tours", "boat-rides"],
    image: "/images/balloon.jpg",
    whatYouGet: [
      "Top-rated operator with perfect safety record — no guessing",
      "Sunrise flight over the valley's most scenic corridor",
      "Post-flight champagne brunch included and coordinated",
    ],
    testimonial: {
      quote: "The balloon ride at sunrise was the highlight of our anniversary trip. Jeff booked the best operator and it was absolutely flawless.",
      name: "David & Karen L.",
      context: "Anniversary getaway",
    },
  },
  {
    slug: "boat-rides",
    name: "Boat Rides & Wine Tasting",
    eyebrow: "On the Water",
    hook: "You discover the side of Napa most visitors never see.",
    heroTitle: "Napa River wine tasting — the hidden gem.",
    subheadline: "Private boat cruise on the Napa River, paired with curated wine stops. Relaxing, scenic, and utterly different.",
    intro: "The Napa River is an underrated gem. Boat-based wine experiences give you a perspective no vineyard tour can match.",
    metaDescription: "Private boat rides and wine tasting on the Napa River. Curated water-based experiences in Napa Valley.",
    related: ["balloon-rides", "wine-tours", "restaurant-bookings"],
    image: "/images/boat.jpg",
    whatYouGet: [
      "Private boat — no crowds, just your group on the river",
      "Wine stops curated to your taste preferences",
      "A completely different angle on the valley most visitors never discover",
    ],
    testimonial: {
      quote: "We'd been to Napa three times and thought we'd seen it all. The boat + wine combo was something totally new — Jeff's best recommendation.",
      name: "The Washingtons",
      context: "Return visitors, celebrating 10 years",
    },
  },
  {
    slug: "wine-tours",
    name: "Wine Tours",
    eyebrow: "Wine Country",
    hook: "You taste the wines most tourists never reach.",
    heroTitle: "The wineries worth your afternoon.",
    subheadline: "We know which tasting rooms require reservations, which have the best cave tours, and which are worth the drive up Howell Mountain.",
    intro: "Not all wineries are created equal. We match your palate and group to the right estates — and handle every booking.",
    metaDescription: "Curated private wine tours across Napa Valley. Tasting reservations, private drivers, and insider access to top estates.",
    related: ["restaurant-bookings", "hotel-reservations", "balloon-rides"],
    image: "/images/wine-tour.jpg",
    whatYouGet: [
      "Personalized winery selection based on your palate and interests",
      "All tasting reservations made in advance — no walk-up rejections",
      "Private driver option so everyone in your group can fully enjoy",
    ],
    testimonial: {
      quote: "Jeff got us into three private caves and a small-production estate that wasn't even on the map. We tasted wines we couldn't find anywhere else.",
      name: "Nicole & Tom B.",
      context: "Wine enthusiasts from Portland",
    },
  },
  {
    slug: "pickleball-carneros",
    name: "Private Pickleball",
    eyebrow: "Sport + Hospitality",
    hook: "You play on a private court — or make it a full resort day at Carneros Inn.",
    heroTitle: "Pickleball, your way — private court or resort day.",
    subheadline: "Private instruction with Jeff Forcier on a dedicated private court reserved just for your group — or on the courts at Carneros Inn with lunch and spa time built in.",
    intro: "Jeff Forcier — Napa's top pickleball instructor — gives you two ways to play: a private court all to yourselves, or a full resort experience at Carneros Inn with dining and spa woven into the afternoon.",
    metaDescription: "Private pickleball in Napa Valley — dedicated private court or Carneros Inn resort experience with dining and spa. Instruction by Jeff Forcier, all skill levels.",
    related: ["hotel-reservations", "restaurant-bookings", "wine-tours"],
    image: "/images/pickleball.jpg",
    whatYouGet: [
      "A private court reserved exclusively for your group — all skill levels welcome",
      "Resort option: play at Carneros Inn with lunch and spa bundled into one afternoon",
      "Private instruction from Napa's top pickleball pro, tailored to your game",
    ],
    testimonial: {
      quote: "Pickleball lesson, lunch on the patio, afternoon spa — Jeff orchestrated the whole day perfectly. We're already planning our return.",
      name: "The Garcias",
      context: "Corporate retreat, team of eight",
    },
  },
  {
    slug: "hiking-trails",
    name: "Hiking Trails",
    eyebrow: "Outdoor Adventures",
    hook: "You find trails most Napa visitors never discover.",
    heroTitle: "Napa above the fog line.",
    subheadline: "Skyline Wilderness, Bothe-Napa Valley, Table Rock — matched to your pace and how much wine you had last night.",
    intro: "Napa has world-class hiking most visitors never find. We point you to the best trailheads, conditions, and what to bring.",
    metaDescription: "Guided and self-guided hiking trails in Napa Valley. Trail recommendations, conditions, and curated outdoor experiences.",
    related: ["bicycle-rides", "balloon-rides", "wine-tours"],
    image: "/images/hiking.jpg",
    whatYouGet: [
      "Trail matched to your fitness level, timing, and view preferences",
      "Current conditions, parking tips, and what-to-bring checklist",
      "Optional post-hike winery stop built into your afternoon",
    ],
    testimonial: {
      quote: "Jeff sent us to a trail above the fog with sunrise views over the valley. Zero other hikers. One of the most beautiful mornings of my life.",
      name: "Alex M.",
      context: "Solo traveler, adventure focus",
    },
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
    quote: "We asked for a full weekend itinerary — wine tours, the Wine Train, private pickleball. He delivered every single thing.",
    context: "Family trip, party of six",
  },
];
