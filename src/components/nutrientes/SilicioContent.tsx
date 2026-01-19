import React from 'react';
import { Leaf, Shield, Bug, Droplets, Sun, Wheat, ArrowRight, Sprout, Wind, Zap } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';
import { 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  HeroParallax,
  FloatingElement 
} from "@/components/ui/scroll-animations";

const SilicioContent: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden text-foreground">
      {/* Header Hero with Parallax */}
      <div className="relative bg-gradient-to-br from-slate-500 to-gray-700 text-white py-16 px-6 overflow-hidden">
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
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-slate-300/30">
                <span className="text-5xl font-bold text-slate-600">Si</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Silício (Si)</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
              Elemento benéfico não essencial, mas com efeitos extraordinários na resistência mecânica, 
              tolerância a estresses e proteção contra pragas e doenças em gramíneas.
            </p>
          </ScrollReveal>
          
          {/* Quick Stats */}
          <StaggerContainer className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
                <p className="text-3xl font-bold text-white">&gt;1%</p>
                <p className="text-white/70 text-sm">em acumuladoras</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
                <p className="text-3xl font-bold text-white">H₄SiO₄</p>
                <p className="text-white/70 text-sm">forma absorvida</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300">
                <p className="text-3xl font-bold text-white">Benéfico</p>
                <p className="text-white/70 text-sm">classificação</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </HeroParallax>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">

      {/* Unique Classification */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-semibold text-amber-900 mb-1">Classificação Especial</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Elemento benéfico, não essencial:</strong> Diferente dos 17 elementos essenciais, 
              o Silício não atende ao critério de Arnon & Stout (1939), pois as plantas podem completar 
              seu ciclo sem ele. Porém, sua presença <strong>melhora significativamente a performance vegetal</strong>, 
              especialmente sob condições de estresse. Algumas culturas como arroz e cana são consideradas 
              "acumuladoras de Si" (maior que 1% na matéria seca).
            </p>
          </div>
        </div>
      </div>

      {/* Sources Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Leaf className="w-5 h-5 text-primary" />
          Fontes de Silício
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl p-5 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Fontes Minerais</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                <span><strong>Escórias de siderurgia:</strong> subproduto industrial rico em Si e Ca</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                <span><strong>Wollastonita (CaSiO₃):</strong> silicato de cálcio natural</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                <span><strong>Silicato de potássio:</strong> K₂SiO₃ para fertirrigação</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                <span><strong>Termofosfatos:</strong> fosfatos contendo Si como Yoorin</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-xl p-5 border border-border">
            <h3 className="font-semibold text-foreground mb-3">No Solo</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                <span><strong>Minerais primários:</strong> quartzo, feldspatos, micas (liberação lenta)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                <span><strong>Argilas:</strong> caulinita e outros silicatos secundários</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                <span><strong>Forma absorvida:</strong> H₄SiO₄ (ácido monossilícico)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                <span><strong>Solos tropicais:</strong> frequentemente deficientes por lixiviação</span>
              </li>
            </ul>
          </div>
        </div>

        <ImagePlaceholder 
          title="Escória de siderurgia e fontes de silício para agricultura"
          description="Escória de siderurgia: principal fonte de silício para correção de solos agrícolas"
          className="mt-4"
        />
      </section>

      {/* Mechanical Resistance Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Resistência Mecânica
        </h2>

        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-5 border border-slate-200 mb-4">
          <h3 className="font-semibold text-foreground mb-3">Deposição de Sílica (SiO₂)</h3>
          <p className="text-muted-foreground text-sm mb-4">
            O Si é depositado como <strong>sílica amorfa (SiO₂·nH₂O)</strong> nas paredes celulares, 
            especialmente na epiderme, formando uma <strong>barreira física</strong> que confere:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Wheat className="w-4 h-4 text-slate-600" />
                <span className="font-medium text-sm">Rigidez Estrutural</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Colmos mais eretos, reduzindo acamamento em arroz, trigo e cana-de-açúcar
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-4 h-4 text-slate-600" />
                <span className="font-medium text-sm">Arquitetura Foliar</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Folhas mais eretas melhoram interceptação luminosa e fotossíntese
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-slate-600" />
                <span className="font-medium text-sm">Cutícula Reforçada</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Camada dupla Si-cutícula reduz perda de água e penetração de patógenos
              </p>
            </div>
          </div>
        </div>

        <ImagePlaceholder 
          title="Microscopia da deposição de sílica na epiderme foliar"
          description="Deposição de corpos silicosos (fitólitos) na epiderme de gramíneas - barreira mecânica"
        />
      </section>

      {/* Biotic Stress Tolerance */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Bug className="w-5 h-5 text-primary" />
          Tolerância a Estresses Bióticos
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5 border border-red-200">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <Bug className="w-4 h-4" />
              Resistência a Insetos
            </h3>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Barreira física:</strong> sílica nas células epidérmicas dificulta alimentação</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Desgaste mandibular:</strong> mastigação de tecidos silicificados danifica peças bucais</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Redução de preferência:</strong> menor atratividade para oviposição</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Pragas controladas:</strong> broca da cana, lagarta-do-cartucho, cigarrinha</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <Sprout className="w-4 h-4" />
              Resistência a Doenças
            </h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Barreira mecânica:</strong> impede penetração de hifas fúngicas</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Indução de defesa:</strong> estimula produção de fitoalexinas e lignina</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>SAR (Resistência Sistêmica):</strong> priming do sistema imune vegetal</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Doenças reduzidas:</strong> brusone, ferrugem, oídio, manchas foliares</span>
              </li>
            </ul>
          </div>
        </div>

        <ImagePlaceholder 
          title="Comparação de folhas com e sem silício sob ataque de pragas"
          description="Efeito do silício na resistência a pragas: folhas tratadas vs. controle"
        />
      </section>

      {/* Abiotic Stress Tolerance */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Wind className="w-5 h-5 text-primary" />
          Tolerância a Estresses Abióticos
        </h2>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Estresse Hídrico</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-blue-800">
                <li>• Reduz transpiração cuticular (até 30%)</li>
                <li>• Melhora eficiência do uso da água</li>
                <li>• Mantém potencial hídrico foliar</li>
                <li>• Protege aparato fotossintético</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-5 border border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-orange-900">Estresse Térmico</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-orange-800">
                <li>• Melhora termorregulação foliar</li>
                <li>• Protege membranas celulares</li>
                <li>• Mantém fotossíntese sob calor</li>
                <li>• Reduz danos por geada (tolerância ao frio)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-amber-900">Toxidez de Metais</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-amber-800">
                <li>• Alivia toxidez de alumínio (Al³⁺)</li>
                <li>• Reduz absorção de metais pesados</li>
                <li>• Complexa metais internamente</li>
                <li>• Protege raízes em solos ácidos</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-5 border border-violet-200">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-violet-600" />
                <h3 className="font-semibold text-violet-900">Salinidade</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-violet-800">
                <li>• Reduz absorção de Na⁺ tóxico</li>
                <li>• Melhora relação K⁺/Na⁺</li>
                <li>• Protege sistema antioxidante</li>
                <li>• Mantém integridade de membranas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accumulator Plants */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Wheat className="w-5 h-5 text-primary" />
          Plantas Acumuladoras de Silício
        </h2>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200 mb-4">
          <p className="text-green-800 text-sm mb-4">
            As plantas são classificadas pelo teor de Si na matéria seca:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-green-700 font-bold text-lg mb-1">{'>'} 1% Si</div>
              <div className="font-medium text-green-900 text-sm mb-2">Acumuladoras</div>
              <p className="text-xs text-green-700">
                Arroz, cana-de-açúcar, trigo, milho, bambu, cavalinha
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-yellow-600 font-bold text-lg mb-1">0,5-1% Si</div>
              <div className="font-medium text-green-900 text-sm mb-2">Intermediárias</div>
              <p className="text-xs text-green-700">
                Pepino, melão, morango, algumas leguminosas
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-gray-500 font-bold text-lg mb-1">{'<'} 0,5% Si</div>
              <div className="font-medium text-green-900 text-sm mb-2">Não-acumuladoras</div>
              <p className="text-xs text-green-700">
                Tomate, feijão, soja (responde bem, mas acumula pouco)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <h3 className="font-semibold text-foreground mb-3">Transportadores de Silício</h3>
          <p className="text-sm text-muted-foreground mb-3">
            A absorção de Si é mediada por <strong>transportadores específicos</strong> da família Lsi (Low silicon):
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <span className="font-medium text-sm">Lsi1 (influxo)</span>
              <p className="text-xs text-muted-foreground mt-1">
                Canal de aquaporina que transporta Si para dentro das células radiculares
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <span className="font-medium text-sm">Lsi2 (efluxo)</span>
              <p className="text-xs text-muted-foreground mt-1">
                Transportador ativo que libera Si para o xilema (direção centrífuga)
              </p>
            </div>
          </div>
        </div>

        <ImagePlaceholder 
          title="Arroz e cana-de-açúcar - culturas acumuladoras de silício"
          description="Gramíneas acumuladoras: arroz e cana-de-açúcar respondem muito bem ao Si"
          className="mt-4"
        />
      </section>

      {/* Application and Management */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Sprout className="w-5 h-5 text-primary" />
          Aplicação e Manejo
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-card rounded-xl p-5 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Via Solo</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Escória de siderurgia:</strong> 1-3 t/ha, efeito corretivo + Si</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Silicato de Ca e Mg:</strong> similar ao calcário, com Si adicional</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Aplicação:</strong> a lanço, incorporado ou em superfície</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Época:</strong> antes do plantio ou em cobertura</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-xl p-5 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Via Foliar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Silicato de potássio:</strong> 2-4 L/ha em aplicações foliares</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Ácido silícico estabilizado:</strong> maior absorção foliar</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Frequência:</strong> 2-3 aplicações durante o ciclo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Compatível:</strong> com defensivos e outros nutrientes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
          <h3 className="font-semibold text-emerald-900 mb-2">Benefícios Agronômicos Comprovados</h3>
          <div className="grid md:grid-cols-4 gap-3 text-center">
            <div className="bg-white rounded-lg p-3 border border-emerald-200">
              <div className="text-emerald-600 font-bold text-lg">↓ 40-70%</div>
              <div className="text-xs text-emerald-700">Incidência de doenças</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-emerald-200">
              <div className="text-emerald-600 font-bold text-lg">↓ 30-50%</div>
              <div className="text-xs text-emerald-700">Danos por insetos</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-emerald-200">
              <div className="text-emerald-600 font-bold text-lg">↑ 10-30%</div>
              <div className="text-xs text-emerald-700">Produtividade</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-emerald-200">
              <div className="text-emerald-600 font-bold text-lg">↓ 20-30%</div>
              <div className="text-xs text-emerald-700">Uso de defensivos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Interactions */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Leaf className="w-5 h-5 text-primary" />
          Interações Nutricionais
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2 text-sm">Sinergismos (+)</h3>
            <ul className="space-y-1 text-xs text-green-800">
              <li><strong>Ca/Mg:</strong> fontes silicatadas fornecem ambos</li>
              <li><strong>P:</strong> pode aumentar disponibilidade em solos ácidos</li>
              <li><strong>Zn:</strong> melhora absorção em algumas condições</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2 text-sm">Antagonismos (-)</h3>
            <ul className="space-y-1 text-xs text-amber-800">
              <li><strong>Al:</strong> Si alivia toxidez de alumínio</li>
              <li><strong>Mn:</strong> reduz absorção excessiva de Mn</li>
              <li><strong>Metais pesados:</strong> reduz absorção de Cd, As, Pb</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-6 border border-slate-200">
        <h2 className="text-lg font-semibold mb-4">Resumo Rápido - Silício</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground block mb-1">Classificação</span>
            <span className="font-medium">Elemento Benéfico</span>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1">Forma absorvida</span>
            <span className="font-medium">H₄SiO₄</span>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1">Culturas responsivas</span>
            <span className="font-medium">Arroz, cana, milho</span>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1">Principal função</span>
            <span className="font-medium">Resistência a estresses</span>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default SilicioContent;
