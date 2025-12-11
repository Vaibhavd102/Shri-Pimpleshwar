const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Temple Name */}
          <div className="mb-6">
            <span className="text-4xl text-gold om-symbol">ॐ</span>
            <h3 className="font-heading text-2xl font-bold mt-2">
              श्री पिंपलेश्वर महादेव मंदिर
            </h3>
            <p className="text-secondary-foreground/70 mt-1">
              Shri Pimpleshwer Mahadev Mandir
            </p>
          </div>

          {/* Mantra */}
          <p className="text-gold font-heading text-xl mb-6">
            ॐ नमः शिवाय
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-secondary-foreground/70 hover:text-gold transition-colors">
              Home
            </a>
            <a href="#about" className="text-secondary-foreground/70 hover:text-gold transition-colors">
              About
            </a>
            <a href="#darshan" className="text-secondary-foreground/70 hover:text-gold transition-colors">
              Darshan
            </a>
            <a href="#events" className="text-secondary-foreground/70 hover:text-gold transition-colors">
              Events
            </a>
            <a href="#contact" className="text-secondary-foreground/70 hover:text-gold transition-colors">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gold/30 mx-auto mb-6" />

          {/* Copyright */}
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Shri Pimpleshwer Mahadev Mandir. All rights reserved.
          </p>
          <p className="text-secondary-foreground/40 text-xs mt-2">
            हर हर महादेव | Har Har Mahadev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
