import AnimatePulse from "./components/AnimatePulse";
import SecondaryButton from "./components/SecondaryButton";
import { Heading } from "./components/atoms/Heading";
import { Subheading } from "./components/atoms/Subheading";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white h-screen ">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Heading>&lt;<span className="hover:underline hover:decoration-orange-700">Michael</span>Portfolio /&gt;</Heading>
            <Subheading>
              fullstack wizard: turning coffee into code since 2022
            </Subheading>
          <span className="mt-4 block">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              height={200}
              width={200}
            ></img>
          </span>
          <div className="mt-4 ">
            <SecondaryButton link="/projects">view projects</SecondaryButton>
            <br />
            <SecondaryButton link="/skill-experience">
              skill & experience
            </SecondaryButton>
            <br />
            <SecondaryButton link="/about">about me</SecondaryButton>
            <br />
            <SecondaryButton link="/contact">contact me</SecondaryButton>
            <br />
            <AnimatePulse />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
