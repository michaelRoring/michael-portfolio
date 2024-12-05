import { ExperienceList } from "../../lib/definition";
import { Dot } from "lucide-react";
import LineBreak from "./LineBreak";

interface Props {
  content: ExperienceList[];
}

export const CompanyTable: React.FC<Props> = ({ content }) => {
  return (
    <>
      <LineBreak />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content?.map((item) => {
          return (
            <div key={item?.index} className="h-full">
              <div className="flex h-full w-full flex-col rounded-2xl bg-slate-800 transition duration-500 ease-in-out hover:bg-slate-900">
                <div className="flex-grow p-4">
                  <h5 className="mb-2 text-2xl font-semibold text-slate-50">
                    {item?.index}. {item?.companyName}
                  </h5>
                  <div className="font-light leading-normal text-slate-600">
                    <div className="flex flex-wrap text-sm text-slate-500">
                      <span className="mr-2">{item?.role}</span>
                      <Dot />
                      <span className="ml-2">{item?.information}</span>
                    </div>
                    <LineBreak />
                    <div className="space-y-1">
                      {item?.performance?.map((performance, index) => (
                        <div key={index} className="flex text-slate-400">
                          <span className="mr-2">-</span>
                          <span>{performance}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-700 p-4">
                  <span className="text-sm font-medium text-slate-400">{item.duration}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
