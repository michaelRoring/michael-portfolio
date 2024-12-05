import AnimatePulse from "./components/AnimatePulse";
import BackButton from "./components/atoms/PrimaryButton";
import { Heading } from "./components/atoms/Heading";
import { Subheading } from "./components/atoms/Subheading";
import LineBreak from "./components/LineBreak";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectList } from "../lib/definition";

const Projects = () => {
  const projects: ProjectList[] = [
    {
      index: 1,
      title: `singapore worker's party`,
      link: "https://twp-dev.webflow.io/",
      techStacks: ["webflow"],
      role: "project manager",
      image: `https://i.postimg.cc/6508kZXp/twp.png`,
      description:
        "spearheaded the web development of one of singapore's biggest party website as the project lead, guiding a dynamic team of 3 through a streamlined webflow-powered creation process. i managed to wrangle web design faster than a politician manages talking points - and with significantly less spin ",
    },
    {
      index: 2,
      title: `leader's hangar`,
      techStacks: ["nextjs", "typescript", "tailwindcss", "supabase", "supabase auth"],
      role: "project lead, fullstack web developer",
      image: `https://i.postimg.cc/9XyRBSgT/leaders-hangar.png`,
      description:
        "led the full-stack development of leader's hangar as project lead, orchestrating a three-person team using next.js, supabase, and supabase auth to create a robust web application. i piloted this project like a software engineer pilots a drone - with precision, a touch of swagger, and hopefully fewer unexpected crashes!",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Heading>projects</Heading>
          <Subheading>here are some of my projects:</Subheading>
          <LineBreak />
          <LineBreak />
          <div className="">
            <ProjectCard content={projects} />
          </div>
          <BackButton link="/">back</BackButton>
          <AnimatePulse />
        </div>
      </div>
    </>
  );
};

export default Projects;
