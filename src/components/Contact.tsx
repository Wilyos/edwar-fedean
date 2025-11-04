import { Globe, Linkedin, Mail, Instagram, Facebook, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Phone, href: "tel:+573113541667", label: "Teléfono", username: "311 3541667" },
    { icon: Mail, href: "mailto:fedean@fedean.org.co", label: "Email", username: "fedean@fedean.org.co" },
    { icon: MapPin, href: "https://maps.google.com/?q=Carrera 52 42-60 local 104, Medellín", label: "Dirección", username: "Carrera 52 # 42-60 local 104, Medellín" },
    { icon: Globe, href: "https://www.fedean.org.co", label: "Sitio Web", username: "www.fedean.org.co" },
    { icon: Facebook, href: "https://www.facebook.com/FedeanFondo", label: "Facebook", username: "@FedeanFondo" },
    { icon: Instagram, href: "https://www.instagram.com/fondo_fedean/", label: "Instagram", username: "@fondo_fedean" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/fondo-fedean/", label: "LinkedIn", username: "Fondo Fedeán" }
  ];

  return (
    <section className="py-24 bg-secondary/30" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contáctanos
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Únete a nuestra comunidad solidaria y descubre cómo podemos impulsar tu crecimiento financiero y personal.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {socialLinks.map(({ icon: Icon, href, label, username }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-lg">{label}</div>
                  <div className="text-muted-foreground">{username}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;