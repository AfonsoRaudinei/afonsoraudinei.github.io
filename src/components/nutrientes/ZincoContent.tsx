import { Droplets, AlertTriangle, Leaf, FlaskConical, Sprout, Shield, Dna } from "lucide-react";
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

const ZincoContent = () => (
  <div className="min-h-screen">
    {/* Header Hero */}
    <div className="relative bg-gradient-to-br from-slate-500 to-slate-700 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-slate-300/30">
            <span className="text-5xl font-bold text-slate-600">Zn</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Zinco (Zn)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Micronutriente essencial para síntese de auxinas (AIA), ativação de enzimas, 
          síntese de proteínas e desenvolvimento foliar adequado.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">758</p>
            <p className="text-white/70 text-sm">g/ha extraídos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">25-31%</p>
            <p className="text-white/70 text-sm">exportação</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">Zn²⁺</p>
            <p className="text-white/70 text-sm">forma absorvida</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-slate-500 to-slate-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Sulfato de Zinco", info: "ZnSO₄\n21-23% Zn", desc: "Mais utilizado" },
              { nome: "Óxido de Zinco", info: "ZnO\n70-80% Zn", desc: "Baixa solubilidade" },
              { nome: "Quelatos Zn-EDTA", info: "14% Zn", desc: "Alta eficiência" },
              { nome: "Cloreto de Zinco", info: "ZnCl₂\n48% Zn", desc: "Muito solúvel" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-slate-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-slate-600" />
          Fertilizantes com Zinco
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Sulfato de Zinco", description: "Cristais ou pó branco" },
            { title: "Óxido de Zinco", description: "Pó branco fino" },
            { title: "Quelato Zn-EDTA", description: "Alta disponibilidade" },
            { title: "Cloreto de Zinco", description: "Solução concentrada" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-slate-50 to-zinc-50 dark:from-slate-950/30 dark:to-zinc-950/30 border-l-4 border-slate-500 p-6 rounded-lg shadow-md">
        <h4 className="text-slate-800 dark:text-slate-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-slate-900 dark:text-slate-100 mb-4 leading-relaxed">
              O zinco ocorre no solo adsorvido a coloides, associado à matéria orgânica e 
              em minerais primários. Sua disponibilidade é fortemente reduzida em pH alto.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-800 dark:text-slate-200 flex items-start gap-2">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong>Absorção:</strong> Como cátion divalente Zn²⁺</span>
              </li>
              <li className="text-slate-800 dark:text-slate-200 flex items-start gap-2">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong>pH ideal:</strong> 5,0 a 6,5 para máxima disponibilidade</span>
              </li>
              <li className="text-slate-800 dark:text-slate-200 flex items-start gap-2">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong>Antagonismo:</strong> Excesso de P reduz absorção de Zn</span>
              </li>
              <li className="text-slate-800 dark:text-slate-200 flex items-start gap-2">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong>Mobilidade:</strong> Baixa no floema (sintomas em folhas novas)</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder
            title="Deficiência de Zinco em Solo"
            description="Áreas com pH elevado ou excesso de P"
            aspectRatio="video"
          />
        </div>
      </div>

      {/* Principais Funções */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Principais Funções do Zinco na Planta
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-card dark:to-slate-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-700 dark:text-slate-400 flex items-center gap-2">
                <Sprout className="w-5 h-5" />
                Síntese de Auxinas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Essencial para a síntese do ácido indol-3-acético (AIA), principal auxina 
                das plantas. A deficiência causa folhas pequenas e entrenós curtos.
              </p>
              <ImagePlaceholder
                title="Biossíntese de Auxinas"
                description="Triptofano → AIA"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-card dark:to-slate-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-700 dark:text-slate-400 flex items-center gap-2">
                <Dna className="w-5 h-5" />
                Síntese de Proteínas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Cofator de mais de 300 enzimas, incluindo a RNA polimerase. Componente 
                de "dedos de zinco" em proteínas reguladoras de genes.
              </p>
              <ImagePlaceholder
                title="Dedos de Zinco"
                description="Estrutura proteica com Zn"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-card dark:to-slate-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-700 dark:text-slate-400 flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                Metabolismo de Carboidratos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente da anidrase carbônica, enzima essencial para fixação de CO₂. 
                Também participa da aldolase e outras enzimas glicolíticas.
              </p>
              <ImagePlaceholder
                title="Anidrase Carbônica"
                description="Conversão CO₂ ↔ HCO₃⁻"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-card dark:to-slate-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-700 dark:text-slate-400 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Defesa Antioxidante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente da superóxido dismutase Cu/Zn-SOD, enzima crucial para 
                proteção contra radicais livres e estresse oxidativo.
              </p>
              <ImagePlaceholder
                title="Cu/Zn-SOD"
                description="Detoxificação de superóxido"
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
              <ul className="space-y-3">
                {[
                  { sintoma: "Folha pequena (little leaf)", detalhe: "Redução drástica do limbo foliar" },
                  { sintoma: "Roseta (encurtamento de entrenós)", detalhe: "Aspecto de roseta nas folhas" },
                  { sintoma: "Clorose internerval", detalhe: "Em folhas jovens e médias" },
                  { sintoma: "Faixas cloróticas", detalhe: "Em gramíneas (milho, arroz)" }
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
                title="Little Leaf em Soja"
                description="Folhas muito pequenas e estreitas"
                aspectRatio="video"
              />
              <ImagePlaceholder
                title="Deficiência em Milho"
                description="Faixas cloróticas características"
                aspectRatio="video"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagrama Visual de Funções */}
      <section className="bg-gradient-to-br from-slate-100 to-zinc-100 dark:from-slate-900 dark:to-zinc-900 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Diagrama: Funções do Zinco na Planta
        </h3>
        
        <div className="relative">
          {/* Central Plant Diagram */}
          <div className="flex justify-center mb-8">
            <ImagePlaceholder
              title="Diagrama Visual das Funções do Zn"
              description="Ilustração mostrando as principais funções do zinco em diferentes partes da planta"
              aspectRatio="wide"
              className="max-w-3xl"
            />
          </div>
          
          {/* Function Cards around */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { funcao: "Síntese de Auxinas", local: "Meristemas" },
              { funcao: "Anidrase Carbônica", local: "Cloroplastos" },
              { funcao: "Cu/Zn-SOD", local: "Citoplasma" },
              { funcao: "RNA Polimerase", local: "Núcleo" },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-card rounded-xl p-4 text-center shadow-sm border border-slate-200 dark:border-slate-700">
                <p className="font-bold text-slate-700 dark:text-slate-300 text-sm">{item.funcao}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.local}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interações Nutricionais */}
      <section className="bg-white dark:bg-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Interações Nutricionais do Zinco
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">⚡ Antagonismo P × Zn</h4>
            <p className="text-muted-foreground text-sm">
              Excesso de fósforo induz deficiência de zinco. Manter relação P/Zn equilibrada.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">⚡ Antagonismo Fe × Zn</h4>
            <p className="text-muted-foreground text-sm">
              Competição na absorção. Altas doses de um podem reduzir absorção do outro.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✓ Sinergismo com N</h4>
            <p className="text-muted-foreground text-sm">
              Zinco necessário para síntese proteica e aproveitamento do nitrogênio.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria Visual */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          Galeria: Zinco na Agricultura
        </h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Tratamento de Sementes com Zn", description: "Aplicação via semente" },
            { title: "Deficiência de Zn em Café", description: "Roseta e little leaf" },
            { title: "Pulverização Foliar", description: "Correção rápida com quelatos" },
          ]}
        />
      </section>

    </div>
  </div>
);

export default ZincoContent;
