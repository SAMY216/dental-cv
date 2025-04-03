import Card from "./Card";
import { endo } from "../js/endo";
import "../css/separator.css";

export default function Endodontics() {
  return (
    <>
      <div class="scallop-up"></div>
      <div id="endo" className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">
            Endodontics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {endo.map((caseData, i) => (
              <Card key={i} caseData={caseData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
