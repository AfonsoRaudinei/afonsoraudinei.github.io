import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpecialtyCards from "@/components/SpecialtyCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SpecialtyCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
