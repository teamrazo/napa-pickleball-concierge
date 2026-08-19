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
    intro: "Skip the rideshare lottery. Our team meets you at arrivals, loads your bags, and has you sipping wine within the hour.",
    metaDescription: "Private airport pickup and drop-off service for Napa Valley visitors. Meet-and-greet, luggage handling, direct to your hotel or vineyard.",
    related: ["hotel-reservations", "wine-tours", "restaurant-bookings"],
    image: "/images/airport-pickup.jpg",
    whatYouGet: [
      "Meet-and-greet at arrivals — your name on a sign, zero wait",
      "Private vehicle, no shared rides or detours",
      "Door-to-door to any Napa or Sonoma hotel or vineyard",
    ],
    testimonial: {
      quote: "Our concierge team was already texting us when we landed. Easiest arrival ever — straight to the hotel with our luggage handled.",
      name: "Sarah K.",
      context: "San Francisco weekend trip",
    },
  },
  {
    slug: "car-services",
    name: "Car Services",
    eyebrow: "Transportation",
    hook: "Your designated driver or a full luxury vehicle — you choose.",
    heroTitle: "Effortless wine country travel.",
    subheadline: "We offer two ways to move through Napa and Sonoma: a designated driver using your vehicle, or our affiliated luxury car service with a professional driver for up to four guests.",
    intro: "Whether you want a trusted driver behind the wheel of your own car while you taste freely, or a fully chauffeured luxury vehicle for the day, our concierge team coordinates every detail. Our luxury car service is affiliated with Driven by Deb — discreet, reliable, and perfectly suited for wine country itineraries.",
    metaDescription: "Car services for Napa and Sonoma Wine Country — designated driver in your vehicle or luxury chauffeured car service for up to 4 guests via Driven by Deb.",
    related: ["wine-tours", "restaurant-bookings", "airport-pickup"],
    image: "/images/airport-pickup.jpg",
    whatYouGet: [
      "Designated driver option: your car, a professional driver, no worries",
      "Luxury car service for up to 4 guests — affiliated with Driven by Deb",
      "All pickups, drop-offs, and winery stops coordinated by our team",
    ],
    testimonial: {
      quote: "Having a designated driver in our own SUV was the smartest call we made. We tasted at six wineries and nobody had to hold back.",
      name: "The Marlowe Group",
      context: "Private wine country tour",
    },
  },
  {
    slug: "hotel-reservations",
    name: "Hotel Reservations",
    eyebrow: "Accommodation",
    hook: "You wake up somewhere worth photographing.",
    heroTitle: "The room that makes the whole trip.",
    subheadline: "Carneros Inn, Auberge du Soleil, Meadowood — our team knows which rooms face the vineyard and which are worth the upgrade.",
    intro: "Getting the right property at the right rate takes local knowledge. Our concierge team has toured every major property in the valley and across Sonoma.",
    metaDescription: "Curated hotel and resort reservations across Napa Valley and Sonoma Wine Country. Local expertise on rooms, rates, and upgrades.",
    related: ["airport-pickup", "restaurant-bookings", "wine-tours"],
    image: "/images/hotel.jpg",
    whatYouGet: [
      "Insider knowledge on which rooms, views, and upgrades are worth it",
      "Rates and availability checks across top Napa and Sonoma properties",
      "Coordination with arrival transfers and dining reservations",
    ],
    testimonial: {
      quote: "Our concierge team got us into Carneros Inn during peak season — vineyard-view cottage, perfect timing. We would never have found it on our own.",
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
    subheadline: "The French Laundry, Bouchon, Farmstead — our team works the reservation system so you don't have to refresh Resy at midnight.",
    intro: "The best restaurants in Napa and Sonoma are booked weeks out. A local connection gets you in.",
    metaDescription: "Restaurant reservations at Napa Valley's top dining destinations. The French Laundry, Bouchon, Farmstead, and more across Wine Country.",
    related: ["wine-tours", "hotel-reservations", "wine-train"],
    image: "/images/restaurant.jpg",
    whatYouGet: [
      "Access to Napa's most sought-after tables — even on short notice",
      "Dining timing coordinated with your full itinerary",
      "Recommendations tailored to your cuisine preferences and group size",
    ],
    testimonial: {
      quote: "French Laundry on 4-day notice. I don't know how they did it, but dinner was flawless. Best meal of my life.",
      name: "James T.",
      context: "Business trip, corporate dining",
    },
  },
  {
    slug: "wine-tours",
    name: "Winery & Wine Cave Experiences",
    eyebrow: "Wine Country",
    hook: "Iconic estates, hidden-gem family vineyards, and private caves most guests never reach.",
    heroTitle: "The wineries worth your afternoon.",
    subheadline: "We know which tasting rooms require reservations, which have the best cave tours, and which small-production family estates are worth the winding road.",
    intro: "Not all wineries are created equal. Our concierge team matches your palate and group to iconic Napa and Sonoma estates as well as the boutique, family-run vineyards with stories behind every bottle — and we handle every booking so nothing gets left to chance.",
    metaDescription: "Curated winery and wine cave experiences across Napa Valley and Sonoma. Private tastings, hidden-gem family vineyards, exclusive cave access, and wine tour coordination.",
    related: ["restaurant-bookings", "hotel-reservations", "private-cave-experiences"],
    image: "/images/wine-tour.jpg",
    whatYouGet: [
      "Personalized selection: iconic estates and hidden-gem family vineyards with storytelling",
      "All tasting and cave reservations made in advance — no walk-up rejections",
      "Car service coordination so everyone can fully enjoy",
    ],
    testimonial: {
      quote: "Our team got us into three private caves and a small-production family estate that wasn't even on the map. We tasted wines we couldn't find anywhere else.",
      name: "Nicole & Tom B.",
      context: "Wine enthusiasts from Portland",
    },
  },
  {
    slug: "private-cave-experiences",
    name: "Private Cave Experiences",
    eyebrow: "Exclusive Access",
    hook: "Off the beaten path, beneath the vineyard — insider access to Napa's most exclusive caves.",
    heroTitle: "Tables and tastings beneath the vines.",
    subheadline: "We secure access to private wine caves that don't appear on any public booking platform — intimate tableside tastings, barrel pours, and conversations with the winemakers behind the labels.",
    intro: "Some of the most memorable wine moments in Napa happen underground. Our concierge team has cultivated relationships with private estates that open their caves to select guests — offering an intimate, unhurried experience completely off the beaten tourist path.",
    metaDescription: "Private wine cave experiences in Napa Valley — exclusive insider access to caves, tableside barrel tastings, and winemaker conversations not available to the general public.",
    related: ["wine-tours", "restaurant-bookings", "wine-train"],
    image: "/images/wine-tour.jpg",
    whatYouGet: [
      "Exclusive access to private caves not listed on public booking platforms",
      "Tableside barrel tastings and winemaker conversations",
      "Curated to your palate — from bold Cabernets to small-production Chardonnay",
    ],
    testimonial: {
      quote: "Two hours in a private cave with the winemaker himself. No crowds, no rush — just extraordinary wine and stories you can't find in any travel guide.",
      name: "The Brennan Family",
      context: "Wine country milestone celebration",
    },
  },
  {
    slug: "wine-train",
    name: "Napa Valley Wine Train",
    eyebrow: "Iconic Rail Experience",
    hook: "You ride wine country's most iconic rails — effortlessly.",
    heroTitle: "All aboard the Napa Valley Wine Train.",
    subheadline: "36 miles through the valley's most scenic vineyards — gourmet dining, wine pairings, and the booking handled for you.",
    intro: "The Wine Train is a Napa institution and a consistent trip highlight. Our concierge team secures the right departure, the right seats, and the right dining package — all timed to the rest of your itinerary.",
    metaDescription: "Napa Valley Wine Train reservations. Gourmet dining, scenic rail journey, seating upgrades, and itinerary planning — all handled for you.",
    related: ["restaurant-bookings", "wine-tours", "balloon-rides"],
    image: "/images/wine-train.jpg",
    whatYouGet: [
      "Confirmed reservations with the departure time that fits your itinerary",
      "Best seating and gourmet dining upgrades selected in advance",
      "One call covers everything — no booking confusion, no guesswork",
    ],
    testimonial: {
      quote: "We wanted the Wine Train but had no idea how to pick the right experience. Our concierge sorted everything — gourmet package, window seats. It was the highlight of our whole trip.",
      name: "Rachel & Greg P.",
      context: "First-time Napa visitors",
    },
  },
  {
    slug: "airbnb-vrbo-services",
    name: "Airbnb & VRBO In-House Services",
    eyebrow: "Property Hospitality",
    hook: "Your vacation rental, fully stocked and ready before you walk through the door.",
    heroTitle: "Arrive to a home that's already home.",
    subheadline: "Pre-arrival pantry stocking, full kitchen provisioning, catering coordination, and delivery setup — so your rental property feels like a private residence from the moment you arrive.",
    intro: "When you're staying in an Airbnb or VRBO in Napa or Sonoma, the details make all the difference. Our concierge team handles pre-arrival grocery shopping and pantry stocking, kitchen setup, curated wine selections, catering coordination, and delivery services — turning a rental into a seamless wine country retreat.",
    metaDescription: "Napa and Sonoma Airbnb and VRBO concierge services — pre-arrival pantry stocking, kitchen provisioning, wine delivery, catering coordination, and in-house setup.",
    related: ["restaurant-bookings", "wine-tours", "hotel-reservations"],
    image: "/images/hotel.jpg",
    whatYouGet: [
      "Pre-arrival pantry stocking and kitchen provisioning tailored to your preferences",
      "Curated wine and charcuterie delivery ready when you walk in",
      "Catering and meal delivery coordination for the duration of your stay",
    ],
    testimonial: {
      quote: "We walked into our rental to find the kitchen stocked, wine chilled, and a charcuterie board waiting. The whole weekend felt like a private retreat.",
      name: "The Okafor Party",
      context: "Weekend rental, Sonoma",
    },
  },
  {
    slug: "boat-rides",
    name: "Napa River Electric Boat Cruises",
    eyebrow: "On the Water",
    hook: "Wine and charcuterie on the Napa River — the side of wine country most visitors never discover.",
    heroTitle: "Napa River wine tasting — the hidden gem.",
    subheadline: "Electric boat cruise departing from Carneros and Cuttings Wharf — curated wine pairings, artisan charcuterie, and an effortlessly scenic float through the heart of wine country.",
    intro: "The Napa River is wine country's best-kept secret. Our concierge team arranges electric boat cruises departing from Carneros or Cuttings Wharf, complete with thoughtfully curated wine and charcuterie — giving you a perspective on Napa that no vineyard tour can match.",
    metaDescription: "Napa River electric boat cruises with wine and charcuterie departing from Carneros and Cuttings Wharf. Private water-based wine country experiences in Napa Valley.",
    related: ["balloon-rides", "wine-tours", "restaurant-bookings"],
    image: "/images/boat.jpg",
    whatYouGet: [
      "Electric boat cruise departing from Carneros or Cuttings Wharf",
      "Curated wine and artisan charcuterie selections on the water",
      "An intimate, crowd-free angle on Napa most visitors never experience",
    ],
    testimonial: {
      quote: "We'd been to Napa three times and thought we'd seen it all. The river cruise with wine and charcuterie was something totally new — our team's best recommendation.",
      name: "The Washingtons",
      context: "Return visitors, celebrating 10 years",
    },
  },
  {
    slug: "bicycle-rides",
    name: "Biking Across Wine Country",
    eyebrow: "Excursions & Outdoors",
    hook: "Guided or unguided — Carneros, Yountville, Calistoga, or Napa at your own pace.",
    heroTitle: "Wine country at your own pace.",
    subheadline: "Flat vineyard roads, morning light, tasting room stops along the way. Our team curates the routes and arranges the bikes for Carneros, Yountville, Calistoga, and Napa.",
    intro: "Napa and Sonoma's backroads are made for cycling. Our concierge team matches you with the right rental, route, and rest stops — from an easy cruise through Carneros to a full-day ride through Yountville and beyond. Guided or unguided, we handle every detail.",
    metaDescription: "Guided and unguided biking across Napa Wine Country — Carneros, Yountville, Calistoga, and Napa. Curated routes, bike rentals, and tasting room stops arranged for you.",
    related: ["hiking-trails", "wine-tours", "balloon-rides"],
    image: "/images/bicycle.jpg",
    whatYouGet: [
      "Guided or unguided routes across Carneros, Yountville, Calistoga, and Napa",
      "Quality bike rental arranged and ready when you arrive",
      "Tasting room stops and picnic spots pre-selected along the way",
    ],
    testimonial: {
      quote: "Our concierge team mapped us a 15-mile loop through three vineyards with a lunch stop built in. Most perfect morning we've ever had.",
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
    intro: "Balloon rides sell out fast in peak season. Our concierge team secures your spot and briefs you so the only thing left is the awe.",
    metaDescription: "Hot air balloon rides over Napa Valley. Sunrise flights, top operators, and everything arranged for you.",
    related: ["bicycle-rides", "wine-tours", "boat-rides"],
    image: "/images/balloon.jpg",
    whatYouGet: [
      "Top-rated operator with perfect safety record — no guessing",
      "Sunrise flight over the valley's most scenic corridor",
      "Post-flight champagne brunch included and coordinated",
    ],
    testimonial: {
      quote: "The balloon ride at sunrise was the highlight of our anniversary trip. Our concierge team booked the best operator and it was absolutely flawless.",
      name: "David & Karen L.",
      context: "Anniversary getaway",
    },
  },
  {
    slug: "pickleball-carneros",
    name: "Private Pickleball",
    eyebrow: "Sport + Hospitality",
    hook: "Private court booking and coaching — your group, your session, no one else.",
    heroTitle: "Pickleball, your way — private court or resort day.",
    subheadline: "Private coaching and court booking coordination for all skill levels — or a full resort experience at Carneros Inn with dining and spa woven into the afternoon.",
    intro: "Our concierge team coordinates private court bookings and coaching sessions for all skill levels. Looking for more than just a game? Pair your session with a Carneros Inn resort experience — lunch, spa, and an afternoon that's as restorative as it is fun.",
    metaDescription: "Private pickleball in Napa Valley — court booking, coaching coordination, or a full Carneros Inn resort day with dining and spa. All skill levels welcome.",
    related: ["hotel-reservations", "restaurant-bookings", "wine-tours"],
    image: "/images/pickleball.jpg",
    whatYouGet: [
      "Private court reserved exclusively for your group — all skill levels welcome",
      "Coaching coordination tailored to your game and goals",
      "Resort option: Carneros Inn with lunch and spa bundled into one afternoon",
    ],
    testimonial: {
      quote: "Pickleball lesson, lunch on the patio, afternoon spa — our concierge team orchestrated the whole day perfectly. We're already planning our return.",
      name: "The Garcias",
      context: "Corporate retreat, team of eight",
    },
  },
  {
    slug: "hiking-trails",
    name: "Hiking Trails",
    eyebrow: "Excursions & Outdoors",
    hook: "You find trails most Napa visitors never discover.",
    heroTitle: "Napa above the fog line.",
    subheadline: "Skyline Wilderness, Bothe-Napa Valley, Table Rock — matched to your pace and how much wine you had last night.",
    intro: "Napa has world-class hiking most visitors never find. Our concierge team points you to the best trailheads, current conditions, and what to bring — with an optional winery stop built into your afternoon.",
    metaDescription: "Guided and self-guided hiking trails in Napa Valley. Trail recommendations, conditions, and curated outdoor experiences.",
    related: ["bicycle-rides", "balloon-rides", "wine-tours"],
    image: "/images/hiking.jpg",
    whatYouGet: [
      "Trail matched to your fitness level, timing, and view preferences",
      "Current conditions, parking tips, and what-to-bring checklist",
      "Optional post-hike winery stop built into your afternoon",
    ],
    testimonial: {
      quote: "Our concierge team sent us to a trail above the fog with sunrise views over the valley. Zero other hikers. One of the most beautiful mornings of my life.",
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
    quote: "Our concierge team had the airport pickup, hotel, and dinner reservations sorted before we even landed. We just showed up and enjoyed.",
    context: "Weekend trip from San Francisco",
  },
  {
    name: "David & Karen L.",
    quote: "The balloon ride at sunrise was the highlight of our anniversary trip. They booked the best operator and it was absolutely flawless.",
    context: "Anniversary getaway",
  },
  {
    name: "The Hendersons",
    quote: "We asked for a full weekend itinerary — wine caves, the Wine Train, private pickleball. They delivered every single thing.",
    context: "Family trip, party of six",
  },
];
