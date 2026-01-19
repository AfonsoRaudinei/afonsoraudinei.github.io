import { useState, memo, useCallback } from "react";
import { pragas } from "@/data/pragasSoja";
import PragaSelector from "./PragaSelector";
import PragaChart from "./PragaChart";
import PragaLegend from "./PragaLegend";
import PragaInfoBox from "./PragaInfoBox";

const InsetosTab = memo(() => {
  const [selectedPragas, setSelectedPragas] = useState<number[]>([]);

  const handleToggle = useCallback((id: number) => {
    setSelectedPragas((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedPragas(pragas.map((p) => p.id));
  }, []);

  const handleClearAll = useCallback(() => {
    setSelectedPragas([]);
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Intensidade de Pragas por Estádio Fenológico
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl">
            Visualize a dinâmica populacional das principais pragas da soja ao longo do ciclo. 
            A intensidade é expressa em percentual relativo, onde 100% representa o pico máximo 
            de cada praga durante o desenvolvimento da cultura.
          </p>
        </div>

        {/* Selector */}
        <PragaSelector
          selectedPragas={selectedPragas}
          onToggle={handleToggle}
          onSelectAll={handleSelectAll}
          onClearAll={handleClearAll}
        />

        {/* Chart */}
        <PragaChart selectedPragas={selectedPragas} />

        {/* Legend */}
        <PragaLegend selectedPragas={selectedPragas} />

        {/* Info Box */}
        <PragaInfoBox selectedPragas={selectedPragas} />
      </div>
    </section>
  );
});

InsetosTab.displayName = "InsetosTab";

export default InsetosTab;
