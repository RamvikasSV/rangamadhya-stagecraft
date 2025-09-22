import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import folkTheatreImage from "@/assets/folk-theatre.jpg";

const About = () => {
  const achievements = [
    "Festival participation across Karnataka",
    "Regional and national performances",
    "Community outreach programs",
    "Cultural preservation initiatives"
  ];

  const activities = [
    {
      title: "Historical Plays",
      description: "We create and perform historical plays that uncover untold truths and bring forgotten stories to light, educating audiences about our rich cultural heritage."
    },
    {
      title: "Social & Cultural Protest Theatre",
      description: "Our protest theatre addresses social issues and cultural challenges, using performance as a medium for awareness and change."
    },
    {
      title: "Folk Theatre Revival",
      description: "We are dedicated to reviving traditional folk theatre and music forms, preserving them for future generations."
    },
    {
      title: "Youth Development",
      description: "Through workshops and training programs, we help young people build confidence, develop communication skills, and discover their artistic potential."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-theatre-beige leading-relaxed">
                Founded with a vision to spread the message of Vishwa Manava through 
                the transformative power of theatre arts.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Established in 2018 and officially registered as a trust in 2022, 
                  Naalvadi Ranga Madhyama stands as a beacon of community-driven 
                  theatre in Mysuru, Karnataka.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We believe that theatre is not just entertainment—it's a powerful 
                  tool for social transformation, cultural preservation, and community 
                  building. Through our work, we aim to awaken consciousness, educate 
                  minds, and empower individuals to create positive change.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary mb-4">
                    Our Achievements
                  </h3>
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={folkTheatreImage}
                  alt="Our Theatre Community"
                  className="w-full h-96 object-cover rounded-2xl shadow-theatrical"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diverse range of activities spans from historical storytelling 
                to modern social commentary, all united by our commitment to cultural excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover-lift cultural-glow transition-theatrical"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto animate-theatre-glow">
                  <span className="text-2xl font-bold text-accent-foreground">J</span>
                </div>
                <h3 className="text-2xl font-bold">Justice</h3>
                <p className="text-theatre-beige">
                  Fighting for social justice through powerful storytelling and performance
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto animate-theatre-glow">
                  <span className="text-2xl font-bold text-accent-foreground">E</span>
                </div>
                <h3 className="text-2xl font-bold">Equality</h3>
                <p className="text-theatre-beige">
                  Promoting equality and inclusivity through accessible theatre education
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto animate-theatre-glow">
                  <span className="text-2xl font-bold text-accent-foreground">C</span>
                </div>
                <h3 className="text-2xl font-bold">Culture</h3>
                <p className="text-theatre-beige">
                  Preserving and celebrating our rich cultural heritage for future generations
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;