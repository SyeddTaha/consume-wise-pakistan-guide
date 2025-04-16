
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Scanner from "@/components/features/Scanner";
import ProductCard from "@/components/features/ProductCard";
import { Product, sampleProducts } from "@/data/sampleProducts";
import { Camera } from "lucide-react";

export default function ScanPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleScanComplete = (productId: string) => {
    const product = sampleProducts.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      toast.success(`Product identified: ${product.name}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Scan a Product</h1>
        <p className="text-muted-foreground mb-8">
          Point your camera at a product barcode or label to get instant health insights
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Scanner onScanComplete={handleScanComplete} />
            <div className="bg-muted p-4 rounded-lg text-sm">
              <h3 className="font-medium mb-2">Scanning Tips:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ensure good lighting for best results</li>
                <li>Hold your device steady</li>
                <li>Position the barcode or label in the center</li>
                <li>Try different angles if scanning fails</li>
              </ul>
            </div>
          </div>
          
          {selectedProduct ? (
            <ProductCard product={selectedProduct} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full bg-card rounded-lg border p-6">
              <div className="text-center text-muted-foreground">
                <Camera className="h-12 w-12 mx-auto mb-4 opacity-40" />
                <p className="text-lg font-medium mb-2">No Product Scanned</p>
                <p className="text-sm">Scan a product to see detailed information here</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
