import { Calendar } from "lucide-react";

const events = [
  {
    name: "Mahashivratri",
    date: "February 15, 2026",
    description: "The great night of Lord Shiva with night-long worship and celebration",
    highlight: true,
  },
  {
    name: "Shravan Somvar",
    date: "Every Monday in July-August",
    description: "Special prayers and Jalabhishek during the holy month of Shravan",
    highlight: false,
  },
  // {
  //   name: "Kartik Purnima",
  //   date: "November 15, 2025",
  //   description: "Deep Daan and special puja on the full moon of Kartik month",
  //   highlight: false,
  // },
  // {
  //   name: "Rudrabhishek",
  //   date: "Every Pradosh (13th lunar day)",
  //   description: "Sacred abhishek with milk, honey, and holy water",
  //   highlight: false,
  // },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 md:py-32 gradient-sacred">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl text-primary om-symbol">ॐ</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Upcoming Events & Festivals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating sacred occasions and festivals
          </p>
          <div className="w-24 h-1 gradient-saffron mx-auto rounded-full mt-4" />
        </div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-6 md:p-8 shadow-soft border transition-all duration-300 hover:-translate-y-1 ${
                event.highlight
                  ? "border-primary bg-gradient-to-r from-primary/5 to-gold/5"
                  : "border-primary/10"
              }`}
            >
              {event.highlight && (
                <div className="absolute -top-3 right-6 gradient-saffron text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Upcoming Major Festival
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-16 h-16 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-1">
                    {event.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{event.date}</p>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
