import aniConcerned from "@/assets/ani-concerned.png";
import { Smartphone, Clock, Heart } from "lucide-react";

const ProblemSection = () => {
  const stats = [
    { icon: Smartphone, value: "4+ hours", label: "Average daily screen time" },
    { icon: Clock, value: "2,617", label: "Phone pickups per week" },
    { icon: Heart, value: "76%", label: "Feel guilty about phone use" },
  ];

  return (
    <section className="section-padding bg-cream/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sad Ani */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-taupe/10 rounded-full blur-3xl scale-110" />
              <img 
                src={aniConcerned} 
                alt="Concerned Ani" 
                className="relative w-64 md:w-80 drop-shadow-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Scrolling shouldn't feel like this
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We get it. You unlock your phone "just for a second" and suddenly 
                an hour has vanished. The guilt, the frustration—it's exhausting.
              </p>
              <p className="text-lg text-muted-foreground">
                Other apps shame you. We're different. <span className="text-primary font-semibold">Ani is here to help, not judge.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-2xl bg-background border border-border/50"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
