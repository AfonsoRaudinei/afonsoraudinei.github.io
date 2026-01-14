import { Droplets, AlertTriangle, Sun, Leaf, Zap, Shield, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder, ImageGrid } from "./ImagePlaceholder";

const FerroContent = () => (
  <div className="min-h-screen">
    {/* Header Hero */}
    <div className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-red-300/30">
            <span className="text-5xl font-bold text-red-600">Fe</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Ferro (Fe)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Micronutriente essencial para síntese de clorofila, transporte de elétrons na fotossíntese 
          e respiração. Cofator de enzimas como catalases, peroxidases e ferredoxinas.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">4.999</p>
            <p className="text-white/70 text-sm">g/ha extraídos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">16-22%</p>
            <p className="text-white/70 text-sm">exportação</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">Fe²⁺</p>
            <p className="text-white/70 text-sm">forma absorvida</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-red-500 to-red-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Sulfato Ferroso", info: "FeSO₄·7H₂O\n20% Fe", desc: "Mais solúvel" },
              { nome: "Quelatos Fe-EDDHA", info: "6% Fe", desc: "Estável pH alto" },
              { nome: "Sulfato Férrico", info: "Fe₂(SO₄)₃\n23% Fe", desc: "Via solo" },
              { nome: "Fe-DTPA", info: "10% Fe", desc: "Aplicação foliar" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-red-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-red-600" />
          Fertilizantes com Ferro
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Sulfato Ferroso", description: "Cristais esverdeados" },
            { title: "Quelato Fe-EDDHA", description: "Pó granulado vermelho" },
            { title: "Sulfato Férrico", description: "Pó amarelado" },
            { title: "Fe-DTPA Líquido", description: "Solução para foliar" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
        <h4 className="text-red-800 dark:text-red-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-red-900 dark:text-red-100 mb-4 leading-relaxed">
              O ferro é abundante nos solos, mas sua disponibilidade é fortemente dependente do pH. 
              Em solos alcalinos (pH &gt; 7), ocorre a formação de hidróxidos de ferro insolúveis, 
              causando a clorose férrica.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-red-800 dark:text-red-200 flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span><strong>Absorção:</strong> Preferencialmente como Fe²⁺ (ferroso)</span>
              </li>
              <li className="text-red-800 dark:text-red-200 flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span><strong>pH ideal:</strong> 5,0 a 6,5 para máxima disponibilidade</span>
              </li>
              <li className="text-red-800 dark:text-red-200 flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span><strong>Estratégias das plantas:</strong> Acidificação da rizosfera e sideróforos</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder
            title="Clorose Férrica em Solo Calcário"
            description="Folhas amareladas devido ao pH elevado"
            aspectRatio="video"
          />
        </div>
      </div>

      {/* Principais Funções */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Principais Funções do Ferro na Planta
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50 dark:from-card dark:to-red-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Fotossíntese
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente essencial da ferredoxina, citocromo b6f e outros transportadores 
                de elétrons na cadeia fotossintética. Participa do fotossistema I.
              </p>
              <ImagePlaceholder
                title="Cadeia de Transporte de Elétrons"
                description="Ferredoxina e citocromos"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50 dark:from-card dark:to-red-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                Síntese de Clorofila
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Embora não faça parte da molécula de clorofila, o ferro é essencial para sua 
                biossíntese, participando como cofator de enzimas específicas.
              </p>
              <ImagePlaceholder
                title="Biossíntese de Clorofila"
                description="Papel do Fe como cofator"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50 dark:from-card dark:to-red-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Respiração Celular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente dos citocromos na cadeia respiratória mitocondrial. 
                Essencial para a produção de ATP através da fosforilação oxidativa.
              </p>
              <ImagePlaceholder
                title="Citocromos Mitocondriais"
                description="Transporte de elétrons"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50 dark:from-card dark:to-red-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Defesa Antioxidante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Cofator de catalases, peroxidases e Fe-SOD que protegem as células 
                contra danos oxidativos causados por espécies reativas de oxigênio.
              </p>
              <ImagePlaceholder
                title="Sistema Antioxidante"
                description="Catalases e peroxidases"
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
                  { sintoma: "Clorose internerval em folhas jovens", detalhe: "Nervuras permanecem verdes" },
                  { sintoma: "Progressão para amarelecimento total", detalhe: "Casos severos ficam brancas" },
                  { sintoma: "Redução do crescimento", detalhe: "Folhas pequenas e distorcidas" },
                  { sintoma: "Comum em solos calcários", detalhe: "pH alto reduz disponibilidade" }
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
                description="Folhas jovens com nervuras verdes"
                aspectRatio="video"
              />
              <ImagePlaceholder
                title="Deficiência Severa"
                description="Folhas completamente amarelas/brancas"
                aspectRatio="video"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interações e Antagonismos */}
      <section className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Interações Nutricionais do Ferro
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-red-100 dark:border-red-900">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Antagonismo com Mn</h4>
            <p className="text-muted-foreground text-sm">
              Excesso de manganês pode induzir deficiência de ferro por competição na absorção.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-red-100 dark:border-red-900">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Interação com P</h4>
            <p className="text-muted-foreground text-sm">
              Excesso de fósforo pode precipitar ferro no solo, reduzindo disponibilidade.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-red-100 dark:border-red-900">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Sinergismo com S</h4>
            <p className="text-muted-foreground text-sm">
              Centros ferro-enxofre são essenciais para diversas enzimas celulares.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria Visual */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          Galeria: Ferro na Agricultura
        </h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Aplicação Foliar de Fe", description: "Quelatos para correção rápida" },
            { title: "Clorose Férrica em Soja", description: "Sintoma típico em folhas novas" },
            { title: "Recuperação Após Tratamento", description: "Reverdecimento gradual" },
          ]}
        />
      </section>

    </div>
  </div>
);

export default FerroContent;
