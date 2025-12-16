import { Mail, MessageCircle, Clock } from "lucide-react";

const SupportSection = () => {
  return (
    <section id="support" className="section-padding bg-cream/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            We're here to help
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a question, issue, or just want to say hi? Reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email Support - Primary contact */}
          <div className="card-cozy text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Email Support</h3>
            <p className="text-muted-foreground text-sm mb-4">
              For account issues, billing questions, or any concerns
            </p>
            <a 
              href="mailto:myaniapp@gmail.com" 
              className="inline-block bg-primary/10 hover:bg-primary/20 text-foreground font-semibold px-6 py-3 rounded-full transition-colors"
            >
              myaniapp@gmail.com
            </a>
          </div>

          {/* Response Time */}
          <div className="card-cozy text-center">
            <div className="w-14 h-14 rounded-2xl bg-sunflower/20 text-accent-foreground flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Quick Response</h3>
            <p className="text-muted-foreground text-sm mb-4">
              We typically respond within 24-48 hours
            </p>
            <span className="inline-block bg-sunflower/20 text-accent-foreground font-medium px-4 py-2 rounded-full text-sm">
              Mon - Fri, 9am - 6pm
            </span>
          </div>

          {/* Feedback */}
          <div className="card-cozy text-center">
            <div className="w-14 h-14 rounded-2xl bg-taupe/20 text-foreground flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Send Feedback</h3>
            <p className="text-muted-foreground text-sm mb-4">
              We love hearing your thoughts and suggestions
            </p>
            <a 
              href="mailto:myaniapp@gmail.com?subject=Feedback for My Ani"
              className="inline-block border-2 border-border hover:border-foreground/30 font-medium px-6 py-2.5 rounded-full transition-colors text-sm"
            >
              Share Ideas
            </a>
          </div>
        </div>

        {/* Troubleshooting Note */}
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-background rounded-2xl border border-border/50 text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Quick tip:</strong> If the app crashes or behaves unexpectedly, 
            try restarting your device or reinstalling the app. This often resolves common issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
