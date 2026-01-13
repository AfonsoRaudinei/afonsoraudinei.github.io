import { CheckCircle, Leaf } from "lucide-react";
import { Button } from "./ui/button";
import raudineiFoto from "@/assets/raudinei-foto.png";
import { motion } from "framer-motion";

const Hero = () => {
  const highlights = [
    "Recomendações baseadas em ciência",
    "Resultados comprovados no campo",
    "Suporte técnico personalizado",
  ];

  // Folhas decorativas com posições variadas
  const leaves = [
    { x: "5%", y: "15%", rotate: -20, size: 32, delay: 0 },
    { x: "92%", y: "20%", rotate: 45, size: 28, delay: 0.2 },
    { x: "8%", y: "75%", rotate: -45, size: 24, delay: 0.4 },
    { x: "88%", y: "70%", rotate: 30, size: 36, delay: 0.3 },
    { x: "15%", y: "45%", rotate: 15, size: 20, delay: 0.5 },
    { x: "85%", y: "45%", rotate: -30, size: 22, delay: 0.1 },
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
      
      {/* Floating leaves */}
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/30"
          style={{ left: leaf.x, top: leaf.y }}
          initial={{ opacity: 0, scale: 0, rotate: leaf.rotate - 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: leaf.rotate,
            y: [0, -10, 0]
          }}
          transition={{ 
            delay: leaf.delay,
            duration: 0.6,
            y: {
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Leaf size={leaf.size} strokeWidth={1.5} />
        </motion.div>
      ))}
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Photo Section */}
          <motion.div 
            className="flex justify-center lg:justify-start order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-teal-400/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Rotating ring */}
              <div 
                className="absolute -inset-4 rounded-full opacity-50"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(34, 211, 238, 0.4), transparent, rgba(59, 130, 246, 0.4), transparent)',
                  animation: 'spin 30s linear infinite'
                }}
              />
              
              {/* Main photo container */}
              <div className="relative p-[6px] bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-400 rounded-full shadow-2xl shadow-cyan-500/40 group-hover:shadow-cyan-500/60 transition-all duration-500">
                <div className="p-[3px] bg-slate-900 rounded-full">
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden">
                    <img 
                      src={raudineiFoto} 
                      alt="Raudinei Afonso - Especialista em Fertilidade do Solo" 
                      className="w-full h-full object-cover object-top scale-[1.15] group-hover:scale-[1.2] transition-transform duration-700" 
                    />
                  </div>
                </div>
              </div>
              
            </div>
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