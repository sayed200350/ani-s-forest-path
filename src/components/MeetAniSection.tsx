import { useState } from "react";
import aniHealthy from "@/assets/ani-healthy.png";
import aniGood from "@/assets/ani-good.png";
import aniConcerned from "@/assets/ani-concerned.png";
import aniCritical from "@/assets/ani-critical.png";

const MeetAniSection = () => {
  const [activeState, setActiveState] = useState(0);

  const aniStates = [
    {
      name: "Thriving",
      image: aniHealthy,
      description: "When you're crushing your focus goals, Ani glows with pride!",
      bgColor: "from-primary/20 to-sunflower/20",
    },
    {
      name: "Happy",
      image: aniGood,
      description: "You're doing great! Ani is cheerful and ready for more.",
      bgColor: "from-primary/15 to-primary/5",
    },
    {
      name: "Concerned",
      image: aniConcerned,
      description: "A little too much scrolling? Ani gently checks in on you.",
      bgColor: "from-taupe/15 to-taupe/5",
    },
    {
      name: "Needs Help",
      image: aniCritical,
      description: "Ani needs your attention. Time to take a break together.",
      bgColor: "from-clay/15 to-clay/5",
    },
  ];

  return (
    <section id="meet-ani" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Meet your new focus buddy
          </h2>
          <p className="text-xl text-muted-foreground">
            Ani reflects your digital wellness. Help them thrive by staying focused, 
            and they'll cheer you on every step of the way.
          </p>
        </div>

        {/* Ani States Showcase */}
        <div className="max-w-4xl mx-auto">
          {/* Current Ani Display */}
          <div className={`relative bg-gradient-to-br ${aniStates[activeState].bgColor} rounded-4xl p-12 mb-8 transition-all duration-500`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <img 
                  src={aniStates[activeState].image} 
                  alt={`Ani - ${aniStates[activeState].name}`}
                  className="w-56 md:w-72 drop-shadow-xl transition-all duration-300"
                />
              </div>
              <div className="text-center md:text-left space-y-4">
                <span className="inline-block bg-background/80 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold">
                  {aniStates[activeState].name} State
                </span>
                <p className="text-xl text-foreground/80 max-w-sm">
                  {aniStates[activeState].description}
                </p>
              </div>
            </div>
          </div>

          {/* State Selector */}
          <div className="flex justify-center gap-4 flex-wrap">
            {aniStates.map((state, index) => (
              <button
                key={index}
                onClick={() => setActiveState(index)}
                className={`group relative p-3 rounded-2xl transition-all duration-300 ${
                  activeState === index 
                    ? 'bg-primary/20 ring-2 ring-primary' 
                    : 'bg-background hover:bg-muted border border-border/50'
                }`}
              >
                <img 
                  src={state.image} 
                  alt={state.name}
                  className={`w-16 h-16 object-contain transition-transform ${
                    activeState === index ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
                <span className="block mt-2 text-xs font-medium text-center">
                  {state.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetAniSection;
