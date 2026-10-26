import {
  Palette,
  MonitorSmartphone,
  Video,
  Megaphone,
  Users,
  Star,
  Mic,
  TrendingUp,
  Music,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceVideo from "@/assets/service-video.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceInfluencer from "@/assets/service-influencer.jpg";
import serviceCelebrity from "@/assets/service-celebrity.jpg";
import servicePodcast from "@/assets/service-podcast.jpg";
import serviceAds from "@/assets/service-ads.jpg";
import serviceMusic from "@/assets/service-music.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import anushaFounder from "@/assets/anusha-founder.jpg";
import womenEmpowerment from "@/assets/women-empowerment.jpg";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  items: string[];
  conclusion?: string;
};

export const services: Service[] = [
  {
    id: "business-branding",
    icon: Palette,
    title: "Business Branding & Brand Development",
    category: "BRAND IDENTITY & POSITIONING",
    tagline: "Build a professional identity. Communicate your value.",
    description:
      "We help businesses build a professional identity and communicate their value effectively through strategic market positioning, visual systems, and launch campaigns.",
    image: serviceBranding,
    items: [
      "Brand identity and positioning",
      "Logo design and creative branding materials",
      "Business profiles and company presentations",
      "Brand communication and promotional concepts",
      "Personal branding for entrepreneurs and professionals",
      "Creative strategies for new business launches",
    ],
    conclusion:
      "By defining your unique market value and creating consistent, high-impact visual touchpoints, we ensure your brand commands attention and builds lasting customer trust from day one.",
  },
  {
    id: "website-design",
    icon: MonitorSmartphone,
    title: "Website Design & Mobile App Development",
    category: "WEB, MOBILE & DIGITAL PRESENCE",
    tagline: "Essential credibility and seamless user experience across all devices.",
    description:
      "A professional digital presence is essential for building credibility and connecting with potential customers across web and mobile platforms.",
    image: serviceWeb,
    items: [
      "Business website design and development coordination",
      "Mobile-first responsive web apps & portal development",
      "Website content planning and brand messaging",
      "Landing pages for business promotions and paid campaigns",
      "Website design concepts and creative UI/UX direction",
      "Social media profile setup and optimization support",
      "Digital brand visibility & SEO optimization solutions",
    ],
    conclusion:
      "From high-converting landing pages to comprehensive corporate web platforms and mobile applications, we ensure your brand delivers a seamless, credible digital experience that turns visitors into paying customers.",
  },
  {
    id: "content-video-production",
    icon: Video,
    title: "A–Z Content Creation & Video Production",
    category: "CINEMA VIDEO & COMMERCIAL AD FILMS",
    tagline: "Transform ideas into engaging visual stories.",
    description:
      "Content plays a vital role in modern marketing. RCG Media helps businesses transform their ideas, products, and services into engaging visual stories.",
    image: serviceVideo,
    items: [
      "Professional reels and short-form videos",
      "Business and product promotional videos",
      "Corporate videos and brand films",
      "Creative advertising videos and ad films",
      "Scriptwriting and content concept development",
      "Video shoots, editing, and post-production",
      "Social media content planning and creation",
      "Interviews, storytelling videos, and campaign content",
    ],
    conclusion:
      "From planning and scripting to shooting and editing, our focus is on creating content that communicates your brand message clearly and professionally.",
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing & Ads Agency (Meta & Google)",
    category: "ADS AGENCY & PERFORMANCE MARKETING (MAIN REVENUE ENGINE)",
    tagline: "Reach the right audience, generate qualified leads, and maximize ROAS.",
    description:
      "RCG Media supports businesses in strengthening their online presence and connecting with their target audiences through data-backed performance advertising across Meta, Google, and social platforms.",
    image: serviceMarketing,
    items: [
      "Digital marketing strategy and campaign planning",
      "Meta Ads (Facebook & Instagram) performance campaigns & lead funnels",
      "Google Ads & YouTube marketing management",
      "Brand awareness and customer acquisition campaigns",
      "Content calendars and creative campaign development",
      "Digital advertising campaign coordination & ROAS optimization",
      "Audience engagement and online visibility initiatives",
      "Marketing support tailored to business growth requirements",
    ],
    conclusion:
      "Our approach focuses on understanding the business, identifying its target audience, and deploying targeted Meta and Google ad strategies that turn promotional spend into measurable customer revenue.",
  },
  {
    id: "influencer-marketing",
    icon: Users,
    title: "Influencer Marketing & Brand Collaborations",
    category: "CREATOR PARTNERSHIPS & COLLABORATIONS",
    tagline: "Connect with relevant creators and expand your reach.",
    description:
      "The right influencer collaboration can help a brand introduce its products and services to new audiences. Through RCG Media, businesses can explore influencer marketing opportunities based on their industry, campaign objectives, target audience, and budget.",
    image: serviceInfluencer,
    items: [
      "Influencer marketing campaigns tailored to brand goals",
      "Brand and creator collaborations across niches",
      "Product and service promotions through verified influencers",
      "Promotional reels and branded content creation",
      "Influencer campaign planning and coordination",
      "Creator partnership opportunities & outreach",
      "Campaign content production and promotional support",
    ],
    conclusion:
      "Our objective is to connect brands with relevant creators and develop collaborations that align with their marketing goals, subject to availability and mutually agreed terms.",
  },
  {
    id: "celebrity-promotions",
    icon: Star,
    title: "Celebrity Promotions & Celebrity Collaborations",
    category: "HIGH-IMPACT CELEBRITY ENDORSEMENTS",
    tagline: "High-impact visibility through celebrity-led content.",
    description:
      "For brands looking to increase visibility through celebrity-led content, RCG Media can coordinate suitable promotional and collaboration opportunities.",
    image: serviceCelebrity,
    items: [
      "Celebrity promotional videos & shoutouts",
      "Celebrity brand endorsements and campaign coordination",
      "Celebrity interviews and video collaborations",
      "Celebrity podcast appearances & studio features",
      "Product and business promotional campaigns",
      "Celebrity-led branded content and distribution",
      "Promotional video production and editing",
      "Artist and brand collaboration coordination",
    ],
    conclusion:
      "From identifying the campaign concept to coordinating production and promotional content, we work towards creating opportunities that connect brands with wider audiences. Celebrity participation is subject to availability, approvals, and agreed commercial terms.",
  },
  {
    id: "podcast-studio",
    icon: Mic,
    title: "Podcast Production & Professional Studio Services",
    category: "BODUPPAL, HYDERABAD STUDIO FACILITY",
    tagline: "Professional studio in Boduppal, Hyderabad.",
    description:
      "RCG Media provides a professional content creation environment in Boduppal, Hyderabad, for entrepreneurs, businesses, professionals, and creators.",
    image: servicePodcast,
    items: [
      "Professional podcast recording with Shure SM7B broadcast mics",
      "Business interviews and expert conversations",
      "Video podcasts and multi-camera 4K shoot setup",
      "Camera, microphone, acoustic wood treatment, and lighting facilities",
      "Reels and short-video recording for personal branding",
      "Podcast editing and video post-production",
      "Promotional clips for social media rollout",
      "Personal branding content production",
    ],
    conclusion:
      "Whether you want to launch a podcast, share your entrepreneurial journey, interview industry experts, or build your personal brand, RCG Media helps bring your ideas to life through professional media production.",
  },
  {
    id: "business-promotions",
    icon: TrendingUp,
    title: "Business Promotions & Advertising Agency Solutions",
    category: "COMMERCIAL ADVERTISING & GROWTH AGENCY",
    tagline: "Communicate strengths, capture local market share, and convert customers.",
    description:
      "We help businesses communicate their offerings through creative advertising and promotional activities. As an advertising agency, our primary focus is helping businesses scale through high-conversion Meta Ads, Google search campaigns, and local promotions.",
    image: serviceAds,
    items: [
      "Business promotional campaigns & ad agency strategy",
      "Product and service advertising across digital channels",
      "Local business promotions and footfall generation",
      "Brand launch videos and creative commercial advertisements",
      "Promotional reels and high-converting video ads",
      "Digital campaign coordination on Meta & Google",
      "Influencer-led business promotions & customer acquisition",
      "Marketing content for customer awareness and conversion",
    ],
    conclusion:
      "Our goal is to help businesses communicate their strengths, improve visibility, and create dependable opportunities to connect with potential customers and grow their bottom line.",
  },
  {
    id: "music-creative-production",
    icon: Music,
    title: "Music & Creative Project Production",
    category: "SONG PRODUCTION & CINEMATIC MUSIC VIDEOS",
    tagline: "Storytelling, rhythm, and visual artistry.",
    description:
      "Alongside business and digital media projects, Anusha Sathapathy has been actively involved in producing songs and creative video projects. These experiences have strengthened our expertise in production planning, creative coordination, visual storytelling, and promotional distribution.",
    image: serviceMusic,
    items: [
      "Song audio production and recording coordination",
      "Cinematic music video shoots and directorial planning",
      "Artist brand launch and visual identity",
      "Release and distribution via GalGal Music (@galgalmusic16)",
      "Women empowerment anthems (e.g. Mahila Mahila Maharanive)",
      "Regional folk and festive song productions",
      "End-to-end post-production, color grading & audio mastering",
    ],
    conclusion:
      "Through RCG Media, we bring the same creative thinking and production-oriented approach to business videos, advertisements, brand campaigns, and creative music releases.",
  },
];

