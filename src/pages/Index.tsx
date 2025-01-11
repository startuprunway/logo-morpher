import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Startup Runway</h1>
          <p className="text-xl text-white">Your Gateway to Success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Custom solutions for your digital presence</CardDescription>
            </CardHeader>
            <CardContent>
              <p>We create beautiful, responsive websites tailored to your needs</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600">Starting from $999</p>
            </CardFooter>
          </Card>

          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle>Mobile Apps</CardTitle>
              <CardDescription>Native and cross-platform solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Develop your mobile presence with our expert team</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600">Starting from $1999</p>
            </CardFooter>
          </Card>

          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle>Digital Marketing</CardTitle>
              <CardDescription>Reach your target audience effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Comprehensive digital marketing strategies for growth</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600">Starting from $499/month</p>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem className="basis-full">
                <Card className="bg-white/90 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Client Success Story</CardTitle>
                    <CardDescription>Tech Solutions Inc.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>"Startup Runway transformed our online presence and helped us achieve our goals."</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <Card className="bg-white/90 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Client Success Story</CardTitle>
                    <CardDescription>Digital Innovators Ltd</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>"Outstanding service and exceptional results. Highly recommended!"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Index;