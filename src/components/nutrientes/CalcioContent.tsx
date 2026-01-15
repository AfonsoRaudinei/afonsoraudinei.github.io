import { Droplets, AlertTriangle, Leaf, Shield, Building, Heart, FlaskConical, Zap } from "lucide-react";
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

const CalcioContent = () => (
  <div className="min-h-screen">
    {/* Header Hero */}
    <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-amber-300/30">
            <span className="text-5xl font-bold text-amber-600">Ca</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Cálcio (Ca)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Macronutriente secundário essencial para a estrutura celular e divisão celular. 
          Componente fundamental da lamela média e parede celular, conferindo resistência aos tecidos vegetais.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">252</p>
            <p className="text-white/70 text-sm">kg/ha extraídos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">4-6%</p>
            <p className="text-white/70 text-sm">exportação</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">Ca²⁺</p>
            <p className="text-white/70 text-sm">forma absorvida</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-amber-500 to-amber-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Calcário Calcítico", info: "CaCO₃\n38-42% Ca", desc: "Correção de pH" },
              { nome: "Calcário Dolomítico", info: "CaCO₃·MgCO₃\n25% Ca + 12% Mg", desc: "+Magnésio" },
              { nome: "Gesso Agrícola", info: "CaSO₄·2H₂O\n16-20% Ca", desc: "+Enxofre" },
              { nome: "Nitrato de Cálcio", info: "Ca(NO₃)₂\n19% Ca", desc: "Alta solubilidade" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-amber-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-amber-600" />
          Fertilizantes com Cálcio
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Calcário Calcítico", description: "Pó fino branco/cinza" },
            { title: "Calcário Dolomítico", description: "Grânulos acinzentados" },
            { title: "Gesso Agrícola", description: "Cristais brancos" },
            { title: "Nitrato de Cálcio", description: "Grânulos brancos solúveis" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-l-4 border-amber-500 p-6 rounded-lg shadow-md">
        <h4 className="text-amber-800 dark:text-amber-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-amber-900 dark:text-amber-100 mb-4 leading-relaxed">
              O cálcio é absorvido como Ca²⁺ pelas raízes, principalmente via fluxo de massa. 
              Sua disponibilidade está diretamente ligada ao pH do solo e à saturação por bases.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-amber-800 dark:text-amber-200 flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong>Extração em soja:</strong> até 252 kg/ha em alta produtividade</span>
              </li>
              <li className="text-amber-800 dark:text-amber-200 flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong>Exportação:</strong> Apenas 4-6% vai para os grãos</span>
              </li>
              <li className="text-amber-800 dark:text-amber-200 flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong>Imobilidade:</strong> Não redistribui na planta após absorção</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder
            title="Calagem em Área de Plantio"
            description="Aplicação de calcário para correção do solo"
            aspectRatio="video"
          />
        </div>
      </div>

      {/* Principais Funções */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Principais Funções do Cálcio na Planta
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-br from-white to-amber-50 dark:from-card dark:to-amber-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Estrutura Celular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente essencial da lamela média como pectato de cálcio, cimentando 
                as células vegetais e conferindo rigidez estrutural aos tecidos.
              </p>
              <ImagePlaceholder
                title="Parede Celular Vegetal"
                description="Lamela média com pectato de cálcio"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-br from-white to-amber-50 dark:from-card dark:to-amber-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Sinalização Celular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Atua como segundo mensageiro em diversas vias de sinalização celular, 
                respondendo a estímulos hormonais e ambientais.
              </p>
              <ImagePlaceholder
                title="Cascata de Sinalização"
                description="Ca²⁺ como mensageiro secundário"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-br from-white to-amber-50 dark:from-card dark:to-amber-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                Divisão Celular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Essencial para a formação do fuso mitótico durante a divisão celular 
                e para o desenvolvimento de pontos de crescimento.
              </p>
              <ImagePlaceholder
                title="Mitose Celular"
                description="Fuso mitótico e citocinese"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-br from-white to-amber-50 dark:from-card dark:to-amber-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Integridade de Membranas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Mantém a estabilidade e seletividade das membranas celulares, 
                regulando a permeabilidade e prevenindo vazamentos.
              </p>
              <ImagePlaceholder
                title="Membrana Plasmática"
                description="Estabilização por cálcio"
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
                Por ser imóvel no floema, os sintomas surgem primeiro nos tecidos jovens e pontos de crescimento.
              </p>
              <ul className="space-y-3">
                {[
                  { sintoma: "Necrose de meristemas apicais", detalhe: "Morte das pontas de crescimento" },
                  { sintoma: "Deformação de folhas novas", detalhe: "Bordos curvados e enrolados" },
                  { sintoma: "Raízes curtas e engrossadas", detalhe: "Sistema radicular comprometido" },
                  { sintoma: "Podridão apical em frutos", detalhe: "Comum em tomate e pimentão" }
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
                title="Necrose Apical"
                description="Morte do ponto de crescimento"
                aspectRatio="video"
              />
              <ImagePlaceholder
                title="Podridão Estilar"
                description="Fundo preto em tomate"
                aspectRatio="video"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interações e Antagonismos */}
      <section className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Interações Nutricionais do Cálcio
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-amber-100 dark:border-amber-900">
            <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-2">Antagonismo Ca/Mg</h4>
            <p className="text-muted-foreground text-sm">
              Excesso de cálcio pode inibir a absorção de magnésio. Manter relação Ca:Mg entre 3:1 e 5:1.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-amber-100 dark:border-amber-900">
            <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-2">Antagonismo Ca/K</h4>
            <p className="text-muted-foreground text-sm">
              Altas doses de potássio podem reduzir a absorção de cálcio, especialmente em fertirrigação.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-amber-100 dark:border-amber-900">
            <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-2">Sinergismo Ca/B</h4>
            <p className="text-muted-foreground text-sm">
              Boro auxilia no transporte de cálcio na planta. Deficiência de B agrava problemas de Ca.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria Visual */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          Galeria: Cálcio na Agricultura
        </h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Aplicação de Calcário", description: "Correção de acidez do solo" },
            { title: "Deficiência em Soja", description: "Folhas novas deformadas" },
            { title: "Gessagem", description: "Fornecimento de Ca em profundidade" },
          ]}
        />
      </section>

    </div>
  </div>
);

export default CalcioContent;