export const processSteps = [
  {
    step: "01",
    phase: "UNDERSTAND",
    title: "Consultation & Discovery",
    description:
      "We understand your business goals, target audience, competitive landscape, and regulatory/market opportunities through business analysis.",
  },
  {
    step: "02",
    phase: "PLAN & STRATEGIZE",
    title: "Brand Strategy & Concept",
    description:
      "Detailed brand positioning, scripting, content calendars, visual design guidelines, and campaign plans approved before production.",
  },
  {
    step: "03",
    phase: "PRODUCE & CREATE",
    title: "Cinema-Grade Production",
    description:
      "Multi-cam 4K shooting, podcast recording at our Boduppal, Hyderabad studio, web development, and professional post-production.",
  },
  {
    step: "04",
    phase: "DELIVER & SCALE",
    title: "Multi-Channel Rollout",
    description:
      "Coordinated launch across digital channels, influencer networks, celebrity promos, and paid media with transparent reporting.",
  },
];

export const founderInfo = {
  name: "Anusha Sathapathy",
  title: "Founder & Creative Director",
  tagline:
    "Entrepreneur | Business Development Professional | Media Producer | Digital Marketing & Brand Growth Strategist | Women Empowerment Advocate",
  bio: [
    "I am Anusha Sathapathy, a business development professional, media entrepreneur, content producer, and women empowerment advocate with a passion for business growth, creative media, digital marketing, and community development.",
    "My professional journey combines business analysis, business development (BDM), creative production, digital content, marketing, and entrepreneurship. Working with companies in Business Analysis and Business Development Management has equipped me with a deep understanding of operations, market opportunities, customer engagement, brand positioning, and growth strategies.",
    "My entrepreneurial vision is to bring business strategy and creative media together to help businesses establish their identity, reach the right audience, build trust, and grow their presence in an increasingly digital world.",
    "This vision led me to establish RCG Media, a media production, creative advertising, and digital marketing initiative designed to provide businesses and individuals with comprehensive brand-building and promotional solutions under one roof.",
  ],
  empowerment: {
    title: "WayTo Women Walk",
    description:
      "Through WayTo Women Walk, I focus on inspirational content, women's development, motivation, business awareness, and opportunities for women to express themselves and build their identities. As a Digital Mahila Development Officer, I actively advocate for women's financial independence and leadership.",
  },
  creative: {
    title: "Classical Art & Creative Direction",
    description:
      "Beginning in childhood with classical dance, Anusha's love for artistic expression evolved into song production, performance videos, and storytelling that brings rare artistic depth to commercial brand campaigns.",
  },
};

