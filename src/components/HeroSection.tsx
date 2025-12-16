import aniHealthy from "@/assets/ani-healthy.png";
import { Sparkles, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-sunflower rounded-full animate-sparkle opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-sparkle delay-200 opacity-60" />
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent rounded-full animate-sparkle delay-400 opacity-40" />
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-sunflower rounded-full animate-sparkle delay-300 opacity-50" />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-foreground px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 text-sunflower" />
              Your pocket forest guardian
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-balance">
              Meet <span className="text-primary">Ani</span>.
              <br />
              Your Focus Friend.
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              The screen time app that feels like a game, not a guilt trip. 
              Grow your focus, nurture your mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-accent flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download Free
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                Learn More
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sunflower text-sunflower" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                Loved by <span className="font-semibold text-foreground">10,000+</span> focusers
              </span>
            </div>
          </div>

          {/* Ani illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind Ani */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-sunflower/20 rounded-full blur-3xl scale-110" />
              
              <img 
                src={aniHealthy} 
                alt="Ani - Your happy focus friend" 
                className="relative w-80 md:w-96 lg:w-[450px] animate-float drop-shadow-2xl"
              />

              {/* Floating sparkles around Ani */}
              <div className="absolute -top-4 right-8 w-8 h-8 bg-sunflower rounded-full flex items-center justify-center animate-gentle-bounce shadow-lg">
                <Star className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="absolute top-1/4 -left-4 w-6 h-6 bg-primary rounded-full animate-gentle-bounce delay-200 shadow-lg" />
              <div className="absolute bottom-1/4 -right-2 w-5 h-5 bg-sunflower/80 rounded-full animate-gentle-bounce delay-400 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
