import { Droplets, AlertTriangle, Leaf, FlaskConical, Dna, ArrowLeftRight, Bug, Sparkles, Atom } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder, ImageGrid } from "./ImagePlaceholder";
import { 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  HeroParallax,
  FloatingElement 
} from "@/components/ui/scroll-animations";

const CobaltoContent = () => (
  <div className="min-h-screen overflow-hidden">
    {/* Header Hero with Parallax */}
    <div className="relative bg-gradient-to-br from-rose-600 to-pink-800 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      
      {/* Floating decorative elements */}
      <FloatingElement className="absolute top-10 right-10" amplitude={15} duration={5}>
        <div className="w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-10 left-10" amplitude={10} duration={4}>
        <div className="w-24 h-24 bg-white/10 rounded-full blur-xl" />
      </FloatingElement>
      <FloatingElement className="absolute top-1/2 left-1/4" amplitude={8} duration={6}>
        <div className="w-16 h-16 bg-white/5 rounded-full blur-lg" />
      </FloatingElement>
      
      <HeroParallax className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="down" duration={0.8}>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-rose-300/30">
              <span className="text-5xl font-bold text-rose-600">Co</span>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Cobalto (Co)</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            Micronutriente essencial para a fixação biológica de nitrogênio em leguminosas. 
            Componente da vitamina B12 (cobalamina) necessária às bactérias fixadoras de N₂.
          </p>
        </ScrollReveal>
        
        {/* Quick Stats */}
        <StaggerContainer className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto" staggerDelay={0.15}>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">2-3</p>
              <p className="text-white/70 text-sm">g/ha recomendado</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">Co²⁺</p>
              <p className="text-white/70 text-sm">forma absorvida</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">B12</p>
              <p className="text-white/70 text-sm">vitamina dependente</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </HeroParallax>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-rose-600 to-pink-800 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Sulfato de Cobalto", info: "CoSO₄·7H₂O\n21% Co", desc: "Tratamento sementes" },
              { nome: "Cloreto de Cobalto", info: "CoCl₂·6H₂O\n24% Co", desc: "Solúvel em água" },
              { nome: "Nitrato de Cobalto", info: "Co(NO₃)₂\n20% Co", desc: "Aplicação foliar" },
              { nome: "CoMo Líquido", info: "Co + Mo\nFormulação TS", desc: "Padrão soja" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-rose-700 font-bold text-sm mb-2">{f.nome}</h3>
                <p className="text-foreground text-xs whitespace-pre-line font-medium">{f.info}</p>
                <p className="text-muted-foreground text-[10px] mt-2 uppercase tracking-wide">{f.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Imagens de Fontes */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <FlaskConical className="w-5 h-5 text-rose-600" />
          Fertilizantes com Cobalto
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Sulfato de Cobalto", description: "Cristais rosados" },
            { title: "Cloreto de Cobalto", description: "Solução vermelha" },
            { title: "CoMo Líquido", description: "Tratamento de sementes" },
            { title: "FTE com Co", description: "Fritas completas" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border-l-4 border-rose-500 p-6 rounded-lg shadow-md">
        <h4 className="text-rose-800 dark:text-rose-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-rose-900 dark:text-rose-100 mb-4 leading-relaxed">
              O cobalto é absorvido pelas plantas na forma de <strong>Co²⁺</strong>. Sua disponibilidade
              é influenciada pelo pH, matéria orgânica e teor de óxidos de Fe e Mn no solo.
            </p>
            <ul className="space-y-2 text-rose-800 dark:text-rose-200">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span><strong>Teor no solo:</strong> 1-40 mg/kg (muito variável)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span><strong>pH ácido:</strong> aumenta disponibilidade de Co²⁺</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span><strong>Adsorção:</strong> óxidos de Mn competem fortemente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span><strong>Imóvel no floema:</strong> não redistribuído na planta</span>
              </li>
            </ul>
          </div>
          <div>
            <ImagePlaceholder 
              title="Cobalto no Solo"
              description="Adsorção por óxidos de Fe e Mn"
              aspectRatio="video"
            />
          </div>
        </div>
      </div>

      {/* Por que é Especial */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200 dark:border-amber-800 p-6 rounded-2xl shadow-md">
        <h4 className="text-amber-800 dark:text-amber-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          Por que o Cobalto é Especial?
        </h4>
        <div className="space-y-4 text-amber-900 dark:text-amber-100">
          <p className="leading-relaxed">
            O cobalto <strong>não é essencial para a planta em si</strong>, mas é absolutamente 
            essencial para as <strong>bactérias fixadoras de nitrogênio</strong> (Bradyrhizobium) 
            que vivem em simbiose com as leguminosas.
          </p>
          <div className="bg-white/60 dark:bg-black/20 rounded-xl p-4">
            <p className="text-sm font-medium">
              🧬 <strong>Vitamina B12:</strong> O cobalto é o átomo central da cobalamina (vitamina B12), 
              coenzima essencial para a síntese de leghemoglobina e metabolismo do Bradyrhizobium.
            </p>
          </div>
        </div>
      </div>

      {/* Principais Funções */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Principais Funções do Cobalto
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Atom,
              titulo: "Vitamina B12 (Cobalamina)",
              descricao: "Componente central da vitamina B12, essencial para o metabolismo do Bradyrhizobium. Sem Co, a bactéria não consegue multiplicar e fixar N₂ eficientemente.",
              cor: "from-rose-500 to-pink-600"
            },
            {
              icon: Bug,
              titulo: "Fixação Biológica de N₂",
              descricao: "Através da B12, o Co participa indiretamente na síntese de leghemoglobina, proteína que regula o O₂ nos nódulos e protege a nitrogenase.",
              cor: "from-green-500 to-emerald-600"
            },
            {
              icon: Dna,
              titulo: "Síntese de DNA (bacteriano)",
              descricao: "A B12 é coenzima da ribonucleotídeo redutase, enzima necessária para síntese de DNA nas bactérias fixadoras.",
              cor: "from-blue-500 to-indigo-600"
            },
            {
              icon: Leaf,
              titulo: "Nodulação Eficiente",
              descricao: "Nódulos bem formados com interior rosado (leghemoglobina) indicam boa disponibilidade de Co e Mo para a simbiose.",
              cor: "from-amber-500 to-orange-600"
            }
          ].map((func, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`bg-gradient-to-r ${func.cor} p-4`}>
                <func.icon className="w-8 h-8 text-white" />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold text-lg text-foreground mb-2">{func.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{func.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Imagens das Funções */}
      <section>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Estrutura B12", description: "Cobalto no centro" },
            { title: "Nódulos Rosados", description: "Leghemoglobina ativa" },
            { title: "Bradyrhizobium", description: "Bactéria fixadora" },
            { title: "Simbiose", description: "Raiz + bactéria" },
          ]}
        />
      </section>

      {/* Relação com a Soja */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
        <h4 className="text-green-800 dark:text-green-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Bug className="w-6 h-6" />
          Importância na Cultura da Soja
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-green-900 dark:text-green-100 mb-4 leading-relaxed">
              A soja é a cultura que mais se beneficia do Co, pois depende da FBN para 
              suprir sua alta demanda de nitrogênio (80+ kg N/ton de grãos).
            </p>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Dose via TS:</strong> 2-3 g de Co/ha</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Aplicação:</strong> Junto com Mo antes da inoculação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Resultado:</strong> Nódulos maiores e mais ativos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>FBN otimizada:</strong> 200-300 kg N/ha possíveis</span>
              </li>
            </ul>
          </div>
          <div>
            <ImagePlaceholder 
              title="Nódulos de Soja"
              description="Interior rosado = boa FBN"
              aspectRatio="video"
            />
          </div>
        </div>
      </div>

      {/* Deficiência */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Sintomas de Deficiência</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Sintomas Semelhantes à Deficiência de N</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Como afeta a FBN, os sintomas são similares à falta de nitrogênio: 
                clorose generalizada, crescimento reduzido e baixo teor de proteína.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Nódulos Pequenos e Ineficientes</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Nódulos com interior verde ou branco ao invés de rosa. Poucos nódulos 
                por planta e baixa atividade da nitrogenase.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Redução de Produtividade</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Sem FBN eficiente, a planta depende do N do solo, que geralmente 
                é insuficiente, resultando em menor produtividade.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Difícil Diagnóstico Visual</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Como não afeta diretamente a planta, a deficiência só é percebida 
                pela baixa nodulação e produtividade. Análise de nódulos é essencial.
              </p>
            </div>
          </div>
          <div>
            <ImagePlaceholder
              title="Comparação de Nódulos"
              description="Com vs. sem Co adequado"
              aspectRatio="video"
            />
            <p className="text-center mt-4 text-sm font-semibold text-orange-700 dark:text-orange-400">
              ⚠ A deficiência de Co afeta o Bradyrhizobium, não a planta diretamente!
            </p>
          </div>
        </div>
      </section>

      {/* Galeria de Deficiência */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">Comparações Visuais</h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Nódulos com Co", description: "Grandes e rosados" },
            { title: "Nódulos sem Co", description: "Pequenos e verdes" },
            { title: "Raízes comparadas", description: "Nodulação diferencial" },
          ]}
        />
      </section>

      {/* CoMo - Tratamento de Sementes */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Bug className="w-6 h-6 text-rose-600" />
          Aplicação de CoMo na Soja
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-rose-700 dark:text-rose-400">Por que aplicar Co + Mo juntos?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Co:</span>
                  <span className="text-muted-foreground text-sm">Necessário para síntese de B12 no Bradyrhizobium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Mo:</span>
                  <span className="text-muted-foreground text-sm">Componente da nitrogenase (enzima da FBN)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Sinergia:</span>
                  <span className="text-muted-foreground text-sm">Ambos são essenciais para FBN eficiente</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-700 dark:text-green-400">Doses e Aplicação</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Co:</span>
                  <span className="text-muted-foreground text-sm">2-3 g/ha via tratamento de sementes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Mo:</span>
                  <span className="text-muted-foreground text-sm">12-25 g/ha via tratamento de sementes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Ordem:</span>
                  <span className="text-muted-foreground text-sm">CoMo → Secagem → Inoculante</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interações Nutricionais */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6 text-rose-600" />
          Interações Nutricionais
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-rose-200 dark:border-rose-800">
            <CardHeader className="pb-2 bg-rose-50 dark:bg-rose-950/30">
              <CardTitle className="text-base text-rose-700 dark:text-rose-400">⚠ Antagonismos</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Mn:</span>
                  <span className="text-muted-foreground text-sm">Óxidos de Mn adsorvem Co fortemente no solo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Fe:</span>
                  <span className="text-muted-foreground text-sm">Compete pela absorção radicular</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">pH alto:</span>
                  <span className="text-muted-foreground text-sm">Reduz disponibilidade de Co²⁺</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/30">
              <CardTitle className="text-base text-green-700 dark:text-green-400">✓ Sinergias</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Mo:</span>
                  <span className="text-muted-foreground text-sm">Juntos maximizam a FBN em leguminosas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">N:</span>
                  <span className="text-muted-foreground text-sm">Co adequado = mais N fixado biologicamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">P:</span>
                  <span className="text-muted-foreground text-sm">ATP necessário para FBN requer P adequado</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resumo Prático */}
      <div className="bg-gradient-to-br from-rose-600 to-pink-700 text-white rounded-3xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Resumo Prático: Cobalto na Soja</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
            <p className="text-4xl font-bold mb-2">2-3 g/ha</p>
            <p className="text-white/80 text-sm">Dose via tratamento de sementes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
            <p className="text-4xl font-bold mb-2">+ Mo</p>
            <p className="text-white/80 text-sm">Sempre aplicar junto com molibdênio</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
            <p className="text-4xl font-bold mb-2">Rosa</p>
            <p className="text-white/80 text-sm">Cor dos nódulos com FBN ativa</p>
          </div>
        </div>
        <p className="text-center text-white/90 mt-6 text-sm">
          💡 O cobalto é essencial para o Bradyrhizobium, não para a planta. Sem Co, a bactéria não produz 
          vitamina B12 e a fixação biológica de nitrogênio é severamente comprometida.
        </p>
      </div>

    </div>
  </div>
);

export default CobaltoContent;
