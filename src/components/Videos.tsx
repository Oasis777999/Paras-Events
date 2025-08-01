import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Clock, Users } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Elegant Wedding Highlights",
      description: "A beautiful wedding ceremony with traditional and modern elements",
      thumbnail: "/api/placeholder/400/300",
      duration: "3:45",
      category: "Wedding",
      guests: "200+",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URLs
    },
    {
      id: 2,
      title: "Birthday Party Celebration",
      description: "Fun-filled birthday party with themed decorations and entertainment",
      thumbnail: "/api/placeholder/400/300",
      duration: "2:30",
      category: "Birthday",
      guests: "50+",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Baby Shower Memories",
      description: "Gentle and elegant baby shower with beautiful floral arrangements",
      thumbnail: "/api/placeholder/400/300",
      duration: "4:15",
      category: "Baby Shower",
      guests: "30+",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Traditional Munj Ceremony",
      description: "Sacred thread ceremony with authentic rituals and decorations",
      thumbnail: "/api/placeholder/400/300",
      duration: "5:20",
      category: "Munj",
      guests: "100+",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Corporate Event Highlights",
      description: "Professional corporate event with modern setup and entertainment",
      thumbnail: "/api/placeholder/400/300",
      duration: "3:10",
      category: "Corporate",
      guests: "150+",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Anniversary Celebration",
      description: "Golden anniversary celebration with elegant decorations",
      thumbnail: "/api/placeholder/400/300",
      duration: "2:55",
      category: "Anniversary",
      guests: "75+",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-deep mb-6">
            Event Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our event highlights and see how we bring celebrations to life. 
            Each video showcases the emotions, beauty, and joy of the special moments we create.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-card overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    variant="luxury" 
                    size="icon"
                    className="h-16 w-16 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  <Clock className="h-4 w-4 inline mr-1" />
                  {video.duration}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {video.category}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg font-bold text-purple-deep group-hover:text-gold transition-colors duration-300">
                  {video.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {video.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {video.guests} guests
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {video.category}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                >
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cream to-white p-8 md:p-12 rounded-2xl shadow-card">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-deep mb-4">
              Want to See More?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our YouTube channel to stay updated with our latest event videos 
              and get inspiration for your upcoming celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg">
                Subscribe to YouTube
              </Button>
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-white">
                View All Videos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;