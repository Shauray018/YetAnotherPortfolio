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
    "I'm currently a 3rd-year student with a passion for both tech and entrepreneurship. Over the years, I've participated in numerous hackathons, honing my skills and learning from real-world challenges. I've also started two startups — my first was crypto-based, and the second, which I'm currently working on, is a SaaS venture.",
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
    { href: "/", icon: NotebookIcon, label: "" },
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
        "helped in building a SaaS website for one of our clients at BrightHead IT",
    },
  ],
  education: [
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
      title: "Warpify",
      href: "https://www.warpify.co/",
      dates: "Dec 2024 - Present",
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
      title: "Cheddar",
      href: "https://www.cheddr.fun/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Cheddar is India's first UPI-integrated meme coin trading platform and launchpad built on Solana. ",
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
      image: "/notPayPal.png",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
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
