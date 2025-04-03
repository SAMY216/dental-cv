import Card from "./Card";
import { pros } from "../js/pros";

export default function Prosthesis() {
  return (
    <div id="pros" className="bg-white pb-12">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center
          "
        >
          Prosthesis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pros.map((caseData, i) => (
            <Card key={i} caseData={caseData} />
          ))}
        </div>
      </div>
    </div>
  );
}
