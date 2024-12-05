import { TechStackList } from "../../lib/definition";

interface Props {
  content: TechStackList[];
}

const StackBadge: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-2 md:grid md:grid-cols-6">
        {content?.map((item) => {
          return (
            <div key={item.index}>
              <div className="text-md mb-4 flex w-fit items-center gap-2 rounded-full border border-transparent bg-slate-700 px-5 py-2 text-center text-white shadow-sm transition-all duration-500 ease-in-out hover:bg-slate-900">
                {item?.name}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StackBadge;
