
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle,
  Check,
  AlertCircle
} from "lucide-react";

interface NutritionLabelProps {
  name: string;
  value: number;
  unit: string;
  severity: 'low' | 'medium' | 'high';
}

export default function NutritionLabel({ 
  name, 
  value, 
  unit, 
  severity 
}: NutritionLabelProps) {
  let bgColor = "bg-green-100";
  let textColor = "text-green-800";
  let icon = <Check className="h-4 w-4" />;
  
  if (severity === 'medium') {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-800";
    icon = <AlertCircle className="h-4 w-4" />;
  } else if (severity === 'high') {
    bgColor = "bg-red-100";
    textColor = "text-red-800";
    icon = <AlertTriangle className="h-4 w-4" />;
  }
  
  return (
    <div className={`flex items-center justify-between p-2 rounded-md ${bgColor} ${textColor}`}>
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-1">
        <span>{value}</span>
        <span className="text-xs">{unit}</span>
      </div>
    </div>
  );
}

export function NutritionSummary({
  calories,
  fat,
  sugar,
  sodium,
}: {
  calories: number;
  fat: number;
  sugar: number;
  sodium: number;
}) {
  // Simplified severity determination - in a real app, this would be more sophisticated
  const getSeverity = (type: string, value: number): 'low' | 'medium' | 'high' => {
    switch (type) {
      case 'fat':
        return value > 10 ? 'high' : value > 5 ? 'medium' : 'low';
      case 'sugar':
        return value > 15 ? 'high' : value > 8 ? 'medium' : 'low';
      case 'sodium':
        return value > 400 ? 'high' : value > 200 ? 'medium' : 'low';
      default:
        return 'low';
    }
  };
  
  return (
    <div className="space-y-2 w-full">
      <Badge variant="outline" className="w-full justify-center py-1.5">
        {calories} Calories per serving
      </Badge>
      
      <div className="grid grid-cols-1 gap-2">
        <NutritionLabel 
          name="Fat" 
          value={fat} 
          unit="g" 
          severity={getSeverity('fat', fat)} 
        />
        <NutritionLabel 
          name="Sugar" 
          value={sugar} 
          unit="g" 
          severity={getSeverity('sugar', sugar)} 
        />
        <NutritionLabel 
          name="Sodium" 
          value={sodium} 
          unit="mg" 
          severity={getSeverity('sodium', sodium)} 
        />
      </div>
    </div>
  );
}
