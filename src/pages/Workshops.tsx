import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, MapPin, Calendar } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const Workshops = () => {
  const workshops = [
    {
      title: "Acting & Performance Mastery",
      description: "Comprehensive training in theatrical performance, character development, and stage presence. Learn from experienced theatre practitioners.",
      duration: "8 weeks",
      participants: "All ages welcome",
      location: "Mysuru Cultural Center",
      schedule: "Saturdays & Sundays",
      fee: "Free of cost",
      highlights: [
        "Character development techniques",
        "Voice modulation and projection",
        "Body language and movement",
        "Stage confidence building"
      ]
    },
    {
      title: "Speech & Communication Excellence",
      description: "Develop powerful speaking and communication skills through theatre techniques. Perfect for students and professionals.",
      duration: "6 weeks",
      participants: "Youth focused (15-35 years)",
      location: "Multiple venues in Karnataka",
      schedule: "Weekday evenings",
      fee: "Free of cost",
      highlights: [
        "Public speaking confidence",
        "Articulation and clarity",
        "Presentation skills",
        "Overcoming stage fright"
      ]
    },
    {
      title: "Traditional Folk Theatre",
      description: "Learn and preserve traditional folk theatre forms including Yakshagana, Bayalata, and other Karnataka folk arts.",
      duration: "12 weeks",
      participants: "Community members",
      location: "Various districts in Karnataka",
      schedule: "Flexible timing",
      fee: "Free of cost",
      highlights: [
        "Traditional music and dance",
        "Folk storytelling techniques",
        "Cultural history and context",
        "Performance opportunities"
      ]
    },
    {
      title: "Youth Leadership Through Arts",
      description: "Empowering young leaders through theatre, building confidence, and developing social awareness.",
      duration: "10 weeks",
      participants: "Students & young professionals",
      location: "Educational institutions",
      schedule: "After school hours",
      fee: "Free of cost",
      highlights: [
        "Leadership development",
        "Social awareness building",
        "Team collaboration",
        "Creative problem solving"
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: "New Batch Registration",
      date: "Starting October 2024",
      description: "Registration open for all workshop categories"
    },
    {
      title: "Cultural Festival Performance",
      date: "December 2024", 
      description: "Showcase performances by workshop participants"
    },
    {
      title: "Community Outreach Program",
      date: "November 2024",
      description: "Free workshops in rural areas of Karnataka"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-cultural text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Workshops & Performances
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Transform your potential through our comprehensive theatre workshops. 
                All programs are completely free and open to the community.
              </p>
            </div>
          </div>
        </section>

        {/* Workshops Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Available Workshops
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our diverse range of workshops designed to nurture talent 
                and build confidence across all age groups.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {workshops.map((workshop, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-theatrical">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {workshop.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {workshop.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
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
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-secondary" />
                        {workshop.schedule}
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {workshop.fee}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {workshop.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90 shadow-warm">
                      Register Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Image Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="relative">
              <img
                src={workshopImage}
                alt="Theatre Workshop in Action"
                className="w-full h-80 object-cover rounded-2xl shadow-theatrical"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent rounded-2xl flex items-center">
                <div className="px-8 max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Free Community Access
                  </h3>
                  <p className="text-theatre-beige text-lg mb-6 leading-relaxed">
                    We believe that theatre education should be accessible to everyone. 
                    That's why all our workshops are completely free, supported by our 
                    community and cultural mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay updated with our latest workshops and performance opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-6 text-center hover-lift cultural-glow transition-theatrical">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-secondary font-semibold mb-3">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Workshops;