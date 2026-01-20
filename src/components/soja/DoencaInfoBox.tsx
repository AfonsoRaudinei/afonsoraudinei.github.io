import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { doencas, doencaInfo } from "@/data/doencasSoja";

interface DoencaInfoBoxProps {
  selectedDoencas: number[];
}

const DoencaInfoBox = ({ selectedDoencas }: DoencaInfoBoxProps) => {
  if (selectedDoencas.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-6 rounded-2xl border-l-4 border-purple-500"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <Info className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Períodos Críticos de Infestação</h3>
        </div>
        <p className="text-muted-foreground text-center py-8">
          Selecione uma ou mais doenças acima para visualizar informações detalhadas sobre seus períodos críticos de infestação.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-6 rounded-2xl border-l-4 border-purple-500"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
          <Info className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Períodos Críticos de Infestação</h3>
      </div>

      <div className="space-y-8">
        {selectedDoencas.map((doencaIndex, idx) => {
          const doenca = doencas[doencaIndex];
          const info = doencaInfo[doencaIndex];
          
          if (!info) return null;

          return (
            <motion.div
              key={doencaIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={idx > 0 ? "pt-6 border-t border-purple-200 dark:border-purple-800" : ""}
            >
              <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">{doenca.icon}</span>
                {info.title}
              </h4>

              <div className="space-y-4">
                {info.phases.map((phase, phaseIdx) => (
                  <div key={phaseIdx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: doenca.color }}
                      />
                      <span className="text-sm font-semibold text-foreground">{phase.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-4">{phase.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-purple-200 dark:border-purple-800">
        <p className="text-xs text-muted-foreground italic">
          <strong>Fonte:</strong> Literatura técnica agronômica, relatórios Embrapa, Fundação MT e observações de campo (2022-2025). 
          Valores expressos em intensidade relativa percentual.
        </p>
      </div>
    </motion.div>
  );
};

export default DoencaInfoBox;
