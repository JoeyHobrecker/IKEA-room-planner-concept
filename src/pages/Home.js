import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-ikea-gray rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl font-bold mb-4">Design Your Ideal Room</h1>
            <p className="text-lg mb-6">
              Our IKEA-inspired room planning tool helps you create the perfect layout based on established design principles from Feng Shui, modern interior design, and Scandinavian aesthetics.
            </p>
            <button className="btn-primary text-lg">Start Planning Now</button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-ikea">
              <div className="aspect-w-16 aspect-h-9 bg-ikea-blue text-white flex items-center justify-center">
                <p className="text-xl">Room Planner Preview Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-16 h-16 bg-ikea-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Research-Based Design</h3>
            <p className="text-center">
              Our tool applies concrete rules from different design currents to optimize your room layout.
            </p>
          </div>
          <div className="card">
            <div className="w-16 h-16 bg-ikea-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Interactive Visualization</h3>
            <p className="text-center">
              See your room come to life with our interactive visualization tool and make adjustments in real-time.
            </p>
          </div>
          <div className="card">
            <div className="w-16 h-16 bg-ikea-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">IKEA Product Recommendations</h3>
            <p className="text-center">
              Get personalized furniture recommendations that match your design goals and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Example Layouts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Example Room Layouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <div className="aspect-w-4 aspect-h-3 bg-ikea-gray mb-4 flex items-center justify-center">
              <p>Productivity-Focused Layout</p>
            </div>
            <h3 className="text-xl font-bold mb-2">Home Office</h3>
            <p>A layout optimized for productivity and focus, based on modern design principles.</p>
          </div>
          <div className="card">
            <div className="aspect-w-4 aspect-h-3 bg-ikea-gray mb-4 flex items-center justify-center">
              <p>Relaxation-Focused Layout</p>
            </div>
            <h3 className="text-xl font-bold mb-2">Bedroom</h3>
            <p>A layout designed for rest and relaxation, following Feng Shui principles.</p>
          </div>
          <div className="card">
            <div className="aspect-w-4 aspect-h-3 bg-ikea-gray mb-4 flex items-center justify-center">
              <p>Social-Focused Layout</p>
            </div>
            <h3 className="text-xl font-bold mb-2">Living Room</h3>
            <p>A layout optimized for social gatherings and family time, based on Scandinavian design.</p>
          </div>
          <div className="card">
            <div className="aspect-w-4 aspect-h-3 bg-ikea-gray mb-4 flex items-center justify-center">
              <p>Multi-Purpose Layout</p>
            </div>
            <h3 className="text-xl font-bold mb-2">Studio Apartment</h3>
            <p>A versatile layout that combines multiple functions in a limited space.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ikea-blue text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Design Your Perfect Room?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Start using our room planning tool today and create a space that's not only beautiful but also optimized based on established design principles.
        </p>
        <button className="bg-ikea-yellow text-black py-3 px-8 rounded-ikea text-lg font-medium hover:bg-yellow-500 transition-colors">
          Start Planning Now
        </button>
      </section>
    </div>
  );
};

export default Home;
