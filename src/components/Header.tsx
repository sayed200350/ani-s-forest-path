import { Link } from "react-router-dom";
import aniGood from "@/assets/ani-good.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* App Identity - App Icon + Name */}
        <div className="flex items-center gap-3">
          <img
            src={aniGood}
            alt="My Ani App Icon"
            className="w-10 h-10 rounded-xl object-contain"
          />
          <span className="font-display text-xl font-bold">My Ani</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Features
          </a>
          <a href="#meet-ani" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Meet Ani
          </a>
          <a href="#faq" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            FAQ
          </a>
          <a href="#support" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Support
          </a>
          <Link to="/privacy" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Privacy
          </Link>
        </nav>

        <a
          href="https://testflight.apple.com/join/nNuJEw9K"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm py-3 px-6 inline-flex items-center justify-center"
        >
          Join Beta
        </a>
      </div>
    </header>
  );
};

export default Header;
