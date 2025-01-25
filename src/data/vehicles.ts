import { Vehicle, Category } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: "maybach-001",
    name: "Mercedes Maybach",
    image: "/images/fleet/may.avif",
    price: "R10,000/half-day | R3,000/hr",
    specs: ["Luxury Sedan", "V12 Engine", "7-Speed Auto", "4 Seats", "621 HP"],
    available: true,
    category: Category.LUXURY,
    featured: true,
    description: "Experience ultimate luxury with our Mercedes Maybach. Perfect for executive travel and special occasions."
  },
  {
    id: "audi-s5-convertible-001",
    name: "Audi S5 Convertible",
    image: "/images/fleet/S5conver.avif",
    price: "R8,000/half-day | R2,500/hr",
    specs: ["Sports Convertible", "3.0L V6 Turbo", "8-Speed Auto", "4 Seats", "349 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "Experience open-top luxury with the Audi S5 Convertible. Perfect blend of performance and style."
  },
  {
    id: "bmw-m5-001",
    name: "BMW M5",
    image: "/images/fleet/m5.avif",
    price: "R8,000/half-day | R2,500/hr",
    specs: ["High-Performance Sedan", "4.4L V8 Twin-Turbo", "8-Speed Auto", "5 Seats", "600 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "The ultimate driving machine. Combines luxury sedan comfort with supercar performance."
  },
  {
    id: "range-rover-sport-2024-001",
    name: "Range Rover Sport 2024",
    image: "/images/fleet/rsport24.avif",
    price: "R8,000/half-day | R2,500/hr",
    specs: ["Luxury SUV", "3.0L I6 Turbo", "8-Speed Auto", "5 Seats", "395 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "First Edition Range Rover Sport 2024. The perfect blend of luxury, capability, and sophisticated design."
  },
  {
    id: "maserati-levante-001",
    name: "Maserati Levante",
    image: "/images/fleet/levante.avif",
    price: "R8,000/half-day | R2,500/hr",
    specs: ["Luxury SUV", "3.0L V6 Twin-Turbo", "8-Speed Auto", "5 Seats", "345 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "Italian luxury SUV that combines performance, comfort, and distinctive style."
  },
  {
    id: "range-rover-p530-001",
    name: "Range Rover P530 First Edition",
    image: "/images/fleet/p530.avif",
    price: "R8,000/half-day | R2,500/hr",
    specs: ["Luxury SUV", "4.4L V8 Twin-Turbo", "8-Speed Auto", "5 Seats", "523 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "The pinnacle of refined capability and luxury innovation. First Edition P530 offers unmatched sophistication."
  },
  {
    id: "lamborghini-urus-001",
    name: "Lamborghini Urus",
    image: "/images/fleet/urus.avif",
    price: "Half Day - R18,000 | R5,000/hr",
    specs: ["Luxury SUV", "4.0L V8 Twin-Turbo", "8-Speed Auto", "5 Seats", "641 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "The world's first Super Sport Utility Vehicle, the Lamborghini Urus."
  },
  {
    id: "bmw-i7-740d-001",
    name: "BMW i7 740d",
    image: "/images/fleet/i7.avif",
    price: "Half Day - R10,000 | R3,000/hr",
    specs: ["Luxury Sedan", "Electric/Diesel Hybrid", "8-Speed Auto", "5 Seats", "540 HP"],
    available: true,
    category: Category.LUXURY,
    featured: true,
    description: "The future of luxury mobility, combining electric efficiency with diesel range."
  },
  {
    id: "mercedes-g63-001",
    name: "Mercedes G63",
    image: "/images/fleet/G63.avif",
    price: "Half Day - R10,000 | R3,000/hr",
    specs: ["Luxury SUV", "4.0L V8 Biturbo", "9-Speed Auto", "5 Seats", "577 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "The legendary G-Wagon, combining luxury with unmatched off-road capability."
  },
  {
    id: "porsche-panamera-gts-001",
    name: "Porsche Panamera GTS",
    image: "/images/fleet/panamera.avif",
    price: "Half Day - R8,000 | R2,500/hr",
    specs: ["Sports Sedan", "4.0L V8 Twin-Turbo", "8-Speed PDK", "4 Seats", "473 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "The perfect blend of sports car performance and luxury sedan comfort."
  },
  {
    id: "porsche-718-boxster-001",
    name: "Porsche 718 Boxster GTS",
    image: "/images/fleet/boxster.avif",
    price: "Half Day - R8,000 | R2,500/hr",
    specs: ["Sports Car", "4.0L Flat-6", "6-Speed Manual", "2 Seats", "394 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "Pure driving pleasure with the mid-engine layout and open-top experience."
  },
  {
    id: "audi-rs5-001",
    name: "Audi RS5",
    image: "/images/fleet/rs5.avif",
    price: "Half Day - R8,000 | R2,500/hr",
    specs: ["Sports Coupe", "2.9L V6 Twin-Turbo", "8-Speed Auto", "4 Seats", "444 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "The perfect combination of luxury and performance in a refined package."
  },
  {
    id: "mercedes-gle-63s-001",
    name: "Mercedes GLE 63s",
    image: "/images/fleet/gle63.avif",
    price: "Half Day - R8,000 | R2,500/hr",
    specs: ["Performance SUV", "4.0L V8 Biturbo", "9-Speed Auto", "5 Seats", "603 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "High-performance luxury SUV with impressive power and comfort."
  },
  {
    id: "mercedes-c63-w204-001",
    name: "Mercedes C63 W204",
    image: "/images/fleet/c63.avif",
    price: "Half Day - R8,000 | R2,500/hr",
    specs: ["Sports Sedan", "6.2L V8", "7-Speed Auto", "5 Seats", "451 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "Classic AMG performance with the legendary naturally aspirated V8."
  },
  {
    id: "mercedes-vclass-300d-001",
    name: "Mercedes V-Class 300d",
    image: "/images/fleet/vclass.avif",
    price: "Half Day - R8,000 | R2,500/hr",
    specs: ["Luxury Van", "2.0L Diesel", "9-Speed Auto", "7 Seats", "236 HP"],
    available: true,
    category: Category.LUXURY,
    featured: true,
    description: "Ultimate luxury transportation for groups with first-class comfort."
  },
  {
    id: "ford-mustang-gt-001",
    name: "Ford Mustang GT Convertible",
    image: "/images/fleet/mustang.avif",
    price: "Half Day - R8,000 | R2,500/hr",
    specs: ["Sports Car", "5.0L V8", "10-Speed Auto", "4 Seats", "460 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "American muscle car with open-top thrills and iconic style."
  },
  {
    id: "mercedes-cls-53-001",
    name: "Mercedes CLS 53",
    image: "/images/fleet/cls53.avif",
    price: "Half Day - R8,000 | R2,500/hr",
    specs: ["Luxury Coupe", "3.0L I6 Turbo", "9-Speed Auto", "4 Seats", "429 HP"],
    available: true,
    category: Category.LUXURY,
    featured: true,
    description: "Four-door coupe with elegant styling and impressive performance."
  },
  {
    id: "mercedes-gle-400d-001",
    name: "Mercedes GLE 400d",
    image: "/images/fleet/gle400.avif",
    price: "Half Day - R6,500 | R2,000/hr",
    specs: ["Luxury SUV", "3.0L Diesel", "9-Speed Auto", "5 Seats", "330 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "Refined luxury SUV with efficient diesel power and comfort."
  },
  {
    id: "mercedes-c43-001",
    name: "Mercedes C43",
    image: "/images/fleet/c43int.avif",
    price: "Half Day - R6,500 | R2,000/hr",
    specs: ["Sports Sedan", "3.0L V6 Biturbo", "9-Speed Auto", "5 Seats", "385 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "Performance-focused luxury sedan with AMG engineering."
  },
  {
    id: "mercedes-gle-350d-001",
    name: "Mercedes GLE 350d",
    image: "/images/fleet/gle350.avif",
    price: "Half Day - R6,000 | R2,000/hr",
    specs: ["Luxury SUV", "3.0L Diesel", "9-Speed Auto", "5 Seats", "272 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "Comfortable and efficient luxury SUV for all occasions."
  },
  {
    id: "range-rover-sport-001",
    name: "Range Rover Sport",
    image: "/images/fleet/roversport.avif",
    price: "Half Day - R6,000 | R2,000/hr",
    specs: ["Luxury SUV", "3.0L I6 Turbo", "8-Speed Auto", "5 Seats", "355 HP"],
    available: true,
    category: Category.SUV,
    featured: true,
    description: "Dynamic luxury SUV combining comfort with sporty handling."
  },
  {
    id: "mercedes-a45-001",
    name: "Mercedes A45",
    image: "/images/fleet/a45.avif",
    price: "Half Day - R4,500 | R2,000/hr",
    specs: ["Hot Hatch", "2.0L Turbo", "8-Speed DCT", "5 Seats", "382 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "Compact performance car with incredible power and agility."
  },
  {
    id: "chevrolet-lumina-ss-001",
    name: "Chevrolet Lumina SS",
    image: "/images/fleet/lumina.avif",
    price: "Half Day - R4,500 | R1,500/hr",
    specs: ["Sports Sedan", "6.0L V8", "6-Speed Manual", "5 Seats", "362 HP"],
    available: true,
    category: Category.SPORT,
    featured: true,
    description: "Classic V8 muscle with raw power and character."
  }
];



