
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NutritionSummary } from "@/components/ui/NutritionLabel";
import { Product } from "@/data/sampleProducts";
import { AlertTriangle, Heart, Info, Share2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <Card className="w-full overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {product.healthScore}/100
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{product.name}</CardTitle>
            <CardDescription>{product.brand}</CardDescription>
          </div>
          
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart 
                className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} 
              />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="summary">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="warnings">Warnings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="py-4">
            <p className="text-sm mb-4">{product.description}</p>
            <NutritionSummary 
              calories={product.nutrition.calories}
              fat={product.nutrition.fat}
              sugar={product.nutrition.sugar}
              sodium={product.nutrition.sodium}
            />
          </TabsContent>
          
          <TabsContent value="ingredients" className="py-4">
            <ul className="text-sm space-y-1 list-disc list-inside">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="warnings" className="py-4">
            {product.warnings.length > 0 ? (
              <div className="space-y-3">
                {product.warnings.map((warning, index) => (
                  <div 
                    key={index} 
                    className="flex gap-2 text-sm items-start p-2 rounded-md bg-red-50 text-red-800"
                  >
                    <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                    <span>{warning}</span>
                  </div>
                ))}
                
                {product.alternatives && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Try these alternatives:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      {product.alternatives.map((alt, index) => (
                        <li key={index}>{alt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2 text-sm items-start p-2 rounded-md bg-green-50 text-green-800">
                <Info className="h-5 w-5 flex-shrink-0" />
                <span>No warnings for this product</span>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="border-t px-6 py-4">
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-muted-foreground">
            Health Score
          </div>
          <div className="flex items-center">
            <div 
              className={`h-2.5 w-24 rounded-full overflow-hidden bg-gray-200`}
            >
              <div 
                className={`h-full ${getHealthScoreColor(product.healthScore)}`}
                style={{ width: `${product.healthScore}%` }}
              />
            </div>
            <span className="ml-2 font-medium">{product.healthScore}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function getHealthScoreColor(score: number): string {
  if (score >= 70) return 'bg-green-500';
  if (score >= 40) return 'bg-yellow-500';
  return 'bg-red-500';
}
