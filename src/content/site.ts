// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for site content.
//
// Every name, photo, sponsor, stat, and paragraph of copy on the website
// lives in this one file. To update the site, edit the values below —
// you do not need to touch any component or page file.
//
// Photos/logos are plain paths into the `public/` folder (e.g. "/team/jane.jpg").
// Leave a photo/logo as "" until you have the real file — the site will show
// a clearly labeled placeholder instead of a broken image.
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  email?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role?: string;
  major: string;
  gradYear: string;
  photo: string;
  linkedin?: string;
  bio?: string;
  /** Zoom multiplier applied to the photo so every subject reads at a consistent size. Defaults to 1. */
  photoScale?: number;
  /** CSS transform-origin for the zoom, e.g. "50% 15%". Defaults to "50% 20%". */
  photoPosition?: string;
  /** Backdrop color revealed when photoScale < 1 letterboxes the image. Matches the photoshoot's wood backdrop. */
  photoBg?: string;
}

export interface Subteam {
  name: string;
  /** Small category label shown above the section title, e.g. "Leadership". */
  eyebrow: string;
  members: TeamMember[];
}

export interface CarSpec {
  label: string;
  value: string;
}

export interface CarSystem {
  name: string;
  description: string;
}

export interface Car {
  id: string;
  name: string;
  year: string;
  category: string;
  tagline?: string;
  photo: string;
  heroPhoto?: string;
  specs: CarSpec[];
  features: string[];
  systems?: CarSystem[];
}

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

export interface SponsorTier {
  tier: string;
  blurb?: string;
  sponsors: Sponsor[];
}

export interface GalleryItem {
  caption: string;
  photo: string;
  /** Intrinsic pixel dimensions — drive the masonry grid's aspect ratio for each tile. */
  width: number;
  height: number;
}

export interface ValueCard {
  title: string;
  description: string;
}

export interface Subsystem {
  name: string;
  description: string;
}

export interface JoinStep {
  title: string;
  description: string;
}

export interface Meeting {
  day: string;
  title: string;
  description: string;
  time: string;
  location: string;
}

const social: SocialLinks = {
  instagram: "https://www.instagram.com/rensselaer_motorsport",
  facebook: "https://www.facebook.com/RPIFSAE/",
  linkedin: "https://www.linkedin.com/company/rensselaer-motorsport/",
  youtube: "https://www.youtube.com/@rensselaermotorsport",
  email: "mailto:admin@rensselaermotorsport.com",
};

