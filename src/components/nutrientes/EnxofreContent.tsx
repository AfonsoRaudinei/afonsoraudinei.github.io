import { Droplets, AlertTriangle, Leaf, FlaskConical, Zap, Shield, Beaker } from "lucide-react";
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

const EnxofreContent = () => (
  <div className="min-h-screen">
    {/* Header Hero */}
    <div className="relative bg-gradient-to-br from-yellow-500 to-yellow-700 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-yellow-300/30">
            <span className="text-5xl font-bold text-yellow-600">S</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Enxofre (S)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Macronutriente secundário essencial para a síntese de aminoácidos sulfurados (cisteína e metionina). 
          Componente de coenzimas, vitaminas e compostos de defesa vegetal.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">124</p>
            <p className="text-white/70 text-sm">kg/ha extraídos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">31-37%</p>
            <p className="text-white/70 text-sm">exportação</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">SO₄²⁻</p>
            <p className="text-white/70 text-sm">forma absorvida</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Gesso Agrícola", info: "CaSO₄·2H₂O\n13-17% S", desc: "+Cálcio" },
              { nome: "Sulfato de Amônio", info: "(NH₄)₂SO₄\n24% S", desc: "+Nitrogênio" },
              { nome: "Enxofre Elementar", info: "S⁰\n95-99% S", desc: "Oxidação lenta" },
              { nome: "Superfosfato Simples", info: "Ca(H₂PO₄)₂\n10-12% S", desc: "+P e Ca" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-yellow-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-yellow-600" />
          Fertilizantes com Enxofre
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Gesso Agrícola", description: "Cristais brancos" },
            { title: "Sulfato de Amônio", description: "Grânulos brancos" },
            { title: "Enxofre Elementar", description: "Pó amarelo" },
            { title: "Superfosfato Simples", description: "Grânulos acinzentados" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md">
        <h4 className="text-yellow-800 dark:text-yellow-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-yellow-900 dark:text-yellow-100 mb-4 leading-relaxed">
              O enxofre é absorvido preferencialmente como sulfato (SO₄²⁻). No solo, 
              passa por transformações microbianas de mineralização e imobilização, 
              similares ao ciclo do nitrogênio.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-yellow-800 dark:text-yellow-200 flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong>Extração em soja:</strong> até 124 kg/ha em alta produtividade</span>
              </li>
              <li className="text-yellow-800 dark:text-yellow-200 flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong>Exportação:</strong> 31-37% do S vai para os grãos (proteínas)</span>
              </li>
              <li className="text-yellow-800 dark:text-yellow-200 flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong>Lixiviação:</strong> SO₄²⁻ pode ser lixiviado em solos arenosos</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder
            title="Ciclo do Enxofre no Solo"
            description="Mineralização e imobilização"
            aspectRatio="video"
          />
        </div>
      </div>

      {/* Relação N:S */}
      <Card className="bg-gradient-to-br from-green-100 to-lime-100 dark:from-green-950/40 dark:to-lime-950/40 border-2 border-green-400">
        <CardHeader>
          <CardTitle className="text-green-800 dark:text-green-300 text-center text-xl flex items-center justify-center gap-2">
            <Beaker className="w-6 h-6" />
            Relação N:S - Fundamental para Qualidade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-green-900 dark:text-green-100 mb-4 leading-relaxed">
                A relação N:S é crítica para a eficiência do nitrogênio. Uma proporção 
                inadequada resulta em acúmulo de N não-proteico e baixa qualidade de grãos.
              </p>
              <div className="bg-white dark:bg-card rounded-xl p-4 border border-green-200 dark:border-green-800">
                <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Relações Ideais:</h5>
                <ul className="text-sm space-y-1 text-green-800 dark:text-green-200">
                  <li>• Soja: N:S = 7:1 a 10:1</li>
                  <li>• Milho: N:S = 10:1 a 15:1</li>
                  <li>• Trigo: N:S = 12:1 a 15:1</li>
                </ul>
              </div>
            </div>
            <ImagePlaceholder
              title="Gráfico de Relação N:S"
              description="Eficiência do N em função do S"
              aspectRatio="video"
            />
          </div>
        </CardContent>
      </Card>

      {/* Principais Funções */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Principais Funções do Enxofre na Planta
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white to-yellow-50 dark:from-card dark:to-yellow-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                Aminoácidos Sulfurados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente essencial da cisteína e metionina, aminoácidos fundamentais 
                para a estrutura tridimensional das proteínas (pontes dissulfeto).
              </p>
              <ImagePlaceholder
                title="Estrutura da Cisteína"
                description="Grupo -SH e pontes S-S"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white to-yellow-50 dark:from-card dark:to-yellow-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Coenzimas e Vitaminas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Presente na coenzima A, biotina e tiamina, essenciais para o 
                metabolismo energético e síntese de ácidos graxos.
              </p>
              <ImagePlaceholder
                title="Coenzima A"
                description="Grupo tiol funcional"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white to-yellow-50 dark:from-card dark:to-yellow-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Compostos de Defesa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Precursor de glucosinolatos (brássicas) e alicinas (alho), 
                compostos bioativos com funções de defesa e propriedades medicinais.
              </p>
              <ImagePlaceholder
                title="Glucosinolatos"
                description="Defesa em brássicas"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white to-yellow-50 dark:from-card dark:to-yellow-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                <Beaker className="w-5 h-5" />
                Centros Ferro-Enxofre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente de proteínas Fe-S essenciais para transferência de 
                elétrons na fotossíntese e respiração (ferredoxinas).
              </p>
              <ImagePlaceholder
                title="Cluster [4Fe-4S]"
                description="Transporte de elétrons"
                aspectRatio="video"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deficiência */}
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
                Por ter mobilidade limitada no floema, os sintomas de deficiência de S 
                aparecem primeiro nas folhas novas, diferenciando da deficiência de N.
              </p>
              <ul className="space-y-3">
                {[
                  { sintoma: "Clorose uniforme em folhas novas", detalhe: "Similar à deficiência de N" },
                  { sintoma: "Plantas de menor porte", detalhe: "Crescimento reduzido" },
                  { sintoma: "Folhas verde-claras", detalhe: "Toda a lâmina afetada" },
                  { sintoma: "Baixa qualidade de grãos", detalhe: "Menor teor proteico" }
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
                title="Clorose em Folhas Novas"
                description="Amarelecimento uniforme"
                aspectRatio="video"
              />
              <ImagePlaceholder
                title="Comparativo S vs N"
                description="Localização dos sintomas"
                aspectRatio="video"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interações e Antagonismos */}
      <section className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Interações Nutricionais do Enxofre
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-yellow-100 dark:border-yellow-900">
            <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">Sinergismo N/S</h4>
            <p className="text-muted-foreground text-sm">
              A eficiência do N depende do S. Deficiência de S limita a conversão de N em proteínas.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-yellow-100 dark:border-yellow-900">
            <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">Sinergismo Fe/S</h4>
            <p className="text-muted-foreground text-sm">
              Ambos formam centros Fe-S essenciais para transporte de elétrons.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-yellow-100 dark:border-yellow-900">
            <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">Efeito do Gesso</h4>
            <p className="text-muted-foreground text-sm">
              Gesso fornece S e Ca, além de reduzir toxidez de Al em subsuperfície.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria Visual */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          Galeria: Enxofre na Agricultura
        </h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Aplicação de Gesso", description: "Fonte de S e Ca" },
            { title: "Deficiência em Soja", description: "Folhas novas amareladas" },
            { title: "Enxofre Elementar", description: "Pó amarelo característico" },
          ]}
        />
      </section>

    </div>
  </div>
);

export default EnxofreContent;