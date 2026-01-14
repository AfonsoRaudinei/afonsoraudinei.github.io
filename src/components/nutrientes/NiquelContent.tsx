import { Droplets, AlertTriangle, Leaf, FlaskConical, Sprout, Shield, Dna, Beaker, ArrowRight, ArrowLeftRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder, ImageGrid } from "./ImagePlaceholder";

const NiquelContent = () => (
  <div className="min-h-screen">
    {/* Header Hero */}
    <div className="relative bg-gradient-to-br from-stone-500 to-stone-700 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-stone-300/30">
            <span className="text-5xl font-bold text-stone-600">Ni</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Níquel (Ni)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Micronutriente essencial para o metabolismo do nitrogênio, ativação da urease 
          e proteção contra estresses abióticos como deriva de herbicidas.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">0,01-5</p>
            <p className="text-white/70 text-sm">mg/kg na planta</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">Ni²⁺</p>
            <p className="text-white/70 text-sm">forma absorvida</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">Urease</p>
            <p className="text-white/70 text-sm">enzima dependente</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-stone-500 to-stone-700 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Sulfato de Níquel", info: "NiSO₄·6H₂O\n22% Ni", desc: "Foliar e solo" },
              { nome: "Cloreto de Níquel", info: "NiCl₂·6H₂O\n24% Ni", desc: "Alta solubilidade" },
              { nome: "Nitrato de Níquel", info: "Ni(NO₃)₂\n20% Ni", desc: "Fornece N" },
              { nome: "Quelatos Ni-EDTA", info: "5-14% Ni", desc: "Alta eficiência" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-stone-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-stone-600" />
          Fertilizantes com Níquel
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Sulfato de Níquel", description: "Cristais verdes" },
            { title: "Cloreto de Níquel", description: "Solução para foliar" },
            { title: "Quelato Ni-EDTA", description: "Alta disponibilidade" },
            { title: "Nitrato de Níquel", description: "Fonte dupla Ni + N" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-stone-50 to-zinc-50 dark:from-stone-950/30 dark:to-zinc-950/30 border-l-4 border-stone-500 p-6 rounded-lg shadow-md">
        <h4 className="text-stone-800 dark:text-stone-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-stone-900 dark:text-stone-100 mb-4 leading-relaxed">
              O níquel ocorre em solos em concentrações de 0,1-1000 mg/kg, dependendo do material de origem. 
              Sua disponibilidade é fortemente influenciada pelo pH, matéria orgânica e teor de CaCO₃.
            </p>
            <ul className="space-y-2 text-stone-800 dark:text-stone-200">
              <li className="flex items-start gap-2">
                <span className="text-stone-500 mt-1">•</span>
                <span><strong>pH alto:</strong> Reduz drasticamente a disponibilidade de Ni</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-500 mt-1">•</span>
                <span><strong>Solos calcários:</strong> Limitam a absorção radicular</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-500 mt-1">•</span>
                <span><strong>Matéria orgânica:</strong> Complexa o Ni, reduzindo toxicidade</span>
              </li>
            </ul>
          </div>
          <div>
            <ImagePlaceholder 
              title="Perfil de Solo"
              description="Disponibilidade de Ni em diferentes horizontes"
              aspectRatio="video"
            />
          </div>
        </div>
      </div>

      {/* Pesquisa: Níquel e Glifosato */}
      <Card className="border-2 border-stone-300 dark:border-stone-700 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-stone-800 dark:text-stone-200">
            <Beaker className="w-6 h-6 text-amber-600" />
            Pesquisa: Níquel Alivia Danos de Glifosato
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
            Estudo científico demonstrou que aplicações foliares de níquel podem aliviar significativamente 
            os efeitos prejudiciais da deriva de glifosato em trigo, quadruplicando a produção de grãos em 
            plantas afetadas pelo herbicida.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white dark:bg-stone-800 rounded-xl p-4 text-center shadow">
              <p className="text-3xl font-bold text-amber-600">75%</p>
              <p className="text-sm text-muted-foreground">Redução dos danos</p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-xl p-4 text-center shadow">
              <p className="text-3xl font-bold text-amber-600">4x</p>
              <p className="text-sm text-muted-foreground">Aumento na produção</p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-xl p-4 text-center shadow">
              <p className="text-3xl font-bold text-amber-600">0,01%</p>
              <p className="text-sm text-muted-foreground">NiCl₂ foliar efetivo</p>
            </div>
          </div>
          <p className="text-sm text-stone-600 dark:text-stone-400 italic">
            Fonte: Kutman et al. (2013) - Journal of Agricultural and Food Chemistry
          </p>
        </CardContent>
      </Card>

      {/* Imagens do Experimento */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Beaker className="w-5 h-5 text-stone-600" />
          Efeitos do Níquel na Proteção contra Glifosato
        </h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Sem Níquel + Glifosato", description: "Plantas com nanismo e perfilhamento excessivo" },
            { title: "Com Níquel Foliar", description: "Plantas protegidas com altura normal" },
            { title: "Qualidade dos Grãos", description: "Grãos deformados vs. normais" },
          ]}
        />
      </section>

      {/* Principais Funções */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Principais Funções do Níquel
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Dna,
              titulo: "Ativação da Urease",
              descricao: "O níquel é cofator essencial da urease, a única enzima conhecida que requer Ni em plantas. Responsável pela assimilação da ureia gerada endogenamente ou absorvida do ambiente.",
              cor: "from-emerald-500 to-teal-600"
            },
            {
              icon: Shield,
              titulo: "Inibição de Etileno",
              descricao: "Íons de níquel são inibidores efetivos da biossíntese de etileno, possivelmente substituindo o cofator de Fe na ACC oxidase. Pode prolongar vida pós-colheita de frutos.",
              cor: "from-blue-500 to-indigo-600"
            },
            {
              icon: Leaf,
              titulo: "Metabolismo do Nitrogênio",
              descricao: "Essencial para o metabolismo do nitrogênio e prevenção do acúmulo de ureia a níveis tóxicos. Deficiência causa distúrbios em aminoácidos e ácidos orgânicos.",
              cor: "from-green-500 to-emerald-600"
            },
            {
              icon: Sprout,
              titulo: "Proteção contra Estresses",
              descricao: "Aplicações foliares protegem contra deriva de herbicidas como glifosato, aliviando nanismo, perfilhamento excessivo e perdas de produtividade.",
              cor: "from-amber-500 to-orange-600"
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
            { title: "Urease Ativa", description: "Metabolismo da ureia" },
            { title: "Fixação de N₂", description: "Em leguminosas" },
            { title: "Proteção Foliar", description: "Contra herbicidas" },
            { title: "Qualidade de Grãos", description: "Germinação melhorada" },
          ]}
        />
      </section>

      {/* Deficiência */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Sintomas de Deficiência</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Sintoma "Orelha de Rato"</h4>
              <p className="text-red-700 dark:text-red-400 text-sm">
                Descrito em nogueira-pecã sob condições de campo, com folhas deformadas e curvadas 
                semelhantes a orelhas de rato.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Acúmulo de Ureia</h4>
              <p className="text-red-700 dark:text-red-400 text-sm">
                Níveis tóxicos de ureia nas folhas devido à inatividade da urease, causando 
                necrose foliar.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Distúrbios Metabólicos</h4>
              <p className="text-red-700 dark:text-red-400 text-sm">
                Alterações na homeostase de aminoácidos e ácidos orgânicos, afetando o 
                crescimento geral da planta.
              </p>
            </div>
          </div>
          <div>
            <ImagePlaceholder
              title="Deficiência de Níquel"
              description="Sintomas visuais em diferentes culturas"
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
            { title: "Nogueira-pecã", description: "Orelha de rato clássica" },
            { title: "Soja", description: "Clorose internerval" },
            { title: "Trigo", description: "Nanismo e perfilhamento" },
          ]}
        />
      </section>

      {/* Diagrama Visual */}
      <Card className="bg-gradient-to-br from-stone-100 to-zinc-100 dark:from-stone-900/50 dark:to-zinc-900/50 border-0">
        <CardHeader>
          <CardTitle className="text-center text-xl text-foreground">
            Funções do Níquel na Planta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative max-w-lg mx-auto">
            {/* Representação visual da planta */}
            <div className="flex flex-col items-center gap-4">
              {/* Grãos/Frutos */}
              <div className="bg-amber-100 dark:bg-amber-900/30 rounded-xl p-4 text-center w-48">
                <p className="font-bold text-amber-800 dark:text-amber-300 text-sm">GRÃOS</p>
                <p className="text-xs text-amber-700 dark:text-amber-400">Qualidade e germinação</p>
              </div>
              
              <ArrowRight className="w-5 h-5 text-stone-400 rotate-90" />
              
              {/* Folhas */}
              <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-4 text-center w-64">
                <p className="font-bold text-green-800 dark:text-green-300 text-sm">FOLHAS</p>
                <p className="text-xs text-green-700 dark:text-green-400">Urease • Metabolismo de N • Inibição de etileno</p>
              </div>
              
              <ArrowRight className="w-5 h-5 text-stone-400 rotate-90" />
              
              {/* Caule */}
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-xl p-4 text-center w-56">
                <p className="font-bold text-emerald-800 dark:text-emerald-300 text-sm">CAULE</p>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">Translocação móvel</p>
              </div>
              
              <ArrowRight className="w-5 h-5 text-stone-400 rotate-90" />
              
              {/* Raízes */}
              <div className="bg-stone-200 dark:bg-stone-800/50 rounded-xl p-4 text-center w-72">
                <p className="font-bold text-stone-800 dark:text-stone-300 text-sm">RAÍZES</p>
                <p className="text-xs text-stone-700 dark:text-stone-400">Absorção como Ni²⁺ • Retenção de excesso</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interações Nutricionais */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6 text-stone-600" />
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
                  <span className="font-bold text-red-600">Ca, Mg:</span>
                  <span className="text-muted-foreground text-sm">Competem pelos mesmos sítios de absorção</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">Zn, Cu:</span>
                  <span className="text-muted-foreground text-sm">Podem reduzir absorção de Ni em altas doses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">Fe:</span>
                  <span className="text-muted-foreground text-sm">Interação competitiva na absorção radicular</span>
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
                  <span className="font-bold text-green-600">N (ureia):</span>
                  <span className="text-muted-foreground text-sm">Ni essencial para utilização eficiente da ureia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Mo:</span>
                  <span className="text-muted-foreground text-sm">Trabalham juntos na fixação biológica de N₂</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Glifosato:</span>
                  <span className="text-muted-foreground text-sm">Ni forma complexos e reduz fitotoxicidade</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resultados do Estudo */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Resultados de Pesquisa</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100 dark:bg-stone-800">
                <th className="p-3 text-left border border-stone-200 dark:border-stone-700">Tratamento</th>
                <th className="p-3 text-center border border-stone-200 dark:border-stone-700">Produção (g/planta)</th>
                <th className="p-3 text-center border border-stone-200 dark:border-stone-700">Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-stone-200 dark:border-stone-700">Controle (sem glifosato)</td>
                <td className="p-3 text-center border border-stone-200 dark:border-stone-700">3,5</td>
                <td className="p-3 text-center border border-stone-200 dark:border-stone-700">—</td>
              </tr>
              <tr className="bg-red-50 dark:bg-red-950/20">
                <td className="p-3 border border-stone-200 dark:border-stone-700">Glifosato 1% (sem Ni)</td>
                <td className="p-3 text-center border border-stone-200 dark:border-stone-700 text-red-600 font-bold">0,5</td>
                <td className="p-3 text-center border border-stone-200 dark:border-stone-700 text-red-600">-86%</td>
              </tr>
              <tr className="bg-green-50 dark:bg-green-950/20">
                <td className="p-3 border border-stone-200 dark:border-stone-700">Glifosato 1% + Ni foliar</td>
                <td className="p-3 text-center border border-stone-200 dark:border-stone-700 text-green-600 font-bold">2,4</td>
                <td className="p-3 text-center border border-stone-200 dark:border-stone-700 text-green-600">+380%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4 italic">
          Dados adaptados de Kutman et al. (2013) - Experimentos com trigo duro (Triticum durum cv. Balcali2000)
        </p>
      </section>

      {/* Galeria Visual */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">Galeria Visual</h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Aplicação Foliar", description: "Pulverização de NiCl₂" },
            { title: "Experimento em Vasos", description: "Comparação de tratamentos" },
            { title: "Grãos Colhidos", description: "Qualidade visual" },
            { title: "Plântulas", description: "Vigor de germinação" },
          ]}
        />
      </section>

    </div>
  </div>
);

export default NiquelContent;
