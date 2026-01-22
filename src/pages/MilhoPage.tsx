import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ThermometerSun, Sun, FlaskConical, Sparkles, Leaf, Calculator, Search, AlertTriangle, CheckCircle, Info, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollReveal, HeroParallax, FloatingElement } from "@/components/ui/scroll-animations";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Dados de extração e exportação baseados em Embrapa (Circular Técnica 78, 2006)
const nutrientExtraction = {
  // Para produtividade de 9 t/ha (valores em kg/ha)
  macros: [
    { nutrient: "N", name: "Nitrogênio", extraction: 187, exportPercent: "70-77%", perTon: 20.8 },
    { nutrient: "P₂O₅", name: "Fósforo", extraction: 34, exportPercent: "77-86%", perTon: 3.8 },
    { nutrient: "K₂O", name: "Potássio", extraction: 143, exportPercent: "26-43%", perTon: 15.9 },
    { nutrient: "Ca", name: "Cálcio", extraction: 28, exportPercent: "2-5%", perTon: 3.1 },
    { nutrient: "Mg", name: "Magnésio", extraction: 32, exportPercent: "15-20%", perTon: 3.6 },
    { nutrient: "S", name: "Enxofre", extraction: 18, exportPercent: "40-50%", perTon: 2.0 },
  ],
  micros: [
    { nutrient: "Fe", name: "Ferro", extraction: 2100, unit: "g/ha", perTon: 233 },
    { nutrient: "Zn", name: "Zinco", extraction: 400, unit: "g/ha", perTon: 44, critical: true },
    { nutrient: "Mn", name: "Manganês", extraction: 340, unit: "g/ha", perTon: 38 },
    { nutrient: "B", name: "Boro", extraction: 170, unit: "g/ha", perTon: 19 },
    { nutrient: "Cu", name: "Cobre", extraction: 90, unit: "g/ha", perTon: 10 },
  ],
};

// Marcha de absorção baseada em ESALQ/USP (Visão Agrícola 13, Fancelli)
const absorptionCurve = [
  { stage: "VE-V4", dap: "0-20", n: 5, p: 5, k: 10, description: "Emergência e estabelecimento inicial" },
  { stage: "V4-V6", dap: "20-30", n: 12, p: 10, k: 25, description: "Arranque vegetativo - N em cobertura" },
  { stage: "V8-V12", dap: "30-45", n: 35, p: 30, k: 60, description: "Definição de espigas potenciais" },
  { stage: "V12-V18", dap: "45-55", n: 55, p: 50, k: 90, description: "Período crítico - definição de grãos", critical: true },
  { stage: "VT-R1", dap: "55-65", n: 75, p: 65, k: 95, description: "Pendoamento e florescimento" },
  { stage: "R2-R4", dap: "65-85", n: 90, p: 80, k: 98, description: "Enchimento de grãos - pico de N" },
  { stage: "R5-R6", dap: "85-120", n: 100, p: 100, k: 100, description: "Maturação fisiológica" },
];

const stressTypes = [
  { icon: <Sun className="w-8 h-8" />, title: "Seca", description: "Déficit hídrico severo" },
  { icon: <FlaskConical className="w-8 h-8" />, title: "Salinidade", description: "Excesso de sais no solo" },
  { icon: <ThermometerSun className="w-8 h-8" />, title: "Temperatura", description: "Calor ou frio extremo" },
  { icon: <Sparkles className="w-8 h-8" />, title: "Luminosidade", description: "Excesso de radiação" },
  { icon: <AlertTriangle className="w-8 h-8" />, title: "Toxidez", description: "Metais pesados" },
];

const stressPhases = [
  { number: 1, title: "Fase de Alarme", subtitle: "Início do estresse", description: "A planta detecta o estresse e suas funções fisiológicas começam a declinar. Tolerância ao estresse é ativada." },
  { number: 2, title: "Fase de Resistência", subtitle: "Adaptação ativa", description: "A planta ativa processos de adaptação e reparo metabólico, alcançando resistência máxima ao estressor." },
  { number: 3, title: "Fase de Exaustão", subtitle: "Sobrecarga do sistema", description: "Se o estresse persiste, a capacidade de adaptação é sobrecarregada, reduzindo rendimento e agravando danos.", warning: "Nesta fase, intervenção nutricional é crítica!" },
  { number: 4, title: "Fase de Regeneração", subtitle: "Recuperação", description: "Quando o estresse cessa, a planta pode recuperar total ou parcialmente suas funções metabólicas.", success: "Nutrição adequada acelera a recuperação" },
];

