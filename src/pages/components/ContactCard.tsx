import { ContactList } from "../../lib/definition";

interface Props {
  contactList: ContactList[];
}

export const ContactCard: React.FC<Props> = ({ contactList }) => {
  return (
    <>
      <br />
      {contactList?.map((item) => {
        return (
          <>
            <div key={item?.index}>
              <div className="relative my-6 flex w-96 flex-col rounded-2xl bg-slate-800 p-6 shadow-sm transition duration-500 ease-in-out hover:bg-slate-900">
                <div className="mb-4 flex items-center">
                  {item?.icon}
                  <h5 className="ml-3 text-xl font-semibold text-slate-50 hover:underline">
                    <a href={item?.link}>{item?.platform}</a>
                  </h5>
                </div>
                <p className="mb-4 block font-light leading-normal text-slate-500">
                  {item?.description}
                </p>
                <div>
                  <a
                    href={item?.link}
                    className="flex items-center text-sm font-semibold text-slate-50 hover:underline"
                  >
                    contact me
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
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
