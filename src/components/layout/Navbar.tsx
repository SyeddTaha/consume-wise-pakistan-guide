
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Camera, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-cw-green-500 to-cw-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">CW</span>
          </span>
          <span className="font-bold text-xl hidden sm:inline-block">ConsumeWise</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link to="/scan" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <Camera className="h-4 w-4" />
            Scan
          </Link>
          <Link to="/products" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <BookOpen className="h-4 w-4" />
            Products
          </Link>
          <Link to="/profile" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
            <User className="h-4 w-4" />
            Profile
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container pb-4">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link 
              to="/scan" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Camera className="h-5 w-5" />
              Scan
            </Link>
            <Link 
              to="/products" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              Products
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
