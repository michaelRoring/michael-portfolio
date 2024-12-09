import { ExperienceList, EducationList } from "../lib/definition";
import AnimatePulse from "./components/AnimatePulse";
import { CompanyTable } from "./components/CompanyTable";
import LineBreak from "./components/LineBreak";
import { Heading } from "./components/atoms/Heading";
import { Subheading } from "./components/atoms/Subheading";
import BackButton from "./components/atoms/PrimaryButton";
import EducationCard from "./components/EducationCard";
import CertificationCards from "./components/CertificationCards";
import { CertificationList } from "../lib/definition";
import { TechStackList } from "../lib/definition";
import StackBadge from "./components/StackBadge";

const experienceList: ExperienceList[] = [
  {
    index: 1,
    companyName: "devhaus pte. ltd.",
    role: "software engineer",
    duration: "aug 2023 - now",
    information: "singapore, remote",
    performance: [
      `led and kickstarted "leader's hangar", the first new product in the company`,
      `built automation workflows for key account managers to spot potential leads and opportunities`,
    ],
  },
  {
    index: 2,
    companyName: "graha prima sukses utama",
    role: "marketing consultant",
    duration: "feb 2020 - dec 2022",
    information: "jakarta, remote",
    performance: [
      "led, planned and taking initiatives to drive more traffic to the company's website's social media channels",
    ],
  },
  {
    index: 3,
    companyName: "clairmont store / entrepreneurship",
    role: "self-employed",
    duration: "feb 2017 - jan 2020",
    information: "jakarta, on site",
    performance: [
      `got one of the top seller on Lazada marketplace`,
      `reached almost 500 million rupiah revenue in single day at 12.12.18`,
    ],
  },
  {
    index: 4,
    companyName: "pt. noboru tirta lestari",
    role: "head of marketing",
    duration: "oct 2014 - jan 2017",
    information: "jakarta, on site",
    performance: [
      `built relationships with key account manager of e-commerce companies `,
      `planned the strategies for the digital marketing campaigns`,
    ],
  },
];

const formalEducationList: EducationList[] = [
  {
    index: 1,
    institution: "hacktiv8",
    major: "immersive fullstack javascript bootcamp",
    finalScore: "87.6 / 100",
    duration: "jan 2022 - apr 2022",
    websiteUrl: "https://hacktiv8.com",
    certificationUrl:
      "https://drive.google.com/file/d/1GzV2Tu3T2mRbfuIHOnbB1ZduhDZOIbnk/view?usp=sharing",
    image:
      "https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png",
  },
  {
    index: 2,
    institution: "bunda mulia university",
    major: "information technology",
    finalScore: "3.34 / 4.00",
    duration: "jul 2010 - jun 2014",
    websiteUrl: "https://www.ubm.ac.id/",
    image:
      "https://pacificgarden.co.id/wp-content/uploads/2021/10/Logo-UBM-Universitas-Bunda-Mulia-Original-1024x744-1.png",
  },
];