export const site = {
  meta: {
    name: "Rensselaer Motorsport",
    shortName: "RMS",
    tagline: "Design. Build. Race.",
    description:
      "Rensselaer Motorsport is RPI's student-run Formula SAE team, designing, building, and racing a formula-style car from the ground up every season.",
    // "light" = dark wordmark for use on white/light backgrounds (header, footer forms, etc.)
    // "dark" = light wordmark (as shipped) for use on black/dark backgrounds (footer, dark sections)
    logo: "/rm-logo-light.png",
    logoDark: "/rm-logo.png",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Cars", href: "/the-car" },
    { label: "Team", href: "/team" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Contact", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
  ] satisfies NavLink[],

  joinCta: { label: "Join the Team", href: "/join" } satisfies NavLink,
  donateCta: { label: "Donate", href: "/donate" } satisfies NavLink,

  social,

  hero: {
    eyebrow: "Rensselaer Polytechnic Institute — Formula SAE",
    headline: "RENSSELAER MOTORSPORT",
    subheadline:
      "A student-run engineering team designing, building, and racing a formula-style car from scratch — every year, from the ground up.",
    primaryCta: { label: "Join the Team", href: "/join" } satisfies NavLink,
    secondaryCta: { label: "Meet the Car", href: "/the-car" } satisfies NavLink,
    image: { src: "/background.png", alt: "Rensselaer Motorsport car on track, hero shot" },
  },

  video: {
    // Paste a YouTube/Vimeo embed URL here (e.g. "https://www.youtube.com/embed/VIDEO_ID").
    // Leave blank and the homepage will show a clearly labeled placeholder instead.
    url: "https://player.vimeo.com/video/1137944844",
    title: "Rensselaer Motorsport — Season Recap",
  },

  homeCards: [
    {
      title: "Who We Are",
      description:
        "A student-run engineering team designing, building, and racing a formula-style car from the ground up every season.",
      href: "/about",
      cta: "About the Team",
    },
    {
      title: "Meet the Car",
      description:
        "See the specs, systems, and engineering decisions behind this year's competition car.",
      href: "/the-car",
      cta: "View the Car",
    },
    {
      title: "Join the Team",
      description:
        "No experience required. Engineering, business, and manufacturing roles are open to all majors and class years.",
      href: "/join",
      cta: "Get Involved",
    },
    {
      title: "Our Sponsors",
      description:
        "Rensselaer Motorsport runs on the generous support of 40+ industry partners and sponsors.",
      href: "/sponsors",
      cta: "View Sponsors",
    },
    {
      title: "Gallery",
      description:
        "Moments from the shop, the track, and everywhere in between — see the build come together.",
      href: "/gallery",
      cta: "View Gallery",
    },
  ] satisfies { title: string; description: string; href: string; cta: string }[],

  sponsorPacket: {
    url: "/sponsor-packet.pdf",
    label: "View Sponsor Packet",
  },

  contact: {
    intro:
      "Have a question, want to sponsor the team, or just want to say hello? Reach out — we'd love to hear from you.",
    email: "admin@rensselaermotorsport.com",
    address: "Rensselaer Polytechnic Institute, Troy, NY",
    meetings: [
      {
        day: "Every Tuesday",
        title: "Engineering Meeting",
        description:
          "Our weekly engineering meetings go in depth about the car's development and allow the team to participate in design reviews.",
        time: "7:00 PM – 8:00 PM",
        location: "Sage 3101",
      },
      {
        day: "Every Wednesday",
        title: "General Team Meeting",
        description:
          "Our weekly meeting, where we update the entire team about admin, business, and engineering updates.",
        time: "7:00 PM – 7:30 PM",
        location: "Ricketts 203",
      },
      {
        day: "Every Friday",
        title: "Shop Open Hours",
        description:
          "Our shop is open many times during the week, but you can find the most people in shop on Friday evenings.",
        time: "7:00 PM – 12:00 AM",
        location: "2368 Burdett Ave",
      },
    ] satisfies Meeting[],
  },

  donate: {
    intro:
      "Rensselaer Motorsport is a student-funded team — every donation goes directly toward materials, manufacturing, and competition travel.",
    // Paste your donation processor link here (e.g. an RPI giving page or a Stripe/PayPal link).
    // Leave blank and the donate page will show a clearly labeled placeholder instead.
    url: "",
  },

  about: {
    heroImage: { src: "/team-background.jpg", alt: "The Rensselaer Motorsport team with car #27" },
    memberCount: "32+",
    intro: [
      "Rensselaer Motorsport is a student-run engineering team at Rensselaer Polytechnic Institute competing in Formula SAE, an international collegiate design competition where teams design, build, and race a small formula-style race car.",
      "Beyond the car itself, members run every part of the operation — engineering, manufacturing, business, and sponsorship — giving students hands-on experience they can't get in a classroom.",
    ],
    // Condensed synopsis for the About page hero/intro block.
    aboutUs:
      "Rensselaer Motorsport is Rensselaer Polytechnic Institute's student-run Formula SAE team, made up of 32+ undergraduate engineers and business students who design, build, and race a formula-style car from the ground up every season. The team operates like a small startup — every subsystem, from the chassis to the electrical system, is designed, manufactured, and validated in-house by students, alongside the business and sponsorship operation that funds it all. Members join with no prior experience required and leave with hands-on engineering, manufacturing, and project-management experience that classroom coursework alone can't provide.",
    whatIsFsae: {
      title: "What is FSAE?",
      body: "Formula SAE is an international collegiate engineering design competition organized by SAE International. Student teams from universities around the world design, build, test, and race a small formula-style race car, then bring it to competition to be evaluated against other schools. Cars are judged on a mix of static events — cost, engineering design, and a business/sponsorship presentation — and dynamic events on track, including acceleration, skidpad, autocross, endurance, and efficiency. It's a full product-development cycle compressed into a single school year: design, manufacture, validate, and race.",
    },
    ourWork: {
      title: "Our Work",
      body: "Every year, Rensselaer Motorsport designs and manufactures a new competition car from a blank sheet — running the full engineering cycle of concept, CAD, analysis, manufacturing, and testing, while the business team secures sponsorship, manages budget, and prepares the cost and presentation events that are judged alongside the car itself.",
    },
    values: [
      {
        title: "Engineering Excellence",
        description:
          "Every subsystem is designed, analyzed, and validated by students, applying classroom theory to a real, competing vehicle.",
      },
      {
        title: "Hands-On Learning",
        description:
          "Members machine parts, wire electronics, and turn wrenches — learning by building, testing, and racing.",
      },
      {
        title: "One Team",
        description:
          "Engineering and business members work side by side, because a competitive car needs both a strong design and a strong program behind it.",
      },
    ] satisfies ValueCard[],
    subsystems: [
      {
        name: "Vehicle Dynamics & Suspension",
        description: "Suspension geometry, kinematics, and handling balance.",
      },
      { name: "Chassis", description: "Structural frame design, safety, and manufacturing." },
      { name: "Aerodynamics", description: "Aero packages for downforce and cooling." },
      {
        name: "EV & High Voltage",
        description: "Motor, inverter, and high-voltage system integration.",
      },
      {
        name: "Tractive Battery",
        description: "Battery pack design, cell selection, and accumulator safety.",
      },
      { name: "Low Voltage", description: "Vehicle electronics, sensors, and data acquisition." },
      { name: "Drivetrain", description: "Power delivery from motor to wheels." },
      { name: "Ergonomics", description: "Driver interface, cockpit layout, and controls." },
      {
        name: "Business & Sponsorship",
        description: "Budget, partnerships, and the cost/business competition events.",
      },
    ] satisfies Subsystem[],
    // NOTE: we don't have verified sourcing for the team's founding year or specific
    // competition milestones — replace the bracketed placeholders below with the real details.
    history:
      "Rensselaer Motorsport has represented RPI in SAE International's Formula SAE competition for [add founding year] years, with the team evolving over that time from an internal-combustion platform to today's electric race car. Add specific milestones, competition results, and notable alumni achievements here.",
  },

  stats: [
    { label: "Cars Built", value: "—" },
    { label: "Years Competing", value: "—" },
    { label: "Active Members", value: "32+" },
    { label: "Sponsors & Partners", value: "—" },
  ] satisfies Stat[],

  team: [
    {
      name: "Executive Board",
      eyebrow: "Leadership",
      members: [
        {
          name: "Cameron Quail",
          role: "Team Lead",
          major: "Aeronautical/Aerospace Engineering / Mechanical Engineering",
          gradYear: "2028",
          photo: "/Headshots/cam.jpg",
          linkedin: "https://www.linkedin.com/in/cameronquail/",
        },
        {
          name: "Abel Arellano",
          role: "Vehicle Dynamics Lead",
          major: "Aeronautical/Aerospace Engineering",
          gradYear: "2028",
          photo: "/Headshots/abel.jpg",
          linkedin: "https://www.linkedin.com/in/abel-arellano-a3a3a4339/",
        },
        {
          name: "Alexander Ethier",
          role: "EV Lead, High Voltage Lead",
          major: "Electrical Engineering / Computer Science Engineering",
          gradYear: "2028",
          photo: "/Headshots/alex e.jpg",
          linkedin: "https://www.linkedin.com/in/alexanderjethier/",
        },
      ],
    },
    {
      name: "Subsystem Leads",
      eyebrow: "The Leads",
      members: [
        {
          name: "Amalan Narashimman",
          role: "Ergonomics Lead",
          major: "Mechanical Engineering",
          gradYear: "2028",
          photo: "/Headshots/amalan.jpg",
          linkedin: "https://www.linkedin.com/in/amalannarashimman/",
          photoScale: 1.15,
        },
        {
          name: "Ben Dingman",
          role: "Business Lead",
          major: "Design Innovation and Society / Communication, Media, and Design",
          gradYear: "2028",
          photo: "/Headshots/ben.jpg",
          linkedin: "https://www.linkedin.com/in/benjamin-dingman-509570357/",
        },
        {
          name: "Emma Platts",
          role: "Senior Tractive Battery Lead",
          major: "Materials Engineering & Chemistry",
          gradYear: "2028",
          photo: "/Headshots/emma.jpg",
          linkedin: "https://www.linkedin.com/in/emma-m-platts/",
        },
        {
          name: "Henry Blount",
          role: "Low Voltage Lead",
          major: "Electrical Engineering",
          gradYear: "2029",
          photo: "/Headshots/henry.jpg",
          linkedin: "https://www.linkedin.com/in/henry-blount-978a59348/",
          photoScale: 1.15,
        },
        {
          name: "Joey Marchand",
          role: "All Wheel Drive R&D Lead",
          major: "Mechanical Engineering",
          gradYear: "2027",
          photo: "/Headshots/joey.jpg",
          linkedin: "https://www.linkedin.com/in/joey-marchand/",
        },
        {
          name: 'Jonathan "JB" Brooks',
          role: "Senior Chassis Lead",
          major: "Mechanical Engineering / Design Innovation and Society",
          gradYear: "2028",
          photo: "/Headshots/jb.jpg",
          linkedin: "https://www.linkedin.com/in/jbooks06/",
        },
        {
          name: "Theodore Racz",
          role: "Aero Lead",
          major: "Mechanical Engineering",
          gradYear: "2027",
          photo: "/Headshots/theo.jpg",
          linkedin: "https://www.linkedin.com/in/theodore-racz-560605293/",
        },
        {
          name: "Nicholas Cummings",
          role: "CIO",
          major: "Mechanical Engineering",
          gradYear: "2027",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/nicholas--cummings/",
        },
        {
          name: "Yulin Du",
          role: "Drivetrain Lead",
          major: "Mechanical Engineering",
          gradYear: "2029",
          photo: "/Headshots/yulin.jpg",
          linkedin: "https://www.linkedin.com/in/yulin-du/",
        },
        {
          name: "Zayd Farjo",
          role: "Senior Suspension Lead",
          major: "Mechanical Engineering Undergrad, MBA Grad",
          gradYear: "2026",
          photo: "/Headshots/zayd.jpg",
          linkedin: "https://www.linkedin.com/in/zayd-farjo-a2a983254/",
        },
      ],
    },
    {
      name: "Junior Subsystem Leads",
      eyebrow: "The Junior Leads",
      members: [
        {
          name: "Alexander Weiss",
          role: "Safety Officer, Junior Suspension Lead",
          major: "Mechanical Engineering / Aeronautical/Aerospace Engineering",
          gradYear: "2028",
          photo: "/Headshots/alex w.jpg",
          linkedin: "https://www.linkedin.com/in/alexander-weiss-ct/",
          photoScale: 1.35,
        },
        {
          name: "Arfan Shikder",
          role: "Junior Chassis Lead",
          major: "Civil Engineering",
          gradYear: "2029",
          photo: "/Headshots/arfan.jpg",
          linkedin: "https://www.linkedin.com/in/arfan-shikder-029b1a280/",
        },
        {
          name: "Colby Giunta",
          role: "Junior Tractive Battery Lead",
          major: "Electrical Engineering",
          gradYear: "2029",
          photo: "/Headshots/colby.jpg",
          linkedin: "https://www.linkedin.com/in/colby-giunta-658296371/",
        },
      ],
    },
    {
      name: "Full Members",
      eyebrow: "The Team",
      members: [
        {
          name: "Joshua Levy",
          major: "Mechanical Engineering",
          gradYear: "2028",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/joshua-g-levy/",
        },
        {
          name: 'Zining "Grace" Yu',
          major: "Mechanical Engineering / Aeronautical/Aerospace Engineering",
          gradYear: "2026",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/grace-yu-00997a270/",
        },
        {
          name: "Aaron Wang",
          major: "Electrical Engineering",
          gradYear: "2028",
          photo: "/Headshots/aaron.jpg",
          linkedin: "https://www.linkedin.com/in/aaron-wang-aa6bba388/",
        },
        {
          name: "Alexander Singer",
          major: "Electrical Engineering",
          gradYear: "2029",
          photo: "/Headshots/alex s.jpg",
          linkedin: "https://www.linkedin.com/in/alexander-singer-5ba391289/",
        },
        {
          name: "Bennet Strong Sarmiento",
          major: "Mechanical Engineering",
          gradYear: "2029",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/bennet-strong-ba551a3a7/",
        },
        {
          name: "Blake Hopper",
          major: "Electrical Engineering",
          gradYear: "2026",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/bhopper/",
        },
        {
          name: "Debarshi Sen",
          major: "Mechanical Engineering",
          gradYear: "2028",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/debarshisen/",
        },
        {
          name: "Jasper Heymann",
          major: "Mechanical Engineering",
          gradYear: "2027",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/jasper-heymann/",
        },
        {
          name: "Jay Sen",
          major: "Mechanical Engineering",
          gradYear: "2029",
          photo: "/Headshots/jay.jpg",
          linkedin: "https://www.linkedin.com/in/jaymsen/",
        },
        {
          name: 'Hung Xuan "Simon" Ngo',
          major: "Electrical Engineering",
          gradYear: "2029",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/hung-xuan-ngo-181940388/",
        },
        {
          name: "Kimberly Pascual",
          major: "Mechanical Engineering",
          gradYear: "2029",
          photo: "/Headshots/driver.jpg",
        },
        {
          name: "Matthew Riccobono",
          major: "Mechanical Engineering",
          gradYear: "2027",
          photo: "/Headshots/matt r.jpg",
          linkedin: "https://www.linkedin.com/in/matthew-riccobono-645a20313/",
          photoScale: 1.3,
        },
        {
          name: "Matthew Sgritta",
          major: "Mechanical Engineering",
          gradYear: "2027",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/matthew-sgritta-5454aa238/",
        },
        {
          name: "Maya Gorse",
          major: "Mechanical Engineering / Design Innovation and Society",
          gradYear: "2027",
          photo: "/Headshots/maya.jpg",
          linkedin: "https://www.linkedin.com/in/maya-gorse/",
        },
        {
          name: "Satvik Mathur",
          major: "Mechanical Engineering",
          gradYear: "2028",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/satvik-mathur/",
        },
        {
          name: "Louisa Ersenkal",
          major: "Mechanical Engineering",
          gradYear: "2028",
          photo: "/Headshots/driver.jpg",
          linkedin: "https://www.linkedin.com/in/louisa-ersenkal/",
        },
      ],
    },
  ] satisfies Subteam[],

  cars: [
    {
      id: "current-car",
      name: "Add Car Name (e.g. RM26)",
      year: "2026",
      category: "Formula SAE Electric",
      tagline: "Add a one-line description of this year's car.",
      photo: "/rollout.jpg",
      heroPhoto: "/Gallery/cardriving2.jpg",
      specs: [
        { label: "Powertrain", value: "—" },
        { label: "Horsepower", value: "—" },
        { label: "Weight", value: "—" },
        { label: "0–60 mph", value: "—" },
        { label: "Chassis", value: "—" },
      ],
      features: [
        "Add a notable design feature",
        "Add a notable design feature",
        "Add a notable design feature",
      ],
      systems: [
        {
          name: "Chassis",
          description:
            "A tubular space-frame chassis engineered for stiffness and driver safety — add this year's construction details (material, wall thickness, torsional rigidity).",
        },
        {
          name: "Suspension & Vehicle Dynamics",
          description:
            "Custom double-wishbone suspension geometry tuned for autocross and skidpad performance — add ride, camber, and damper specifics.",
        },
        {
          name: "Powertrain & Drivetrain",
          description:
            "Electric powertrain delivering power from the motor(s) to the wheels — add motor, inverter, and gear reduction details.",
        },
        {
          name: "Tractive Battery & High Voltage",
          description:
            "Custom-built accumulator and high-voltage system designed to competition safety rules — add pack voltage, capacity, and cell details.",
        },
        {
          name: "Aerodynamics",
          description:
            "Aero package designed for downforce and cooling — add wing, diffuser, and cooling duct details.",
        },
        {
          name: "Electronics & Data",
          description:
            "Low-voltage electronics, sensors, and data acquisition for tuning and diagnostics — add ECU/telemetry details.",
        },
      ] satisfies CarSystem[],
    },
  ] satisfies Car[],

  sponsors: [
    {
      tier: "Title",
      sponsors: [
        { name: "Hondata", logo: "", url: "https://www.hondata.com/" },
        { name: "Dana", logo: "", url: "https://www.dana.com/" },
        { name: "BAE Systems", logo: "", url: "https://www.baesystems.com/" },
        { name: "Markforged", logo: "", url: "https://markforged.com/" },
        { name: "Fearless Racing", logo: "", url: "" },
        { name: "ANSYS", logo: "", url: "https://www.ansys.com/" },
      ],
    },
    {
      tier: "Level 3",
      sponsors: [
        { name: "Ice Cutting Edge Metals", logo: "", url: "" },
        { name: "Rapid Harness", logo: "", url: "" },
        { name: "Griot's Garage", logo: "", url: "https://www.griotsgarage.com/" },
        { name: "Beast Branch Engineering and Manufacturing", logo: "", url: "" },
        { name: "NSH USA", logo: "", url: "" },
        { name: "Noel's CNC Manufacturing", logo: "", url: "" },
        { name: "Kaman Composites", logo: "", url: "https://www.kaman.com/" },
        { name: "Saint-Gobain", logo: "", url: "https://www.saint-gobain.com/" },
        { name: "Tektronix", logo: "", url: "https://www.tek.com/" },
        { name: "TI64 Titanium", logo: "", url: "" },
        { name: "XCA Advanced Composites Design and Manufacturing", logo: "", url: "" },
        { name: "Boeing", logo: "", url: "https://www.boeing.com/" },
        { name: "Atlas Copco", logo: "", url: "https://www.atlascopco.com/" },
      ],
    },
    {
      tier: "Level 2",
      sponsors: [
        { name: "Ducommun", logo: "", url: "https://www.ducommun.com/" },
        { name: "AMGIO", logo: "", url: "" },
        { name: "Acronis", logo: "", url: "https://www.acronis.com/" },
        { name: "Axcel", logo: "", url: "" },
        { name: "Oakwood Bible Church", logo: "", url: "" },
        { name: "Lockheed Martin", logo: "", url: "https://www.lockheedmartin.com/" },
        { name: "Cartesian", logo: "", url: "" },
        { name: "Holley", logo: "", url: "https://www.holley.com/" },
        { name: "PMC Race Cars", logo: "", url: "" },
        { name: "Powder Tech Custom Powder-Coated Finishes", logo: "", url: "" },
        { name: "RBC Bearings", logo: "", url: "https://www.rbcbearings.com/" },
        { name: "Sandvik Coromant", logo: "", url: "https://www.sandvik.coromant.com/" },
        { name: "Gene Haas Foundation", logo: "", url: "https://www.genehaasfoundation.org/" },
        { name: "SimScale", logo: "", url: "https://www.simscale.com/" },
        { name: "Simpson", logo: "", url: "https://www.simpsonraceproducts.com/" },
        { name: "Siemens", logo: "", url: "https://www.siemens.com/" },
        { name: "SKF", logo: "", url: "https://www.skf.com/" },
        { name: "SOLIDWORKS", logo: "", url: "https://www.solidworks.com/" },
        { name: "VI-Grade", logo: "", url: "https://www.vi-grade.com/" },
        { name: "About Energy", logo: "", url: "" },
      ],
    },
    {
      tier: "Level 1",
      sponsors: [
        { name: "Rock Krawler Suspension", logo: "", url: "https://www.rockkrawler.com/" },
        { name: "ProSpeed RS683", logo: "", url: "" },
        { name: "Tilton", logo: "", url: "https://www.tiltonracing.com/" },
        { name: "HGSI Harold G. Schaevitz Industries", logo: "", url: "" },
      ],
    },
  ] satisfies SponsorTier[],

  gallery: [
    { caption: "Car #86 on the RPI quad", photo: "/Gallery/car.jpg", width: 4897, height: 3266 },
    {
      caption: "Car #86 with the team's competition awards",
      photo: "/Gallery/car1.jpg",
      width: 8192,
      height: 5464,
    },
    {
      caption: "Autocross in the rain",
      photo: "/Gallery/cardriving.JPG",
      width: 6000,
      height: 4000,
    },
    { caption: "On course", photo: "/Gallery/cardriving1.JPG", width: 6000, height: 4000 },
    { caption: "On track", photo: "/Gallery/cardriving2.jpg", width: 4892, height: 3270 },
    {
      caption: "Taking the corner",
      photo: "/Gallery/cardriving3.jpg",
      width: 2048,
      height: 1366,
    },
    { caption: "Trackside", photo: "/Gallery/DSC00834.JPG", width: 6000, height: 4000 },
    { caption: "Competition weekend", photo: "/Gallery/DSC01951.JPG", width: 6000, height: 4000 },
    { caption: "In the paddock", photo: "/Gallery/DSC02166.JPG", width: 6000, height: 4000 },
    { caption: "Pit lane", photo: "/Gallery/DSC02384.JPG", width: 6000, height: 4000 },
    { caption: "Tech inspection", photo: "/Gallery/DSC03563.JPG", width: 6000, height: 4000 },
    { caption: "Race day", photo: "/Gallery/DSC03778.JPG", width: 6000, height: 4000 },
    { caption: "The team at the track", photo: "/Gallery/DSC04827.JPG", width: 6000, height: 4000 },
    { caption: "Getting ready to run", photo: "/Gallery/DSC04831.JPG", width: 6000, height: 4000 },
    { caption: "On the grid", photo: "/Gallery/DSC04867.JPG", width: 6000, height: 4000 },
    { caption: "Final checks", photo: "/Gallery/FD1A4349.jpg", width: 2048, height: 1366 },
    {
      caption: "Pre-run safety check",
      photo: "/Gallery/FD1A4452.jpg",
      width: 1366,
      height: 2048,
    },
    { caption: "Setup in the paddock", photo: "/Gallery/FD1A4492.jpg", width: 2048, height: 1365 },
    { caption: "Rolling to the grid", photo: "/Gallery/FD1A6523.jpg", width: 1366, height: 2048 },
    {
      caption: "Buckled in and ready to drive",
      photo: "/Gallery/FD1A6543.jpg",
      width: 4897,
      height: 3266,
    },
    { caption: "Working in the pits", photo: "/Gallery/FD1A6998.jpg", width: 2048, height: 1366 },
    {
      caption: "Showcasing the car at an expo",
      photo: "/Gallery/FD1A9847.jpg",
      width: 2048,
      height: 1366,
    },
    { caption: "Under the lights", photo: "/Gallery/IMG_0289.PNG", width: 2001, height: 3000 },
    {
      caption: "Pre-run checks in the paddock",
      photo: "/Gallery/PHO00053.JPG",
      width: 4000,
      height: 2250,
    },
    { caption: "The team in the paddock", photo: "/Gallery/team.jpg", width: 2048, height: 1366 },
    {
      caption: "Celebrating after tech inspection",
      photo: "/Gallery/team2.jpg",
      width: 4897,
      height: 3266,
    },
  ] satisfies GalleryItem[],

  join: {
    intro:
      "Rensselaer Motorsport is always looking for motivated students — no experience required. Whether your interest is engineering, business, or manufacturing, there's a place for you on the team.",
    steps: [
      {
        title: "Come to a Meeting",
        description:
          "Join us at a weekly Tuesday engineering meeting, Wednesday general meeting, or stop by the shop on a Friday evening — see the full schedule on our Contact page.",
      },
      {
        title: "Pick a Subteam",
        description: "Add a short description of how new members choose a subteam.",
      },
      {
        title: "Start Building",
        description: "Add a short description of how new members get hands-on right away.",
      },
    ] satisfies JoinStep[],
    requirements: [
      "Open to all majors and class years",
      "No prior experience necessary",
      "Willingness to learn and get hands-on",
    ],
    contact: {
      email: "admin@rensselaermotorsport.com",
    },
  },
};

export type Site = typeof site;
