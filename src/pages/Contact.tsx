import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-theatre-beige max-w-3xl mx-auto leading-relaxed">
                Join our theatre community or get more information about our workshops and performances.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Connect With Us
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We'd love to hear from you! Whether you're interested in joining our workshops, 
                    collaborating on a project, or simply want to learn more about our work, 
                    don't hesitate to reach out.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 hover-lift cultural-glow transition-theatrical">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Phone</h3>
                        <p className="text-muted-foreground">+91 99802 74660</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available during workshop hours
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover-lift cultural-glow transition-theatrical">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Email</h3>
                        <p className="text-muted-foreground">dineshchammalige@gmail.com</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We typically respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover-lift cultural-glow transition-theatrical">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Location</h3>
                        <p className="text-muted-foreground">Mysuru, Karnataka</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Workshops held at various venues across Karnataka
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover-lift cultural-glow transition-theatrical">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Workshop Hours</h3>
                        <p className="text-muted-foreground">Flexible scheduling</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Evenings and weekends primarily
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="bg-gradient-cultural text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3">Contact Person</h3>
                  <p className="text-white/90 text-lg">
                    <strong>Dinesh Sir Art</strong>
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    Founder & Artistic Director
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 shadow-theatrical">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Send us a Message
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input 
                          placeholder="Your first name"
                          className="transition-theatrical focus:shadow-cultural"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input 
                          placeholder="Your last name"
                          className="transition-theatrical focus:shadow-cultural"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="transition-theatrical focus:shadow-cultural"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="transition-theatrical focus:shadow-cultural"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Interest Area
                      </label>
                      <select className="w-full p-3 border border-input rounded-lg bg-background text-foreground transition-theatrical focus:shadow-cultural">
                        <option value="">Select your interest</option>
                        <option value="workshops">Workshop Participation</option>
                        <option value="performances">Performance Opportunities</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="volunteering">Volunteering</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us about your interest in theatre, any questions you have, or how you'd like to get involved..."
                        rows={5}
                        className="transition-theatrical focus:shadow-cultural"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90 shadow-warm transition-theatrical"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Theatre Journey?
            </h2>
            <p className="text-theatre-beige text-lg mb-8 max-w-2xl mx-auto">
              Join our community of passionate theatre enthusiasts and discover 
              the transformative power of performance arts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cultural"
              >
                Register for Workshops
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-theatre-beige text-theatre-beige hover:bg-theatre-beige hover:text-primary"
              >
                View Performance Schedule
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;