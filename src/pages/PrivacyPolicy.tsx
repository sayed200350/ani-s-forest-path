import aniGood from "@/assets/ani-good.png";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-cream to-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border/50">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img
                            src={aniGood}
                            alt="My Ani App Icon"
                            className="w-10 h-10 rounded-xl object-contain"
                        />
                        <span className="font-display text-xl font-bold">My Ani</span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-6 py-12 max-w-3xl">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    Privacy Policy
                </h1>
                <p className="text-muted-foreground mb-8">
                    Last Updated: December 19, 2025
                </p>

                <div className="prose prose-green max-w-none space-y-8">
                    {/* Section 1 */}
                    <section className="bg-white/60 rounded-2xl p-6 border border-border/50">
                        <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                            1. Introduction
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use My Ani and the choices you have associated with that data. By using the app, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="bg-white/60 rounded-2xl p-6 border border-border/50">
                        <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                            2. Information Collection and Use
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            While using My Ani, we collect certain information to provide and improve our service. We collect this data anonymously; it is not linked to your real-world identity (such as your name or email).
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <div>
                                    <strong className="text-foreground">Anonymous Identifiers:</strong> Each user is assigned a random, anonymous UserID. This allows us to recognize your progress and "Last Active" status without knowing who you are.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <div>
                                    <strong className="text-foreground">Usage Data (via Firebase Analytics):</strong> We collect information on how the app is accessed and used. This includes time spent in the app, crash logs, and your current level/progress.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <div>
                                    <strong className="text-foreground">Last Active Status:</strong> We track your last active timestamp to personalize your experience.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="bg-white/60 rounded-2xl p-6 border border-border/50">
                        <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                            3. Payment Processing
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            My Ani offers premium features via Apple's In-App Purchases. All transactions are processed by Apple. We do not collect or receive any personal financial information, such as credit card numbers or billing addresses.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="bg-white/60 rounded-2xl p-6 border border-border/50">
                        <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                            4. Data Retention
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We value your privacy and do not keep data longer than necessary.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <div>
                                    <strong className="text-foreground">Analytics and Activity Data:</strong> Data associated with your anonymous UserID (including your "Last Active" status and level) is automatically deleted after 30 days of inactivity.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section className="bg-white/60 rounded-2xl p-6 border border-border/50">
                        <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                            5. Third-Party Service Providers
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use Google Firebase to monitor and analyze the use of our service. This service is used with default settings and does not track you across other companies' apps or websites.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="bg-white/60 rounded-2xl p-6 border border-border/50">
                        <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                            6. Children's Privacy
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            My Ani does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="bg-white/60 rounded-2xl p-6 border border-border/50">
                        <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                            7. Your Rights (Data Deletion)
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Because our data is collected anonymously and is not linked to an identifiable individual, we do not have a manual process for users to request data deletion. However, all data is automatically purged after 30 days of inactivity as per our retention policy.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="bg-white/60 rounded-2xl p-6 border border-border/50">
                        <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                            8. Contact Me
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please contact:
                        </p>
                        <div className="bg-cream/50 rounded-xl p-4">
                            <p className="text-foreground font-medium">Developer: Sayed Mohamed</p>
                            <a
                                href="mailto:myaniapp@gmail.com"
                                className="text-primary hover:underline"
                            >
                                myaniapp@gmail.com
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-cream/50 border-t border-border/50 py-8 px-6 mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2024 My Ani. Made with 🌱 for better focus.</p>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
