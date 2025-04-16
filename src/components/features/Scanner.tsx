
import { useState } from "react";
import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ScannerProps {
  onScanComplete?: (result: string) => void;
}

export default function Scanner({ onScanComplete }: ScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  
  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate scan taking 3 seconds
    setTimeout(() => {
      setIsScanning(false);
      if (onScanComplete) {
        // Return a random product ID from sample data
        const productIds = ["p1", "p2", "p3", "p4", "p5"];
        const randomId = productIds[Math.floor(Math.random() * productIds.length)];
        onScanComplete(randomId);
      }
    }, 3000);
  };
  
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="scanner-container aspect-video bg-muted flex items-center justify-center mb-4">
          {isScanning ? (
            <>
              <div className="scanner-line animate-scan"></div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Scanning product...</p>
              </div>
            </>
          ) : (
            <div className="text-center">
              <Camera className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Tap scan to analyze a product</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button 
            className="flex-1 gap-2" 
            onClick={handleScan}
            disabled={isScanning}
          >
            <Camera className="h-4 w-4" />
            Scan Product
          </Button>
          
          <Button variant="outline" className="flex-1 gap-2">
            <Upload className="h-4 w-4" />
            Upload Image
          </Button>
        </div>
        
        <p className="text-xs text-center text-muted-foreground mt-4">
          Point your camera at a food product label to analyze its contents
        </p>
      </CardContent>
    </Card>
  );
}
