import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shauray Dhingra",
  initials: "SD",
  url: "https://dillion.io",
  location: "Chandigarh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer diving into web3 and startups. Building the future, one project at a time.",
  summary:
    "I’m a 4th-year student who likes building stuff. I take part in hackathons for fun and work on different tech projects. Recently, I’ve been exploring Rust and building smart contracts on solana with it.",
  avatarUrl: "/shauray.png.jpeg",
  skills: [
    "React",
    "Next.js",
    "React Native",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blackjack", icon: NotebookIcon, label: "BlackJack" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shauray018",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shauraydhingra",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bright Head IT",
      href: "https://brightheadit.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack intern",
      logoUrl: "/atomic.png",
      start: "May 2024",
      end: "July 2024",
      description:
        "Helped in building a SaaS website for one of our clients at BrightHead IT.",
    },
    {
      company: "Catoff",
      href: "https://www.catoff.xyz/",
      badges: [],
      location: "Remote",
      title: "Gaming API/ZKfetch Developer Intern",
      logoUrl: "data:image/png;base64,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",
      start: "Jan 2025",
      end: "March 2025",
      description:
        "Developed web scrappers and integrated external apis to fetch data for the Catoff Gaming Dashboard.",
    },
    {
      company: "BoardCerts",
      href: "https://www.boardcerts.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl:"/BoardCertsLogo.png",
      start: "May 2025",
      end: "July 2025",
      description:
      "BoardCerts is a US-based EdTech startup where I worked as a contract-based Full Stack Developer with primary ownership of the frontend. I led frontend integration efforts, collaborated closely with backend engineers to design scalable and efficient APIs, and translated product requirements into polished, reusable UI components. The role involved frequent technical discussions, architectural decisions, and delivering production-ready features in a fast-paced startup environment.",
    },
  ],
  education: [
  {
    school: "Rektoff × Solana Rust Security Bootcamp",
    href: "https://rektoff.xyz/bootcamp",
    degree: "Cohort #4 — Solana Smart Contract Security in Rust (1 of 125 selected from 4000+ applicants)",
    logoUrl: "/rektoff.png", // add their logo if you have it
    start: "March 2026",
    end: "Present",
  },
  {
    school: "Punjab Engineering College",
    href: "https://pec.ac.in/",
    degree: "Bachelor's of Technology",
    logoUrl: "/pec.jpg",
    start: "2022",
    end: "2026",
  },
],
  projects: [
    {
      title: "Groovy-UI",
      href: "https://groovy-ui.vercel.app/",
      dates: "Dec-2025 - present",
      active: true,
      description:
        "An open-source React Native UI library for Expo apps featuring fancy, animated components crafted and maintained by the community.",
      technologies: [
        "React Native",
        "Reanimated",
        "Expo",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://groovy-ui.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shauray018/groovy-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/groovy-ui.png",
      video: "",
    },
    
    {
      title: "Warpify",
      href: "https://www.warpify.co/",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Our system ensures rapid, scalable solutions for outbound teams and sales-driven companies like Growth Engine X to optimize their outreach efforts from day one. ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.warpify.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/warpify.mp4",
    },
    {
      title: "Solana Lottery DApp",
      href: "https://solana-lottery-dapp.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "Built a Solana smart contract using Anchor framework in Rust for a decentralized lottery system. Implemented secure ticket purchase, random winner selection and prize distribution.",
      technologies: [
        "Rust",
        "Anchor",
        "Solana",
        "Next.js",
        "Typescript",
        "Daisy UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://solana-lottery-dapp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/SolanaDapp.png",
      video: "",
    },
    {
      title: "Cheddar",
      href: "https://cheddar-app.vercel.app/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Cheddar is India's first UPI-integrated meme coin trading platform and launchpad built on Solana. I was the main frontend developer and helped in building the entire platform.",
      technologies: [
        "React Native",
        "Typescript",
        "Next.js",
        "supabase",
        "Tamagui",
        "Solana",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.cheddr.fun/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/CheddarHQ/CheddarV2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Cheddr.mp4",
    },
    {
      title: "Medium Clone",
      href: "https://github.com/Shauray018/Medium_clone?tab=readme-ov-file",
      dates: "June 2024",
      active: true,
      description:
        "Developed a Medium clone with rich text editing, responsive design, serverless architecture. Implemented Prisma Accelerate for database optimization and secure user authentication.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Tiptap",
        "CloudflareWorkers",
        "Hono",
        "PostgreSQL",
        "Prisma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shauray018/Medium_clone/blob/main/images/Bubble%20menu.png",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/medium.png",
      video: "",
    },
    {
      title: "PayPal clone",
      href: "",
      dates: "July 2024",
      active: false,
      description:
        "Developed a PayPal clone with a monorepo and fake bank backend to make it seem like it's communicating with bank apis but it's not cuz it's not possible.",
      technologies: [
        "Next.js",
        "TurboRepo",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shauray018/Simple-digital-Wallet?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/notPaypal.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Colosseum Radar Hackathon",
      dates: "September 2nd - October 8th, 2024",
      location: "Remote",
      description:
        "Developed a mobile application which help people buy solana based meme coins thorugh upi",
      image:
        "/RadarLogotoo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          href: "https://www.colosseum.org/radar",
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />, // Using Font Awesome as an example
        },
      ],
    },
    {
      title: "Hack2Hatch",
      dates: "September 14th - 16th, 2018",
      location: "PEC, Chandigarh",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          href: "https://drive.google.com/file/d/1X0e9EMs2CcQKc6VPKSN-PKPPaHTy7PCx/view",
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />, // Using Font Awesome as an example
        },
      ],
    },
    {
      title: "100xDevs Solana Mini Hackathon",
      dates: "October 23rd - 30th, 2024",
      location: "Remote",
      description:
        "Developed a mobile application which is a social media for crypto heads and token communities to help them sell their own crypto.",
      icon: "public",
      image: "/mini.png",
      links: [],
    },
    {
      title: "Stgi Hackathon",
      dates: "September 15th - 17th, 2017",
      location: "Pec, Chandigarh",
      description:
        "Developed a kyc platform for other comapanies which see things like liveliness by using some ai apis to do so. ",
      image: "/stgi.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "September 26th - 30th, 2017",
      location: "Remote",
      description:
        "Solved a crucial problem that government of india was havng about tracing cryto payments across block chains.",
      image: "/sih.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
  ],
} as const;
