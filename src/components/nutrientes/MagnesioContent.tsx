import { Droplets, AlertTriangle, Sun, Leaf, Zap, FlaskConical, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder, ImageGrid } from "./ImagePlaceholder";
import { 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  HeroParallax,
  FloatingElement,
  ScaleOnScroll
} from "@/components/ui/scroll-animations";

const MagnesioContent = () => (
  <div className="min-h-screen overflow-hidden">
    {/* Header Hero with Parallax */}
    <div className="relative bg-gradient-to-br from-lime-500 to-lime-700 text-white py-16 px-6 overflow-hidden">
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
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-lime-300/30">
              <span className="text-5xl font-bold text-lime-600">Mg</span>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Magnésio (Mg)</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            Átomo central da molécula de clorofila, fundamental para a fotossíntese. 
            Atua como cofator de mais de 300 enzimas e participa ativamente do transporte de fotoassimilados.
          </p>
        </ScrollReveal>
        
        {/* Quick Stats */}
        <StaggerContainer className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto" staggerDelay={0.15}>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">78</p>
              <p className="text-white/70 text-sm">kg/ha extraídos</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">13-18%</p>
              <p className="text-white/70 text-sm">exportação</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">Mg²⁺</p>
              <p className="text-white/70 text-sm">forma absorvida</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </HeroParallax>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <ScaleOnScroll>
        <Card className="bg-gradient-to-br from-lime-500 to-lime-700 text-white border-0 shadow-xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl text-center uppercase tracking-wider">
              <FlaskConical className="w-6 h-6 inline mr-2" />
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
              {[
                { nome: "Calcário Dolomítico", info: "CaCO₃·MgCO₃\n10-14% Mg", desc: "+Cálcio" },
                { nome: "Sulfato de Magnésio", info: "MgSO₄\n9-10% Mg", desc: "+Enxofre" },
                { nome: "Óxido de Magnésio", info: "MgO\n55-60% Mg", desc: "Alta concentração" },
                { nome: "Kieserita", info: "MgSO₄·H₂O\n16-18% Mg", desc: "Solúvel" }
              ].map((f, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-lime-700 font-bold text-sm mb-2">{f.nome}</h3>
                    <p className="text-foreground text-xs whitespace-pre-line font-medium">{f.info}</p>
                    <p className="text-muted-foreground text-[10px] mt-2 uppercase tracking-wide">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </CardContent>
        </Card>
      </ScaleOnScroll>

      {/* Imagens de Fontes */}
      <ScrollReveal direction="left">
        <section>
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-lime-600" />
            Fertilizantes com Magnésio
          </h3>
          <ImageGrid
            columns={4}
            aspectRatio="square"
            images={[
              { title: "Calcário Dolomítico", description: "Grânulos acinzentados" },
              { title: "Sulfato de Magnésio", description: "Cristais brancos (Epsom)" },
              { title: "Óxido de Magnésio", description: "Pó branco fino" },
              { title: "Kieserita", description: "Grânulos rosados" },
            ]}
          />
        </section>
      </ScrollReveal>

      {/* No Solo */}
      <ScrollReveal direction="right">
        <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/30 dark:to-green-950/30 border-l-4 border-lime-500 p-6 rounded-lg shadow-md">
          <h4 className="text-lime-800 dark:text-lime-300 text-xl font-bold mb-4 flex items-center gap-2">
            <Droplets className="w-6 h-6" />
            Dinâmica no Solo
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lime-900 dark:text-lime-100 mb-4 leading-relaxed">
                O magnésio é absorvido como Mg²⁺ e sua disponibilidade é influenciada pelo pH, 
                teores de K e Ca, e CTC do solo. Solos com alta saturação por bases geralmente 
                apresentam bons teores de Mg.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-lime-800 dark:text-lime-200 flex items-start gap-2">
                  <span className="text-lime-500 mt-1">•</span>
                  <span><strong>Extração em soja:</strong> Até 78 kg/ha em alta produtividade</span>
                </li>
                <li className="text-lime-800 dark:text-lime-200 flex items-start gap-2">
                  <span className="text-lime-500 mt-1">•</span>
                  <span><strong>Exportação:</strong> 13-18% do Mg vai para os grãos</span>
                </li>
                <li className="text-lime-800 dark:text-lime-200 flex items-start gap-2">
                  <span className="text-lime-500 mt-1">•</span>
                  <span><strong>Mobilidade:</strong> Móvel no floema, redistribui na planta</span>
                </li>
              </ul>
            </div>
            <ImagePlaceholder
              title="Análise de Solo"
              description="Avaliação de teores de Mg trocável"
              aspectRatio="video"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Principais Funções */}
      <section className="space-y-6">
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Principais Funções do Magnésio na Planta
          </h3>
        </ScrollReveal>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
          <StaggerItem>
            <Card className="border-lime-200 dark:border-lime-800 bg-gradient-to-br from-white to-lime-50 dark:from-card dark:to-lime-950/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lime-700 dark:text-lime-400 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Centro da Clorofila
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  O magnésio é o átomo central da molécula de clorofila, sendo indispensável 
                  para a captação de luz e conversão em energia química durante a fotossíntese.
                </p>
                <ImagePlaceholder
                  title="Molécula de Clorofila"
                  description="Mg²⁺ no centro do anel porfirínico"
                  aspectRatio="video"
                />
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-lime-200 dark:border-lime-800 bg-gradient-to-br from-white to-lime-50 dark:from-card dark:to-lime-950/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lime-700 dark:text-lime-400 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Ativação Enzimática
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Cofator de mais de 300 enzimas, especialmente aquelas envolvidas na 
                  transferência de grupos fosfato (fosforilações) e metabolismo energético.
                </p>
                <ImagePlaceholder
                  title="Complexo Mg-ATP"
                  description="Ativação de quinases"
                  aspectRatio="video"
                />
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-lime-200 dark:border-lime-800 bg-gradient-to-br from-white to-lime-50 dark:from-card dark:to-lime-950/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lime-700 dark:text-lime-400 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Transporte de Açúcares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Essencial para o carregamento e transporte de sacarose pelo floema, 
                  distribuindo fotoassimilados das folhas para os órgãos de reserva.
                </p>
                <ImagePlaceholder
                  title="Floema e Transporte"
                  description="Distribuição de sacarose"
                  aspectRatio="video"
                />
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-lime-200 dark:border-lime-800 bg-gradient-to-br from-white to-lime-50 dark:from-card dark:to-lime-950/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lime-700 dark:text-lime-400 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Síntese Proteica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Necessário para a agregação das subunidades ribossomais, 
                  sendo essencial para a síntese de proteínas nas células vegetais.
                </p>
                <ImagePlaceholder
                  title="Ribossomos"
                  description="Agregação 50S + 30S"
                  aspectRatio="video"
                />
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Deficiência */}
      <ScrollReveal>
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-2 border-orange-400">
          <CardHeader>
            <CardTitle className="text-orange-800 dark:text-orange-300 text-center text-xl flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sintomas de Deficiência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-orange-900 dark:text-orange-100 mb-4 text-sm leading-relaxed">
                  Por ser móvel no floema, os sintomas aparecem primeiro nas folhas velhas, 
                  que cedem Mg para as folhas jovens em crescimento.
                </p>
                <ul className="space-y-3">
                  {[
                    { sintoma: "Clorose internerval em folhas velhas", detalhe: "Nervuras permanecem verdes" },
                    { sintoma: "Manchas necróticas avançadas", detalhe: "Tecido morre entre as nervuras" },
                    { sintoma: "Avermelhamento em algumas espécies", detalhe: "Acúmulo de antocianinas" },
                    { sintoma: "Queda prematura de folhas", detalhe: "Em casos severos" }
                  ].map((item, i) => (
                    <li key={i} className="text-orange-900 dark:text-orange-100 pl-6 relative">
                      <span className="absolute left-0 text-orange-500 font-bold">✗</span>
                      <span className="font-medium">{item.sintoma}</span>
                      <p className="text-orange-700 dark:text-orange-300 text-sm ml-0">{item.detalhe}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <ImagePlaceholder
                  title="Clorose Internerval"
                  description="Folhas velhas amareladas"
                  aspectRatio="video"
                />
                <ImagePlaceholder
                  title="Deficiência Avançada"
                  description="Necrose entre nervuras"
                  aspectRatio="video"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Interações e Antagonismos */}
      <ScrollReveal direction="up">
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Interações Nutricionais do Magnésio
          </h3>
          <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.1}>
            <StaggerItem>
              <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-lime-100 dark:border-lime-900 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lime-700 dark:text-lime-400 mb-2">Antagonismo K/Mg</h4>
                <p className="text-muted-foreground text-sm">
                  Excesso de potássio é a principal causa de deficiência induzida de magnésio.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-lime-100 dark:border-lime-900 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lime-700 dark:text-lime-400 mb-2">Antagonismo Ca/Mg</h4>
                <p className="text-muted-foreground text-sm">
                  Excesso de cálcio pode inibir absorção de Mg. Manter relação Ca:Mg adequada (3:1 a 5:1).
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-lime-100 dark:border-lime-900 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lime-700 dark:text-lime-400 mb-2">Sinergismo Mg/P</h4>
                <p className="text-muted-foreground text-sm">
                  Magnésio facilita o transporte de fósforo dentro da planta, otimizando seu uso.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      {/* Galeria Visual */}
      <ScrollReveal delay={0.1}>
        <section>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Galeria: Magnésio na Agricultura
          </h3>
          <ImageGrid
            columns={3}
            aspectRatio="video"
            images={[
              { title: "Aplicação de Dolomítico", description: "Correção com Mg" },
              { title: "Deficiência em Soja", description: "Clorose típica" },
              { title: "Foliar de MgSO₄", description: "Correção rápida" },
            ]}
          />
        </section>
      </ScrollReveal>

    </div>
  </div>
);

export default MagnesioContent;
