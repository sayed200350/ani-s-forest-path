
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FriendInvite = () => {
    const { username } = useParams();

    // Decode the username for display
    const displayName = username ? decodeURIComponent(username) : "Unknown";

    // Attempt to open the app deeply if possible
    useEffect(() => {
        // Try to open the app via Universal Link
        // iOS will intercept this URL if the app is installed
    }, [username]);

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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <line x1="19" y1="8" x2="19" y2="14" />
                                <line x1="22" y1="11" x2="16" y2="11" />
                            </svg>
                        </div>

                        <h1 className="text-3xl font-serif text-forest-dark mb-2">
                            Rival Invite ⚔️
                        </h1>

                        <p className="text-forest-muted mb-8">
                            <span className="font-semibold text-forest-green">{displayName}</span> wants to compete with you on My Ani!
                        </p>

                        <div className="bg-forest-sage/10 p-4 rounded-xl mb-8 border border-forest-sage/20 border-dashed">
                            <p className="text-sm text-forest-muted uppercase tracking-wider mb-1">Challenge From</p>
                            <p className="text-2xl font-bold text-forest-green selection:bg-forest-gold">
                                {displayName}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Button
                                className="w-full h-12 text-lg bg-forest-green hover:bg-forest-dark transition-all rounded-xl"
                                onClick={() => window.open('https://apps.apple.com/app/id6754611254', '_blank')}
                            >
                                Accept Challenge
                            </Button>

                            <p className="text-xs text-forest-muted">
                                Download My Ani to compete on the Friends leaderboard!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FriendInvite;
