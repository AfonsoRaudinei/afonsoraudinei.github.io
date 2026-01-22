import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, Droplets, ThermometerSun, Sun, FlaskConical, Sparkles, Leaf, Calculator, Search, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollReveal, StaggerContainer, HeroParallax, FloatingElement } from "@/components/ui/scroll-animations";

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
    functions: [
      "Componente de proteínas e aminoácidos",
      "Presente em ácidos nucleicos (DNA/RNA)",
      "Essencial para clorofila e fotossíntese",
      "Regula abertura estomática",
    ],
    stressCombat: "Suplementação com N ativa prolina, glicina betaína e proteínas que aumentam absorção de água, integridade de membrana e assimilação de CO₂.",
    note: "NO₃⁻ e NH₄⁺ têm efeitos antagônicos com Cl⁻ e Na⁺, auxiliando no ajuste osmótico.",
  },
  {
    symbol: "P",
    name: "Fósforo",
    functions: [
      "Componente do ATP (energia celular)",
      "Essencial para síntese de DNA e RNA",
      "Ativa enzimas e metabolismo de carboidratos",
      "Fundamental para divisão celular",
    ],
    stressCombat: "P permite que plantas desenvolvam respostas adaptativas eficientes, preservando recursos energéticos. Evita sobrecarga de processos fotossintéticos e reduz produção de EROs.",
    note: "Plantas ajustam transporte, armazenamento e realocação de fosfato (Pi) para manter metabolismo em condições adversas.",
  },
  {
    symbol: "K",
    name: "Potássio",
    functions: [
      "Regula abertura/fechamento estomático",
      "Ativa mais de 50 enzimas",
      "Transporte de fotossintatos no floema",
      "Fundamental para ajuste osmótico",
    ],
    stressCombat: "Plantas suplementadas com K desenvolvem paredes celulares mais fortes, melhor defesa contra patógenos e reparo de danos morfológicos.",
    note: "Deficiência reduz atividade de aquaporinas, prejudica condutância hidráulica da raiz e gera excesso de elétrons, estimulando EROs.",
  },
  {
    symbol: "Ca",
    name: "Cálcio",
    functions: [
      "Rigidez estrutural de paredes celulares",
      "Estabilidade de membranas",
      "Movimento estomático",
      "Sinalização celular (Ca²⁺)",
    ],
    stressCombat: "Ca²⁺ atua como mensageiro secundário, ativando CaM (calmodulina) que modula o metabolismo vegetal em resposta a estresses térmicos e hídricos.",
    note: "Lesões nas folhas causadas por toxidez mineral apresentam altas concentrações de Ca, detectáveis por µXRF.",
  },
  {
    symbol: "Mg",
    name: "Magnésio",
    functions: [
      "Átomo central da molécula de clorofila",
      "Ativa enzimas (RNA polimerases, ATPases)",
      "Transporte de fotoassimilados",
      "Crescimento radicular",
    ],
    stressCombat: "Suplementação adequada de Mg melhora translocação de carboidratos, aumenta exportação do floema e reduz geração de ROS e dano foto-oxidativo ao cloroplasto.",
    note: "Deficiência causa desbalanço na partição de fotoassimilados, acúmulo de açúcares e amido, diminuindo fixação de CO₂ via Rubisco e gerando EROs.",
  },
  {
    symbol: "S",
    name: "Enxofre",
    functions: [
      "Componente de vitaminas e enzimas",
      "Presente em cisteína (aminoácido)",
      "Influencia fotossíntese e assimilação de N",
      "Desintoxicação celular",
    ],
    stressCombat: "Cisteína agregada pela ATP-sulfurilase confere resistência aos estresses abióticos por alto poder redox, envolvida na síntese de glutationa (GSH), fitoquelatinas (PCs) e metalotioneínas (MTs).",
    note: "GSH, PCs e MTs combatem EROs e mantém equilíbrio redox durante degradação de H₂O₂ sob estresse.",
  },
];

