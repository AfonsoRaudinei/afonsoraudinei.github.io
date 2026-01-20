import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Check, X } from "lucide-react";
import { doencas } from "@/data/doencasSoja";

interface DoencaSelectorProps {
  selectedDoencas: number[];
  onSelectionChange: (selected: number[]) => void;
}

const DoencaSelector = ({ selectedDoencas, onSelectionChange }: DoencaSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDoenca = (index: number) => {
    if (selectedDoencas.includes(index)) {
      onSelectionChange(selectedDoencas.filter(i => i !== index));
    } else {
      onSelectionChange([...selectedDoencas, index]);
    }
  };

  const selectAll = () => {
    onSelectionChange(doencas.map((_, index) => index));
  };

  const clearAll = () => {
    onSelectionChange([]);
  };

  const filteredDoencas = doencas.filter(doenca =>
    doenca.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-foreground mb-3">
        Selecione as doenças para visualizar:
      </label>
      
      <div ref={dropdownRef} className="relative">
        {/* Header */}
        <div
          className={`bg-card border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
            isOpen ? "border-purple-500 shadow-lg" : "border-border hover:border-purple-400"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2 flex-1 min-h-[28px]">
              {selectedDoencas.length === 0 ? (
                <span className="text-muted-foreground text-sm">Clique para selecionar doenças...</span>
              ) : (
                selectedDoencas.map(index => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white animate-scale-in"
                    style={{ backgroundColor: doencas[index].color }}
                  >
                    <span>{doencas[index].icon}</span>
                    <span>{doencas[index].shortName}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDoenca(index);
                      }}
                      className="ml-1 hover:opacity-80 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
            <ChevronDown className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-purple-500 rounded-xl shadow-xl z-50 max-h-[400px] overflow-hidden animate-fade-in">
            {/* Search */}
            <div className="p-3 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar doenças..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="p-3 border-b border-border flex gap-2">
              <button
                onClick={selectAll}
                className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                Selecionar Todas
              </button>
              <button
                onClick={clearAll}
                className="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                Limpar Todas
              </button>
            </div>

            {/* Options */}
            <div className="max-h-[280px] overflow-y-auto p-2">
              {filteredDoencas.map((doenca, filteredIndex) => {
                const originalIndex = doencas.findIndex(p => p.name === doenca.name);
                const isSelected = selectedDoencas.includes(originalIndex);
                
                return (
                  <div
                    key={originalIndex}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      isSelected ? "bg-purple-50 dark:bg-purple-950/30" : "hover:bg-muted/50"
                    }`}
                    onClick={() => toggleDoenca(originalIndex)}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? "border-transparent"
                          : "border-border"
                      }`}
                      style={isSelected ? { backgroundColor: doenca.color } : {}}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-xl">{doenca.icon}</span>
                    <span className="flex-1 text-sm font-medium text-foreground">{doenca.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoencaSelector;
