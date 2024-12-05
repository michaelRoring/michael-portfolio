import { EducationList } from "../../lib/definition";
import { ScrollText } from "lucide-react";

interface Props {
  content: EducationList[];
}

const EducationCard: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-20">
        {content?.map((item) => {
          return (
            <div className="h-[40rem] max-w-sm rounded-2xl bg-slate-800 transition duration-500 ease-in-out hover:bg-slate-900">
              <img
                className="h-96 w-full rounded-t-2xl object-cover"
                src={item?.image}
                alt=""
                loading="lazy"
              />
              <div className="p-5">
                <a href={item?.websiteUrl}>
                  <h5 className="text-2xl font-bold leading-10 text-slate-50 hover:underline">
                    {item?.institution}
                  </h5>
                </a>
                <p className="mb-6 text-sm font-normal text-slate-500">{item?.major}</p>
                <div className="flex items-center pb-2">
                  <ScrollText />
                  <p className="text-md pl-2 text-slate-200">{item?.finalScore}</p>
                </div>
                <p className="text-sm font-normal text-slate-200">{item?.duration}</p>
                {item?.certificationUrl && (
                  <div className="flex items-center">
                    <a href={item?.certificationUrl} className="">
                      <span className="mt-4 flex rounded-lg bg-white p-2 text-slate-950 transition duration-500 ease-in-out hover:bg-slate-600 hover:text-white">
                        <p className="text-md font-normal">view certification</p>
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EducationCard;
