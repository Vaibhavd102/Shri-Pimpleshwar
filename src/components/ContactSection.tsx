import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl text-primary om-symbol">ॐ</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Visit Our Temple
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We welcome all devotees to experience the divine presence of Lord Shiva
          </p>
          <div className="w-24 h-1 gradient-saffron mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Temple Address</h4>
                  <p className="text-muted-foreground">
                    Shri Pimpleshwer Mahadev Mandir<br />
                    Beside Hanuman Temple, Veer Sawarkar Nagar<br />
                    Thane West, Maharashtra - 400606
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    +91 88883 64436<br />
                    +91 70394 78459
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    info@pimpleshwermahadev.org<br />
                    donations@pimpleshwermahadev.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Temple Hours</h4>
                  <p className="text-muted-foreground">
                    Morning: 6:30 AM - 12:00 PM<br />
                    Evening: 12:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation / Map Placeholder */}
          <div id="donate" className="bg-muted rounded-2xl p-8 shadow-soft">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Support Our Temple
            </h3>
            <p className="text-muted-foreground mb-6">
              Your generous donations help us maintain the temple, organize festivals, 
              and serve the community. May Lord Shiva bless you abundantly.
            </p>

            <div className="space-y-4">
              <div className="bg-card p-4 rounded-xl border border-primary/10">
                <p className="text-sm text-muted-foreground mb-1">Bank Details</p>
                <p className="font-semibold text-foreground">
                  Shri Pimpleshwer Mahadev Mandir Trust
                </p>
                <p className="text-sm text-muted-foreground">A/C: XXXX XXXX XXXX</p>
                <p className="text-sm text-muted-foreground">IFSC: XXXXX0000XXX</p>
              </div>

              <div className="bg-card p-4 rounded-xl border border-primary/10">
                <p className="text-sm text-muted-foreground mb-1">UPI</p>
                <p className="font-semibold text-foreground">
                  pimpleshwermahadev@upi
                </p>
              </div>

              <button className="w-full gradient-saffron text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-soft">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
