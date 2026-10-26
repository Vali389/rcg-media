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
};

export const services: Service[] = [
  {
    id: "business-branding",
    icon: Palette,
    title: "Business Branding & Development",
    category: "BRAND IDENTITY & POSITIONING",
    tagline: "Build a professional identity. Communicate your value.",
    description:
      "We help businesses build a professional identity and communicate their value effectively through end-to-end positioning, visual design, and creative launch strategies.",
    image: serviceBranding,
    items: [
      "Brand Identity",
      "Logo Design",
      "Company Profiles",
      "Packaging & Print",
      "Personal Branding",
      "Launch Strategy",
    ],
  },
  {
    id: "website-design",
    icon: MonitorSmartphone,
    title: "Website Design & Digital Presence",
    category: "WEB, MOBILE & DIGITAL PRESENCE",
    tagline: "Essential credibility for modern business.",
    description:
      "A professional digital presence is essential for building credibility and connecting with potential customers across web, mobile, and social platforms.",
    image: serviceWeb,
    items: [
      "Website Design",
      "Landing Pages",
      "UI/UX Direction",
      "Content Planning",
      "Profile Setup",
      "SEO Optimization",
    ],
  },
  {
    id: "content-video-production",
    icon: Video,
    title: "A–Z Content & Video Production",
    category: "CINEMA VIDEO & COMMERCIAL AD FILMS",
    tagline: "Transform ideas into engaging visual stories.",
    description:
      "From planning and scripting to shooting and editing, our focus is on creating content that communicates your brand message clearly, cinematically, and professionally.",
    image: serviceVideo,
    items: [
      "Viral Reels & Shorts",
      "Product Promos",
      "Corporate Films",
      "Creative Ad Films",
      "Scriptwriting",
      "Color & Post-Production",
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital & Social Media Marketing",
    category: "PERFORMANCE MARKETING & SOCIAL GROWTH",
    tagline: "Reach the right audience. Build trust.",
    description:
      "We support businesses in strengthening their online presence with data-backed campaigns, content calendars, and targeted promotional strategies.",
    image: serviceMarketing,
    items: [
      "Campaign Planning",
      "Meta & Instagram Ads",
      "YouTube Marketing",
      "Content Calendars",
      "Audience Growth",
      "ROI Tracking",
    ],
  },
  {
    id: "influencer-marketing",
    icon: Users,
    title: "Influencer Marketing & Collaborations",
    category: "CREATOR PARTNERSHIPS & COLLABORATIONS",
    tagline: "Connect with relevant creators and expand your reach.",
    description:
      "Introduce your products and services to new audiences with curated influencer partnerships aligned to your industry, goals, target audience, and budget.",
    image: serviceInfluencer,
    items: [
      "Creator Sourcing",
      "Campaign Briefs",
      "Promotional Reels",
      "Branded Content",
      "Partnership Terms",
      "Performance Reports",
    ],
  },
  {
    id: "celebrity-promotions",
    icon: Star,
    title: "Celebrity Promotions & Collaborations",
    category: "HIGH-IMPACT CELEBRITY ENDORSEMENTS",
    tagline: "High-impact visibility through celebrity-led content.",
    description:
      "Coordinate promotional and collaboration opportunities that connect brands with wider audiences through celebrity videos, endorsements, podcasts, and interviews.",
    image: serviceCelebrity,
    items: [
      "Celebrity Videos",
      "Brand Endorsements",
      "Podcast Appearances",
      "Launch Events",
      "Press Coordination",
      "Media Rights",
    ],
  },
  {
    id: "podcast-studio",
    icon: Mic,
    title: "Podcast Production & Studio Services",
    category: "BODUPPAL, HYDERABAD STUDIO FACILITY",
    tagline: "Professional studio in Boduppal, Hyderabad.",
    description:
      "A dedicated, fully equipped studio in Boduppal, Hyderabad with multi-cam 4K recording, Shure SM7B broadcast mics, and acoustic soundproofing for podcasts and interviews.",
    image: servicePodcast,
    items: [
      "Multi-Cam 4K Shoot",
      "Broadcast Mics",
      "Acoustic Wood Studio",
      "Founder Interviews",
      "Podcast Editing",
      "Social Cutdowns",
    ],
  },
  {
    id: "business-promotions",
    icon: TrendingUp,
    title: "Business Promotions & Advertising",
    category: "CREATIVE ADVERTISING & LOCAL PROMOTIONS",
    tagline: "Communicate strengths and convert customers.",
    description:
      "Creative advertising and promotional activities designed to help local and regional businesses communicate their strengths and create customer connections.",
    image: serviceAds,
    items: [
      "Brand Launch Ads",
      "Local Business Promos",
      "Billboards & Creatives",
      "Digital Ads Rollout",
      "Awareness Campaigns",
      "Conversion Funnels",
    ],
  },
  {
    id: "music-creative-production",
    icon: Music,
    title: "Music & Creative Project Production",
    category: "SONG PRODUCTION & CINEMATIC MUSIC VIDEOS",
    tagline: "Storytelling, rhythm, and visual artistry.",
    description:
      "Drawing from extensive experience producing songs and creative videos, we bring production planning, musical aesthetics, and cinematic storytelling to every project.",
    image: serviceMusic,
    items: [
      "Song Audio Production",
      "Music Video Shoots",
      "Artist Brand Launch",
      "Cinematic Storytelling",
      "Audio Mixing & Master",
      "Streaming Rollout",
    ],
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
  title:
    "Entrepreneur | Business Development Professional | Media Producer | Digital Marketing & Brand Growth Strategist | Women Empowerment Advocate",
  tagline: "Building Brands. Creating Opportunities. Empowering Women Through Digital Media.",
  image: anushaFounder,
  bio: [
    "I am Anusha Sathapathy, a business development professional, media entrepreneur, content producer, and women empowerment advocate with a passion for business growth, creative media, digital marketing, and community development.",
    "My professional journey combines business analysis, business development (BDM), creative production, digital content, marketing, and entrepreneurship. Working with companies in Business Analysis and Business Development Management has equipped me with a deep understanding of operations, market opportunities, customer engagement, brand positioning, and growth strategies.",
    "My entrepreneurial vision is to bring business strategy and creative media together to help businesses establish their identity, reach the right audience, build trust, and grow their presence in an increasingly digital world. This vision led to the establishment of RCG Media.",
  ],
  empowerment: {
    title: "WayTo Women Walk",
    subtitle: "My Women Empowerment Initiative",
    image: womenEmpowerment,
    role: "Digital Mahila Development Officer",
    paragraphs: [
      "Through WayTo Women Walk, I focus on inspirational content, women's development, motivation, business awareness, and opportunities for women to express themselves and build their identities.",
      "I believe that women have enormous potential to lead, create businesses, develop new skills, and become financially independent when they have access to knowledge, opportunities, visibility, and supportive communities.",
      "As a Digital Mahila Development Officer, I actively participate in initiatives focused on women's development and community building, ensuring that inspiration is combined with practical opportunities for sustainable growth.",
    ],
  },
  creativeSide: {
    title: "Classical Dance & Creative Roots",
    description:
      "My passion for creativity began in childhood with classical dance. That early foundation evolved into a deeper love for music, performance, video production, storytelling, and digital content. Today, this unique blend of artistic sensitivity and analytical business acumen guides every production at RCG Media.",
  },
  location: {
    city: "Hyderabad",
    area: "Boduppal",
    fullAddress: "RCG Media Studio, Boduppal, Hyderabad, Telangana",
  },
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

export const stats = [
  { value: "9+", label: "Integrated Services" },
  { value: "120+", label: "Projects Delivered" },
  { value: "85+", label: "Happy Clients" },
  { value: "1 Studio", label: "Boduppal, Hyderabad" },
];

export const whyChooseUs = [
  {
    title: "A–Z Under One Roof",
    description:
      "From branding, websites, reels, and ad films to influencer marketing, celebrity promos, and podcast studio recording.",
  },
  {
    title: "Business Strategy First",
    description:
      "Led by a business development professional & analyst, ensuring creative media translates into real customer trust and revenue.",
  },
  {
    title: "Dedicated Studio in Hyderabad",
    description:
      "State-of-the-art podcast and video shoot studio located in Boduppal, Hyderabad with cinema cameras, mics, and lighting.",
  },
  {
    title: "Empowerment & Community",
    description:
      "Committed to supporting startups, personal brands, and women entrepreneurs through the WayTo Women Walk initiative.",
  },
];

export const projects: Project[] = [
  {
    title: "Studio Podcast & Founder Interviews",
    category: "Podcast & Studio",
    description:
      "Full episode recording, multi-cam video shoot, audio mixing, and viral short-form reels produced at our Boduppal, Hyderabad studio.",
    image: hero3,
    tags: ["Podcast", "Boduppal Studio", "Reels", "Multi-Cam"],
  },
  {
    title: "Golden Hour — Fashion Label Brand Identity",
    category: "Branding & Design",
    description:
      "A complete brand identity system — logo, packaging, visiting cards and social templates — for a boutique fashion house.",
    image: project1,
    tags: ["Logo Design", "Brand Identity", "Print"],
  },
  {
    title: "Independent Song & Music Video Production",
    category: "Music & Creative Production",
    description:
      "Song recording, music arrangement, visual concept, and a cinematic music video produced end-to-end for an independent artist launch.",
    image: project2,
    tags: ["Song Production", "Music Video", "Streaming"],
  },
  {
    title: "Celebrity Brand Endorsement Campaign",
    category: "Celebrity & Collaborations",
    description:
      "Celebrity promotional video, brand endorsement coordination, press coverage, and social media campaign rollout.",
    image: project3,
    tags: ["Celebrity Management", "Endorsements", "Ad Film"],
  },
  {
    title: "WayTo Women Walk — Digital Series",
    category: "Women Empowerment",
    description:
      "Inspirational storytelling, community spotlight reels, and business awareness workshops empowering women entrepreneurs.",
    image: womenEmpowerment,
    tags: ["WayTo Women Walk", "Women In Business", "Reels"],
  },
  {
    title: "Commercial Ad Film & Digital Campaign",
    category: "Video Production",
    description:
      "A 60-second cinema-grade ad film — scripting, casting, shooting, editing, and paid social rollout across YouTube and Meta.",
    image: hero2,
    tags: ["Ad Film", "Direction", "Video Production"],
  },
];
