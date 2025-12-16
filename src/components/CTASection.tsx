import aniProud from "@/assets/ani-proud.png";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-sunflower/20 rounded-4xl p-12 md:p-20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-sunflower/30 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            {/* Ani */}
            <div className="lg:w-1/3 flex justify-center">
              <img 
                src={aniProud} 
                alt="Proud Ani" 
                className="w-48 md:w-64 drop-shadow-xl animate-float"
              />
            </div>

            {/* Content */}
            <div className="lg:w-2/3 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-background/60 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 text-sunflower" />
                Start your journey today
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Ready to grow your focus?
              </h2>

              <p className="text-xl text-muted-foreground max-w-lg">
                Join thousands of people breaking free from doom-scrolling. 
                Ani is waiting to meet you!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-accent flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Download for iOS
                </button>
                <button className="btn-secondary">
                  Join Waitlist (Android)
                </button>
              </div>

              <p className="text-sm text-muted-foreground">
                Free to start. Premium for $4.99/month or $29.99 lifetime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
