import profileAbout from "@/assets/profile2.webp";

const About = () => {
  return (
  <section className="py-24 bg-secondary/20 dark:bg-background relative" id="about">
     
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src={profileAbout}
              alt="Logo Fedeán - Asociación Solidaria comprometida con el bienestar de sus asociados"
              className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[350px] object-contain bg-white/50 dark:bg-black/50"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Sobre Fedeán
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
               Somos Fedeán - Asociación Solidaria, una organización comprometida con la innovación, el bienestar y el crecimiento financiero de nuestros asociados.
              </p>
              
              <p>
               Ofrecemos programas de ahorro seguro y rentable, créditos accesibles, seguros, programas de bienestar y convenios estratégicos que generan beneficios exclusivos para nuestra comunidad.
              </p>
              
              <p>
                Nuestra misión es impulsar el desarrollo personal y financiero de nuestros asociados a través de una gestión responsable y solidaria.
              </p>
            </div>
            
            {/* Skills/Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">1,740</h3>
                <p className="text-muted-foreground">Créditos Aprobados 2024</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">$18.864M</h3>
                <p className="text-muted-foreground">Valor en Créditos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;