const micronutrients = [
  {
    symbol: "Fe",
    name: "Ferro",
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
    functions: [
      "Modulador de fotossíntese e metabolismo antioxidante",
      "Cofator da MnSOD (Superóxido Dismutase)",
      "Estrutura de proteínas e enzimas de fosforilação",
    ],
    stressCombat: "Aplicação de Mn aumenta atividade de SOD, CAT, APX e GR, além de minimizar concentrações de H₂O₂ nas células vegetais.",
    note: "Excesso causa degradação da membrana lipídica e outros compostos orgânicos.",
  },
  {
    symbol: "Zn",
    name: "Zinco",
    functions: [
      "Metabolismo de carboidratos, lipídios e ácidos nucleicos",
      "Desenvolvimento de cloroplastos",
      "Ativador de RNA polimerase, álcool desidrogenase, anidrase carbônica",
      "Cofator da ZnSOD",
    ],
    stressCombat: "Suplementação de Zn aumenta atividade de SOD, CAT, APX e GR, demonstrando que as enzimas são estimuladas a reduzir EROs.",
    note: "Deficiência prejudica principalmente a fotossíntese por não-ativação da anidrase carbônica.",
  },
  {
    symbol: "Cu",
    name: "Cobre",
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
  { nutrient: "Zinco (Zn)", symptoms: "Faixas esbranquiçadas nas folhas novas. Internódios curtos." },
  { nutrient: "Ferro (Fe)", symptoms: "Clorose internerval em folhas novas. Nervuras permanecem verdes inicialmente." },
  { nutrient: "Manganês (Mn)", symptoms: "Clorose internerval em folhas novas com pontos necróticos." },
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

  const calculateNutrients = () => {
    const areaNum = parseFloat(area) || 1;
    const prodNum = parseFloat(productivity) || 180;
    
    // Base extraction per ton of grain
    const baseN = 25; // kg N per ton
    const baseP = 10; // kg P2O5 per ton
    const baseK = 20; // kg K2O per ton

    // Stress multiplier
    const stressMultiplier = stressLevel === "low" ? 1.0 : stressLevel === "medium" ? 1.15 : 1.3;

    const nRecommendation = Math.round((prodNum * 60 / 1000) * baseN * stressMultiplier);
    const pRecommendation = Math.round((prodNum * 60 / 1000) * baseP * stressMultiplier);
    const kRecommendation = Math.round((prodNum * 60 / 1000) * baseK * stressMultiplier);

    return { n: nRecommendation, p: pRecommendation, k: kRecommendation, area: areaNum, production: Math.round(prodNum * areaNum) };
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
                <CardTitle className="text-lg">Calculadora de Nutrientes - Milho</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Estime necessidades nutricionais básicas para sua lavoura</p>
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
                Calcular Recomendação
              </Button>

              {showResult && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    Recomendação Estimada
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm mb-3">
                    <p><strong>Área total:</strong> {result.area} hectares</p>
                    <p><strong>Meta de produção:</strong> {result.production.toLocaleString()} sacas</p>
                  </div>
                  <div className="h-px bg-green-200 dark:bg-green-800 my-3" />
                  <div className="grid sm:grid-cols-3 gap-2 text-sm">
                    <p><strong>N (Nitrogênio):</strong> {result.n} kg/ha</p>
                    <p><strong>P₂O₅ (Fósforo):</strong> {result.p} kg/ha</p>
                    <p><strong>K₂O (Potássio):</strong> {result.k} kg/ha</p>
                  </div>
                  <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <p className="text-xs text-amber-800 dark:text-amber-200">
                      ⚠️ Esta é uma estimativa simplificada. Sempre realize análise de solo e consulte um engenheiro agrônomo para recomendação precisa.
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
        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>Dados de nutrição de milho sob estresse • GEFEN - Nutrição de Plantas</p>
        </div>
      </main>
    </div>
  );
};

export default MilhoPage;
