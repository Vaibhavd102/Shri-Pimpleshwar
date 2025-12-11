import templeHero from "@/assets/temple-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={templeHero}
          alt="Shri Pimpleshwer Mahadev Mandir Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-fade-up">
          {/* Om Symbol */}
          <div className="mb-6">
            <span className="text-6xl md:text-8xl text-gold animate-glow inline-block om-symbol">
              ॐ
            </span>
          </div>

          {/* Temple Name */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
            श्री पिंपलेश्वर महादेव मंदिर
          </h1>
          <h2 className="font-heading text-2xl md:text-4xl text-gold-light mb-6 drop-shadow-md">
            Shri Pimpleshwer Mahadev Mandir
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 font-light">
            A sacred abode of Lord Shiva, where devotees find peace, blessings, and spiritual enlightenment
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#darshan"
              className="gradient-saffron text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-105"
            >
              Darshan Timings
            </a>
            <a
              href="#about"
              className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
