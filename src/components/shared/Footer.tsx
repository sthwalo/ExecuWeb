import { Car, Instagram, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const phoneNumber = '27733366385';

  const createWhatsAppLink = () => {
    const message = encodeURIComponent(
      'Hello, I would like to inquire about booking a vehicle.'
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ExecuHire</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Experience luxury and sophistication with our premium vehicle rental service.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fleet" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Copperleaf Estate</li>
              <li>Morfontaine Street</li>
              <li>Centurion</li>
              <li>South Africa</li>
              <li>+27 (0)73 336 6385</li>
              <li>info@execuhire.com</li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: By Appointment</li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center gap-4">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#25D366] transition-colors"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/execuhire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#E4405F] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Global Hope Consortium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}