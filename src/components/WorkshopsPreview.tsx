import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Clock, MapPin } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const WorkshopsPreview = () => {
  const workshops = [
    {
      title: "Acting & Performance",
      description: "Build confidence and expression through theatrical performance",
      duration: "8 weeks",
      participants: "All ages",
      location: "Mysuru"
    },
    {
      title: "Speech & Communication",
      description: "Develop powerful speaking and communication skills",
      duration: "6 weeks", 
      participants: "Youth focused",
      location: "Karnataka"
    },
    {
      title: "Folk Theatre",
      description: "Learn traditional folk theatre forms and music",
      duration: "12 weeks",
      participants: "Community",
      location: "Multiple cities"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Workshops & <span className="text-secondary">Performances</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our community workshops designed for all age groups. We offer free 
            workshops across Karnataka to spread the art of theatre and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {workshops.map((workshop, index) => (
            <Card key={index} className="overflow-hidden hover-lift transition-theatrical">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {workshop.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-secondary" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    {workshop.participants}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                    {workshop.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="relative">
          <img
            src={workshopImage}
            alt="Theatre Workshop"
            className="w-full h-64 object-cover rounded-2xl shadow-warm mb-12"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent rounded-2xl flex items-center">
            <div className="px-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Free Community Workshops
              </h3>
              <p className="text-theatre-beige text-lg mb-6">
                Empowering communities through accessible theatre education
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cultural"
              >
                <Link to="/workshops">View All Workshops</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsPreview;