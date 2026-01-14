import { Droplets, AlertTriangle, Leaf, FlaskConical, Sun, Shield, Zap, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder, ImageGrid } from "./ImagePlaceholder";

const ManganeContent = () => (
  <div className="min-h-screen">
    {/* Header Hero */}
    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-purple-300/30">
            <span className="text-5xl font-bold text-purple-600">Mn</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Manganês (Mn)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Micronutriente essencial para fotossíntese, ativação enzimática e defesa antioxidante. 
          Componente do complexo de evolução do oxigênio no fotossistema II.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">30-100</p>
            <p className="text-white/70 text-sm">mg/kg teor foliar</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">1,5-5,0</p>
            <p className="text-white/70 text-sm">mg/dm³ no solo</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">Mn²⁺</p>
            <p className="text-white/70 text-sm">forma absorvida</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Sulfato de Manganês", info: "MnSO₄·H₂O\n26-32% Mn", desc: "Mais comum" },
              { nome: "Óxido de Manganês", info: "MnO\n41-68% Mn", desc: "Liberação lenta" },
              { nome: "Mn-EDTA", info: "Quelato\n12-13% Mn", desc: "Alta eficiência" },
              { nome: "FTE BR-12", info: "Fritas\n2-4% Mn", desc: "Micronutrientes" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-purple-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-purple-600" />
          Fertilizantes com Manganês
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Sulfato de Manganês", description: "Cristais róseos" },
            { title: "Óxido de Manganês", description: "Pó preto/marrom" },
            { title: "Mn-EDTA Quelato", description: "Solução amarelada" },
            { title: "FTE com Mn", description: "Fritas granuladas" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-l-4 border-purple-500 p-6 rounded-lg shadow-md">
        <h4 className="text-purple-800 dark:text-purple-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-purple-900 dark:text-purple-100 mb-4 leading-relaxed">
              O manganês é absorvido como Mn²⁺. Sua disponibilidade é muito sensível ao pH 
              e ao potencial redox do solo. Calagem excessiva é a principal causa de deficiência.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-purple-800 dark:text-purple-200 flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>pH &gt; 6,5:</strong> Disponibilidade reduz drasticamente</span>
              </li>
              <li className="text-purple-800 dark:text-purple-200 flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Solos alagados:</strong> Alta disponibilidade (redução)</span>
              </li>
              <li className="text-purple-800 dark:text-purple-200 flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Deficiência comum:</strong> Em solos supercorrigidos</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder
            title="Manganês no Solo"
            description="Efeito do pH na disponibilidade"
            aspectRatio="video"
          />
        </div>
      </div>

      {/* Principais Funções */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Principais Funções do Manganês na Planta
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-white to-purple-50 dark:from-card dark:to-purple-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Fotólise da Água (OEC)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente essencial do Complexo de Evolução do Oxigênio (OEC) no 
                fotossistema II, catalisando a quebra da água e liberação de O₂.
              </p>
              <ImagePlaceholder
                title="Complexo OEC (Mn₄CaO₅)"
                description="Cluster manganês-cálcio"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-white to-purple-50 dark:from-card dark:to-purple-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Defesa Antioxidante (Mn-SOD)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Componente da superóxido dismutase mitocondrial (Mn-SOD), enzima 
                que protege a mitocôndria contra radicais superóxido.
              </p>
              <ImagePlaceholder
                title="Mn-SOD Mitocondrial"
                description="Proteção antioxidante"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-white to-purple-50 dark:from-card dark:to-purple-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Ativação Enzimática
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Ativa mais de 35 enzimas, incluindo descarboxilases e desidrogenases 
                do ciclo de Krebs. Essencial para metabolismo de carboidratos.
              </p>
              <ImagePlaceholder
                title="Enzimas Ativadas por Mn"
                description="Descarboxilases e desidrogenases"
                aspectRatio="video"
              />
            </CardContent>
          </Card>

          <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-white to-purple-50 dark:from-card dark:to-purple-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Síntese de Lignina
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Participa da biossíntese de lignina e compostos fenólicos, 
                contribuindo para resistência mecânica e defesa contra patógenos.
              </p>
              <ImagePlaceholder
                title="Via dos Fenilpropanoides"
                description="Síntese de lignina"
                aspectRatio="video"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deficiência */}
      <Card className="bg-gradient-to-br from-yellow-50 to-purple-50 dark:from-yellow-950/30 dark:to-purple-950/30 border-2 border-yellow-400">
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
                A deficiência é comum em solos com pH elevado ou supercorrigidos. 
                Sintomas aparecem primeiro nas folhas jovens (baixa mobilidade).
              </p>
              <ul className="space-y-3">
                {[
                  { sintoma: "Clorose internerval", detalhe: "Verde entre nervuras, amarelo no limbo" },
                  { sintoma: "Manchas necróticas", detalhe: "Pontos marrons no tecido clorótico" },
                  { sintoma: "Soja: 'Amarelão'", detalhe: "Clorose característica em reboleiras" },
                  { sintoma: "Aveia: 'Grey Speck'", detalhe: "Manchas cinza no limbo" },
                  { sintoma: "Queda de produtividade", detalhe: "Fotossíntese comprometida" }
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
                title="Deficiência em Soja"
                description="Amarelão típico em reboleiras"
                aspectRatio="video"
              />
              <ImagePlaceholder
                title="Clorose Internerval"
                description="Padrão reticulado característico"
                aspectRatio="video"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Toxidez */}
      <Card className="bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-950/30 dark:to-purple-950/30 border-2 border-red-400">
        <CardHeader>
          <CardTitle className="text-red-800 dark:text-red-300 text-center text-xl flex items-center justify-center gap-2">
            <Leaf className="w-6 h-6" />
            Toxidez de Manganês
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-red-900 dark:text-red-100 mb-4 text-sm leading-relaxed">
                A toxidez ocorre em solos ácidos (pH &lt; 5,0) ou alagados. O excesso de Mn 
                interfere na absorção e metabolismo de outros nutrientes.
              </p>
              <ul className="space-y-3">
                {[
                  { sintoma: "Manchas marrons", detalhe: "Acúmulo de MnO₂ nas folhas" },
                  { sintoma: "Enrugamento foliar", detalhe: "Folhas deformadas" },
                  { sintoma: "Clorose marginal", detalhe: "Bordas amareladas" },
                  { sintoma: "Crinkle leaf (feijão)", detalhe: "Folhas encarquilhadas" }
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
                title="Toxidez em Feijão"
                description="Crinkle leaf - folhas enrugadas"
                aspectRatio="video"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interações */}
      <section className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Interações Nutricionais do Manganês
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-purple-100 dark:border-purple-900">
            <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Antagonismo Mn/Fe</h4>
            <p className="text-muted-foreground text-sm">
              Competição na absorção. Excesso de Mn pode induzir deficiência de Fe.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-purple-100 dark:border-purple-900">
            <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Efeito do pH</h4>
            <p className="text-muted-foreground text-sm">
              Disponibilidade cai 100x para cada unidade de pH acima de 6. Calagem excessiva é crítica.
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl p-4 shadow-sm border border-purple-100 dark:border-purple-900">
            <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Glifosato</h4>
            <p className="text-muted-foreground text-sm">
              Pode complexar Mn e induzir deficiência em soja RR. Monitorar e suplementar.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria Visual */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          Galeria: Manganês na Agricultura
        </h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Aplicação Foliar de Mn", description: "Suplementação via folha" },
            { title: "Amarelão em Soja", description: "Deficiência em reboleira" },
            { title: "Análise Foliar", description: "Diagnóstico nutricional" },
          ]}
        />
      </section>

    </div>
  </div>
);

export default ManganeContent;
