import { motion } from "framer-motion";
import { doencas } from "@/data/doencasSoja";

interface DoencaLegendProps {
  selectedDoencas: number[];
}

const DoencaLegend = ({ selectedDoencas }: DoencaLegendProps) => {
  if (selectedDoencas.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
      {selectedDoencas.map((index, i) => {
        const doenca = doencas[index];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 p-3 bg-card/60 backdrop-blur rounded-xl border-l-4 hover:translate-x-1 hover:shadow-lg transition-all duration-300"
            style={{ borderLeftColor: doenca.color }}
          >
            <div
              className="w-5 h-5 rounded-full shadow-md flex-shrink-0"
              style={{ backgroundColor: doenca.color }}
            />
            <span className="text-lg">{doenca.icon}</span>
            <span className="text-sm font-medium text-foreground">
              {doenca.name} - Pico em {doenca.peak}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DoencaLegend;
