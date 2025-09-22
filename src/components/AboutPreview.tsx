import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import folkTheatreImage from "@/assets/folk-theatre.jpg";

const AboutPreview = () => {
  const highlights = [
    {
      title: "Historical Plays",
      description: "Uncovering untold truths through powerful storytelling"
    },
    {
      title: "Social Theatre",
      description: "Cultural and social protest theatre for awareness"
    },
    {
      title: "Folk Revival",
      description: "Reviving traditional folk theatre and music"
    },
    {
      title: "Youth Workshops",
      description: "Building confidence through acting and speech"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Spreading the Message of{" "}
                <span className="text-secondary">Vishwa Manava</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2018 and registered as a trust in 2022, Naalvadi Ranga Madhyama 
                is dedicated to using theatre as a medium for social change and cultural preservation. 
                We believe in the transformative power of performance arts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover-lift cultural-glow transition-theatrical"
                >
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-theatrical"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={folkTheatreImage}
              alt="Folk Theatre Performance"
              className="w-full h-96 object-cover rounded-2xl shadow-theatrical"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;