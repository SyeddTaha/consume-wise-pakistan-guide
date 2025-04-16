
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { 
  UserProfile, 
  defaultUserProfile, 
  dietaryOptions, 
  allergyOptions, 
  healthGoalOptions 
} from "@/data/sampleProducts";
import { toast } from "sonner";

interface HealthProfileProps {
  initialProfile?: UserProfile;
  onProfileUpdate?: (profile: UserProfile) => void;
}

export default function HealthProfile({ 
  initialProfile = defaultUserProfile,
  onProfileUpdate
}: HealthProfileProps) {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  
  const toggleItem = (
    category: keyof UserProfile, 
    item: string
  ) => {
    setProfile(prev => {
      const current = [...prev[category]];
      const exists = current.includes(item);
      
      const updated = exists 
        ? current.filter(i => i !== item)
        : [...current, item];
        
      return {
        ...prev,
        [category]: updated
      };
    });
  };
  
  const saveProfile = () => {
    if (onProfileUpdate) {
      onProfileUpdate(profile);
    }
    toast("Profile updated successfully");
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Health Profile</CardTitle>
        <CardDescription>
          Customize your preferences for personalized recommendations
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Dietary Preferences</h3>
          <div className="grid grid-cols-2 gap-3">
            {dietaryOptions.map(option => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox 
                  id={`diet-${option}`} 
                  checked={profile.dietaryPreferences.includes(option)} 
                  onCheckedChange={() => toggleItem('dietaryPreferences', option)}
                />
                <Label htmlFor={`diet-${option}`} className="text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Allergies</h3>
          <div className="grid grid-cols-2 gap-3">
            {allergyOptions.map(option => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox 
                  id={`allergy-${option}`} 
                  checked={profile.allergies.includes(option)} 
                  onCheckedChange={() => toggleItem('allergies', option)}
                />
                <Label htmlFor={`allergy-${option}`} className="text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Health Goals</h3>
          <div className="grid grid-cols-2 gap-3">
            {healthGoalOptions.map(option => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox 
                  id={`goal-${option}`} 
                  checked={profile.healthGoals.includes(option)} 
                  onCheckedChange={() => toggleItem('healthGoals', option)}
                />
                <Label htmlFor={`goal-${option}`} className="text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <Button onClick={saveProfile} className="w-full">
          Save Preferences
        </Button>
      </CardContent>
    </Card>
  );
}