const macronutrients = [
  {
    symbol: "N",
    name: "Nitrogênio",
    extraction: "20.8 kg/t",
    exportPercent: "70-77%",
    functions: [
      "Componente de proteínas e aminoácidos",
      "Presente em ácidos nucleicos (DNA/RNA)",
      "Essencial para clorofila e fotossíntese",
      "Regula abertura estomática",
    ],
    stressCombat: "Suplementação com N ativa prolina, glicina betaína e proteínas que aumentam absorção de água, integridade de membrana e assimilação de CO₂.",
    note: "NO₃⁻ e NH₄⁺ têm efeitos antagônicos com Cl⁻ e Na⁺, auxiliando no ajuste osmótico.",
    management: "Aplicar N em cobertura entre V4 e V6. Em solos arenosos ou doses >120 kg/ha, parcelar obrigatoriamente.",
  },
  {
    symbol: "P",
    name: "Fósforo",
    extraction: "3.8 kg/t",
    exportPercent: "77-86%",
    functions: [
      "Componente do ATP (energia celular)",
      "Essencial para síntese de DNA e RNA",
      "Ativa enzimas e metabolismo de carboidratos",
      "Fundamental para divisão celular",
    ],
    stressCombat: "P permite que plantas desenvolvam respostas adaptativas eficientes, preservando recursos energéticos. Evita sobrecarga de processos fotossintéticos e reduz produção de EROs.",
    note: "Plantas ajustam transporte, armazenamento e realocação de fosfato (Pi) para manter metabolismo em condições adversas.",
    management: "Altíssima exportação (77-86%) exige reposição constante. Aplicar no sulco de plantio para máxima eficiência.",
  },
  {
    symbol: "K",
    name: "Potássio",
    extraction: "15.9 kg/t",
    exportPercent: "26-43%",
    functions: [
      "Regula abertura/fechamento estomático",
      "Ativa mais de 50 enzimas",
      "Transporte de fotossintatos no floema",
      "Fundamental para ajuste osmótico",
    ],
    stressCombat: "Plantas suplementadas com K desenvolvem paredes celulares mais fortes, melhor defesa contra patógenos e reparo de danos morfológicos.",
    note: "Deficiência reduz atividade de aquaporinas, prejudica condutância hidráulica da raiz e gera excesso de elétrons, estimulando EROs.",
    management: "Milho atua como 'bomba recicladora': absorção máxima aos 30-40 dias, 90% absorvido até V12-V15. Baixa exportação recicla via palhada.",
  },
  {
    symbol: "Ca",
    name: "Cálcio",
    extraction: "3.1 kg/t",
    exportPercent: "2-5%",
    functions: [
      "Rigidez estrutural de paredes celulares",
      "Estabilidade de membranas",
      "Movimento estomático",
      "Sinalização celular (Ca²⁺)",
    ],
    stressCombat: "Ca²⁺ atua como mensageiro secundário, ativando CaM (calmodulina) que modula o metabolismo vegetal em resposta a estresses térmicos e hídricos.",
    note: "Lesões nas folhas causadas por toxidez mineral apresentam altas concentrações de Ca, detectáveis por µXRF.",
    management: "Baixíssima exportação (2-5%). Calagem adequada supre a demanda. Excesso de calagem superficial pode induzir deficiência de Mn.",
  },
  {
    symbol: "Mg",
    name: "Magnésio",
    extraction: "3.6 kg/t",
    exportPercent: "15-20%",
    functions: [
      "Átomo central da molécula de clorofila",
      "Ativa enzimas (RNA polimerases, ATPases)",
      "Transporte de fotoassimilados",
      "Crescimento radicular",
    ],
    stressCombat: "Suplementação adequada de Mg melhora translocação de carboidratos, aumenta exportação do floema e reduz geração de ROS e dano foto-oxidativo ao cloroplasto.",
    note: "Deficiência causa desbalanço na partição de fotoassimilados, acúmulo de açúcares e amido, diminuindo fixação de CO₂ via Rubisco e gerando EROs.",
    management: "Usar calcário dolomítico quando necessário. Manter relação Ca:Mg adequada no solo.",
  },
  {
    symbol: "S",
    name: "Enxofre",
    extraction: "2.0 kg/t",
    exportPercent: "40-50%",
    functions: [
      "Componente de vitaminas e enzimas",
      "Presente em cisteína (aminoácido)",
      "Influencia fotossíntese e assimilação de N",
      "Desintoxicação celular",
    ],
    stressCombat: "Cisteína agregada pela ATP-sulfurilase confere resistência aos estresses abióticos por alto poder redox, envolvida na síntese de glutationa (GSH), fitoquelatinas (PCs) e metalotioneínas (MTs).",
    note: "GSH, PCs e MTs combatem EROs e mantém equilíbrio redox durante degradação de H₂O₂ sob estresse.",
    management: "Relação N:S importante para eficiência do N. Gesso agrícola é fonte eficiente de S e Ca.",
  },
];

