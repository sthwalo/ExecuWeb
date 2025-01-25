import { useState } from 'react';
import { vehicles } from '../data/vehicles';
import { Vehicle, Category } from '@/types';
import { Button } from '@/components/ui/button';

export default function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');

  const filteredVehicles = selectedCategory === 'ALL' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  const handleBookNow = (vehicle: Vehicle) => {
    const message = encodeURIComponent(
      `Hello, I'm interested in booking the ${vehicle.name}.\n` +
      `Price: ${vehicle.price}\n` +
      `Please provide me with availability and booking details.`
    );
    window.open(`https://wa.me/27733366385?text=${message}`, '_blank');
  };

  const handleMoreInfo = (vehicle: Vehicle) => {
    const message = encodeURIComponent(
      `Hello, I would like to know more about the ${vehicle.name}.\n` +
      `Could you please provide additional information?`
    );
    window.open(`https://wa.me/27733366385?text=${message}`, '_blank');
  };

  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Our Luxury Fleet</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience luxury and performance with our exclusive collection
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-4 mb-8 justify-center">
        <Button 
          variant={selectedCategory === 'ALL' ? "default" : "outline"}
          onClick={() => setSelectedCategory('ALL')}
        >
          All
        </Button>
        {Object.values(Category).map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                  <p className="text-sm font-medium text-primary">{vehicle.price}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  vehicle.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {vehicle.available ? 'Available' : 'Unavailable'}
                </span>
              </div>
              
              <ul className="space-y-2 text-sm text-muted-foreground">
                {vehicle.specs.map((spec, index) => (
                  <li key={index}>• {spec}</li>
                ))}
              </ul>
              
              <p className="text-sm text-muted-foreground">{vehicle.description}</p>
              
              <div className="flex gap-4">
                <Button 
                  className="flex-1"
                  onClick={() => handleBookNow(vehicle)}
                  disabled={!vehicle.available}
                >
                  Book via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleMoreInfo(vehicle)}
                >
                  More Info
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}