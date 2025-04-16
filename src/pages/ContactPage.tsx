
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-cw-blue-100 to-background py-16">
          <div className="container text-center max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Reach out with questions, feedback, or inquiries about ConsumeWise.
            </p>
          </div>
        </section>
        
        {/* Contact section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact cards */}
              <div className="md:col-span-1 flex flex-col gap-6">
                <Card>
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        We'll respond as quickly as possible
                      </p>
                      <a href="mailto:info@consumewise.com" className="text-primary font-medium hover:underline">
                        info@consumewise.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Call Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Mon-Fri from 9am to 5pm
                      </p>
                      <a href="tel:+923001234567" className="text-primary font-medium hover:underline">
                        +92 300 123 4567
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Our office location
                      </p>
                      <p className="text-sm">
                        123 Tech Street, Blue Area<br />
                        Islamabad, Pakistan
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact form */}
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          placeholder="What is this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Type your message here..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <Button type="submit" disabled={isSubmitting} className="gap-2">
                        <Send className="h-4 w-4" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16 bg-muted/50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How accurate is ConsumeWise's product analysis?",
                  answer: "ConsumeWise uses advanced AI technology to analyze food labels with high accuracy. Our system is continuously improving through machine learning and user feedback. For Pakistani products, we maintain a specialized database to ensure localized accuracy."
                },
                {
                  question: "Is my health data secure?",
                  answer: "Yes, we take data security very seriously. Your health profile and personal information are encrypted and stored securely. We never share your individual data with third parties without your explicit consent."
                },
                {
                  question: "How can I contribute to the product database?",
                  answer: "You can help improve our database by submitting corrections or additions through the app. When you scan a product that isn't recognized or has incomplete information, you'll have the option to contribute data to help other users."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
