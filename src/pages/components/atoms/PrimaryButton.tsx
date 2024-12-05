import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Props {
  children: React.ReactNode;
  link: string;
}

const BackButton: React.FC<Props> = ({ children, link }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };
  return (
    <button
      className="my-2 rounded-xl bg-white px-4 py-2 text-slate-900 transition duration-500 ease-in-out hover:bg-slate-800 hover:text-white"
      onClick={handleClick}
    >
      <span className="flex items-center">
        <ArrowLeft className="mr-2" />
        {children}
      </span>
    </button>
  );
};

export default BackButton;
