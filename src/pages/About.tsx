import AnimatePulse from "./components/AnimatePulse";
import LineBreak from "./components/LineBreak";
import { Heading } from "./components/atoms/Heading";
import { Subheading } from "./components/atoms/Subheading";
import BackButton from "./components/atoms/PrimaryButton";
import { Github } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="h-auto min-h-screen bg-black text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Heading>about me</Heading>
          <LineBreak />
          <Subheading>
            hey there! 👋 i'm a fullstack developer based in tangerang, indonesia, where i spend my
            days turning coffee into code and dreams into websites. after a decade of crushing it in
            e-commerce and digital marketing (trust me, i've seen enough marketing buzzwords to last
            a lifetime), i decided to plot-twist my career and dive headfirst into development.
          </Subheading>
          <LineBreak />
          <Subheading>
            why the switch? well, imagine being really good at selling cakes, but suddenly realizing
            you want to be the master baker instead. that's me! armed with a computer science degree
            and fresh out of hacktiv8's fullstack javascript bootcamp (with a sweet 87.6 score - not
            that i'm counting 😉), i'm now crafting digital experiences that make both users and
            developers smile.
          </Subheading>
          <LineBreak />
          <Subheading>
            you know how artists can stare at a blank canvas for hours? that's me with my code
            editor. to me, development is where art meets logic - it's like painting, but with
            semicolons and fewer paint stains on my clothes. whether it's crafting pixel-perfect
            frontends or architecting robust backend solutions, i'm all in.
          </Subheading>
          <LineBreak />
          <Subheading>
            fun fact: i'm actually falling in love with coding for the second time. the first time
            was during my computer science days, but this time it's different - it's like
            reconnecting with an old flame who got way cooler over the years. these days, you'll
            find me coding until sunrise, not because i have to, but because i literally forget to
            check the time when i'm in the zone.
          </Subheading>
          <LineBreak />
          <Subheading>
            coming from a background in e-commerce, branding, and digital marketing, i bring a
            unique perspective to development. i don't just build features - i build experiences
            that convert, engage, and delight users. think of it as combining the best of both
            worlds: the precision of a developer with the user-focused mindset of a marketer.
          </Subheading>
          <LineBreak />
          <Subheading>
            currently, i'm channeling my passion into frontend engineering, where i can merge my eye
            for design with my love for clean, efficient code. the web development community has
            become my new home, and i couldn't be happier about it.
          </Subheading>
          <LineBreak />
          <Subheading>
            looking for a developer who speaks both code and business? let's connect and build
            something awesome together!{" "}
          </Subheading>
          <LineBreak />
          <Subheading>
            p.s. i promise to keep the marketing puns to a minimum in our collaboration... mostly 😄
          </Subheading>

          {/* insert wakatime here */}
          <LineBreak />
          <div className="flex gap-2">
            <BackButton link="/">back</BackButton>
            <div className="flex gap-2">
              <a href="https://github.com/michaelRoring" target="_blank">
                <div className="my-2 flex w-32 items-center justify-center rounded-lg bg-slate-500 px-4 py-2 transition duration-500 ease-in-out hover:bg-slate-700">
                  <Github />
                  <p>github</p>
                </div>
              </a>
            </div>
          </div>
          <AnimatePulse />
        </div>
      </div>
    </>
  );
};

export default About;
