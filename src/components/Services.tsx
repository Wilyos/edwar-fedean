import { PiggyBank, CreditCard, Shield, Heart, Handshake } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: PiggyBank,
      title: "Ahorro",
      description: "Programas que fomentan el ahorro seguro y rentable, diseñados para ayudarte a alcanzar tus metas financieras con tranquilidad y confianza."
    },
    {
      icon: CreditCard,
      title: "Crédito",
      description: "En 2024 aprobamos 1,740 créditos por $18.864 millones, con tasas competitivas y condiciones flexibles para impulsar tus proyectos personales y profesionales."
    },
    {
      icon: Shield,
      title: "Seguros",
      description: "Coberturas accesibles y confiables para protegerte a ti y tu familia en los momentos más importantes, con respaldo solidario."
    },
    {
      icon: Heart,
      title: "Bienestar",
      description: "Programas integrales de salud, educación y deportes con 94% de cobertura para nuestros asociados, promoviendo una vida plena y saludable."
    },
    {
      icon: Handshake,
      title: "Convenios",
      description: "Alianzas estratégicas que ofrecen descuentos y beneficios exclusivos con empresas seleccionadas, agregando más valor a tu membresía."
    }
  ];

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En Fedeán ofrecemos servicios financieros solidarios diseñados para impulsar tu crecimiento personal y familiar, con el respaldo de una comunidad comprometida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.title}
              className="card-elegant rounded-2xl p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <div
              key={service.title}
              className="card-elegant rounded-2xl p-8 text-center group"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;