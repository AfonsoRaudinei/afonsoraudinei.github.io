import { Droplets, AlertTriangle, Sun, Beaker, FlaskConical, Leaf, ArrowLeftRight } from "lucide-react";
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

const CloroContent = () => (
  <div className="min-h-screen overflow-hidden">
    {/* Header Hero with Parallax */}
    <div className="relative bg-gradient-to-br from-cyan-500 to-cyan-700 text-white py-16 px-6 overflow-hidden">
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
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-cyan-300/30">
              <span className="text-5xl font-bold text-cyan-600">Cl</span>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Cloro (Cl)</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            Micronutriente essencial para a fotossíntese, regulação osmótica e abertura estomática. 
            Participa da fotólise da água no fotossistema II.
          </p>
        </ScrollReveal>
        
        {/* Quick Stats */}
        <StaggerContainer className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto" staggerDelay={0.15}>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">100-6000</p>
              <p className="text-white/70 text-sm">mg/kg adequado</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">Cl⁻</p>
              <p className="text-white/70 text-sm">forma absorvida</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
              <p className="text-3xl font-bold text-white">Móvel</p>
              <p className="text-white/70 text-sm">no floema</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </HeroParallax>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Cloreto de Potássio", info: "KCl\n47% Cl, 60% K₂O", desc: "Principal fonte" },
              { nome: "Cloreto de Cálcio", info: "CaCl₂\n65% Cl", desc: "Alta solubilidade" },
              { nome: "Cloreto de Sódio", info: "NaCl\n60% Cl", desc: "Sal comum" },
              { nome: "Água de Irrigação", info: "Variável", desc: "Fonte natural" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-cyan-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-cyan-600" />
          Fertilizantes com Cloro
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "KCl", description: "Cloreto de potássio vermelho" },
            { title: "CaCl₂", description: "Flocos brancos" },
            { title: "NaCl", description: "Sal grosso" },
            { title: "Água Salina", description: "Irrigação costeira" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 border-l-4 border-cyan-500 p-6 rounded-lg shadow-md">
        <h4 className="text-cyan-800 dark:text-cyan-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-cyan-900 dark:text-cyan-100 mb-4 leading-relaxed">
              O cloro é absorvido como íon cloreto (Cl⁻). É abundante na maioria dos solos e 
              raramente limitante. A deficiência é mais comum em solos muito arenosos, 
              em regiões com alta precipitação e distantes do mar.
            </p>
            <ul className="space-y-2 text-cyan-800 dark:text-cyan-200">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Teor adequado:</strong> 100-6.000 mg/kg de matéria seca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Alta mobilidade:</strong> facilmente redistribuído na planta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Deposição atmosférica:</strong> 20-50 kg Cl/ha/ano em regiões costeiras</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Cuidado:</strong> excesso é mais comum que deficiência</span>
              </li>
            </ul>
          </div>
          <div>
            <ImagePlaceholder 
              title="Distribuição de Cl"
              description="Teores em diferentes regiões do Brasil"
              aspectRatio="video"
            />
          </div>
        </div>
      </div>

      {/* Principais Funções */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Principais Funções do Cloro
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Sun,
              titulo: "Fotólise da Água",
              descricao: "Cofator essencial do complexo de evolução de oxigênio no fotossistema II. Participa da quebra da molécula de água, liberando O₂ e elétrons para a fotossíntese.",
              cor: "from-yellow-500 to-orange-600"
            },
            {
              icon: Droplets,
              titulo: "Regulação Osmótica",
              descricao: "Principal ânion para manutenção do turgor celular e regulação da pressão osmótica. Acumula-se nos vacúolos como contraíon do K⁺.",
              cor: "from-blue-500 to-cyan-600"
            },
            {
              icon: Leaf,
              titulo: "Abertura Estomática",
              descricao: "Junto com o K⁺, regula a abertura e fechamento dos estômatos, controlando a transpiração e as trocas gasosas da planta.",
              cor: "from-green-500 to-emerald-600"
            },
            {
              icon: Beaker,
              titulo: "Ativação Enzimática",
              descricao: "Ativa a enzima asparagina sintetase e ATPase vacuolar, participando do metabolismo de aminoácidos e transporte de íons.",
              cor: "from-purple-500 to-indigo-600"
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
            { title: "Fotossistema II", description: "Evolução de O₂" },
            { title: "Turgor Celular", description: "Regulação osmótica" },
            { title: "Estômatos", description: "Abertura/fechamento" },
            { title: "Vacúolo", description: "Armazenamento" },
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
          <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs px-3 py-1 rounded-full">
            Rara em condições de campo
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Murchamento Foliar</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Murchamento das folhas jovens mesmo com água disponível, devido à falha 
                na regulação osmótica.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Clorose e Necrose</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Clorose e necrose das bordas foliares, progredindo para o interior 
                da folha em casos severos.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Bronzeamento</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Bronzeamento foliar característico, especialmente em culturas sensíveis 
                como trigo e cevada.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Sistema Radicular</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Raízes curtas e espessas, com redução do crescimento geral da planta.
              </p>
            </div>
          </div>
          <div>
            <ImagePlaceholder
              title="Deficiência de Cloro"
              description="Sintomas raros em condições de campo"
              aspectRatio="video"
            />
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
            { title: "Trigo", description: "Bronzeamento foliar" },
            { title: "Alface", description: "Murchamento e clorose" },
            { title: "Tomate", description: "Bordas necróticas" },
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
            Mais comum que deficiência
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { titulo: "Queima Salina", desc: "Necrose das bordas e pontas das folhas, típica de solos salinos" },
              { titulo: "Queda de Folhas", desc: "Abscisão prematura de folhas, começando pelas mais velhas" },
              { titulo: "Redução do Crescimento", desc: "Plantas atrofiadas com internódios curtos" },
              { titulo: "Sensibilidade Variável", desc: "Tabaco, morango e videira são muito sensíveis ao excesso de Cl" },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">{item.titulo}</h4>
                <p className="text-red-700 dark:text-red-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <ImagePlaceholder
              title="Toxidez de Cloro"
              description="Queima salina em folhas velhas"
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
            { title: "Queima Marginal", description: "Necrose típica de salinidade" },
            { title: "Videira", description: "Cultura muito sensível" },
            { title: "Solo Salino", description: "Acúmulo de Cl" },
          ]}
        />
      </section>

      {/* Sensibilidade de Culturas */}
      <Card className="border-2 border-cyan-300 dark:border-cyan-700">
        <CardHeader>
          <CardTitle className="text-xl text-center text-cyan-800 dark:text-cyan-300">
            Sensibilidade das Culturas ao Cloro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-4 text-center">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">Muito Sensíveis</h4>
              <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                <li>Tabaco</li>
                <li>Morango</li>
                <li>Videira</li>
                <li>Citros</li>
                <li>Abacate</li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-xl p-4 text-center">
              <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-3">Moderadamente Sensíveis</h4>
              <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                <li>Batata</li>
                <li>Tomate</li>
                <li>Feijão</li>
                <li>Alface</li>
                <li>Pepino</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-4 text-center">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">Tolerantes</h4>
              <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                <li>Milho</li>
                <li>Trigo</li>
                <li>Arroz</li>
                <li>Algodão</li>
                <li>Beterraba</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interações Nutricionais */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6 text-cyan-600" />
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
                  <span className="font-bold text-red-600">NO₃⁻:</span>
                  <span className="text-muted-foreground text-sm">Competição pelo mesmo sistema de absorção</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">SO₄²⁻:</span>
                  <span className="text-muted-foreground text-sm">Competição em altas concentrações</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">Br⁻, I⁻:</span>
                  <span className="text-muted-foreground text-sm">Outros haletos podem substituir parcialmente</span>
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
                  <span className="font-bold text-green-600">K⁺:</span>
                  <span className="text-muted-foreground text-sm">Atuam juntos na regulação osmótica e estomática</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Na⁺:</span>
                  <span className="text-muted-foreground text-sm">Complementam funções osmóticas em halófitas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Mn:</span>
                  <span className="text-muted-foreground text-sm">Cl pode suprimir doenças relacionadas à deficiência de Mn</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  </div>
);

export default CloroContent;