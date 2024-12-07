import { CertificationList } from "../../lib/definition";

interface Props {
  content: CertificationList[];
}

const CertificationCards: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {content?.map((item) => {
          return (
            <div key={item?.index}>
              <a
                href="#"
                className="flex flex-col rounded-2xl bg-slate-700 p-2 transition duration-500 ease-in-out hover:bg-slate-900 md:h-[550px] md:max-w-xl md:flex-row"
              >
                <img
                  className="lg h-96 w-full rounded-lg object-cover shadow-inner md:h-auto md:w-48 [&:not(:root)]:md:object-[15%_50%]"
                  //   style={{ objectPosition: "25% 50%" }}
                  src={item?.image}
                  alt=""
                  loading="lazy"
                />
                <div className="flex h-full flex-col p-4 leading-normal">
                  <div className="h-32">
                    <h5 className="text-2xl font-bold tracking-tight text-slate-50">
                      {item?.title} / {item?.platform}
                    </h5>
                    <p className="mb-3 font-thin text-slate-500">issued {item?.issued}</p>
                  </div>
                  <div className="h-80">
                    <p className="my-3 font-normal text-slate-200">{item?.description}</p>
                  </div>
                  <a href={item?.link} className="w-fit" target="_blank">
                    <span className="flex rounded-lg bg-white p-2 px-4 text-slate-950 transition duration-500 ease-in-out hover:bg-slate-600 hover:text-white">
                      <p className="text-md font-normal">view certification</p>
                    </span>
                  </a>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CertificationCards;
