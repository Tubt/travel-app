import type { Tour, SearchParams } from '../types/tour';
import { mockTours } from '../mocks/tourData';

export const tourService = {
  searchToursByText: async (searchText: string): Promise<Tour[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return mockTours.filter(tour => 
      tour.name.toLowerCase().includes(searchText.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchText.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchText.toLowerCase())
    );
  },

  searchToursByFilters: async (params: SearchParams): Promise<Tour[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return mockTours.filter(tour => {
      const matchType = !params.tourType || tour.type === params.tourType;
      const matchStart = !params.startPoint || tour.startPoint === params.startPoint;
      const matchDest = !params.destination || tour.destination === params.destination;
      return matchType && matchStart && matchDest;
    });
  }
};
