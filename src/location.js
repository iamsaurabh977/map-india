export function generateRandomLocationsInIndia(count) {
    const randomLocations = [];
    const randomLocationNames = [
      'Location 1',
      'Location 2',
      // Add more names as needed
    ];
  
    // Define the latitude and longitude boundaries for India
    const indiaLatMin = 8.4; // Minimum latitude value for India
    const indiaLatMax = 37.6; // Maximum latitude value for India
    const indiaLngMin = 68.7; // Minimum longitude value for India
    const indiaLngMax = 97.3; // Maximum longitude value for India
  
    for (let i = 0; i < count; i++) {
      const lat = (Math.random() * (indiaLatMax - indiaLatMin) + indiaLatMin).toFixed(6);
      const lng = (Math.random() * (indiaLngMax - indiaLngMin) + indiaLngMin).toFixed(6);
      const nameIndex = Math.floor(Math.random() * randomLocationNames.length);
      const name = randomLocationNames[nameIndex];
      randomLocations.push({ lat, lng, name });
    }
  
    return randomLocations;
  }
  
  export const locations = generateRandomLocationsInIndia(15);
  