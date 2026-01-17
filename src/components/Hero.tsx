import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import logoRealista from "@/assets/logo-realista.png";
import logoFlat from "@/assets/logo-flat-nobg.png";
import { motion } from "framer-motion";

// SVG de folha realista
const RealisticLeaf = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none">
    <defs>
      <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(34, 211, 238, 0.4)" />
        <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
        <stop offset="100%" stopColor="rgba(20, 184, 166, 0.2)" />
      </linearGradient>
    </defs>
    <path
      d="M50 5 C20 20, 5 50, 15 80 C25 95, 45 98, 50 95 C55 98, 75 95, 85 80 C95 50, 80 20, 50 5"
      fill="url(#leafGradient)"
      stroke="rgba(34, 211, 238, 0.3)"
      strokeWidth="0.5"
    />
    {/* Nervura central */}
    <path
      d="M50 10 C50 30, 50 60, 50 90"
      stroke="rgba(34, 211, 238, 0.25)"
      strokeWidth="1"
      fill="none"
    />
    {/* Nervuras laterais */}
    <path d="M50 25 C35 30, 25 40, 20 50" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5" fill="none" />
    <path d="M50 25 C65 30, 75 40, 80 50" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5" fill="none" />
    <path d="M50 45 C38 50, 28 58, 22 68" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5" fill="none" />
    <path d="M50 45 C62 50, 72 58, 78 68" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5" fill="none" />
    <path d="M50 65 C42 70, 35 76, 30 82" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5" fill="none" />
    <path d="M50 65 C58 70, 65 76, 70 82" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5" fill="none" />
  </svg>
);

const Hero = () => {
  const highlights = [
    "Recomendações baseadas em ciência",
    "Resultados comprovados no campo",
    "Suporte técnico personalizado",
  ];

  // Folhas decorativas - menos quantidade, maior impacto visual
  const leaves = [
    { x: "2%", y: "15%", rotate: -20, size: 100, delay: 0, opacity: 0.5 },
    { x: "88%", y: "10%", rotate: 30, size: 90, delay: 0.2, opacity: 0.45 },
    { x: "5%", y: "75%", rotate: -45, size: 85, delay: 0.4, opacity: 0.4 },
    { x: "90%", y: "70%", rotate: 40, size: 110, delay: 0.3, opacity: 0.45 },
    { x: "92%", y: "40%", rotate: -25, size: 70, delay: 0.15, opacity: 0.35 },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Tech blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/20 to-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-400/5 to-transparent rounded-full" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating realistic leaves */}
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{ 
            left: leaf.x, 
            top: leaf.y,
            width: leaf.size,
            height: leaf.size,
          }}
          initial={{ opacity: 0, scale: 0, rotate: leaf.rotate - 30 }}
          animate={{ 
            opacity: leaf.opacity, 
            scale: 1, 
            rotate: leaf.rotate,
            y: [0, -15, 0],
            x: [0, index % 2 === 0 ? 5 : -5, 0]
          }}
          transition={{ 
            delay: leaf.delay,
            duration: 0.8,
            y: {
              duration: 5 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              duration: 6 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <RealisticLeaf 
            className="w-full h-full"
            style={{ transform: `rotate(${leaf.rotate}deg)` }}
          />
        </motion.div>
      ))}
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Logo Section */}
          <motion.div 
            className="flex justify-center lg:justify-start order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="relative group"
              animate={{ y: [0, -12, 0] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* Ambient glow - synchronized with logo metamorphosis (40s cycle) */}
              <motion.div 
                className="absolute -inset-16 bg-gradient-radial from-cyan-400/30 via-blue-500/20 to-transparent rounded-full blur-3xl"
                animate={{ 
                  opacity: [0.5, 0.5, 1, 0.8, 0.5, 0.5, 1, 0.8, 0.5],
                  scale: [1, 1, 1.08, 1.04, 1, 1, 1.08, 1.04, 1]
                }}
                transition={{ 
                  duration: 40,
                  repeat: Infinity,
                  times: [0, 0.125, 0.3, 0.5, 0.5, 0.625, 0.8, 1, 1],
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -inset-8 bg-gradient-radial from-teal-400/25 to-transparent rounded-full blur-2xl"
                animate={{ 
                  opacity: [0.4, 0.4, 0.9, 0.6, 0.4, 0.4, 0.9, 0.6, 0.4],
                  scale: [1, 1, 1.05, 1.02, 1, 1, 1.05, 1.02, 1]
                }}
                transition={{ 
                  duration: 40,
                  repeat: Infinity,
                  times: [0, 0.125, 0.3, 0.5, 0.5, 0.625, 0.8, 1, 1],
                  ease: "easeInOut"
                }}
              />
              
              {/* Logo container - clean, no borders */}
              <motion.div 
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                {/* Logo Realista - base layer */}
                <motion.img 
                  src={logoRealista}
                  alt="Soloforte - Consultoria Agronômica"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                  animate={{ opacity: [1, 1, 0, 0, 0, 1] }}
                  transition={{ 
                    duration: 40,
                    repeat: Infinity,
                    times: [0, 0.125, 0.5, 0.5, 0.625, 1],
                    ease: "linear"
                  }}
                />
                
                {/* Logo Flat - overlay layer */}
                <motion.img 
                  src={logoFlat}
                  alt="Soloforte - Consultoria Agronômica"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                  animate={{ opacity: [0, 0, 1, 1, 1, 0] }}
                  transition={{ 
                    duration: 40,
                    repeat: Infinity,
                    times: [0, 0.125, 0.5, 0.5, 0.625, 1],
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="text-center lg:text-left order-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Consultoria Agronômica Especializada
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300">
                Fertilidade do Solo
              </span>
              <br />
              <span className="text-white/90">&</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Nutrição de Plantas
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl xl:text-2xl text-blue-100/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Decisões técnicas fundamentadas em ciência aplicada
              <span className="block text-white font-semibold mt-1">
                que geram resultado econômico real
              </span>
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-sm text-blue-100/70"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <a href="#especialidades">
                  Conhecer Especialidades
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;