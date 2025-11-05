import { Globe, Linkedin, Mail, Instagram, Facebook, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construir mensaje para WhatsApp sin asteriscos (formato simple)
    const message = `Nuevo mensaje de contacto

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

Mensaje:
${formData.message}`;
    
    // Número de WhatsApp (sin + ni espacios)
    const whatsappNumber = "573243047653";
    
    // Abrir WhatsApp usando wa.me (más compatible)
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    setTimeout(() => {
      toast({
        title: "¡Redirigiendo a WhatsApp!",
        description: "Se abrirá WhatsApp con tu mensaje prellenado.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Phone, href: "https://wa.me/573243047653", label: "WhatsApp", username: "+57 324 3047653" },
    { icon: Mail, href: "mailto:fedean@fedean.org.co", label: "Email", username: "fedean@fedean.org.co" },
    { icon: MapPin, href: "https://maps.google.com/?q=Carrera 52 42-60 local 104, Medellín", label: "Dirección", username: "Carrera 52 # 42-60 local 104, Medellín" },
    { icon: Globe, href: "https://www.fedean.org.co", label: "Sitio Web", username: "www.fedean.org.co" },
    { icon: Facebook, href: "https://www.facebook.com/FedeanFondo", label: "Facebook", username: "@FedeanFondo" },
    { icon: Instagram, href: "https://www.instagram.com/fondo_fedean/", label: "Instagram", username: "@fondo_fedean" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/fondo-fedean/", label: "LinkedIn", username: "Fondo Fedeán" }
  ];

  return (
    <section className="py-24 bg-secondary/30 dark:bg-background" id="contact">
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
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario de Contacto */}
          <div className="order-2 lg:order-1">
            <div className="card-elegant rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+57 324 3047653"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos más sobre tu consulta..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="order-1 lg:order-2">
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
      </div>
    </section>
  );
};

export default Contact;