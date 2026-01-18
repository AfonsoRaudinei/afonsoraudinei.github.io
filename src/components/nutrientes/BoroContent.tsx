import { Droplets, AlertTriangle, Leaf, FlaskConical, Flower, TreeDeciduous, Dna, ArrowLeftRight } from "lucide-react";
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

const BoroContent = () => (
  <div className="min-h-screen overflow-hidden">
    {/* Header Hero with Parallax */}
    <div className="relative bg-gradient-to-br from-rose-500 to-rose-700 text-white py-16 px-6 overflow-hidden">
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
              <span className="text-5xl font-bold text-rose-600">B</span>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Boro (B)</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            Micronutriente essencial para formação da parede celular, floração, frutificação 
            e transporte de açúcares. Fundamental para o desenvolvimento reprodutivo.
          </p>
        </ScrollReveal>
        
        {/* Quick Stats */}
        <StaggerContainer className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto" staggerDelay={0.15}>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">776</p>
              <p className="text-white/70 text-sm">g/ha extração soja</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">H₃BO₃</p>
              <p className="text-white/70 text-sm">forma absorvida</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">Imóvel</p>
              <p className="text-white/70 text-sm">no floema</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </HeroParallax>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-rose-500 to-rose-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Bórax", info: "Na₂B₄O₇·10H₂O\n11% B", desc: "Baixa solubilidade" },
              { nome: "Ácido Bórico", info: "H₃BO₃\n17% B", desc: "Aplicação foliar" },
              { nome: "Ulexita", info: "NaCaB₅O₉·8H₂O\n10-15% B", desc: "Liberação lenta" },
              { nome: "Colemanita", info: "Ca₂B₆O₁₁·5H₂O\n10-16% B", desc: "Liberação gradual" }
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
          Fertilizantes com Boro
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Bórax", description: "Cristais brancos solúveis" },
            { title: "Ácido Bórico", description: "Pó branco para foliar" },
            { title: "Ulexita", description: "Liberação lenta no solo" },
            { title: "FTE BR-12", description: "Fritas com micronutrientes" },
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
              O boro é absorvido principalmente como ácido bórico (H₃BO₃). É o micronutriente mais 
              susceptível à lixiviação em solos arenosos e sua disponibilidade diminui em solos calcários.
            </p>
            <ul className="space-y-2 text-rose-800 dark:text-rose-200">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span><strong>Extração soja:</strong> até 776 g/ha em alta produtividade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span><strong>Exportação:</strong> 21-23% do B vai para os grãos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span><strong>Imóvel no floema:</strong> não redistribuído na maioria das plantas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span><strong>pH alto:</strong> reduz disponibilidade significativamente</span>
              </li>
            </ul>
          </div>
          <div>
            <ImagePlaceholder 
              title="Perfil de Solo"
              description="Disponibilidade de B em diferentes condições"
              aspectRatio="video"
            />
          </div>
        </div>
      </div>

      {/* Principais Funções */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Principais Funções do Boro
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: TreeDeciduous,
              titulo: "Parede Celular",
              descricao: "Liga-se à pectina formando complexos boro-ramnogalacturonano II, essenciais para a estrutura e elasticidade da parede celular. Principal função do B na planta.",
              cor: "from-rose-500 to-pink-600"
            },
            {
              icon: Flower,
              titulo: "Floração e Pólen",
              descricao: "Essencial para o desenvolvimento do tubo polínico, germinação do pólen e fecundação. A deficiência causa aborto floral e baixa frutificação.",
              cor: "from-fuchsia-500 to-purple-600"
            },
            {
              icon: Leaf,
              titulo: "Transporte de Açúcares",
              descricao: "Facilita o transporte de açúcares através das membranas, formando complexos borato-açúcar que atravessam a membrana plasmática com maior facilidade.",
              cor: "from-green-500 to-emerald-600"
            },
            {
              icon: Dna,
              titulo: "Divisão Celular",
              descricao: "Participa da síntese de bases nitrogenadas e ácidos nucleicos, sendo essencial para a divisão celular nos meristemas apicais e radiculares.",
              cor: "from-blue-500 to-indigo-600"
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
            { title: "Parede Celular", description: "Estrutura com B" },
            { title: "Tubo Polínico", description: "Germinação do pólen" },
            { title: "Frutificação", description: "Formação de frutos" },
            { title: "Meristema", description: "Divisão celular" },
          ]}
        />
      </section>

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
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Morte do Meristema Apical</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                O ponto de crescimento morre, causando brotação excessiva lateral e plantas 
                deformadas. Primeiro sintoma visível.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Folhas Deformadas</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Folhas jovens enrugadas, espessas e quebradiças. Pecíolos e caules com 
                rachaduras e coração oco.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Aborto Floral</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Flores abortadas, baixa frutificação, frutos deformados, rachados ou com 
                formação de cortiça interna.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Raízes Afetadas</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Raízes curtas, grossas e com pontas necróticas. Crescimento radicular 
                severamente comprometido.
              </p>
            </div>
          </div>
          <div>
            <ImagePlaceholder
              title="Deficiência de Boro"
              description="Sintomas em tecidos jovens (B é imóvel)"
              aspectRatio="video"
            />
            <p className="text-center mt-4 text-sm font-semibold text-orange-700 dark:text-orange-400">
              ⚠ Sintomas aparecem em tecidos jovens pois B é imóvel no floema!
            </p>
          </div>
        </div>
      </section>

      {/* Galeria de Deficiência */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">Sintomas em Diferentes Culturas</h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Couve-flor", description: "Cabeça oca e marrom" },
            { title: "Maçã", description: "Cortiça interna" },
            { title: "Girassol", description: "Caule rachado" },
          ]}
        />
      </section>

      {/* Toxidez */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Toxidez</h2>
          <span className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs px-3 py-1 rounded-full">
            Faixa estreita entre deficiência e excesso
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { titulo: "Clorose Marginal", desc: "Clorose e necrose nas margens das folhas velhas" },
              { titulo: "Manchas Marrons", desc: "Manchas marrons nas bordas foliares progredindo para o centro" },
              { titulo: "Queda de Folhas", desc: "Queda prematura de folhas, começando pelas mais velhas" },
              { titulo: "Redução do Crescimento", desc: "Plantas menores com produtividade comprometida" },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">{item.titulo}</h4>
                <p className="text-red-700 dark:text-red-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <ImagePlaceholder
              title="Toxidez de Boro"
              description="Necrose marginal em folhas velhas"
              aspectRatio="video"
            />
          </div>
        </div>
      </section>

      {/* Galeria de Toxidez */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">Sintomas de Toxidez</h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Clorose Marginal", description: "Folhas velhas afetadas" },
            { title: "Necrose Progredindo", description: "Do bordo para o centro" },
            { title: "Comparativo", description: "Normal vs. toxidez" },
          ]}
        />
      </section>

      {/* Interações Nutricionais */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6 text-rose-600" />
          Interações Nutricionais
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-red-700 dark:text-red-400">Antagonismos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">Ca:</span>
                  <span className="text-muted-foreground text-sm">Calagem excessiva reduz disponibilidade de B</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">N:</span>
                  <span className="text-muted-foreground text-sm">Altas doses de N aumentam demanda por B</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">pH alto:</span>
                  <span className="text-muted-foreground text-sm">Reduz significativamente a absorção de B</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-700 dark:text-green-400">Sinergismos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">K:</span>
                  <span className="text-muted-foreground text-sm">Melhora transporte e utilização de B</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Zn:</span>
                  <span className="text-muted-foreground text-sm">Atuam juntos na síntese de auxinas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Mo:</span>
                  <span className="text-muted-foreground text-sm">Complementam funções no metabolismo de N</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  </div>
);

export default BoroContent;