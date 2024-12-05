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
      image: "/public/docs/twp.png",
    },
    {
      index: 2,
      title: `leader's hangar`,
      link: "",
      techStacks: ["nextjs", "typescript", "tailwindcss"],
      role: "fullstack web developer",
      image: "/public/docs/leaders-hangar.png",
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
