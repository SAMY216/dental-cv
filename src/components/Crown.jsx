import Card from "./Card";
import { cr } from "../js/crown";
import "../css/separator.css"

export default function Crown() {
  return (
    <>
    <div class="scallop-up"></div>
      <div id="crown" className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">
            Crown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cr.map((caseData, i) => (
              <Card key={i} caseData={caseData} />
            ))}
          </div>
        </div>
      </div>
      <div class="scallop-down"></div>
    </>
  );
}
