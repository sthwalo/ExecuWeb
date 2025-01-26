import { Megaphone, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container py-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Megaphone className="h-4 w-4" />
            <p>
              Special rates for weekend rentals! Contact us for more details.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
