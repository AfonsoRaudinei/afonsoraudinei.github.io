import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Wheat, Layers, Atom, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const specialties = [
  {
    FallbackIcon: Leaf,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/soja-icon.png",
    title: "SOJA",
    subtitle: "Manejo nutricional para máxima produtividade",
    topics: [
      "Inoculação e fixação biológica",
      "Correção de micronutrientes",
      "Manejo de potássio",
      "Nutrição reprodutiva",
      "Análise foliar estratégica",
    ],
    link: "/soja",
    gradient: "from-green-500 to-emerald-600",
    bgGlow: "bg-green-500/10",
  },
  {
    FallbackIcon: Wheat,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/milho-icon.png",
    title: "MILHO",
    subtitle: "Nutrição de precisão para alta performance",
    topics: [
      "Estresse abiótico",
      "Macronutrientes",
      "Micronutrientes",
      "Elementos benéficos",
      "Calculadora nutricional",
    ],
    link: "/milho",
    gradient: "from-amber-500 to-yellow-600",
    bgGlow: "bg-amber-500/10",
  },
  {
    FallbackIcon: Layers,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/soloforte-icon.png",
    title: "SOLOFORTE",
    subtitle: "Ferramentas de análise e consultoria técnica",
    topics: [
      "Interpretação de análises",
      "Recomendação técnica",
      "Laudo personalizado",
    ],
    link: "/soloforte",
    gradient: "from-teal-500 to-cyan-600",
    bgGlow: "bg-teal-500/10",
  },
  {
    FallbackIcon: Atom,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/nutrientes-icon.png",
    title: "NUTRIENTES",
    subtitle: "Guia completo de macro e micronutrientes",
    topics: [
      "Nitrogênio (N)",
      "Fósforo (P)",
      "Potássio (K)",
      "Cálcio (Ca)",
      "Magnésio (Mg)",
      "Enxofre (S)",
      "Boro (B)",
      "Zinco (Zn)",
    ],
    link: "/nutrientes",
    gradient: "from-purple-500 to-indigo-600",
    bgGlow: "bg-purple-500/10",
  },
  {
    FallbackIcon: Brain,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/mindmap-icon.png",
    title: "MAPA MENTAL",
    subtitle: "Nutrição vegetal e dinâmica da MOS",
    topics: [
      "CTC e Fertilidade",
      "Nutrição Mineral",
      "Química do Solo",
      "Estudos de Caso",
    ],
    link: "/mapa-mental",
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/10",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SpecialtyCards = () => {
  return (
    <section id="especialidades" className="py-20 lg:py-28 px-4 md:px-8 lg:px-16 xl:px-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-50 to-emerald-50 rounded-full blur-3xl opacity-60" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Conhecimento Especializado</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-5">
            Áreas de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              Especialidade
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg lg:text-xl">
            Conhecimento técnico aplicado às principais culturas do agronegócio brasileiro, 
            com foco em resultados práticos e sustentáveis.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {specialties.map((specialty) => {
            const CardWrapper = specialty.link ? Link : "div";
            const cardProps = specialty.link
              ? {
                  to: specialty.link,
                  "aria-label": `Acessar conteúdo sobre ${specialty.title}: ${specialty.subtitle}`,
                }
              : {
                  "aria-label": `${specialty.title}: ${specialty.subtitle} - Em breve`,
                };

            return (
              <motion.div key={specialty.title} variants={item}>
                <CardWrapper
                  {...(cardProps as any)}
                  className={`
                    group relative overflow-hidden
                    rounded-2xl lg:rounded-3xl
                    bg-white
                    border border-gray-100
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                    p-6 lg:p-8 xl:p-10
                    cursor-pointer
                    transition-all duration-500 ease-out
                    hover:-translate-y-1
                    active:scale-[0.995]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                    block
                  `}
                >
                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 ${specialty.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-5">
                    {/* Header Row */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 lg:gap-5">
                        {/* Icon Container */}
                        <div 
                          className={`
                            w-16 h-16 lg:w-18 lg:h-18 
                            rounded-2xl 
                            bg-gradient-to-br ${specialty.gradient}
                            flex items-center justify-center
                            group-hover:scale-110
                            group-hover:rotate-3
                            transition-all duration-300
                            p-4
                            overflow-hidden
                            shadow-lg
                          `}
                        >
                          <img 
                            src={specialty.imageUrl}
                            alt={`Ícone ${specialty.title}`}
                            className="w-full h-full object-contain brightness-0 invert"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const fallbackContainer = target.nextElementSibling as HTMLElement;
                              if (fallbackContainer) {
                                fallbackContainer.style.display = 'flex';
                              }
                            }}
                          />
                          <div 
                            className="hidden items-center justify-center w-full h-full"
                            style={{ display: 'none' }}
                          >
                            <specialty.FallbackIcon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Title & Subtitle */}
                        <div className="pt-1">
                          <h3 className="font-display font-bold text-xl lg:text-2xl text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                            {specialty.title}
                          </h3>
                          <p className="text-sm lg:text-base text-gray-500 mt-1 leading-relaxed">
                            {specialty.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Arrow Indicator */}
                      <div 
                        className={`
                          w-10 h-10 rounded-full
                          bg-gray-100 group-hover:bg-emerald-500
                          flex items-center justify-center
                          opacity-0 group-hover:opacity-100
                          translate-x-4 group-hover:translate-x-0
                          transition-all duration-300
                          hidden sm:flex
                        `}
                      >
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {specialty.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className={`
                            inline-flex items-center
                            px-3 py-1.5 rounded-full
                            text-xs lg:text-sm font-medium
                            bg-gray-100 text-gray-700
                            group-hover:bg-emerald-100 group-hover:text-emerald-700
                            transition-colors duration-300
                          `}
                        >
                          {topic}
                        </span>
                      ))}
                      {specialty.topics.length > 4 && (
                        <span
                          className={`
                            inline-flex items-center
                            px-3 py-1.5 rounded-full
                            text-xs lg:text-sm font-medium
                            bg-emerald-100 text-emerald-700
                          `}
                        >
                          +{specialty.topics.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    {specialty.link ? (
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                          Explorar conteúdo
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    ) : (
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                          Em breve
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Arrow for mobile */}
                  <div className="absolute bottom-5 right-5 sm:hidden">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtyCards;
