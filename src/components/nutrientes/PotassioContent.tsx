import { Droplets, AlertTriangle, Zap, Shield, Beaker, Leaf, FlaskConical, Sprout } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder, ImageGrid } from "./ImagePlaceholder";

const fontesK = [
  { nome: "Cloreto de Potássio", info: "KCl\n58-62% K₂O", desc: "Mais utilizado" },
  { nome: "Sulfato de Potássio", info: "K₂SO₄\n48-52% K₂O\n17% S", desc: "Sem cloro" },
  { nome: "Nitrato de Potássio", info: "KNO₃\n44% K₂O\n13% N", desc: "Fertirrigação" },
  { nome: "Sulfato de K e Mg", info: "22% K₂O\n11% Mg\n22% S", desc: "Langbeinita" },
];

const funcoesK = [
  { titulo: "Regulação Hídrica", icon: Droplets, desc: "Controla abertura/fechamento dos estômatos, regulando transpiração e absorção de CO₂" },
  { titulo: "Ativação Enzimática", icon: Zap, desc: "Cofator de mais de 60 enzimas na fotossíntese, respiração e síntese de proteínas" },
  { titulo: "Resistência a Estresses", icon: Shield, desc: "Aumenta tolerância a doenças, pragas, seca e geada" },
  { titulo: "Qualidade de Frutos", icon: Sprout, desc: "Melhora tamanho, cor, sabor e teor de açúcares" },
];

const PotassioContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-purple-300/30">
              <span className="text-5xl font-bold text-purple-600">K</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Potássio (K)</h1>
          <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            Macronutriente primário essencial para regulação hídrica, ativação enzimática e 
            resistência a estresses. Cátion mais abundante nas células vegetais.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-white">574</p>
              <p className="text-white/70 text-sm">kg K₂O/ha máx</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-white">17-35</p>
              <p className="text-white/70 text-sm">g/kg na planta</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-white">K⁺</p>
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
              {fontesK.map((fonte, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-purple-700 font-bold text-sm mb-2">{fonte.nome}</h3>
                  <p className="text-foreground text-xs whitespace-pre-line font-medium">{fonte.info}</p>
                  <p className="text-muted-foreground text-[10px] mt-2 uppercase tracking-wide">{fonte.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Imagens de Fontes */}
        <section>
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-purple-600" />
            Fertilizantes Potássicos
          </h3>
          <ImageGrid
            columns={4}
            aspectRatio="square"
            images={[
              { title: "Cloreto de Potássio (KCl)", description: "60% K₂O - Principal fonte" },
              { title: "Sulfato de Potássio", description: "50% K₂O + S - Sem cloro" },
              { title: "Nitrato de Potássio", description: "44% K₂O + N - Fertirrigação" },
              { title: "Vinhaça", description: "Fonte orgânica de K" },
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
                O potássio é encontrado em diferentes formas no solo: na solução (prontamente disponível), 
                trocável (adsorvido aos coloides), não-trocável (fixado) e estrutural (minerais).
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-purple-800 dark:text-purple-200 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Solos arenosos:</strong> Maior susceptibilidade à lixiviação</span>
                </li>
                <li className="text-purple-800 dark:text-purple-200 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Solos argilosos:</strong> Maior retenção, pode haver fixação</span>
                </li>
                <li className="text-purple-800 dark:text-purple-200 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Competição:</strong> Altos teores de Ca e Mg reduzem absorção</span>
                </li>
                <li className="text-purple-800 dark:text-purple-200 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Parcelamento:</strong> Recomendado em solos arenosos</span>
                </li>
              </ul>
            </div>
            <ImagePlaceholder
              title="Formas de K no Solo"
              description="Solução, trocável, fixado e estrutural"
              aspectRatio="video"
            />
          </div>
        </div>

        {/* Teores Adequados */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
            <Leaf className="w-5 h-5 text-purple-600" />
            Teores Adequados nas Plantas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { cultura: "Soja", valor: "17-25", ext: "até 574 kg K₂O/ha" },
              { cultura: "Milho", valor: "17-35", ext: "até 250 kg K₂O/ha" },
              { cultura: "Café", valor: "18-24", ext: "Alta demanda" },
              { cultura: "Cana", valor: "10-16", ext: "Vinhaça como fonte" },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-card rounded-xl p-4 text-center shadow-sm border border-purple-100 dark:border-purple-900">
                <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">{item.cultura}</h4>
                <p className="text-2xl font-bold text-foreground">{item.valor}</p>
                <p className="text-muted-foreground text-xs">g/kg MS</p>
                <p className="text-purple-600 dark:text-purple-400 text-[10px] mt-1">{item.ext}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principais Funções */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Principais Funções do Potássio
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {funcoesK.map((funcao, i) => (
              <Card key={i} className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-white to-purple-50 dark:from-card dark:to-purple-950/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-purple-700 dark:text-purple-400 flex items-center gap-2">
                    <funcao.icon className="w-5 h-5" />
                    {funcao.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{funcao.desc}</p>
                  <ImagePlaceholder
                    title={funcao.titulo}
                    description={`Função do K: ${funcao.titulo}`}
                    aspectRatio="video"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regulação Estomática - Destaque */}
        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-2 border-purple-400">
          <CardHeader>
            <CardTitle className="text-purple-800 dark:text-purple-300 text-center text-xl">
              <Droplets className="w-6 h-6 inline mr-2" />
              Regulação Estomática
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-purple-900 dark:text-purple-100 leading-relaxed">
                  O potássio é o principal cátion responsável pela <strong>turgescência das células-guarda</strong>, 
                  controlando a abertura e fechamento dos estômatos.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-100 dark:bg-green-900/50 rounded-xl p-4 text-center border border-green-300">
                    <p className="text-green-700 dark:text-green-300 font-bold">K⁺ entra</p>
                    <p className="text-green-600 dark:text-green-400 text-sm">Estômato ABRE</p>
                    <p className="text-green-500 text-xs mt-1">↑ Turgescência</p>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/50 rounded-xl p-4 text-center border border-red-300">
                    <p className="text-red-700 dark:text-red-300 font-bold">K⁺ sai</p>
                    <p className="text-red-600 dark:text-red-400 text-sm">Estômato FECHA</p>
                    <p className="text-red-500 text-xs mt-1">↓ Turgescência</p>
                  </div>
                </div>
              </div>
              <ImagePlaceholder
                title="Mecanismo Estomático"
                description="Papel do K⁺ na abertura e fechamento"
                aspectRatio="square"
              />
            </div>
          </CardContent>
        </Card>

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
                <p className="text-orange-900 dark:text-orange-100 mb-4 text-sm">
                  O potássio tem <strong>alta mobilidade</strong> no floema. Sintomas aparecem 
                  nas <strong>folhas velhas</strong> com queima marginal característica.
                </p>
                <ul className="space-y-3">
                  {[
                    { sintoma: "Clorose e necrose marginal", detalhe: "Queima das bordas (típico)" },
                    { sintoma: "Menor resistência ao acamamento", detalhe: "Caules fracos" },
                    { sintoma: "Grãos menores e leves", detalhe: "Menor enchimento" },
                    { sintoma: "Maior susceptibilidade a doenças", detalhe: "Defesa comprometida" },
                    { sintoma: "Murchamento sob estresse", detalhe: "Regulação hídrica afetada" },
                  ].map((item, i) => (
                    <li key={i} className="text-orange-900 dark:text-orange-100 pl-6 relative">
                      <span className="absolute left-0 text-orange-500 font-bold">✗</span>
                      <span className="font-medium">{item.sintoma}</span>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">{item.detalhe}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <ImagePlaceholder
                  title="Queima Marginal em Soja"
                  description="Necrose nas bordas das folhas velhas"
                  aspectRatio="video"
                />
                <ImagePlaceholder
                  title="Deficiência de K em Milho"
                  description="Clorose e necrose marginal"
                  aspectRatio="video"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interações Nutricionais */}
        <section className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-950/30 dark:to-cyan-950/30 p-6 rounded-2xl border-2 border-sky-300 dark:border-sky-800">
          <h3 className="text-sky-800 dark:text-sky-300 text-xl font-bold mb-6 text-center">
            Interações Nutricionais: K × Ca × Mg
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sky-900 dark:text-sky-100 mb-4 leading-relaxed">
                O potássio compete com cálcio e magnésio pelos sítios de absorção na raiz. 
                O equilíbrio entre estes cátions é fundamental para evitar desequilíbrios.
              </p>
              <div className="bg-white dark:bg-card p-4 rounded-xl border border-sky-300 dark:border-sky-700">
                <p className="text-sky-800 dark:text-sky-300 font-bold text-center text-lg">
                  Relação ideal K:Ca:Mg
                </p>
                <p className="text-sky-600 dark:text-sky-400 text-center text-2xl font-bold mt-2">
                  1 : (3-5) : (1-3)
                </p>
                <p className="text-muted-foreground text-center text-xs mt-1">em mmolc/dm³</p>
              </div>
            </div>
            <ImagePlaceholder
              title="Competição Catiônica"
              description="Absorção competitiva de K, Ca e Mg"
              aspectRatio="video"
            />
          </div>
        </section>

        {/* Galeria Visual */}
        <section>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Galeria: Potássio na Agricultura
          </h3>
          <ImageGrid
            columns={3}
            aspectRatio="video"
            images={[
              { title: "Aplicação de KCl a Lanço", description: "Adubação potássica" },
              { title: "Deficiência de K em Soja", description: "Queima marginal típica" },
              { title: "Qualidade de Frutos", description: "Efeito do K no tamanho e cor" },
            ]}
          />
        </section>

      </div>
    </div>
  );
};

export default PotassioContent;
