import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Workshop Participant",
      content: "Naalvadi Ranga Maadhyama transformed my confidence and helped me discover my voice. The workshops are truly life-changing.",
      location: "Mysuru"
    },
    {
      name: "Rajesh Kumar",
      role: "Community Leader",
      content: "Their historical plays have educated our community about our forgotten heritage. The impact on our youth is remarkable.",
      location: "Karnataka"
    },
    {
      name: "Dr. Meena Rao",
      role: "Cultural Enthusiast",
      content: "The organization's dedication to preserving folk theatre while addressing modern social issues is commendable.",
      location: "Bangalore"
    },
    {
      name: "Arjun Gowda",
      role: "Young Artist",
      content: "From a shy teenager to a confident performer - this journey with Naalvadi Ranga Maadhyama has been incredible.",
      location: "Mysuru"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Voices from Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the people whose lives have been touched by our theatre programs and workshops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift cultural-glow transition-theatrical relative"
            >
              <div className="absolute top-6 left-6 text-accent/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="relative">
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-bold text-primary text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-secondary font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;