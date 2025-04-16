
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 bg-gradient-to-b from-muted/50 to-muted border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-cw-green-500 to-cw-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CW</span>
            </span>
            <span className="font-bold text-xl">ConsumeWise</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Make informed food choices in Pakistan
          </p>
        </div>
        
        <div className="flex flex-col gap-2 items-center md:items-end">
          <div className="flex gap-4">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 ConsumeWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
