import { Info } from "lucide-react";
import { pragas, pragaInfo } from "@/data/pragasSoja";
import { motion } from "framer-motion";

interface PragaInfoBoxProps {
  selectedPragas: number[];
}

const PragaInfoBox = ({ selectedPragas }: PragaInfoBoxProps) => {
  return (
    <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 p-6 md:p-8 rounded-2xl border-l-4 border-primary">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
          <Info className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          Períodos Críticos de Infestação
        </h3>
      </div>

      {selectedPragas.length === 0 ? (
        <p className="text-muted-foreground text-center py-10">
          Selecione uma ou mais pragas acima para visualizar informações detalhadas sobre seus períodos críticos de infestação.
        </p>
      ) : (
        <div className="space-y-8">
          {selectedPragas.map((pragaId, idx) => {
            const info = pragaInfo[pragaId];
            const praga = pragas.find((p) => p.id === pragaId);
            if (!info || !praga) return null;

            return (
              <motion.div
                key={pragaId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                {idx > 0 && <div className="border-t border-border my-6" />}
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">{praga.icon}</span>
                  {info.title}
                </h4>
                <div className="space-y-4">
                  {info.phases.map((phase, phaseIdx) => (
                    <div key={phaseIdx}>
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: praga.color }}
                        />
                        <span className="font-semibold text-foreground">
                          {phase.title}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                        {phase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {selectedPragas.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground italic">
            <strong>Fonte:</strong> Dados de monitoramento de campo compilados conforme metodologia de amostragem padrão. 
            Valores expressos em intensidade relativa percentual, onde 100% representa o pico de infestação de cada praga 
            ao longo do ciclo. O Manejo Integrado de Pragas (MIP) com monitoramento sistemático é essencial para tomada de decisão 
            assertiva e uso racional de defensivos.
          </p>
        </div>
      )}
    </div>
  );
};

export default PragaInfoBox;
