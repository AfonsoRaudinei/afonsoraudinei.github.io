import { Droplets, AlertTriangle, Leaf, FlaskConical, Zap, Shield, Cog, Sun } from "lucide-react";
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

const CobreContent = () => (
  <div className="min-h-screen">
    {/* Header Hero */}
    <div className="relative bg-gradient-to-br from-orange-500 to-amber-700 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-orange-300/30">
            <span className="text-5xl font-bold text-orange-600">Cu</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Cobre (Cu)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Micronutriente essencial para fotossíntese, respiração e lignificação. 
          Componente de enzimas oxidases e proteínas envolvidas no transporte de elétrons.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">6-20</p>
            <p className="text-white/70 text-sm">mg/kg teor foliar</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">0,3-0,8</p>
            <p className="text-white/70 text-sm">mg/dm³ no solo</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">Cu²⁺</p>
            <p className="text-white/70 text-sm">forma absorvida</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-orange-500 to-amber-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Sulfato de Cobre", info: "CuSO₄·5H₂O\n25% Cu", desc: "Mais comum" },
              { nome: "Óxido de Cobre", info: "CuO\n75% Cu", desc: "Liberação lenta" },
              { nome: "Cu-EDTA", info: "Quelato\n13-15% Cu", desc: "Alta eficiência" },
              { nome: "Oxicloreto de Cu", info: "Cu₂(OH)₃Cl\n50% Cu", desc: "Fungicida" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-orange-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-orange-600" />
          Fertilizantes com Cobre
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Sulfato de Cobre", description: "Cristais azuis" },
            { title: "Óxido de Cobre", description: "Pó preto/marrom" },
            { title: "Cu-EDTA Quelato", description: "Solução concentrada" },
            { title: "Calda Bordalesa", description: "Fungicida cúprico" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-l-4 border-orange-500 p-6 rounded-lg shadow-md">
        <h4 className="text-orange-800 dark:text-orange-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-orange-900 dark:text-orange-100 mb-4 leading-relaxed">
              O cobre é absorvido como Cu²⁺ e Cu⁺. Liga-se fortemente à matéria orgânica 
              e argilas, tendo baixa mobilidade no solo. pH alto reduz disponibilidade.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-orange-800 dark:text-orange-200 flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Solos orgânicos:</strong> Alta fixação, risco de deficiência</span>
              </li>
              <li className="text-orange-800 dark:text-orange-200 flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>pH elevado:</strong> Precipita como hidróxido</span>
              </li>
              <li className="text-orange-800 dark:text-orange-200 flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Antagonismo Cu/Zn:</strong> Competição na absorção</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder
            title="Cobre no Solo"
            description="Adsorção e disponibilidade"
            aspectRatio="video"
          />
        </div>
      </div>

      {/* Principais Funções */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Principais Funções do Cobre na Planta
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-br from-white to-orange-50 dark:from-card dark:to-orange-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-700 dark:text-orange-400 flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Fotossíntese (Plastocianina)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente da plastocianina, proteína que transporta elétrons entre 
                os fotossistemas II e I na cadeia de transporte de elétrons.
              </p>
              <ImagePlaceholder
                title="Plastocianina"
                description="Transporte de elétrons fotossintético"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-br from-white to-orange-50 dark:from-card dark:to-orange-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-700 dark:text-orange-400 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Respiração (Citocromo Oxidase)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente da citocromo c oxidase na mitocôndria, enzima terminal 
                da cadeia respiratória que reduz O₂ a H₂O.
              </p>
              <ImagePlaceholder
                title="Cadeia Respiratória"
                description="Citocromo oxidase mitocondrial"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-br from-white to-orange-50 dark:from-card dark:to-orange-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-700 dark:text-orange-400 flex items-center gap-2">
                <Cog className="w-5 h-5" />
                Lignificação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Cofator da lacase e polifenol oxidase, enzimas essenciais para 
                síntese de lignina e rigidez dos tecidos vegetais.
              </p>
              <ImagePlaceholder
                title="Síntese de Lignina"
                description="Estruturação da parede celular"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-br from-white to-orange-50 dark:from-card dark:to-orange-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-700 dark:text-orange-400 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Defesa Antioxidante (Cu/Zn-SOD)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente da superóxido dismutase (Cu/Zn-SOD), enzima que neutraliza 
                radicais superóxido protegendo contra estresse oxidativo.
              </p>
              <ImagePlaceholder
                title="Sistema Antioxidante"
                description="Proteção contra radicais livres"
                aspectRatio="video"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deficiência */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border-2 border-yellow-400">
        <CardHeader>
          <CardTitle className="text-yellow-800 dark:text-yellow-300 text-center text-xl flex items-center justify-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Sintomas de Deficiência
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-yellow-900 dark:text-yellow-100 mb-4 text-sm leading-relaxed">
                A deficiência é comum em solos orgânicos, arenosos ou com pH muito elevado. 
                Os sintomas aparecem primeiro nas folhas jovens devido à baixa mobilidade.
              </p>
              <ul className="space-y-3">
                {[
                  { sintoma: "Clorose de folhas novas", detalhe: "Amarelecimento entre nervuras" },
                  { sintoma: "Murchamento das pontas", detalhe: "Folhas pendentes" },
                  { sintoma: "Morte de meristemas", detalhe: "Pontos de crescimento necróticos" },
                  { sintoma: "Grãos chochos", detalhe: "Má formação de sementes" },
                  { sintoma: "Caule fraco", detalhe: "Acamamento em cereais" }
                ].map((item, i) => (
                  <li key={i} className="text-yellow-900 dark:text-yellow-100 pl-6 relative">
                    <span className="absolute left-0 text-yellow-500 font-bold">✗</span>
                    <span className="font-medium">{item.sintoma}</span>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm ml-0">{item.detalhe}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder
                title="Deficiência em Trigo"
                description="Espiga branca (white tip)"
                aspectRatio="video"
              />
              <ImagePlaceholder
                title="Clorose em Folhas Novas"
                description="Amarelecimento típico"
                aspectRatio="video"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Toxidez */}
      <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-2 border-red-400">
        <CardHeader>
          <CardTitle className="text-red-800 dark:text-red-300 text-center text-xl flex items-center justify-center gap-2">
            <Leaf className="w-6 h-6" />
            Toxidez de Cobre
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-red-900 dark:text-red-100 mb-4 text-sm leading-relaxed">
                A toxidez ocorre em solos com histórico de uso intensivo de fungicidas cúpricos 
                ou aplicação excessiva de dejetos animais (suínos).
              </p>
              <ul className="space-y-3">
                {[
                  { sintoma: "Clorose induzida de Fe", detalhe: "Antagonismo Cu/Fe" },
                  { sintoma: "Raízes escuras e curtas", detalhe: "Dano radicular severo" },
                  { sintoma: "Redução do crescimento", detalhe: "Plantas atrofiadas" },
                  { sintoma: "Necrose foliar", detalhe: "Manchas marrons" }
                ].map((item, i) => (
                  <li key={i} className="text-red-900 dark:text-red-100 pl-6 relative">
                    <span className="absolute left-0 text-red-500 font-bold">⚠</span>
                    <span className="font-medium">{item.sintoma}</span>
                    <p className="text-red-700 dark:text-red-300 text-sm ml-0">{item.detalhe}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder
                title="Toxidez de Cobre"
                description="Dano em raízes e clorose"
                aspectRatio="video"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interações */}
      <section className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Interações Nutricionais do Cobre
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-orange-100 dark:border-orange-900">
            <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Antagonismo Cu/Zn</h4>
            <p className="text-muted-foreground text-sm">
              Competição na absorção. Excesso de Zn induz deficiência de Cu e vice-versa.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-orange-100 dark:border-orange-900">
            <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Antagonismo Cu/Fe</h4>
            <p className="text-muted-foreground text-sm">
              Excesso de Cu pode causar deficiência de Fe por competição na membrana.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-orange-100 dark:border-orange-900">
            <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Fixação por M.O.</h4>
            <p className="text-muted-foreground text-sm">
              Alta matéria orgânica complexa o cobre, reduzindo disponibilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria Visual */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          Galeria: Cobre na Agricultura
        </h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Aplicação Foliar de Cu", description: "Suplementação via folha" },
            { title: "Deficiência em Citros", description: "Morte de ramos" },
            { title: "Calda Bordalesa", description: "Fungicida tradicional" },
          ]}
        />
      </section>

    </div>
  </div>
);

export default CobreContent;
