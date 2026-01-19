import { pragas } from "@/data/pragasSoja";
import { motion } from "framer-motion";

interface PragaLegendProps {
  selectedPragas: number[];
}

const PragaLegend = ({ selectedPragas }: PragaLegendProps) => {
  if (selectedPragas.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {selectedPragas.map((pragaId, index) => {
        const praga = pragas.find((p) => p.id === pragaId);
        if (!praga) return null;

        return (
          <motion.div
            key={praga.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl border-l-4 transition-all duration-300 hover:translate-x-1 hover:shadow-md"
            style={{ borderLeftColor: praga.color }}
          >
            <div
              className="w-5 h-5 rounded-full shadow-sm"
              style={{ backgroundColor: praga.color }}
            />
            <span className="text-xl">{praga.icon}</span>
            <span className="text-sm font-semibold text-foreground">
              {praga.name} - Pico em {praga.peak}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PragaLegend;
