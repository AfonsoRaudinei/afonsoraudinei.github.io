import { Award, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import raudineiFoto from "@/assets/raudinei-foto.png";
import { motion } from "framer-motion";

const Hero = () => {
  const highlights = [
    "Recomendações baseadas em ciência",
    "Resultados comprovados no campo",
    "Suporte técnico personalizado",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/40 to-teal-50/60" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/30 to-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green-100/40 to-emerald-100/30 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
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
              <div className="absolute -inset-8 bg-gradient-to-br from-emerald-400/20 via-green-300/10 to-teal-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Rotating ring */}
              <div 
                className="absolute -inset-4 rounded-full opacity-40"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.3), transparent, rgba(20, 184, 166, 0.3), transparent)',
                  animation: 'spin 30s linear infinite'
                }}
              />
              
              {/* Main photo container */}
              <div className="relative p-[6px] bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-full shadow-2xl shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all duration-500">
                <div className="p-[3px] bg-white rounded-full">
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden">
                    <img 
                      src={raudineiFoto} 
                      alt="Raudinei Afonso - Especialista em Fertilidade do Solo" 
                      className="w-full h-full object-cover object-top scale-[1.15] group-hover:scale-[1.2] transition-transform duration-700" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -bottom-2 right-4 bg-white text-emerald-700 border border-emerald-200 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 text-sm font-semibold z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Award className="w-5 h-5 text-emerald-500" />
                <span>Especialista Certificado</span>
              </motion.div>

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
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Consultoria Agronômica Especializada
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
                Fertilidade do Solo
              </span>
              <br />
              <span className="text-gray-900">&</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Nutrição de Plantas
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Decisões técnicas fundamentadas em ciência aplicada
              <span className="block text-gray-900 font-semibold mt-1">
                que geram resultado econômico real
              </span>
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg rounded-full border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
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
