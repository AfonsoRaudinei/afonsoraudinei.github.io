import { doencas, stages } from "@/data/doencasSoja";
import { motion } from "framer-motion";

interface DoencaBarChartProps {
  selectedDoencas: number[];
}

const DoencaBarChart = ({ selectedDoencas }: DoencaBarChartProps) => {
  if (selectedDoencas.length === 0) {
    return (
      <div className="bg-card/80 backdrop-blur rounded-2xl p-8 border border-border/50 text-center">
        <p className="text-muted-foreground">Selecione uma ou mais doenças para visualizar o gráfico</p>
      </div>
    );
  }

  // Show bar chart for single disease, similar to reference image
  if (selectedDoencas.length === 1) {
    const doenca = doencas[selectedDoencas[0]];
    const maxValue = Math.max(...doenca.data);

    return (
      <div className="bg-card/80 backdrop-blur rounded-2xl p-6 border border-border/50">
        <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-2xl">{doenca.icon}</span>
          {doenca.name} (Intensidade)
        </h3>
        
        <div className="space-y-3">
          {stages.map((stage, index) => {
            const value = doenca.data[index];
            const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
            
            return (
              <motion.div
                key={stage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4"
              >
                <span className="w-12 text-sm font-medium text-muted-foreground">{stage}</span>
                
                <div className="flex-1 relative">
                  <div className="h-8 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full relative"
                      style={{ 
                        background: `linear-gradient(90deg, ${doenca.color}90, ${doenca.color})` 
                      }}
                    >
                      {value > 0 && (
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xs font-bold">
                          {value.toFixed(1)}
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>
                
                <span className="w-16 text-right text-sm font-medium text-muted-foreground">
                  {percentage.toFixed(1)}%
                </span>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            <strong>Pico:</strong> Estádio {doenca.peak} com {Math.max(...doenca.data).toFixed(1)}% de intensidade
          </p>
        </div>
      </div>
    );
  }

  // Multi-disease comparison with horizontal bars per stage
  return (
    <div className="bg-card/80 backdrop-blur rounded-2xl p-6 border border-border/50">
      <h3 className="text-lg font-bold text-foreground mb-6">
        Comparativo de Intensidade por Estádio
      </h3>
      
      <div className="space-y-6">
        {stages.map((stage, stageIndex) => (
          <div key={stage} className="space-y-2">
            <span className="text-sm font-semibold text-foreground">{stage}</span>
            
            <div className="space-y-1.5">
              {selectedDoencas.map((doencaIndex, idx) => {
                const doenca = doencas[doencaIndex];
                const value = doenca.data[stageIndex];
                const maxValue = 100;
                const percentage = (value / maxValue) * 100;
                
                return (
                  <motion.div
                    key={doencaIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (stageIndex * 0.03) + (idx * 0.02) }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-sm w-6">{doenca.icon}</span>
                    
                    <div className="flex-1 relative">
                      <div className="h-5 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.6, delay: stageIndex * 0.03, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: doenca.color }}
                        />
                      </div>
                    </div>
                    
                    <span className="w-14 text-right text-xs font-medium text-muted-foreground">
                      {value.toFixed(1)}%
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoencaBarChart;
