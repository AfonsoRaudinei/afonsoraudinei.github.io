import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { pragas } from "@/data/pragasSoja";
import { cn } from "@/lib/utils";

interface PragaSelectorProps {
  selectedPragas: number[];
  onToggle: (id: number) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

const PragaSelector = ({ selectedPragas, onToggle, onSelectAll, onClearAll }: PragaSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPragas = pragas.filter((praga) =>
    praga.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-8">
      <label className="text-base font-semibold text-foreground mb-3 block">
        Selecione as pragas para visualizar:
      </label>
      <div ref={containerRef} className="relative">
        <div
          className={cn(
            "bg-card border-2 border-border rounded-xl transition-all duration-300",
            isOpen && "border-primary ring-2 ring-primary/20"
          )}
        >
          <div
            className="p-4 cursor-pointer flex justify-between items-center bg-secondary/30 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-wrap gap-2 min-h-[32px]">
              {selectedPragas.length === 0 ? (
                <span className="text-muted-foreground text-sm">Clique para selecionar pragas...</span>
              ) : (
                selectedPragas.map((id) => {
                  const praga = pragas.find((p) => p.id === id);
                  if (!praga) return null;
                  return (
                    <div
                      key={id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-sm font-medium animate-in fade-in zoom-in-95 duration-200"
                      style={{ backgroundColor: praga.color }}
                    >
                      <span className="text-base">{praga.icon}</span>
                      {praga.shortName}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggle(id);
                        }}
                        className="ml-1 opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-primary transition-transform duration-300",
                isOpen && "rotate-180"
              )}
            />
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-xl shadow-xl z-50 max-h-[400px] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-3 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar pragas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="p-3 flex gap-2 border-b border-border">
                <button
                  onClick={onSelectAll}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                >
                  Selecionar Todas
                </button>
                <button
                  onClick={onClearAll}
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold hover:bg-secondary/80 transition-all hover:-translate-y-0.5"
                >
                  Limpar Todas
                </button>
              </div>

              <div className="p-2 max-h-[250px] overflow-y-auto">
                {filteredPragas.map((praga) => {
                  const isSelected = selectedPragas.includes(praga.id);
                  return (
                    <div
                      key={praga.id}
                      className="flex items-center gap-3 p-3 cursor-pointer rounded-lg hover:bg-secondary/50 transition-colors"
                      onClick={() => onToggle(praga.id)}
                    >
                      <div
                        className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                          isSelected
                            ? "border-transparent"
                            : "border-border bg-background"
                        )}
                        style={isSelected ? { backgroundColor: praga.color } : {}}
                      >
                        {isSelected && (
                          <span className="text-white text-xs font-bold">✓</span>
                        )}
                      </div>
                      <span className="text-2xl">{praga.icon}</span>
                      <span className="text-sm font-medium text-foreground">{praga.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PragaSelector;
