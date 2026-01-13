import { Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import aniHealthy from "@/assets/ani-healthy.png";

const Footer = () => {
  return (
    <footer className="bg-cream/50 border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={aniHealthy}
                alt="My Ani App Icon"
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="font-display text-xl font-bold">My Ani</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-sm">
              Your pocket forest guardian. The screen time app that helps you focus without the guilt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="#support" className="hover:text-foreground transition-colors">Support</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:myaniapp@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                myaniapp@gmail.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/myani_app/" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© 2024 My Ani. Made with 🌱 for better focus.</p>
          <nav className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
