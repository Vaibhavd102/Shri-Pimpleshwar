import shivaDeity from "@/assets/shiva-deity.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 gradient-sacred">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl text-primary om-symbol">ॐ</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            About Our Temple
          </h2>
          <div className="w-24 h-1 gradient-saffron mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={shivaDeity}
                alt="Lord Shiva - Mahadev"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold rounded-br-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              A Sacred Sanctuary of Lord Shiva
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Shri Pimpleshwer Mahadev Mandir is a revered Hindu temple dedicated to Lord Shiva, 
              the supreme being who creates, protects, and transforms the universe. Nestled in a 
              serene environment, our temple has been a beacon of spiritual light for generations 
              of devotees, This temple was established in 1992 by Shri Vijay Bahadur Singh.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The temple derives its name from the sacred Pimple (Peepal) tree that stands within 
              the temple premises, symbolizing the eternal connection between nature and divinity. 
              Beside this ancient tree, Lord Shiva is worshipped in the form of a Shivling, 
              representing the cosmic energy of creation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-card p-6 rounded-xl shadow-soft border border-primary/10">
                <div className="text-3xl text-primary mb-3">🙏</div>
                <h4 className="font-heading font-semibold text-foreground mb-2">Daily Puja</h4>
                <p className="text-sm text-muted-foreground">
                  Traditional worship rituals performed daily with sacred mantras
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft border border-primary/10">
                <div className="text-3xl text-primary mb-3">🔔</div>
                <h4 className="font-heading font-semibold text-foreground mb-2">Aarti Seva</h4>
                <p className="text-sm text-muted-foreground">
                  Divine aarti ceremonies performed during morning and evening
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
