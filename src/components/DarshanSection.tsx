import { Clock, Sun, Moon, Sparkles } from "lucide-react";

const timings = [
  {
    icon: Sun,
    title: "Morning Darshan",
    time: "6:30 AM - 12:00 PM",
    details: "Mangal Aarti at 7:15 AM, Shringar at 7:00 AM",
  },
  {
    icon: Clock,
    title: "Afternoon",
    time: "12:00 PM - 4:00 PM",
    details: "Temple remains open in this duration",
  },
  {
    icon: Moon,
    title: "Evening Darshan",
    time: "4:00 PM - 8:00 PM",
    details: "Sandhya Aarti at 7:15 PM",
  },
  {
    icon: Sparkles,
    title: "Special Days",
    time: "Extended Hours",
    details: "On Mahashivratri, Shravan Somvar & Festivals",
  },
];

const DarshanSection = () => {
  return (
    <section id="darshan" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl text-gold om-symbol">ॐ नमः शिवाय</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-4">
            Darshan Timings
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Plan your visit to seek the divine blessings of Lord Shiva
          </p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-4" />
        </div>

        {/* Timings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timings.map((item, index) => (
            <div
              key={index}
              className="bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 text-center hover:bg-secondary-foreground/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gold font-semibold text-lg mb-2">{item.time}</p>
              <p className="text-sm text-secondary-foreground/70">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-gold/20 border border-gold/30 rounded-xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-secondary-foreground font-medium">
            <span className="text-gold font-semibold">Special Note:</span> During Shravan month 
            (July-August), the temple organizes very grand Shringar and Sandhya Aarti, Temple remains open 
            till 9:00 PM.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DarshanSection;
