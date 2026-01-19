import { Calendar, FlaskConical, Bug } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SojaNavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const SojaNavigation = ({ activeTab, onTabChange }: SojaNavigationProps) => {
  return (
    <div className="sticky top-16 z-40 py-4 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto max-w-6xl px-4">
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-14 rounded-2xl bg-secondary/50 backdrop-blur-lg p-1.5 shadow-lg">
            <TabsTrigger 
              value="calendario" 
              className="flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Calendário</span>
              <span className="sm:hidden">Calendário</span>
            </TabsTrigger>
            <TabsTrigger 
              value="hormonios"
              className="flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <FlaskConical className="w-5 h-5" />
              <span className="hidden sm:inline">Hormônios</span>
              <span className="sm:hidden">Hormônios</span>
            </TabsTrigger>
            <TabsTrigger 
              value="insetos"
              className="flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <Bug className="w-5 h-5" />
              <span className="hidden sm:inline">Insetos</span>
              <span className="sm:hidden">Insetos</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default SojaNavigation;
