import { ExperienceList } from "../../lib/definition";
import LineBreak from "./LineBreak";

interface Props {
  content: ExperienceList[];
}

const ExperienceTable: React.FC<Props> = ({ content }) => {
  return (
    <>
      <h1>experience</h1>
      <br />
      <table style={{ border: "1px dashed white" }}>
        <thead style={{ border: "1px dashed white" }}>
          <tr>
            <th className="pr-56 text-left">company name</th>
            <th className="pr-64 text-left">role</th>
            <th className="pr-64 text-left">duration</th>
            <th className="pr-64 text-left">place</th>
          </tr>
        </thead>
        <tbody>
          {content?.map((item) => (
            <tr key={item.index}>
              <td>{item.companyName}</td>
              <td>{item.role}</td>
              <td>{item.duration}</td>
              <td>{item.information}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExperienceTable;
