import { Atom, Leaf, Droplets, AlertTriangle, Sprout, TreeDeciduous, Zap, FlaskConical, Shield } from "lucide-react";
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

const fontesP = [
  { nome: "Superfosfato Simples", info: "16% P₂O₅\n16% Ca\n10% S", desc: "SSP" },
  { nome: "Superfosfato Triplo", info: "45% P₂O₅\n15% Ca", desc: "TSP" },
  { nome: "MAP", info: "48% P₂O₅\n10% N", desc: "Monoamônio" },
  { nome: "DAP", info: "45% P₂O₅\n17% N", desc: "Diamônio" },
  { nome: "Fosfatos Naturais", info: "5-35% P₂O₅", desc: "Reativos" },
];

const funcoesP = [
  { titulo: "Energia (ATP/ADP)", icon: "⚡", desc: "Armazenamento e transferência de energia nas reações metabólicas" },
  { titulo: "Ácidos Nucleicos", icon: "🧬", desc: "Componente estrutural do DNA e RNA" },
  { titulo: "Fosfolipídeos", icon: "🔬", desc: "Estrutura das membranas celulares" },
  { titulo: "Fotossíntese", icon: "🌿", desc: "Essencial para produção de clorofila e reações fotoquímicas" },
];

const FosforoContent = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header Hero with Parallax */}
      <div className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <FloatingElement className="absolute top-10 right-10" amplitude={15} duration={5}>
          <div className="w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-10 left-10" amplitude={10} duration={4}>
          <div className="w-24 h-24 bg-white/10 rounded-full blur-xl" />
        </FloatingElement>
        
        <HeroParallax className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal direction="down" duration={0.8}>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-green-300/30">
                <span className="text-5xl font-bold text-green-600">P</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Fósforo (P)</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
              Macronutriente primário essencial para desenvolvimento, crescimento e reprodução. 
              Componente do ATP, ADP, ácidos nucleicos e fosfolipídeos.
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto" staggerDelay={0.1}>
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">H₂PO₄⁻</p>
                <p className="text-white/70 text-sm">forma absorvida</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">2-5</p>
                <p className="text-white/70 text-sm">g/kg na planta</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">Baixa</p>
                <p className="text-white/70 text-sm">mobilidade no solo</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </HeroParallax>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        <ScrollReveal>
          <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white border-0 shadow-xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-center uppercase tracking-wider">
                <FlaskConical className="w-6 h-6 inline mr-2" />
                Principais Fontes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {fontesP.map((fonte, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-green-700 font-bold text-sm mb-2">{fonte.nome}</h3>
                    <p className="text-foreground text-xs whitespace-pre-line font-medium">{fonte.info}</p>
                    <p className="text-muted-foreground text-[10px] mt-2 uppercase tracking-wide">{fonte.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-green-600" />
              Fertilizantes Fosfatados
            </h3>
            <ImageGrid
              columns={4}
              aspectRatio="square"
              images={[
                { title: "Superfosfato Simples", description: "16% P₂O₅ + Ca + S" },
                { title: "Superfosfato Triplo", description: "45% P₂O₅ concentrado" },
                { title: "MAP Granulado", description: "48% P₂O₅ + 10% N" },
                { title: "Fosfato Natural", description: "Reativo para solos ácidos" },
              ]}
            />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
            <h4 className="text-green-800 dark:text-green-300 text-xl font-bold mb-4 flex items-center gap-2">
              <Droplets className="w-6 h-6" />
              Dinâmica no Solo
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-green-900 dark:text-green-100 mb-4 leading-relaxed">
                  O fósforo apresenta <strong>baixa mobilidade</strong> no solo devido à sua afinidade 
                  com minerais da fração argila (adsorção específica).
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-green-800 dark:text-green-200 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Teor total:</strong> 200-3.000 mg/kg no solo</span>
                  </li>
                  <li className="text-green-800 dark:text-green-200 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>pH ideal:</strong> 6,0-6,5 para máxima disponibilidade</span>
                  </li>
                </ul>
              </div>
              <ImagePlaceholder title="Fixação de P no Solo" description="Adsorção em óxidos de Fe e Al" aspectRatio="video" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Principais Funções do Fósforo
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {funcoesP.map((funcao, i) => (
                <Card key={i} className="border-green-200 dark:border-green-800 bg-gradient-to-br from-white to-green-50 dark:from-card dark:to-green-950/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-green-700 dark:text-green-400 flex items-center gap-2">
                      <span className="text-2xl">{funcao.icon}</span>
                      {funcao.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{funcao.desc}</p>
                    <ImagePlaceholder title={funcao.titulo} description={`Função do P: ${funcao.titulo}`} aspectRatio="video" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScaleOnScroll>
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
                  <ul className="space-y-3">
                    {[
                      { sintoma: "Arroxeamento das folhas", detalhe: "Acúmulo de antocianina" },
                      { sintoma: "Menor perfilhamento", detalhe: "Em gramíneas" },
                      { sintoma: "Redução de frutos e sementes", detalhe: "Menor reprodução" },
                    ].map((item, i) => (
                      <li key={i} className="text-orange-900 dark:text-orange-100 pl-6 relative">
                        <span className="absolute left-0 text-orange-500 font-bold">✗</span>
                        <span className="font-medium">{item.sintoma}</span>
                        <p className="text-orange-700 dark:text-orange-300 text-sm">{item.detalhe}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <ImagePlaceholder title="Deficiência de P em Milho" description="Folhas arroxeadas típicas" aspectRatio="video" />
              </div>
            </CardContent>
          </Card>
        </ScaleOnScroll>

        <ScrollReveal>
          <section>
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Galeria: Fósforo na Agricultura
            </h3>
            <ImageGrid
              columns={3}
              aspectRatio="video"
              images={[
                { title: "Aplicação de Fosfato no Sulco", description: "Adubação localizada" },
                { title: "Raízes Proteoides", description: "Adaptação para absorção de P" },
                { title: "Resposta à Adubação Fosfatada", description: "Antes e depois" },
              ]}
            />
          </section>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default FosforoContent;