const micronutrients = [
  {
    symbol: "Fe",
    name: "Ferro",
    extraction: "233 g/t",
    functions: [
      "Cofator de enzimas antioxidantes (SOD, CAT, APX)",
      "Componente da cadeia de transporte de elétrons",
      "Essencial para síntese de clorofila",
      "Respiração e fotossíntese",
    ],
    stressCombat: "Fertilização com Fe aumenta em 80% a atividade da SOD e 96% a atividade da CAT, amplificando o sistema de defesa contra estresse oxidativo.",
    note: "Excesso pode aumentar H₂O₂, que está envolvido na regulação de ferritinas.",
  },
  {
    symbol: "Mn",
    name: "Manganês",
    extraction: "38 g/t",
    functions: [
      "Modulador de fotossíntese e metabolismo antioxidante",
      "Cofator da MnSOD (Superóxido Dismutase)",
      "Estrutura de proteínas e enzimas de fosforilação",
    ],
    stressCombat: "Aplicação de Mn aumenta atividade de SOD, CAT, APX e GR, além de minimizar concentrações de H₂O₂ nas células vegetais.",
    note: "Excesso de calagem superficial pode induzir deficiência. Monitorar em solos com pH > 6.5.",
  },
  {
    symbol: "Zn",
    name: "Zinco",
    extraction: "44 g/t",
    critical: true,
    functions: [
      "Metabolismo de carboidratos, lipídios e ácidos nucleicos",
      "Desenvolvimento de cloroplastos",
      "Ativador de RNA polimerase, álcool desidrogenase, anidrase carbônica",
      "Cofator da ZnSOD",
    ],
    stressCombat: "Suplementação de Zn aumenta atividade de SOD, CAT, APX e GR, demonstrando que as enzimas são estimuladas a reduzir EROs.",
    note: "PRINCIPAL LIMITANTE NO CERRADO. Deficiência prejudica a fotossíntese por não-ativação da anidrase carbônica.",
  },
  {
    symbol: "Cu",
    name: "Cobre",
    extraction: "10 g/t",
    functions: [
      "Cofator em proteínas de transferência de elétrons",
      "Empilhamento de tilacóides",
      "Assimilação de nitrogênio",
      "Presente na Cu/ZnSOD",
    ],
    stressCombat: "Doses moderadas de Cu aumentam enzimas antioxidantes (SOD e CAT). Altas concentrações causam desequilíbrio nutricional.",
    note: "Plastocianina, Citocromo c oxidase, laccase estão relacionados com estruturação de membranas.",
  },
  {
    symbol: "B",
    name: "Boro",
    extraction: "19 g/t",
    functions: [
      "Lignificação de paredes vegetais",
      "Divisão celular e respiração",
      "Metabolismo de RNA e carboidratos",
      "Processo de fotossíntese",
    ],
    stressCombat: "Suplementação com boro aumenta antioxidantes enzimáticos (SOD, CAT, APX) e prolina.",
    note: "Excesso prejudica crescimento, divisão celular, fotossíntese e conteúdo de clorofila.",
  },
  {
    symbol: "Mo",
    name: "Molibdênio",
    extraction: "< 1 g/t",
    functions: [
      "Crescimento de raiz",
      "Biossíntese de clorofila",
      "Eficiência no uso da água e fotossíntese",
      "Assimilação de N e biossíntese de hormônios endógenos",
    ],
    stressCombat: "Suplementação ideal de Mo contribui para metabolismo antioxidante, aumentando atividade de SOD, CAT, APX e GR.",
    note: "Enzimas chave: Sulfito oxidase (SO), Xantina desidrogenase (XDH), Aldeído oxidase (AO), Nitrato redutase (NR).",
  },
  {
    symbol: "Ni",
    name: "Níquel",
    extraction: "< 1 g/t",
    functions: [
      "Sítio ativo de urease e nitrogenase",
      "Beneficia plantas com fixação biológica de N (FBN)",
      "Forma enzima antioxidante (NiSOD)",
      "Ativa isoforma reativa metilglioxal",
    ],
    stressCombat: "Ativa via de tolerância a estresses através da enzima NiSOD.",
    note: "Toxicidade causa danos oxidativos por superprodução de peróxido de hidrogênio.",
  },
];

