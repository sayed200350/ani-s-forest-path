
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PactInvite = () => {
    const { code } = useParams();

    // Attempt to open the app deeply if possible (though Universal Links usually handle this before loading)
    useEffect(() => {
        // Optional: You could try window.location.href = `norot://pact/${code}` here as a fallback
        // but usually it is better to just let the user click.
    }, [code]);

    return (
        <div className="min-h-screen bg-forest-cream flex flex-col">
            <Header />

            <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4">
                <div className="max-w-md w-full bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-forest-sage/20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-20 h-20 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-10 h-10 text-forest-green"
                            >
                                <path d="M12 10a6 6 0 0 0-6-6c-1.6 0-3 .7-4 2 1.5 0 3 .6 4 1.5 1-2 2.5-3.5 4-3.5 1.5 0 3 .6 4 1.5C15 4.1 13.6 3.5 12 4z" />
                                <path d="M12 14a6 6 0 0 1 6 6c1.6 0 3-.7 4-2-1.5 0-3-.6-4-1.5-1 2-2.5 3.5-4 3.5-1.5 0-3-.6-4-1.5C11.6 19.9 13 20.5 12 20z" />
                                <path d="M12 10v4" />
                            </svg>
                        </div>

                        <h1 className="text-3xl font-serif text-forest-dark mb-2">
                            Soul Pact Invite
                        </h1>

                        <p className="text-forest-muted mb-8">
                            You've been invited to grow a Twin Tree in NoRot. Join to stay focused together!
                        </p>

                        <div className="bg-forest-sage/10 p-4 rounded-xl mb-8 border border-forest-sage/20 border-dashed">
                            <p className="text-sm text-forest-muted uppercase tracking-wider mb-1">Invite Code</p>
                            <p className="text-4xl font-mono font-bold text-forest-green tracking-widest selection:bg-forest-gold">
                                {code?.toUpperCase() || "???????"}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Button
                                className="w-full h-12 text-lg bg-forest-green hover:bg-forest-dark transition-all rounded-xl"
                                onClick={() => window.open('https://apps.apple.com/app/id6754611254', '_blank')}
                            >
                                Download NoRot
                            </Button>

                            <p className="text-xs text-forest-muted">
                                Already have the app? Open it and enter the code above.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PactInvite;
