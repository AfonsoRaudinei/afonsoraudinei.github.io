import { MessageCircle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const benefits = [
  { text: "Resposta técnica personalizada", highlight: true },
  { text: "Análise do seu caso específico", highlight: false },
  { text: "Recomendação baseada em dados", highlight: false },
  { text: "Sem compromisso inicial", highlight: true },
];

const CTASection = () => {
  const whatsappLink = "https://wa.me/5563984376572?text=Olá! Gostaria de uma consultoria sobre manejo de solo ou nutrição de plantas.";

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-100 text-sm font-medium">Consultoria Especializada</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Pronto para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                Maximizar
              </span>
              <br />
              sua Produtividade?
            </h2>

            <p className="text-lg lg:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto">
              Converse diretamente com um especialista e receba orientação técnica 
              personalizada para sua lavoura.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                  benefit.highlight 
                    ? 'bg-white/15 border border-white/20' 
                    : 'bg-white/5 border border-white/10'
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white/90 text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="relative bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 px-10 py-7 text-lg rounded-full group"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <span className="absolute inset-0 rounded-full animate-ping bg-green-400/20" style={{ animationDuration: '2s' }} />
                <MessageCircle className="w-6 h-6" />
                <span>Fale Comigo no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