const beneficialElements = [
  {
    symbol: "Si",
    name: "Silício",
    functions: [
      "Estimula crescimento e desenvolvimento",
      "Otimiza atividades enzimáticas",
      "Reduz EROs em resposta a enzimas antioxidantes e prolina",
      "Desintoxicação de boro, contribuindo para balanço osmótico",
    ],
    stressCombat: "Aplicação de Si em cana-de-açúcar reduziu EROs sob estresse hídrico. Associado a seca, salinidade, metais pesados, temperatura e luminosidade.",
  },
  {
    symbol: "Co",
    name: "Cobalto",
    functions: [
      "Formação de cobalamina (vitamina B12)",
      "Atividade de enzimas envolvidas na fixação de N",
      "Retardo da senescência foliar",
      "Inibição da biossíntese de etileno",
      "Aumento da resistência aos estresses abióticos",
    ],
    stressCombat: "Suplementação em doses ideais de Co é uma ferramenta para ativar sistemas de defesas das células vegetais.",
  },
  {
    symbol: "Se",
    name: "Selênio",
    functions: [
      "Aumenta produtividade e concentração de açúcares",
      "Aumenta aminoácidos, compostos nitrogenados e metabólitos secundários",
      "Beneficia desenvolvimento vegetal",
      "Inibe danos causados por secas, salinidade, metais pesados e temperaturas extremas",
    ],
    stressCombat: "Selenoproteínas formadas pelo Se agem como antioxidantes poderosos através da via da glutationa peroxidase (GSH), fornecendo atividade aumentada para compostos enzimáticos (SOD, CAT e APX) e não enzimáticos.",
  },
];

const deficiencySymptoms = [
  { nutrient: "Nitrogênio (N)", symptoms: "Amarelecimento de folhas velhas (clorose), começando das pontas. Plantas com crescimento reduzido." },
  { nutrient: "Fósforo (P)", symptoms: "Folhas com coloração arroxeada ou avermelhada. Sistema radicular pouco desenvolvido." },
  { nutrient: "Potássio (K)", symptoms: "Necrose (queima) nas bordas e pontas de folhas velhas. Colmos fracos e acamamento." },
  { nutrient: "Magnésio (Mg)", symptoms: "Clorose internerval em folhas velhas (nervuras permanecem verdes)." },
  { nutrient: "Enxofre (S)", symptoms: "Clorose uniforme em folhas novas. Crescimento reduzido." },
  { nutrient: "Zinco (Zn)", symptoms: "Faixas esbranquiçadas nas folhas novas. Internódios curtos. MAIS LIMITANTE NO CERRADO." },
  { nutrient: "Ferro (Fe)", symptoms: "Clorose internerval em folhas novas. Nervuras permanecem verdes inicialmente." },
  { nutrient: "Manganês (Mn)", symptoms: "Clorose internerval em folhas novas com pontos necróticos. Atenção em solos com pH alto." },
];

