import { useState } from "react";
import DoencaSelector from "./DoencaSelector";
import DoencaBarChart from "./DoencaBarChart";
import DoencaLegend from "./DoencaLegend";
import DoencaInfoBox from "./DoencaInfoBox";

const DoencasTab = () => {
  const [selectedDoencas, setSelectedDoencas] = useState<number[]>([]);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Intensidade de <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Doenças</span> por Estádio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visualize a intensidade das principais doenças da soja ao longo do ciclo fenológico.
            Selecione as doenças para comparar padrões de infestação.
          </p>
        </div>

        {/* Selector */}
        <DoencaSelector
          selectedDoencas={selectedDoencas}
          onSelectionChange={setSelectedDoencas}
        />

        {/* Bar Chart */}
        <div className="mb-8">
          <DoencaBarChart selectedDoencas={selectedDoencas} />
        </div>

        {/* Legend */}
        <DoencaLegend selectedDoencas={selectedDoencas} />

        {/* Info Box */}
        <DoencaInfoBox selectedDoencas={selectedDoencas} />
      </div>
    </section>
  );
};

export default DoencasTab;