export const stats = [
  { value: "9+", label: "Integrated Services", sublabel: "Under one roof" },
  { value: "500K+", label: "Organic Views Generated", sublabel: "Across campaigns" },
  { value: "4K", label: "Cinema Studio Setup", sublabel: "Boduppal, Hyderabad" },
  { value: "100%", label: "Client Commitment", sublabel: "Transparent delivery" },
];

export const whyUs = [
  {
    title: "A–Z Under One Roof",
    description:
      "Branding, web development, video production, digital marketing, podcasts, influencer collabs, and celebrity endorsements all coordinated by a single partner.",
  },
  {
    title: "Business Strategy First",
    description:
      "Led by a business development professional & analyst, ensuring creative media translates into real customer trust and revenue.",
  },
  {
    title: "Boduppal Studio Facility",
    description:
      "State-of-the-art podcast and video shoot studio located in Boduppal, Hyderabad with cinema cameras, mics, and lighting.",
  },
  {
    title: "Empowerment & Community",
    description:
      "Committed to supporting startups, personal brands, and women entrepreneurs through the WayTo Women Walk initiative.",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  serviceId: string;
  client: string;
  description: string;
  image: string;
  metric?: string;
  deliverables: string[];
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "certigo-web-mobile",
    title: "Certigo Laboratories — Clinical Web & Mobile Portal",
    category: "Web & Mobile Development",
    serviceId: "website-design",
    client: "Healthcare & Diagnostic Lab",
    description:
      "Engineered an enterprise-grade responsive clinical portal with online test bookings, automated WhatsApp result notifications, modern UI/UX design, and mobile-first performance.",
    image: serviceWeb,
    metric: "3.8x Mobile Bookings",
    deliverables: ["Web Application", "Mobile UX", "SEO Optimization", "Booking Engine"],
    tags: ["Web & Mobile", "Healthcare Portal", "Responsive Design", "React"],
    link: "https://certigo-laboratories.vercel.app/",
  },
  {
    id: "ads-agency-meta-google",
    title: "High-ROAS Meta Ads & Google Lead Generation Campaign",
    category: "Ads Agency & Performance",
    serviceId: "digital-marketing",
    client: "Multi-City Retail & D2C Brand",
    description:
      "Designed and executed full-funnel Meta Ads (Instagram & Facebook) and Google Search campaigns with high-converting video creatives, delivering over 2,400 qualified customer leads and 4.8x ROAS.",
    image: serviceMarketing,
    metric: "4.8x ROAS • 2,400+ Leads",
    deliverables: ["Meta Ads Management", "Google Search Ads", "Conversion Funnels", "A/B Testing"],
    tags: ["Ads Agency", "Meta Ads", "Google Ads", "Performance Marketing"],
  },
  {
    id: "golden-hour-branding",
    title: "Golden Hour — Luxury Fashion Label Brand Identity",
    category: "Branding & Identity",
    serviceId: "business-branding",
    client: "Boutique Fashion & Lifestyle",
    description:
      "Crafted an end-to-end visual positioning system — bespoke typography, trademark logo design, sustainable luxury packaging, brand guidelines, and corporate profile.",
    image: project1,
    metric: "Complete Rebrand",
    deliverables: ["Logo Suite", "Packaging Design", "Brand Guidelines", "Company Presentation"],
    tags: ["Branding", "Logo Design", "Packaging", "Positioning"],
  },
  {
    id: "commercial-ad-film",
    title: "Cinema-Grade Commercial Ad Film & Brand Anthem",
    category: "Commercial Ad Films",
    serviceId: "content-video-production",
    client: "National Brand Campaign",
    description:
      "A 60-second cinema-grade commercial ad film — full concept scripting, multi-location 4K cinema shoot, original scoring, professional color grading, and viral digital rollout.",
    image: hero2,
    metric: "500K+ Organic Views",
    deliverables: ["Creative Scripting", "4K Cinema Shoot", "Original Music", "Color Grading"],
    tags: ["Video Production", "Ad Film", "Cinema 4K", "Direction"],
    link: "https://youtu.be/H-u0eo9KHGI",
  },
  {
    id: "boduppal-podcast-series",
    title: "Executive Leadership Podcast & Founder Interviews",
    category: "Podcast Studio",
    serviceId: "podcast-studio",
    client: "Tech & Business Leaders Series",
    description:
      "Recorded in our dedicated Boduppal, Hyderabad studio facility with Shure SM7B broadcast microphones, multi-camera 4K direction, acoustic treatment, and 40+ viral social cutdown reels.",
    image: hero3,
    metric: "12 Episodes • 4K Broadcast",
    deliverables: ["Multi-Cam 4K Shoot", "Shure Broadcast Audio", "Reels Editing", "Full Episode Cut"],
    tags: ["Podcast", "Boduppal Studio", "Founder Series", "Reels"],
  },
  {
    id: "celebrity-influencer-collab",
    title: "Celebrity Endorsement & Influencer Launch Campaign",
    category: "Celebrity & Influencer",
    serviceId: "celebrity-promotions",
    client: "Lifestyle Apparel Brand",
    description:
      "Secured and managed top-tier celebrity promotional video shoots, orchestrated 15+ creator collaborations, and rolled out branded reels that dominated social feeds during launch week.",
    image: project3,
    metric: "15+ Creators • 500K+ Reach",
    deliverables: ["Celebrity Management", "Influencer Outreach", "Contract Terms", "Reel Production"],
    tags: ["Celebrity", "Influencer Collab", "Brand Endorsement", "Social Buzz"],
  },
  {
    id: "mahila-mahila-song",
    title: "Mahila Mahila Maharanive — Telugu Women's Anthem",
    category: "Music Productions",
    serviceId: "music-creative-production",
    client: "GalGal Music Official Release",
    description:
      "Produced by Anusha Sathapathy in collaboration with GalGal Music (@galgalmusic16). Featuring vocals by Srikrishna, composed by Anji Pamidi, and lyrics by Raju Nallabelly.",
    image: project2,
    metric: "GalGal Music Release",
    deliverables: ["Audio Production", "Vocal Arrangement", "Music Video Direction", "Channel Release"],
    tags: ["Music Production", "GalGal Music", "Women Anthem", "Telugu Song"],
    link: "https://youtube.com/@galgalmusic16",
  },
  {
    id: "wayto-women-walk",
    title: "WayTo Women Walk — Digital Series & Workshop",
    category: "Women Empowerment",
    serviceId: "women-empowerment",
    client: "Community Empowerment Initiative",
    description:
      "Spearheaded by Anusha Sathapathy as Digital Mahila Development Officer — spotlight reels, entrepreneurial mentoring, and confidence-building workshops for aspiring women founders.",
    image: womenEmpowerment,
    metric: "50+ Women Mentored",
    deliverables: ["Video Series", "Community Workshops", "Mentorship Modules", "Digital Content"],
    tags: ["Women Empowerment", "WayTo Women Walk", "Mentorship", "Community"],
  },
];
