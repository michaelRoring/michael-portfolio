import { ProjectList } from "../../lib/definition";
import LineBreak from "./LineBreak";

interface Props {
  content: ProjectList[];
}

export const ProjectCard: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content?.map((item) => {
        return (
          <>
            <div key={item.index}>
              <div className="relative my-6 flex w-auto flex-col rounded-2xl bg-slate-900 shadow-sm transition duration-500 ease-in-out hover:bg-slate-800 md:flex-row">
                <div className="relative shrink-0 overflow-hidden p-2.5 md:w-2/5">
                  <img
                    src={item?.image}
                    alt="card-image"
                    className="h-full w-full rounded-md object-cover shadow-inner md:rounded-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-2xl font-semibold text-slate-50">{item?.title}</h4>
                  <h2 className="text-xs font-semibold text-slate-300">role: {item?.role}</h2>
                  <LineBreak length={4} />
                  <div className="flex flex-wrap gap-2">
                    {item?.techStacks?.map((stack) => {
                      return (
                        <div className="w-fit rounded-full border border-transparent bg-slate-700 px-2.5 text-center text-xs text-white shadow-sm transition-all">
                          {stack}
                        </div>
                      );
                    })}
                  </div>

                  <LineBreak length={10} />
                  <p className="mb-8 font-light text-slate-500">{item?.description}</p>
                  <div>
                    {item?.link ? (
                      <a
                        href={item?.link}
                        className="flex items-center text-sm font-semibold text-slate-50 hover:underline"
                        target="_blank"
                      >
                        visit project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-slate-600">on maintenance</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
