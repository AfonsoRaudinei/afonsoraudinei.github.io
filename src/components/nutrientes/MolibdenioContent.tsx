import { Droplets, AlertTriangle, Leaf, FlaskConical, Dna, ArrowLeftRight, Zap, Bug } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder, ImageGrid } from "./ImagePlaceholder";

const MolibdenioContent = () => (
  <div className="min-h-screen">
    {/* Header Hero */}
    <div className="relative bg-gradient-to-br from-violet-600 to-purple-800 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-violet-300/30">
            <span className="text-5xl font-bold text-violet-600">Mo</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Molibdênio (Mo)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Micronutriente essencial para fixação biológica de nitrogênio e redução de nitrato. 
          Componente das enzimas nitrogenase e nitrato redutase, fundamentais no metabolismo do N.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">20-30</p>
            <p className="text-white/70 text-sm">g/ha extração soja</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">MoO₄²⁻</p>
            <p className="text-white/70 text-sm">forma absorvida</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">Móvel</p>
            <p className="text-white/70 text-sm">no floema</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      {/* Principais Fontes */}
      <Card className="bg-gradient-to-br from-violet-600 to-purple-800 text-white border-0 shadow-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center uppercase tracking-wider">
            <FlaskConical className="w-6 h-6 inline mr-2" />
            Principais Fontes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nome: "Molibdato de Sódio", info: "Na₂MoO₄·2H₂O\n39% Mo", desc: "Tratamento de sementes" },
              { nome: "Molibdato de Amônio", info: "(NH₄)₆Mo₇O₂₄\n54% Mo", desc: "Alta concentração" },
              { nome: "Ácido Molíbdico", info: "H₂MoO₄\n66% Mo", desc: "Aplicação foliar" },
              { nome: "Trióxido de Mo", info: "MoO₃\n66% Mo", desc: "Formulações sólidas" }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-violet-700 font-bold text-sm mb-2">{f.nome}</h3>
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
          <FlaskConical className="w-5 h-5 text-violet-600" />
          Fertilizantes com Molibdênio
        </h3>
        <ImageGrid
          columns={4}
          aspectRatio="square"
          images={[
            { title: "Molibdato de Sódio", description: "Cristais para TS" },
            { title: "Molibdato de Amônio", description: "Alta concentração" },
            { title: "CoMo Líquido", description: "Para tratamento de sementes" },
            { title: "FTE com Mo", description: "Fritas com micronutrientes" },
          ]}
        />
      </section>

      {/* No Solo */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border-l-4 border-violet-500 p-6 rounded-lg shadow-md">
        <h4 className="text-violet-800 dark:text-violet-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6" />
          Dinâmica no Solo
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-violet-900 dark:text-violet-100 mb-4 leading-relaxed">
              O molibdênio é absorvido como molibdato (MoO₄²⁻). Diferente de outros micronutrientes,
              sua disponibilidade <strong>aumenta com a elevação do pH</strong>, sendo a calagem
              benéfica para sua absorção.
            </p>
            <ul className="space-y-2 text-violet-800 dark:text-violet-200">
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                <span><strong>Extração soja:</strong> 20-30 g/ha (menor demanda entre micros)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                <span><strong>pH alto:</strong> aumenta disponibilidade (inverso de Fe, Mn, Zn)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                <span><strong>Móvel no floema:</strong> redistribuído das folhas velhas para novas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                <span><strong>Sulfato:</strong> compete pelo mesmo sítio de absorção</span>
              </li>
            </ul>
          </div>
          <div>
            <ImagePlaceholder 
              title="Disponibilidade x pH"
              description="Mo é único: disponibilidade aumenta com pH alto"
              aspectRatio="video"
            />
          </div>
        </div>
      </div>

      {/* Principais Funções */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Principais Funções do Molibdênio
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Bug,
              titulo: "Fixação Biológica de N₂",
              descricao: "Componente essencial da enzima nitrogenase presente nos nódulos de Bradyrhizobium. Sem Mo adequado, a fixação biológica é severamente comprometida.",
              cor: "from-violet-500 to-purple-600"
            },
            {
              icon: Dna,
              titulo: "Nitrato Redutase",
              descricao: "Componente da enzima nitrato redutase, que converte nitrato (NO₃⁻) em nitrito na primeira etapa da assimilação do nitrogênio absorvido.",
              cor: "from-indigo-500 to-blue-600"
            },
            {
              icon: Leaf,
              titulo: "Metabolismo do Nitrogênio",
              descricao: "Atua no metabolismo geral do N, afetando síntese de proteínas, aminoácidos e crescimento vegetativo. Deficiência simula falta de N.",
              cor: "from-emerald-500 to-green-600"
            },
            {
              icon: Zap,
              titulo: "Síntese de ABA",
              descricao: "Participa na síntese do ácido abscísico (ABA), hormônio envolvido em resposta ao estresse hídrico e maturação de sementes.",
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
            { title: "Nódulos de Soja", description: "FBN depende de Mo" },
            { title: "Nitrogenase", description: "Enzima com Mo" },
            { title: "Folhas Verdes", description: "Metabolismo de N" },
            { title: "Tratamento Sementes", description: "CoMo aplicado" },
          ]}
        />
      </section>

      {/* Importância na Soja */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
        <h4 className="text-green-800 dark:text-green-300 text-xl font-bold mb-4 flex items-center gap-2">
          <Bug className="w-6 h-6" />
          Importância Crítica na Soja
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-green-900 dark:text-green-100 mb-4 leading-relaxed">
              Na soja, o Mo tem papel crucial por sua participação na <strong>nitrogenase</strong>, 
              enzima responsável pela conversão do N₂ atmosférico em NH₃ nos nódulos radiculares.
            </p>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>FBN eficiente:</strong> 300+ kg N/ha possíveis com Mo adequado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Nódulos ativos:</strong> cor rosa/vermelha indica boa atividade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Tratamento de sementes:</strong> forma mais eficiente de aplicar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Dose recomendada:</strong> 12-25 g Mo/ha via TS</span>
              </li>
            </ul>
          </div>
          <div>
            <ImagePlaceholder 
              title="Nódulos Ativos"
              description="Rosa interno = boa fixação de N₂"
              aspectRatio="video"
            />
          </div>
        </div>
      </div>

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
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Sintomas Semelhantes à Deficiência de N</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Clorose generalizada, começando pelas folhas mais velhas. Plantas amareladas
                e com crescimento reduzido, similar à falta de nitrogênio.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Nódulos Ineficientes</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Nódulos pequenos, poucos ou com interior esverdeado/branco ao invés de rosa.
                Indica baixa atividade da nitrogenase.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Necrose Marginal (casos severos)</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Em deficiência severa, pode ocorrer necrose marginal e acúmulo de nitrato
                nas folhas, já que a nitrato redutase não funciona adequadamente.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Folhas "Whiptail"</h4>
              <p className="text-orange-700 dark:text-orange-400 text-sm">
                Em brássicas (couve-flor, brócolis), folhas com margens irregulares e
                lâmina reduzida, dando aspecto de "rabo de chicote".
              </p>
            </div>
          </div>
          <div>
            <ImagePlaceholder
              title="Deficiência de Molibdênio"
              description="Sintomas em folhas velhas (Mo é móvel)"
              aspectRatio="video"
            />
            <p className="text-center mt-4 text-sm font-semibold text-orange-700 dark:text-orange-400">
              ⚠ Sintomas aparecem em folhas velhas pois Mo é móvel no floema!
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
            { title: "Soja", description: "Clorose e nódulos inativos" },
            { title: "Couve-flor", description: "Whiptail (rabo de chicote)" },
            { title: "Citros", description: "Manchas amarelas internerval" },
          ]}
        />
      </section>

      {/* CoMo - Tratamento de Sementes */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Bug className="w-6 h-6 text-violet-600" />
          Cobalto + Molibdênio (CoMo)
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-violet-700 dark:text-violet-400">Por que aplicar juntos?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-violet-600">Mo:</span>
                  <span className="text-muted-foreground text-sm">Componente da nitrogenase (FBN)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-violet-600">Co:</span>
                  <span className="text-muted-foreground text-sm">Componente da cobalamina (vitamina B12) usada pelo Bradyrhizobium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-violet-600">Sinergia:</span>
                  <span className="text-muted-foreground text-sm">Juntos maximizam a eficiência da FBN</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-700 dark:text-green-400">Doses Recomendadas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Mo:</span>
                  <span className="text-muted-foreground text-sm">12-25 g/ha via tratamento de sementes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Co:</span>
                  <span className="text-muted-foreground text-sm">2-3 g/ha via tratamento de sementes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Aplicação:</span>
                  <span className="text-muted-foreground text-sm">Tratar sementes antes da inoculação</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interações Nutricionais */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6 text-violet-600" />
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
                  <span className="font-bold text-red-600">S (sulfato):</span>
                  <span className="text-muted-foreground text-sm">Compete pelo mesmo sítio de absorção - reduz absorção de Mo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">Cu:</span>
                  <span className="text-muted-foreground text-sm">Altos teores de Cu podem interferir no metabolismo do Mo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">pH baixo:</span>
                  <span className="text-muted-foreground text-sm">Reduz drasticamente a disponibilidade de Mo no solo</span>
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
                  <span className="font-bold text-green-600">P:</span>
                  <span className="text-muted-foreground text-sm">Fosfato pode aumentar absorção de molibdato</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Co:</span>
                  <span className="text-muted-foreground text-sm">Trabalham juntos na fixação biológica de N₂</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-600">Calagem:</span>
                  <span className="text-muted-foreground text-sm">pH elevado aumenta disponibilidade de Mo</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galeria Visual */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">Galeria: Molibdênio na Agricultura</h3>
        <ImageGrid
          columns={3}
          aspectRatio="video"
          images={[
            { title: "Tratamento de Sementes", description: "CoMo aplicado em soja" },
            { title: "Nódulos Saudáveis", description: "Interior rosa = FBN ativa" },
            { title: "Deficiência vs Normal", description: "Comparativo de cor" },
          ]}
        />
      </section>

    </div>
  </div>
);

export default MolibdenioContent;
