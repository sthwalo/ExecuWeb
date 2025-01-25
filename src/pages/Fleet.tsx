import { useState } from 'react';
import { Image } from '../components/Image';
import { vehicles } from '../data/vehicles';
import { useStore } from '../store/useStore';
import { Vehicle } from '@/types';
import { toast } from 'react-toastify';

export default function Fleet() {
  const { setSelectedVehicle } = useStore();
  const [, setBookingModal] = useState(false);

  const handleBookNow = (vehicle: Vehicle) => {
    try {
      setSelectedVehicle(vehicle);
      setBookingModal(true);
      toast({
        title: "Vehicle Selected",
        description: `You've selected the ${vehicle.name}. Please complete your booking details.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem selecting this vehicle. Please try again.",
      });
    }
  };

  const createWhatsAppLink = (car: Vehicle) => {
    const message = encodeURIComponent(
      `Hello, I would like to inquire about the ${car.name}. Please provide more information.`
    );
    return `https://wa.me/27733366385?text=${message}`;
  };

  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Our Luxury Fleet</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience luxury and performance with our exclusive collection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vehicles.map((car) => (
          <div key={car.id} className="group bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-sm font-semibold text-primary">{car.price}</p>
              <ul className="text-sm space-y-2">
                {car.specs.map((spec, index) => (
                  <li key={index} className="text-muted-foreground">• {spec}</li>
                ))}
              </ul>
              <div className="flex gap-3 mt-4">
                <button 
                  className="flex-1 px-4 py-2 bg-primary text-white rounded"
                  onClick={() => handleBookNow(car)}
                  disabled={!car.available}
                >
                  {car.available ? 'Book Now' : 'Currently Unavailable'}
                </button>
                <a
                  href={createWhatsAppLink(car)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full px-4 py-2 border border-primary text-primary rounded">
                    More Info
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}