const MilhoPage = () => {
  const [area, setArea] = useState("");
  const [productivity, setProductivity] = useState("");
  const [stressLevel, setStressLevel] = useState("low");
  const [showResult, setShowResult] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculadora baseada em Embrapa Circular Técnica 78 (Coelho, 2006)
  const calculateNutrients = () => {
    const areaNum = parseFloat(area) || 1;
    const prodNum = parseFloat(productivity) || 180;
    const prodTon = (prodNum * 60) / 1000; // Converter sc/ha para t/ha
    
    // Extração baseada em Embrapa (kg por tonelada de grão)
    const extractionN = 20.8; // kg N/t
    const extractionP = 3.8;  // kg P2O5/t  
    const extractionK = 15.9; // kg K2O/t
    
    // Índices de exportação médios
    const exportN = 0.73; // 70-77%
    const exportP = 0.82; // 77-86%
    const exportK = 0.35; // 26-43%

    // Stress multiplier
    const stressMultiplier = stressLevel === "low" ? 1.0 : stressLevel === "medium" ? 1.15 : 1.3;

    // Extração total
    const nExtraction = Math.round(prodTon * extractionN * stressMultiplier);
    const pExtraction = Math.round(prodTon * extractionP * stressMultiplier);
    const kExtraction = Math.round(prodTon * extractionK * stressMultiplier);

    // Exportação nos grãos
    const nExport = Math.round(nExtraction * exportN);
    const pExport = Math.round(pExtraction * exportP);
    const kExport = Math.round(kExtraction * exportK);

    // Micronutrientes (g/ha para 9 t/ha, escalonado)
    const feExtraction = Math.round(prodTon * 233);
    const znExtraction = Math.round(prodTon * 44);
    const mnExtraction = Math.round(prodTon * 38);
    const bExtraction = Math.round(prodTon * 19);

    return { 
      n: nExtraction, p: pExtraction, k: kExtraction, 
      nExport, pExport, kExport,
      fe: feExtraction, zn: znExtraction, mn: mnExtraction, b: bExtraction,
      area: areaNum, 
      production: Math.round(prodNum * areaNum),
      prodTon: prodTon.toFixed(1)
    };
  };

  const result = calculateNutrients();

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/50 to-muted">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Início
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌽</span>
            <h1 className="font-semibold text-lg">Nutrição de Milho sob Estresse</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <ScrollReveal>
          <HeroParallax>
            <Card className="mb-8 overflow-hidden border-0 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-950/20 dark:to-yellow-950/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <FloatingElement amplitude={5} duration={4}>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white text-3xl shadow-lg">
                      🌽
                    </div>
                  </FloatingElement>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Compreendendo o Estresse em Plantas</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Plantas estressadas reduzem sua capacidade produtiva. Com mudanças climáticas cada vez mais intensas, 
                      entender a fisiologia do estresse e o papel da nutrição mineral é fundamental para manter a produção de alimentos.
                    </p>
                    <div className="mt-4 p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                        <strong>Importante:</strong> A nutrição adequada pode ser a diferença entre perder ou salvar uma lavoura sob condições adversas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </HeroParallax>
        </ScrollReveal>

        {/* Stress Types */}
        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Principais Estresses Abióticos
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {stressTypes.map((stress, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                  <div className="text-amber-600 dark:text-amber-400 mb-2 flex justify-center">
                    {stress.icon}
                  </div>
                  <h4 className="font-semibold text-sm">{stress.title}</h4>
                  <p className="text-xs text-muted-foreground">{stress.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Nutrient Extraction Table - Embrapa Data */}
        <ScrollReveal delay={0.15}>
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Extração e Exportação de Nutrientes</CardTitle>
                  <p className="text-xs text-muted-foreground">Base: 9 t/ha • Fonte: Embrapa Circular Técnica 78</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium">Nutriente</th>
                      <th className="text-right py-2 font-medium">Extração</th>
                      <th className="text-right py-2 font-medium">Por tonelada</th>
                      <th className="text-right py-2 font-medium">Exportação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutrientExtraction.macros.map((item) => (
                      <tr key={item.nutrient} className="border-b border-border/50">
                        <td className="py-2">
                          <span className="font-medium">{item.nutrient}</span>
                          <span className="text-muted-foreground ml-1">({item.name})</span>
                        </td>
                        <td className="text-right py-2">{item.extraction} kg/ha</td>
                        <td className="text-right py-2">{item.perTon} kg/t</td>
                        <td className="text-right py-2">
                          <Badge variant={parseInt(item.exportPercent) > 70 ? "destructive" : "secondary"} className="text-xs">
                            {item.exportPercent}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium text-sm mb-3">Micronutrientes (g/ha para 9 t/ha)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {nutrientExtraction.micros.map((item) => (
                    <div key={item.nutrient} className={`p-3 rounded-lg text-center ${item.critical ? 'bg-destructive/10 border border-destructive/30' : 'bg-muted/50'}`}>
                      <div className="font-bold text-lg">{item.nutrient}</div>
                      <div className="text-sm text-muted-foreground">{item.extraction} g/ha</div>
                      {item.critical && <Badge variant="destructive" className="mt-1 text-xs">Crítico</Badge>}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Absorption Curve - ESALQ/USP Data */}
        <ScrollReveal delay={0.18}>
          <Collapsible open={expandedCards["absorption"]} onOpenChange={() => toggleCard("absorption")}>
            <Card className="mb-6">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <CardTitle className="text-lg">Marcha de Absorção por Estádio</CardTitle>
                      <p className="text-xs text-muted-foreground">Fonte: ESALQ/USP - Visão Agrícola 13 (Fancelli)</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedCards["absorption"] ? "rotate-180" : ""}`} />
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {absorptionCurve.map((stage) => (
                      <div key={stage.stage} className={`p-4 rounded-lg ${stage.critical ? 'bg-destructive/5 border border-destructive/20' : 'bg-muted/30'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={stage.critical ? "destructive" : "outline"}>{stage.stage}</Badge>
                            <span className="text-xs text-muted-foreground">DAP: {stage.dap}</span>
                          </div>
                          {stage.critical && <Badge variant="destructive" className="text-xs">Período Crítico</Badge>}
                        </div>
                        <p className="text-sm mb-3">{stage.description}</p>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>N</span>
                              <span>{stage.n}%</span>
                            </div>
                            <Progress value={stage.n} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>P</span>
                              <span>{stage.p}%</span>
                            </div>
                            <Progress value={stage.p} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>K</span>
                              <span>{stage.k}%</span>
                            </div>
                            <Progress value={stage.k} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-sm">
                      <strong>Insight ESALQ:</strong> O K tem absorção extremamente precoce - 90% é absorvido até V12-V15. 
                      N e P têm dois picos: V12-V18 (definição de grãos potenciais) e fase reprodutiva (enchimento).
                    </p>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </ScrollReveal>

        {/* Stress Phases */}
        <ScrollReveal delay={0.2}>
          <Collapsible open={expandedCards["phases"]} onOpenChange={() => toggleCard("phases")}>
            <Card className="mb-6">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      📊
                    </div>
                    <CardTitle className="text-lg">As 4 Fases da Resposta ao Estresse</CardTitle>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedCards["phases"] ? "rotate-180" : ""}`} />
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="grid gap-4">
                    {stressPhases.map((phase) => (
                      <div key={phase.number} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold shrink-0">
                          {phase.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{phase.title}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{phase.subtitle}</p>
                          <p className="text-sm">{phase.description}</p>
                          {phase.warning && (
                            <div className="mt-2 p-2 bg-destructive/10 border border-destructive/20 rounded text-sm text-destructive flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4" />
                              {phase.warning}
                            </div>
                          )}
                          {phase.success && (
                            <div className="mt-2 p-2 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded text-sm text-green-700 dark:text-green-300 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              {phase.success}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </ScrollReveal>

        {/* Oxidative Stress */}
        <ScrollReveal delay={0.3}>
          <Collapsible open={expandedCards["oxidative"]} onOpenChange={() => toggleCard("oxidative")}>
            <Card className="mb-6">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      ⚡
                    </div>
                    <CardTitle className="text-lg">Combate ao Estresse Oxidativo</CardTitle>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedCards["oxidative"] ? "rotate-180" : ""}`} />
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    Quando plantas sofrem estresse intenso, produzem Espécies Reativas de Oxigênio (EROs) em excesso, 
                    danificando membranas celulares, proteínas e DNA.
                  </p>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg mb-4">
                    <p className="text-sm">
                      <strong>Principais EROs:</strong> O₂⁻ (superóxido), H₂O₂ (peróxido de hidrogênio), OH⁻ (radical hidroxil), ¹O₂ (oxigênio singleto)
                    </p>
                  </div>

                  <p className="text-sm mb-3"><strong>As plantas combatem EROs através de:</strong></p>
                  <ul className="text-sm space-y-1 mb-4 ml-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span><strong>Enzimas antioxidantes:</strong> SOD, CAT, GPX, APX</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span><strong>Antioxidantes não-enzimáticos:</strong> Tocoferóis, carotenóides, ascorbato, glutationa</span>
                    </li>
                  </ul>

                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
                    <p className="text-sm">
                      💡 <strong>Solução:</strong> A nutrição mineral adequada ativa esses sistemas de defesa!
                    </p>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </ScrollReveal>

        {/* Macronutrients */}
        <ScrollReveal delay={0.4}>
          <div className="mb-8">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Macronutrientes Essenciais
            </h3>
            <Tabs defaultValue="N" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-1 mb-4 bg-transparent">
                {macronutrients.map((nutrient) => (
                  <TabsTrigger
                    key={nutrient.symbol}
                    value={nutrient.symbol}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-lg"
                  >
                    {nutrient.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {macronutrients.map((nutrient) => (
                <TabsContent key={nutrient.symbol} value={nutrient.symbol}>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-lg text-sm font-bold">
                          {nutrient.symbol}
                        </span>
                        <CardTitle>{nutrient.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Funções principais:</h4>
                      <ul className="space-y-1 mb-4">
                        {nutrient.functions.map((func, i) => (
                          <li key={i} className="text-sm flex items-start gap-2 py-1 border-b border-border/50 last:border-0">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {func}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg mb-3">
                        <p className="text-sm">
                          <strong>Combate ao estresse:</strong> {nutrient.stressCombat}
                        </p>
                      </div>
                      
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
                        <p className="text-sm text-muted-foreground">
                          <Info className="w-4 h-4 inline mr-1" />
                          {nutrient.note}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </ScrollReveal>

        {/* Micronutrients */}
        <ScrollReveal delay={0.5}>
          <div className="mb-8">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Micronutrientes Estratégicos
            </h3>
            <Tabs defaultValue="Fe" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-1 mb-4 bg-transparent">
                {micronutrients.map((nutrient) => (
                  <TabsTrigger
                    key={nutrient.symbol}
                    value={nutrient.symbol}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-lg"
                  >
                    {nutrient.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {micronutrients.map((nutrient) => (
                <TabsContent key={nutrient.symbol} value={nutrient.symbol}>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-lg text-sm font-bold">
                          {nutrient.symbol}
                        </span>
                        <CardTitle>{nutrient.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Funções principais:</h4>
                      <ul className="space-y-1 mb-4">
                        {nutrient.functions.map((func, i) => (
                          <li key={i} className="text-sm flex items-start gap-2 py-1 border-b border-border/50 last:border-0">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {func}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg mb-3">
                        <p className="text-sm">
                          <strong>Combate ao estresse:</strong> {nutrient.stressCombat}
                        </p>
                      </div>
                      
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
                        <p className="text-sm text-muted-foreground">
                          <Info className="w-4 h-4 inline mr-1" />
                          {nutrient.note}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </ScrollReveal>

        {/* Beneficial Elements */}
        <ScrollReveal delay={0.6}>
          <div className="mb-8">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Elementos Benéficos
            </h3>
            <Tabs defaultValue="Si" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-1 mb-4 bg-transparent">
                {beneficialElements.map((element) => (
                  <TabsTrigger
                    key={element.symbol}
                    value={element.symbol}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-lg"
                  >
                    {element.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {beneficialElements.map((element) => (
                <TabsContent key={element.symbol} value={element.symbol}>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-gradient-to-br from-emerald-500 to-green-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                          {element.symbol}
                        </span>
                        <CardTitle>{element.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Funções principais:</h4>
                      <ul className="space-y-1 mb-4">
                        {element.functions.map((func, i) => (
                          <li key={i} className="text-sm flex items-start gap-2 py-1 border-b border-border/50 last:border-0">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {func}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
                        <p className="text-sm">
                          <strong>Combate ao estresse:</strong> {element.stressCombat}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </ScrollReveal>

        {/* Practical Tools */}
        <ScrollReveal delay={0.7}>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">
            Ferramentas Práticas
          </h3>

          {/* Calculator */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Calculadora de Extração - Milho</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Baseado em Embrapa Circular Técnica 78 (Coelho, 2006)
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="area">Área (hectares)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Ex: 100"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productivity">Meta de produtividade (sc/ha)</Label>
                  <Input
                    id="productivity"
                    type="number"
                    placeholder="Ex: 180"
                    value={productivity}
                    onChange={(e) => setProductivity(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stress">Condição de estresse esperada</Label>
                  <Select value={stressLevel} onValueChange={setStressLevel}>
                    <SelectTrigger id="stress">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Baixo (condições normais)</SelectItem>
                      <SelectItem value="medium">Médio (seca moderada)</SelectItem>
                      <SelectItem value="high">Alto (seca severa ou salinidade)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={() => setShowResult(true)} className="mb-4">
                Calcular Extração
              </Button>

              {showResult && (
                <div className="space-y-4">
                  {/* Summary */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Área</p>
                        <p className="font-bold text-lg">{result.area} ha</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Meta</p>
                        <p className="font-bold text-lg">{result.production.toLocaleString()} sc</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Produtividade</p>
                        <p className="font-bold text-lg">{result.prodTon} t/ha</p>
                      </div>
                    </div>
                  </div>

                  {/* Macronutrients */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-primary" />
                      Macronutrientes - Extração Total (kg/ha)
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary">{result.n}</div>
                        <div className="text-xs text-muted-foreground">N (Nitrogênio)</div>
                        <div className="text-xs mt-1">
                          <Badge variant="outline" className="text-xs">Exporta: {result.nExport} kg</Badge>
                        </div>
                      </div>
                      <div className="text-center p-3 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary">{result.p}</div>
                        <div className="text-xs text-muted-foreground">P₂O₅ (Fósforo)</div>
                        <div className="text-xs mt-1">
                          <Badge variant="destructive" className="text-xs">Exporta: {result.pExport} kg</Badge>
                        </div>
                      </div>
                      <div className="text-center p-3 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary">{result.k}</div>
                        <div className="text-xs text-muted-foreground">K₂O (Potássio)</div>
                        <div className="text-xs mt-1">
                          <Badge variant="secondary" className="text-xs">Exporta: {result.kExport} kg</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Micronutrients */}
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-3 text-sm">Micronutrientes - Extração (g/ha)</h4>
                    <div className="grid grid-cols-4 gap-3 text-center">
                      <div className="p-2 bg-background rounded">
                        <div className="font-bold">{result.fe}</div>
                        <div className="text-xs text-muted-foreground">Fe</div>
                      </div>
                      <div className="p-2 bg-destructive/10 rounded border border-destructive/30">
                        <div className="font-bold text-destructive">{result.zn}</div>
                        <div className="text-xs text-muted-foreground">Zn ⚠️</div>
                      </div>
                      <div className="p-2 bg-background rounded">
                        <div className="font-bold">{result.mn}</div>
                        <div className="text-xs text-muted-foreground">Mn</div>
                      </div>
                      <div className="p-2 bg-background rounded">
                        <div className="font-bold">{result.b}</div>
                        <div className="text-xs text-muted-foreground">B</div>
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="p-3 bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <p className="text-xs text-amber-800 dark:text-amber-200">
                      ⚠️ Esta é uma estimativa de extração baseada em literatura científica. A recomendação de adubação 
                      deve considerar análise de solo, eficiência de absorção e histórico da área. Consulte um engenheiro agrônomo.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Deficiency Identification */}
        <ScrollReveal delay={0.8}>
          <Collapsible open={expandedCards["deficiency"]} onOpenChange={() => toggleCard("deficiency")}>
            <Card className="mb-6">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Search className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Identificação Rápida de Deficiências</CardTitle>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedCards["deficiency"] ? "rotate-180" : ""}`} />
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {deficiencySymptoms.map((item, index) => (
                      <div key={index} className="p-3 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">{item.nutrient}</h4>
                        <p className="text-xs text-muted-foreground">{item.symptoms}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </ScrollReveal>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground mt-8 space-y-1">
          <p>Dados baseados em Embrapa Circular Técnica 78 (Coelho, 2006) e ESALQ/USP Visão Agrícola 13</p>
          <p className="text-xs">GEFEN - Nutrição de Plantas</p>
        </div>
      </main>
    </div>
  );
};

export default MilhoPage;
