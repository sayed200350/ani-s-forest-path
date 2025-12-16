import { Timer, Shield, Map, BarChart3, Smartphone, Star } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Timer,
      title: "Focus Timer",
      description: "Pomodoro, Deep Work, or Custom sessions with ambient sounds. Ani cheers you on!",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Shield,
      title: "Smart Blocking",
      description: "Block distracting apps with schedule-based and friction-based overrides.",
      color: "bg-sunflower/20 text-accent-foreground",
    },
    {
      icon: Map,
      title: "Forest Journey",
      description: "Level up through a beautiful forest roadmap. Unlock rewards as you progress.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: BarChart3,
      title: "Smart Insights",
      description: "Daily reports, focus streaks, and brain health scores to track your growth.",
      color: "bg-taupe/20 text-foreground",
    },
    {
      icon: Smartphone,
      title: "Home Widgets",
      description: "See Ani's health at a glance. Quick focus timer right from your home screen.",
      color: "bg-sunflower/20 text-accent-foreground",
    },
    {
      icon: Star,
      title: "Side Quests",
      description: "Daily and weekly challenges with bonus XP rewards. Fresh fun every day!",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section id="features" className="section-padding bg-cream/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Everything you need to focus
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools wrapped in playful packaging. Because getting better shouldn't feel boring.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-cozy group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
