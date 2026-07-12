import { Heading } from "./heading";
import { ProjectCard } from "./project-card";

type SourceType = "website" | "github";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  stack: string[];
  source: {
    type: SourceType;
    href: string;
  }[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "POV",
    description:
      "A modern social media app that lets users create posts and engage by liking and saving content.",
    image: "/pov-show.png",
    stack: [
      "React",
      "Appwrite",
      "React Router",
      "Tanstack Query",
      "Zod",
      "React hook form",
    ],
    source: [
      {
        type: "github",
        href: "https://github.com/tarunnsoni/POV",
      },
    ],
  },
  {
    id: 2,
    name: "TagTrack",
    description:
      "A product price tracker that helps users monitor online products and receive instant email alerts whenever prices decrease, ensuring they never miss a deal.",
    image: "/tagtrack-show.png",
    stack: [
      "NextJS",
      "Shadcn",
      "Supabase",
      "Firecrawl",
      "Nodemailer",
      "Recharts",
    ],
    source: [
      {
        type: "github",
        href: "https://github.com/tarunnsoni/tagtrack",
      },
      {
        type: "website",
        href: "https://tag-track.vercel.app",
      },
    ],
  },
  {
    id: 3,
    description:
      "Nestly is a modern real estate app for exploring and discovering properties with a clean UI, smooth experience",
    image: "/nestly-show.jpeg",
    name: "Nestly",
    stack: [
      "React Native",
      "Expo",
      "Clerk",
      "NativeWind",
      "Zustand",
      "Supabase",
    ],
    source: [
      {
        type: "github",
        href: "https://github.com/tarunnsoni/Nestly",
      },
    ],
  },
  {
    id: 4,
    description:
      "An AI travel planning assistant that generates personalized itineraries and lets users chat with the agent to modify plans, discover places, and get travel recommendations.",
    name: "Wayfarer",
    image: "/wayfarer.png",
    source: [
      {
        type: "github",
        href: "http://github.com/tarunnsoni/Wayfarer",
      },
    ],
    stack: ["Tanstack Start", "Vercel AI-SDK", "Google Gemini"],
  },
] as const;

export const Projects = () => {
  return (
    <div className="">
      <Heading>Projects</Heading>
      <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
