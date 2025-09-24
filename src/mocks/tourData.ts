import type { Tour } from '../types/tour';

export const mockTours: Tour[] = [
  {
    id: "1",
    name: "Du lịch Hạ Long 3 ngày 2 đêm",
    type: "domestic",
    startPoint: "hanoi",
    destination: "north",
    duration: "3 ngày 2 đêm",
    price: 2990000,
    image: "/images/halong.jpg",
    description: "Khám phá vịnh Hạ Long - Di sản thiên nhiên thế giới"
  },
  {
    id: "2",
    name: "Tour Đà Nẵng - Hội An - Bà Nà",
    type: "domestic",
    startPoint: "hcm",
    destination: "central",
    duration: "4 ngày 3 đêm",
    price: 4590000,
    image: "/images/danang.jpg",
    description: "Khám phá Đà Nẵng - Hội An - Bà Nà Hills"
  },
  {
    id: "3",
    name: "Tour Phú Quốc",
    type: "domestic",
    startPoint: "hanoi",
    destination: "south",
    duration: "3 ngày 2 đêm",
    price: 5990000,
    image: "/images/phuquoc.jpg",
    description: "Khám phá đảo ngọc Phú Quốc"
  },
  {
    id: "4",
    name: "Tour Singapore - Malaysia",
    type: "international",
    startPoint: "hcm",
    destination: "singapore",
    duration: "6 ngày 5 đêm",
    price: 14990000,
    image: "/images/singapore.jpg",
    description: "Khám phá Singapore - Malaysia"
  }
];
