import { Button } from "@/components/ui/button";
import { Download, Globe, Linkedin, Mail, Instagram } from "lucide-react";
import profileImage from "@/assets/edwarp.webp";
import dayBg from "@/assets/video/day-bg3.mp4";
import nightBg from "@/assets/video/night-bg.mp4";
import { useEffect, useState } from "react";


const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detecta si el modo oscuro está activo en el html
    setIsDark(document.documentElement.classList.contains("dark"));
    // Observa cambios en la clase del html
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Edwar Cano Legarda
N:Cano Legarda;Edwar;;;
ORG:Fedeán - Asociación Solidaria
TITLE:Coordinador Bienestar y Comunicaciones
TEL:+573243047653
EMAIL:fedean@fedean.org.co
URL:https://www.fedean.org.co
ADR:;;Carrera 52 # 42-60 local 104;Medellín;Antioquia;;Colombia
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Edwar_Cano_Fedean.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Video de fondo según modo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster=""
        key={isDark ? 'night' : 'day'}
      >
        <source src={isDark ? nightBg : dayBg} type="video/mp4" />
      </video>

      {/* Overlay para mejorar contraste */}
      <div className={`absolute inset-0 z-5 pointer-events-none ${isDark ? 'bg-black/30' : 'bg-black/20'}`}></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Gradiente azul para cubrir marca de agua (más delgado) */}
      

      <div className="container mx-auto px-6 py-8 lg:py-0 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative">
              {/* Fondo adaptativo según modo */}
              <div className={`absolute inset-0 rounded-full backdrop-blur-sm shadow-2xl ${
                isDark ? 'bg-black/50' : 'bg-white/70'
              }`}></div>
              <img
                src={profileImage}
                alt="Edwar Cano Legarda - Coordinador Bienestar y Comunicaciones Fedeán"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover profile-glow relative z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent z-20"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-2 px-4 lg:px-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground text-shadow-strong">
              Edwar Cano Legarda
            </h1>
            <p className="text-xl lg:text-2xl font-bold text-foreground mb-8 leading-relaxed text-shadow">
              Coordinador Bienestar y Comunicaciones
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <Button onClick={downloadVCard} className="btn-hero group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
               Guardar Contacto
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                { icon: Globe, href: "https://www.fedean.org.co", label: "Website" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/fondo-fedean/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/fondo_fedean/", label: "Instagram" },
                { icon: Mail, href: "mailto:fedean@fedean.org.co", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;