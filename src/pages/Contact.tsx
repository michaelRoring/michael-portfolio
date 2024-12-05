import { Linkedin, Mail, Smartphone } from "lucide-react";
import AnimatePulse from "./components/AnimatePulse";
import { ContactCard } from "./components/ContactCard";
import { Heading } from "./components/atoms/Heading";
import { Subheading } from "./components/atoms/Subheading";
import BackButton from "./components/atoms/PrimaryButton";

const personalLinks = [
  {
    index: 1,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/michael-roring/",
    icon: <Linkedin />,
    description: "networking made palatable - i'll keep the puns to a minimum",
  },
  {
    index: 2,
    platform: "whatsapp",
    link: "https://wa.me/6285771027289",
    icon: <Smartphone />,
    description: "connecting people, one dad joke at a time. i promise to be the mild-mannered group chat sidekick",
  },
  {
    index: 3,
    platform: "email",
    link: "mailto:roringmichael.dev@gmail.com",
    icon: <Mail />,
    description: "crafting emails that won't make your eyes roll. i'll stick to the facts, and maybe a pun or two.",
  },
];

const Contact = () => {
  return (
    <>
      <div className="bg-black text-white h-auto min-h-screen ">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Heading>contact</Heading>
            <Subheading>you can contact me through these channels:</Subheading>
            <ContactCard contactList={personalLinks} />
          <div className="mt-12"></div>
          <BackButton link="/">back</BackButton>
          <AnimatePulse />
        </div>
      </div>
    </>
  );
};

export default Contact;
