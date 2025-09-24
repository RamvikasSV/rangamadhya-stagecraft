import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Image as ImageIcon, Newspaper } from "lucide-react";
import heroImage from "@/assets/hero-theatre.jpg";
import folkTheatreImage from "@/assets/folk-theatre.jpg";
import workshopImage from "@/assets/workshop.jpg";

const Media = () => {
  const references = [
    {
      title: "Ranga Bandi – Theatre Workshops & Performances",
      description: "Comprehensive overview of our theatre workshops and performance methodology",
      url: "https://share.google/rihIt6D1hJfIbDNVy",
      type: "Workshop Reference",
      icon: <Play className="w-5 h-5" />
    },
    {
      title: "Home – Nirdigantha",
      description: "Cultural initiative and community theatre movement documentation",
      url: "https://share.google/FM376FSJYcbYDMKGY",
      type: "Cultural Reference",
      icon: <ExternalLink className="w-5 h-5" />
    },
    {
      title: "Naalvadi Ranga Maadhyama Official",
      description: "Official organization website with detailed information",
      url: "https://www.naalvadirangamadhyama.org",
      type: "Official Site",
      icon: <ExternalLink className="w-5 h-5" />
    }
  ];

  const gallery = [
    {
      image: "/lovable-uploads/7d3f19c1-cfc9-4f23-92c3-e93846d9ccb6.png",
      title: "Theatre Group Celebration",
      description: "Our vibrant theatre community celebrating after a successful performance with traditional costumes and modern attire"
    },
    {
      image: "/lovable-uploads/694a68c0-a828-417b-81df-3901b4705840.png",
      title: "Community Engagement",
      description: "Hundreds of community members enjoying our theatrical performances in packed auditoriums"
    },
    {
      image: "/lovable-uploads/e295269f-9536-4ea3-8b70-566aa4b86835.png",
      title: "Workshop & Community Sessions",
      description: "Active participation in our community theatre workshops and training sessions with performers and audience members"
    },
    {
      image: "/lovable-uploads/7c31f1e0-d1d1-4852-ae27-8dc6c01229f8.png",
      title: "Cultural Unity & Candlelight Ceremony",
      description: "Community candlelight gathering representing unity and cultural solidarity through theatre"
    },
    {
      image: folkTheatreImage,
      title: "Folk Theatre Revival",
      description: "Traditional folk theatre forms being preserved and performed for modern audiences"
    },
    {
      image: workshopImage,
      title: "Youth Development",
      description: "Young participants learning and growing through our comprehensive theatre education programs"
    }
  ];

  const pressHighlights = [
    {
      title: "Theatre as Social Change Agent",
      publication: "Karnataka Cultural Times",
      date: "September 2024",
      excerpt: "Naalvadi Ranga Maadhyama demonstrates how community theatre can drive meaningful social transformation..."
    },
    {
      title: "Preserving Folk Traditions",
      publication: "Mysuru Heritage Journal",
      date: "August 2024", 
      excerpt: "The organization's efforts to revive and preserve traditional folk theatre forms have gained recognition..."
    },
    {
      title: "Free Education Initiative Success",
      publication: "Community Development Review",
      date: "July 2024",
      excerpt: "With over 200 participants benefiting from free workshops, the initiative shows remarkable impact..."
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
                Media & References
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Explore our journey through photos, press coverage, and reference materials 
                documenting our impact in the theatre community.
              </p>
            </div>
          </div>
        </section>

        {/* Reference Links */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Reference Materials
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access detailed information about our methodologies, cultural initiatives, 
                and organizational documentation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {references.map((ref, index) => (
                <Card key={index} className="p-6 hover-lift cultural-glow transition-theatrical">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                      {ref.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-accent font-medium">
                        {ref.type}
                      </span>
                      <h3 className="font-bold text-primary mt-1 leading-tight">
                        {ref.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {ref.description}
                  </p>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Reference
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Photo Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Capturing the essence of our theatrical journey and community impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((item, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-theatrical">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 shadow-warm"
              >
                <ImageIcon className="w-5 h-5 mr-2" />
                View Full Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Press Coverage */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Press Coverage
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognition of our work in local and regional media outlets.
              </p>
            </div>

            <div className="space-y-6">
              {pressHighlights.map((article, index) => (
                <Card key={index} className="p-8 hover-lift cultural-glow transition-theatrical">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent text-accent-foreground p-2 rounded-lg flex-shrink-0">
                      <Newspaper className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-primary mb-2 md:mb-0">
                          {article.title}
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">{article.publication}</span> • {article.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Media Inquiries
            </h2>
            <p className="text-theatre-beige text-lg mb-8 max-w-2xl mx-auto">
              For press releases, interview requests, or media partnerships, 
              please reach out to our media contact.
            </p>
            <div className="space-y-4">
              <p className="text-xl">
                <strong>Dinesh Sir Art</strong>
              </p>
              <p className="text-theatre-beige">
                Email: dineshchammalige@gmail.com
              </p>
              <p className="text-theatre-beige">
                Phone: +91 99802 74660
              </p>
            </div>
            <Button 
              size="lg"
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-cultural"
            >
              Contact Media Team
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Media;