import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I restore my purchases?",
      answer: "Go to Settings in the app and tap 'Restore Purchases'. Make sure you're signed into the same Apple ID you used for the original purchase. If you're still having trouble, contact us at myaniapp@gmail.com with your receipt."
    },
    {
      question: "How do I delete my account?",
      answer: "You can delete your account by going to Settings > Account > Delete Account. This will permanently remove all your data including progress, streaks, and purchased content. If you need assistance, email us at myaniapp@gmail.com."
    },
    {
      question: "What iOS version is required?",
      answer: "My Ani requires iOS 15.0 or later. For the best experience, we recommend keeping your device updated to the latest iOS version."
    },
    {
      question: "How does the Screen Time blocking work?",
      answer: "My Ani uses Apple's Screen Time API to help you block distracting apps during focus sessions. You'll need to grant Screen Time permissions in your device settings. We never access your personal data—only which apps to block based on your preferences."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. Your focus data stays on your device. We don't sell your information to third parties. Any optional cloud sync is encrypted and only used to sync your progress across your own devices."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "Subscriptions are managed through Apple. Go to Settings on your iPhone > tap your name > Subscriptions > My Ani > Cancel. You'll retain access until the end of your billing period."
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Quick answers to common questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional help prompt */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're happy to help!
          </p>
          <a 
            href="mailto:myaniapp@gmail.com" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
