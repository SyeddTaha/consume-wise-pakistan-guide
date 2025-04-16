
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Camera, GitFork, Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Scanner from "@/components/features/Scanner";
import ProductCard from "@/components/features/ProductCard";
import HealthProfile from "@/components/features/HealthProfile";
import { sampleProducts, Product, UserProfile } from "@/data/sampleProducts";

export default function Index() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    dietaryPreferences: [],
    allergies: [],
    healthGoals: []
  });
  
  const handleScanComplete = (productId: string) => {
    const product = sampleProducts.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  };
  
  const updateProfile = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cw-green-100 to-cw-blue-100 opacity-50" />
          <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Make Healthier Food Choices in Pakistan
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                ConsumeWise helps you understand food labels, identify harmful ingredients, 
                and find healthier alternatives tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Camera className="h-5 w-5" />
                  Scan a Product
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => navigate("/profile")}>
                  <User className="h-5 w-5" />
                  Create Health Profile
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How ConsumeWise Helps You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-full bg-cw-green-100 flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-cw-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scan Products</h3>
                <p className="text-muted-foreground">
                  Point your camera at any food label to instantly analyze ingredients and nutritional content.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-full bg-cw-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-cw-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Analysis</h3>
                <p className="text-muted-foreground">
                  Get health insights based on your dietary preferences, allergies, and health goals.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-full bg-cw-accent-300/20 flex items-center justify-center mb-4">
                  <GitFork className="h-6 w-6 text-cw-accent-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Find Alternatives</h3>
                <p className="text-muted-foreground">
                  Discover healthier alternatives to products that don't meet your health criteria.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Scanner Demo Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-3">Try It Yourself</h2>
              <p className="text-center text-muted-foreground mb-8">
                Scan a product label to see detailed information
              </p>
              
              <div className="grid gap-8 md:grid-cols-2">
                <Scanner onScanComplete={handleScanComplete} />
                
                {selectedProduct ? (
                  <ProductCard product={selectedProduct} />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full bg-card rounded-lg border p-6">
                    <div className="text-center text-muted-foreground">
                      <Camera className="h-12 w-12 mx-auto mb-4 opacity-40" />
                      <p>Scan a product to see results here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Health Profile Section */}
        <section className="py-16 bg-gradient-to-br from-white to-cw-green-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-3">Personalize Your Experience</h2>
              <p className="text-center text-muted-foreground mb-8">
                Set up your health profile to get tailored recommendations
              </p>
              
              <HealthProfile 
                initialProfile={userProfile}
                onProfileUpdate={updateProfile}
              />
            </div>
          </div>
        </section>
        
        {/* Popular Products Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Popular Products</h2>
              <Button variant="ghost" className="gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProducts.slice(0, 3).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
