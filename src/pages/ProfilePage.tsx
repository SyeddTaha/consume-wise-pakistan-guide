
import { useState } from "react";
import { toast } from "sonner";
import { User, Settings, Heart, ClipboardList } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HealthProfile from "@/components/features/HealthProfile";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserProfile } from "@/data/sampleProducts";

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    dietaryPreferences: ["Low Sugar", "Vegetarian"],
    allergies: ["Nuts"],
    healthGoals: ["Weight Management", "Heart Health"]
  });

  const updateProfile = (profile: UserProfile) => {
    setUserProfile(profile);
    toast.success("Profile updated successfully");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Profile sidebar */}
          <div className="md:w-64">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>User Profile</CardTitle>
                    <CardDescription>Manage your preferences</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="justify-start gap-2">
                    <Settings className="h-4 w-4" />
                    Account Settings
                  </Button>
                  <Button variant="ghost" className="justify-start gap-2">
                    <Heart className="h-4 w-4" />
                    Saved Products
                  </Button>
                  <Button variant="ghost" className="justify-start gap-2">
                    <ClipboardList className="h-4 w-4" />
                    Scan History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <Tabs defaultValue="health">
              <TabsList className="mb-6">
                <TabsTrigger value="health">Health Profile</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="health">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Health Profile</CardTitle>
                    <CardDescription>
                      Update your health information to get personalized recommendations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <HealthProfile 
                      initialProfile={userProfile}
                      onProfileUpdate={updateProfile}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>App Preferences</CardTitle>
                    <CardDescription>
                      Customize your ConsumeWise experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      This section is under development. You'll soon be able to customize your app experience, 
                      notification preferences, and display settings.
                    </p>
                    <Button disabled>Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      View your recent scans and interactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Your recent activity will appear here once you start using the app. 
                      Try scanning some products to see your activity history.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