const certificationList: CertificationList[] = [
  {
    index: 1,
    title: "project management specialization",
    platform: "google",
    issued: "jun 2024",
    link: "https://coursera.org/share/75438d1aef99ebeeec5a8326a71f051c",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
    description:
      "acquired the google project management certification, gaining profound insights into strategic planning and execution methodologies. discovered that scrum is basically like herding cats, but with more whiteboards and fewer scratches.",
  },
  {
    index: 2,
    title: "ef set english certificate ",
    platform: "english first",
    issued: "jun 2023",
    link: "https://www.efset.org/cert/66LP9c",
    image: "https://cdn.worldvectorlogo.com/logos/english-first.svg",
    description:
      "earned an ef set english certificate with a solid c1 advanced level score of 63/100, demonstrating strong linguistic versatility crucial for effective communication in Singapore's multicultural professional landscape. proved that my english skills are smoother than a well-oiled diplomatic translator navigating a multilingual cocktail party",
  },
  {
    index: 3,
    title: "make intermediate",
    platform: "make academy",
    issued: "jan 2024",
    link: "https://www.credly.com/badges/bfe1c647-a5e8-4f7a-b1dd-2e0ab3ffb1b4/public_url",
    image:
      "https://cdn.prod.website-files.com/5e6aa3e3f001fae105b8e1e7/6234cf71361c3d748dc7b24d_make-logo.png",
    description:
      "completed the make academy intermediate certificate, mastering no-code automation techniques that transform complex workflows into streamlined digital symphonies. learned to connect apps faster than a tech-savvy octopus juggling communication platforms",
  },
  {
    index: 4,
    title: "fullstack javascript immersive bootcamp",
    platform: "hacktiv8",
    issued: "may 2023",
    link: "https://i.postimg.cc/DwnzMCNN/Hacktiv8-Certificate.png",
    image: "https://i.ibb.co.com/8c9hN7z/Screenshot-2024-12-08-at-02-38-26.png",
    description:
      "conquered the full stack javascript immersive bootcamp, transforming from a old brain programmer to a javascript juggler who can navigate both frontend and backend landscapes with newfound confidence. survived the learning curve that's steeper than a roller coaster designed by caffeine-fueled programmers - and made some awesome friends along the way ",
  },
  {
    index: 5,
    title: "blockchain developer program",
    platform: "solana academy",
    issued: "aug 2023",
    link: "https://drive.google.com/file/d/1gA0oFiPv1Ec9spZzMdz0Vn5om-huiEZz/view",
    image: "https://cryptologos.cc/merch/solana-sol-sticker.jpg?v=035",
    description:
      "a mini bootcamp for me to learn blockchain technology. met a lot of people across the nation as cohorts, and it was a great experience. still haven't mastered the basics of blockchain, but i'm still learning..",
  },
];

const techStackList: TechStackList[] = [
  {
    index: 1,
    name: "react",
    type: "frontend",
  },
  {
    index: 2,
    name: "tailwind",
    type: "frontend",
  },
  {
    index: 3,
    name: "next.js",
    type: "fullstack",
  },
  {
    index: 4,
    name: "postgresql",
    type: "backend",
  },
  {
    index: 5,
    name: "react native",
    type: "mobile",
  },
  {
    index: 6,
    name: "git",
    type: "version control",
  },
  {
    index: 7,
    name: "webflow",
    type: "frontend",
  },
  {
    index: 8,
    name: "prisma",
    type: "backend",
  },
  {
    index: 9,
    name: "jotai",
    type: "state management",
  },
  {
    index: 10,
    name: "supabase",
    type: "backend",
  },
  {
    index: 11,
    name: "express",
    type: "backend",
  },
  {
    index: 12,
    name: "nodejs",
    type: "backend",
  },
  {
    index: 13,
    name: "shadcn ui",
    type: "frontend",
  },
  {
    index: 14,
    name: "redis",
    type: "backend",
  },
  {
    index: 15,
    name: "jwt",
    type: "backend",
  },
  {
    index: 16,
    name: "Oauth",
    type: "backend",
  },
  {
    index: 17,
    name: "graphql",
    type: "backend",
  },
  {
    index: 18,
    name: "rest api",
    type: "backend",
  },
  {
    index: 19,
    name: "langchain",
    type: "backend",
  },
  {
    index: 20,
    name: "docker",
    type: "backend",
  },
];

const SkillExperience = () => {
  return (
    <>
      <div className="h-auto w-auto bg-black text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Heading>experiences</Heading>
          <Subheading>here's a little bit about my experiences:</Subheading>
          <LineBreak length={12} />
          <CompanyTable content={experienceList} />
          <LineBreak length={12} />
          <Heading>certifications</Heading>
          <Subheading>here's a little bit about my certifications:</Subheading>
          <CertificationCards content={certificationList} />
          <LineBreak length={12} />
          <Heading>education</Heading>
          <Subheading>here's a little bit about my formal education:</Subheading>
          <LineBreak length={12} />
          <EducationCard content={formalEducationList} />
          <LineBreak />
          <Heading>tech stack</Heading>
          <Subheading>here's a little bit about my tech stack:</Subheading>
          <StackBadge content={techStackList} />
          <LineBreak length={12} />
          <BackButton link="/">back</BackButton>
          <AnimatePulse></AnimatePulse>
        </div>
      </div>
    </>
  );
};

export default SkillExperience;
