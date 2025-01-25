import { Mail, Phone, MapPin, MessageSquare, Navigation, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string | React.ReactNode;
}

interface LoadingState {
  [key: string]: boolean;
}

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState<LoadingState>({});
  const phoneNumber: string = '+27733366385';
  
  const createWhatsAppLink = (): string => {
    const message = encodeURIComponent(
      'Hello, I would like to inquire about booking a vehicle.'
    );
    return `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Phone",
      content: "+27 (0) 73 336 6385"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@execuhire.com"
    },
    {
      icon: MapPin,
      title: "Our Location",
      content: (
        <>
          Copperleaf Estate<br />
          Morfontaine Street<br />
          Centurion<br />
          South Africa
        </>
      )
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get in touch with us for bookings and inquiries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-primary/5 p-6 rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold">Quick Contact</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                    {info.icon === MapPin && (
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Copperleaf+Estate+Morfontaine+Street+Centurion+South+Africa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold">Book via WhatsApp</h2>
            <p className="text-muted-foreground">
              For the fastest response and instant booking, reach out to us on WhatsApp. Our team is ready to assist you 24/7.
            </p>
            <a 
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <iframe
            onLoad={() => setMapLoaded(prev => ({ ...prev, map: true }))}
            style={{ opacity: mapLoaded.map ? 1 : 0.1, border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.5436243241087!2d28.2447693!3d-25.8187697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956608a8b1b6a7%3A0x47b4c0e2c5719485!2sCopperleaf%20Golf%20Estate!5e0!3m2!1sen!2sza!4v1704883678654!5m2!1sen!2sza"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="ExecuHire Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}