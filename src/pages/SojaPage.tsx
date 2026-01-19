import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sprout, Calendar, Droplets, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SojaNavigation from "@/components/soja/SojaNavigation";
import CalendarioTab from "@/components/soja/CalendarioTab";
import HormoniosTab from "@/components/soja/HormoniosTab";
import InsetosTab from "@/components/soja/InsetosTab";

const SojaPage = () => {
  const [activeTab, setActiveTab] = useState("calendario");
  const [selectedEstadioIndex, setSelectedEstadioIndex] = useState(0);
  const [selectedHormonioIndex, setSelectedHormonioIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 text-9xl">🌱</div>
            <div className="absolute bottom-10 right-20 text-8xl">🫛</div>
            <div className="absolute top-1/2 left-1/2 text-7xl">🌼</div>
          </div>

          <div className="w-full max-w-[1600px] mx-auto relative z-10">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-green-100 dark:hover:bg-green-900/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Button>
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl">
                <Sprout className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Cultura da <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Soja</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Calendário Estimado de Estádios Fenológicos • Ciclo de 115 dias
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <Calendar className="w-6 h-6 text-green-500 mb-2" />
                <p className="text-2xl font-bold text-foreground">115</p>
                <p className="text-sm text-muted-foreground">Dias de ciclo</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <Sprout className="w-6 h-6 text-emerald-500 mb-2" />
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Estádios fenológicos</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <Droplets className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-2xl font-bold text-foreground">R1-R5</p>
                <p className="text-sm text-muted-foreground">Período crítico hídrico</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <Bug className="w-6 h-6 text-red-500 mb-2" />
                <p className="text-2xl font-bold text-foreground">R4</p>
                <p className="text-sm text-muted-foreground">Pico de lagartas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <SojaNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        {activeTab === "calendario" && (
          <CalendarioTab
            selectedIndex={selectedEstadioIndex}
            onSelect={setSelectedEstadioIndex}
          />
        )}

        {activeTab === "hormonios" && (
          <HormoniosTab
            selectedIndex={selectedHormonioIndex}
            onSelect={setSelectedHormonioIndex}
          />
        )}

        {activeTab === "insetos" && <InsetosTab />}
      </main>

      <Footer />
    </div>
  );
};

export default SojaPage;
