
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Brain, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative bg-gradient-to-b from-cw-green-100 to-background py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About ConsumeWise</h1>
              <p className="text-xl text-muted-foreground">
                Empowering Pakistani consumers to make healthier food choices through AI-powered label analysis and personalized insights.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-4">
                  ConsumeWise was founded with a clear mission: to bridge the knowledge gap between Pakistani consumers and the packaged food products they purchase every day.
                </p>
                <p className="mb-4">
                  In a market where food labeling can be confusing, inconsistent, or misleading, we aim to empower consumers with the information they need to make healthier choices aligned with their personal health goals and dietary requirements.
                </p>
                <p>
                  Through innovative technology and a deep understanding of the local food ecosystem, we're making nutrition science accessible to everyone, regardless of their background or education level.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-card to-cw-green-50/50">
                  <Shield className="h-10 w-10 text-cw-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Health Protection</h3>
                  <p className="text-sm text-muted-foreground">Safeguarding consumers from harmful ingredients and misleading claims</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-card to-cw-blue-50/50">
                  <Brain className="h-10 w-10 text-cw-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
                  <p className="text-sm text-muted-foreground">Using advanced technology to decode complex food information</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-card to-yellow-50/50">
                  <Users className="h-10 w-10 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                  <p className="text-sm text-muted-foreground">Building a community of health-conscious consumers</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-card to-purple-50/50">
                  <Globe className="h-10 w-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Local Context</h3>
                  <p className="text-sm text-muted-foreground">Tailored for Pakistani dietary habits and product ecosystem</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-4">
                ConsumeWise began as a passion project in 2024 when our founder, a nutritionist and tech enthusiast, noticed how difficult it was for average Pakistani consumers to decipher food labels and understand what they were really eating.
              </p>
              <p className="mb-4">
                After witnessing family members struggle with diet-related health issues despite their best efforts to eat healthily, we realized the problem wasn't a lack of will but a lack of accessible information.
              </p>
              <p className="mb-4">
                What started as a simple idea to translate food labels into actionable health insights has grown into a comprehensive platform that combines cutting-edge AI technology with deep nutritional expertise.
              </p>
              <p>
                Today, ConsumeWise is on a mission to revolutionize how Pakistani consumers interact with food products, making every shopping trip an opportunity to make healthier choices.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <p className="text-center max-w-3xl mx-auto mb-12">
              ConsumeWise is built by a passionate team of nutritionists, food scientists, AI specialists, and developers who share a common goal: making healthy eating easier for everyone in Pakistan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mb-4"></div>
                  <h3 className="text-xl font-semibold">Team Member {i}</h3>
                  <p className="text-muted-foreground">Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
